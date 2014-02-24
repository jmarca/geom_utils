/* global exports require */
var querystring = require('querystring');
var meters_to_miles =  0.000621371192;
var _ = require('lodash')
var get_area_subselect = require('./get_area').get_area_subselect
var get_area_with = require('./get_area').get_area_with
function isEmptyHack(o){
    return _.isEmpty(o)
}
function precision(zoom){
    return     Math.ceil(Math.log(zoom-0) / Math.LN2);
}

function get_bbox_no_overlap(req){
    var bbox;
    var bb;
    if(req.params.bbox){
        bb = req.params.bbox;
    }else{
        bb = bbox_from_xyz({row: req.params.row, column: req.params.column, zoom: req.params.zoom});
    }
    if( /(-?\d+\.\d+).*?(-?\d+\.\d+).*?(-?\d+\.\d+).*?(-?\d+\.\d+)/.exec(bb)){
        var p1 = RegExp.$1;
        var q1 = RegExp.$2;
        var p2 = RegExp.$3;
        var q2 = RegExp.$4;
        // build the bounding box
        var pn = precision(req.params.zoom);
        var overlap = 1/Math.pow(10,pn);
        var tolerance = overlap;
        var bbox = "ST_Envelope(ST_GeomFromEWKT('SRID=4326;POLYGON(("
                 +p1+' '+q1+','
                 +p1+' '+q2+','
                 +p2+' '+q2+','
                 +p2+' '+q1+','
                 +p1+' '+q1
                 +"))'))";
    }
    return bbox;
}

function get_bbox(req,opts){//area_type,area_param,with_clause_format){
    var bbox;
    var bb;
    if(req.params.bbox){
        bbox = req.param('bbox')
        bb = bbox // try both here for different cases
    }else{
        bb = bbox_from_xyz({row: req.params.row, column: req.params.column, zoom: req.params.zoom});
    }
    if( /(-?\d+\.\d+).*?(-?\d+\.\d+).*?(-?\d+\.\d+).*?(-?\d+\.\d+)/.exec(bb)){
        var p1 = RegExp.$1;
        var q1 = RegExp.$2;
        var p2 = RegExp.$3;
        var q2 = RegExp.$4;
        // build the bounding box
        var pn = precision(req.params.zoom) || 1;
        var overlap = 1/Math.pow(10,pn);
        var tolerance = overlap;
        bbox = "ST_Envelope(ST_GeomFromEWKT('SRID=4326;POLYGON(("
             +p1+' '+q1+','
             +p1+' '+q2+','
             +p2+' '+q2+','
             +p2+' '+q1+','
             +p1+' '+q1
             +"))')) ";
    }else{
        // okay, try to use the area
        if(opts===undefined) opts={}
        if(opts.alias===undefined) opts.alias='bounding_area'
        if(bbox===undefined){
            if(opts.with_clause_format){
                bbox = get_area_with(req,{'alias':opts.alias
                                         ,'area_type_param':opts.area_type_param
                                         ,'area_param':opts.area_param})
            }else{
                bbox = get_area_subselect(req,{'alias':opts.alias
                                         ,'area_type_param':opts.area_type_param
                                         ,'area_param':opts.area_param})
            }
        }
    }
    return bbox;
}
function get_bbox_with_format(req,opts){
    var alias='bounding_area'
    var area_type_param,area_param
    if(_.isObject(opts)){
        if(opts.alias !== undefined) alias=opts.alias
        if(opts.area_type_param !== undefined) area_type_param=opts.area_type_param
        if(opts.area_param !== undefined) area_param=opts.area_param
    }else{
        if ( opts !== undefined){
            alias = opts
            opts = {}
            opts.alias=alias
        }else{
            opts={}
        }

    }
    opts.with_clause_format=true
    var bbox =  get_bbox(req,opts)
    if(bbox === undefined)
        return bbox
    // do not insert the "with" formatting if it is already there
    var test = new RegExp('^\\s*('+alias+')?\\s+as\\s*\\(\\s*select')
    if(test.test(bbox)){
        return bbox
    }
    return alias + ' as ( select ' + bbox + ' as geom )'
}

function pad(n){return n<10 ? '0'+n : n}
function time_formatter(d){
    return [d.getFullYear()
           , pad(d.getMonth()+1)
           , pad(d.getDate())]
        .join('-')+'T'+ pad(d.getHours())+':00:00Z';
}

// See http://wiki.openstreetmap.org/wiki/Mercator

function y2lat(y) {
    return 360 / Math.PI * Math.atan(Math.exp(y * Math.PI / 180)) - 90;
}

function lat2y(lat) {
    return 180 / Math.PI * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360));
}

var polymaps_coordinateLocation = function(c) {
    var k = 45 / Math.pow(2, c.zoom - 3);
    return {
        lon: k * c.column - 180,
        lat: y2lat(180 - k * c.row)
    };
};


var bbox_from_xyz = function(c){
    if(c.row === undefined
     || c.column === undefined
     || c.zoom === undefined ) return null;
    var max = c.zoom < 0 ? 1 : 1 << c.zoom,
    column = c.column % max;
    if (column < 0) column += max;
    var row = c.row - 0;
    var zoom = c.zoom - 0;

    var nw = polymaps_coordinateLocation({row: row, column: column, zoom: zoom}),
        se = polymaps_coordinateLocation({row: row + 1, column: column + 1, zoom: zoom}),
        pn = precision(zoom) || 1;



    return nw.lon.toFixed(pn)
        + "," + se.lat.toFixed(pn)
        + "," + se.lon.toFixed(pn)
        + "," + nw.lat.toFixed(pn);

}
// California counties
var fips_lookup ={ '06001' : 'Alameda'
                   ,'06003' : 'Alpine'
                   ,'06005' : 'Amador'
                   ,'06007' : 'Butte'
                   ,'06009' : 'Calaveras'
                   ,'06011' : 'Colusa'
                   ,'06013' : 'Contra Costa'
                   ,'06015' : 'Del Norte'
                   ,'06017' : 'El Dorado'
                   ,'06019' : 'Fresno'
                   ,'06021' : 'Glenn'
                   ,'06023' : 'Humboldt'
                   ,'06025' : 'Imperial'
                   ,'06027' : 'Inyo'
                   ,'06029' : 'Kern'
                   ,'06031' : 'Kings'
                   ,'06033' : 'Lake'
                   ,'06035' : 'Lassen'
                   ,'06037' : 'Los Angeles'
                   ,'06039' : 'Madera'
                   ,'06041' : 'Marin'
                   ,'06043' : 'Mariposa'
                   ,'06045' : 'Mendocino'
                   ,'06047' : 'Merced'
                   ,'06049' : 'Modoc'
                   ,'06051' : 'Mono'
                   ,'06053' : 'Monterey'
                   ,'06055' : 'Napa'
                   ,'06057' : 'Nevada'
                   ,'06059' : 'Orange'
                   ,'06061' : 'Placer'
                   ,'06063' : 'Plumas'
                   ,'06065' : 'Riverside'
                   ,'06067' : 'Sacramento'
                   ,'06069' : 'San Benito'
                   ,'06071' : 'San Bernardino'
                   ,'06073' : 'San Diego'
                   ,'06075' : 'San Francisco'
                   ,'06077' : 'San Joaquin'
                   ,'06079' : 'San Luis Obispo'
                   ,'06081' : 'San Mateo'
                   ,'06083' : 'Santa Barbara'
                   ,'06085' : 'Santa Clara'
                   ,'06087' : 'Santa Cruz'
                   ,'06089' : 'Shasta'
                   ,'06091' : 'Sierra'
                   ,'06093' : 'Siskiyou'
                   ,'06095' : 'Solano'
                   ,'06097' : 'Sonoma'
                   ,'06099' : 'Stanislaus'
                   ,'06101' : 'Sutter'
                   ,'06103' : 'Tehama'
                   ,'06105' : 'Trinity'
                   ,'06107' : 'Tulare'
                   ,'06109' : 'Tuolumne'
                   ,'06111' : 'Ventura'
                   ,'06113' : 'Yolo'
                   ,'06115' : 'Yuba'
                 }
function get_fips_lookup(){
    return _.clone(fips_lookup)
}
function replace_fips(str){
    // search and replace fips code with county name
    var refips = /(06\d\d\d)/;
    var newstr = str;
    var m = refips.exec(str);
    if(m) newstr = str.replace(refips, fips_lookup[m[1]]);
    return newstr;
}
function get_county_lookup(){
    // reverse lookup of county lookup
    var county_lookup = {}
    _.each(fips_lookup,function(v,k){
        county_lookup[v.toUpperCase()]=k
    });
    return county_lookup
}

var cities = require('./cities').cities

function get_city_lookup(){
    return _.clone(cities)
}

function replace_city_abbrev(str,fips){
    if (fips === undefined) fips = false
    // search and replace city abbrev with either name or fips code
    if(fips)
        return cities[str].fips
    return cities[str].name
}


exports.bbox_from_xyz=bbox_from_xyz;
exports.fips_lookup = get_fips_lookup;
exports.county_lookup = get_county_lookup;
exports.get_bbox=get_bbox;
exports.get_bbox_with_format=get_bbox_with_format;
exports.isEmptyHack=isEmptyHack;
exports.meters_to_miles=meters_to_miles;
exports.pad = pad;
exports.polymaps_coordinateLocation=polymaps_coordinateLocation;
exports.precision=precision;
exports.replace_fips=replace_fips;
exports.replace_city_abbrev=replace_city_abbrev;
exports.time_formatter = time_formatter;
exports.toQuery = require('couchdb_toQuery');
// exports.lat2y=lat2y;g
// exports.y2lat=y2lat;
//exports.get_area=require('./get_area').get_area
