/* global require console process it describe after before JSON */

// these tests are for a user, but not one with admin privs

var should = require('should')

var superagent = require('superagent')
var async = require('async')
var _ = require('lodash');

var express = require('express');
var erq = require('../node_modules/express/lib/request')
var http = require('http')

var geom_utils = require('../lib/geom_utils')

var env = process.env
var testhost = env.TEST_HOST || '127.0.0.1'
var testport = env.TEST_PORT || 3000


describe('get_bbox',function(){
    var app,server
    before(
        function(done){
            app = express()
            app.get('/bbox/:zoom/:column/:row'
                   ,function(req,res,next){
                        var bbox = geom_utils.get_bbox(req)
                        return res.send(bbox)
                    })
            app.get('/bbox/:bbox'
                   ,function(req,res,next){
                        var bbox = geom_utils.get_bbox(req)
                        return res.send(bbox)
                    })
            app.get('/bbox/:areatype/:area'
                   ,function(req,res,next){
                        var bbox = geom_utils.get_bbox(req,{'area_type_param':'areatype'
                                                           ,'area_param':'area'})
                        return res.send(bbox)
                    })
            app.get('/setbbox'
                   ,function(req,res,next){
                        req.params['bbox']='prix fixe bbox'
                        var bbox = geom_utils.get_bbox(req)
                        return res.send(bbox)
                    })
            app.get('/withformat_presetbbox'
                   ,function(req,res,next){
                        req.params['bbox']='mybbox as (select \'prix fixe bbox\' as geom)'
                        var bbox = geom_utils.get_bbox_with_format(req,{alias:'mybbox'})
                        return res.send(bbox)
                    })
            app.get('/withformatbbox/:zoom/:column/:row'
                   ,function(req,res,next){
                        var bbox = geom_utils.get_bbox_with_format(req)
                        return res.send(bbox)
                    })
            app.get('/withformatbbox/:areatype/:area'
                   ,function(req,res,next){
                        var bbox = geom_utils.get_bbox_with_format(req,{'area_type_param':'areatype'
                                                                       ,'area_param':'area'
                                                                       })
                        return res.send(bbox)
                    })
            app.get('/withbananaformatbbox/:areatype/:area'
                   ,function(req,res,next){
                        var bbox = geom_utils.get_bbox_with_format(req,{'area_type_param':'areatype'
                                                                       ,'area_param':'area'
                                                                       ,'alias':'banana'
                                                                       })
                        return res.send(bbox)
                    })
            app.get('/withdumbformatbbox/:zoom/:column/:row'
                   ,function(req,res,next){
                        var duumb,dumber
                        var bbox = geom_utils.get_bbox_with_format(req,{'area_type_param':duumb
                                                                       ,'area_param':dumber
                                                                       ,'alias':'banana'
                                                                       })
                        return res.send(bbox)
                    })
            server=http
                   .createServer(app)
                   .listen(testport,done)

        })
    after(function(done){
        server.close(done)
    })

    var zoom = 10
    var column = 176
    var row = 409
    it('should generate a bbox from zoom,column,row'
      ,function(done){
           superagent.get('http://'+testhost+':'+testport+['/bbox',zoom,column,row].join('/'))
           //.set('accept','application/json')
           .end(function(err,res){
               if(err) return done(err)
               res.ok.should.be.true
               //console.log(res)
               res.should.have.property('text')
               var c = res.text
               c.should.match(/-118.1250 33.7243,-118.1250 34.0162,-117.7734 34.0162,-117.7734 33.7243,-118.1250 33.7243/)
               return done()
           })
       })

    it('should generate a bbox from zoom,column,row using "with" format'
      ,function(done){
           superagent.get('http://'+testhost+':'+testport+['/withformatbbox',zoom,column,row].join('/'))
           //.set('accept','application/json')
           .end(function(err,res){
               if(err) return done(err)
               res.ok.should.be.true
               //console.log(res)
               res.should.have.property('text')
               var c = res.text
               //console.log(c)
               c.should.match(/-118.1250 33.7243,-118.1250 34.0162,-117.7734 34.0162,-117.7734 33.7243,-118.1250 33.7243/)
               c.should.match(/bounding_area as/)
               return done()
           })
       })
    it('should generate a bbox from a bbox'
      ,function(done){
           var bbox = '-118.1250 33.7243,-117.7734 35.0162'
           superagent.get('http://'+testhost+':'+testport+['/bbox',bbox].join('/'))
           //.set('accept','application/json')
           .end(function(err,res){
               if(err) return done(err)
               res.ok.should.be.true
               //console.log(res)
               res.should.have.property('text')
               var c = res.text
               c.should.match(/-118.1250 33.7243,-118.1250 35.0162,-117.7734 35.0162,-117.7734 33.7243,-118.1250 33.7243/)
               return done()
           })
       })
    it('should recognize a bbox value set by handler'
      ,function(done){
           var bbox = /prix fixe bbox/
           superagent.get('http://'+testhost+':'+testport+'/setbbox')
           .end(function(err,res){
               if(err) return done(err)
               res.ok.should.be.true
               //console.log(res)
               res.should.have.property('text')
               var c = res.text
               c.should.match(bbox)
               return done()
           })
       })
    it('should not mess with a bbox value set by handler when using with formatting'
      ,function(done){
           var bbox = /prix fixe bbox/
           superagent.get('http://'+testhost+':'+testport+'/withformat_presetbbox')
           .end(function(err,res){
               if(err) return done(err)
               res.ok.should.be.true
               //console.log(res)
               res.should.have.property('text')
               var c = res.text
               c.should.match(bbox)
               c.should.not.match(/\s+as\s*\(.*\s+as\s*\(/)
               return done()
           })
       })
    it('should generate a bbox from a county'
      ,function(done){
           superagent.get('http://'+testhost+':'+testport+'/bbox/counties/06001')
           .end(function(err,res){
               if(err) return done(err)
               res.status.should.eql(200)
               res.should.have.property('text')
               var c = res.text
               c.should.eql("(select geom4326 as geom from public.carb_counties_aligned_03 join counties_fips a on (carb_counties_aligned_03.name ~* a.name) where fips='06001' ) as area")
               return done()
           })
       })
    it('should generate a bbox from a airdistrict'
      ,function(done){
           superagent.get('http://'+testhost+':'+testport+'/bbox/airdistricts/06001')
           .end(function(err,res){
               if(err) return done(err)
               res.status.should.eql(200)
               res.should.have.property('text')
               var c = res.text
               c.should.eql("(select geom4326 as geom from public.carb_airdistricts_aligned_03 where dis='06001' ) as area")
               return done()
           })
       })
    it('should generate a bbox from a airbasin'
      ,function(done){
           superagent.get('http://'+testhost+':'+testport+'/bbox/airbasins/06001')
           .end(function(err,res){
               if(err) return done(err)
               res.status.should.eql(200)
               res.should.have.property('text')
               var c = res.text
               c.should.eql("(select geom_4326 as geom from public.carb_airbasins_aligned_03 where ab='06001' ) as area")
               return done()
           })
       })
    it('should generate a bbox from a county, with clause'
      ,function(done){
           superagent.get('http://'+testhost+':'+testport+'/withformatbbox/counties/06001')
           .end(function(err,res){
               if(err) return done(err)
               res.status.should.eql(200)
               res.should.have.property('text')
               var c = res.text
               c.should.eql("bounding_area as (select geom4326 as geom from public.carb_counties_aligned_03 join counties_fips a on (carb_counties_aligned_03.name ~* a.name) where fips=\'06001\' )")
               return done()
           })
       })
    it('should generate a bbox from a county, banana with clause'
      ,function(done){
           superagent.get('http://'+testhost+':'+testport+'/withbananaformatbbox/counties/06001')
           .end(function(err,res){
               if(err) return done(err)
               res.status.should.eql(200)
               res.should.have.property('text')
               var c = res.text
               c.should.eql("banana as (select geom4326 as geom from public.carb_counties_aligned_03 join counties_fips a on (carb_counties_aligned_03.name ~* a.name) where fips=\'06001\' )")
               return done()
           })
       })

    it('should generate a bbox from a county dumb options passing'
      ,function(done){
           superagent.get('http://'+testhost+':'+testport+['/withdumbformatbbox',zoom,column,row].join('/'))
           .end(function(err,res){
               if(err) return done(err)
               res.status.should.eql(200)
               res.should.have.property('text')
               var c = res.text
               c.should.match(/-118.1250 33.7243,-118.1250 34.0162,-117.7734 34.0162,-117.7734 33.7243,-118.1250 33.7243/)
               c.should.match(/banana as/)
               return done()
           })
       })
})

describe('bbox_from_xyz',function(){
    var app,server
    before(
        function(done){
            app = express()
            app.get('/bbox/:zoom/:column/:row'
                   ,function(req,res,next){
                        var bbox = geom_utils.bbox_from_xyz({row: req.params.row, column: req.params.column, zoom: req.params.zoom})
                        return res.send(bbox)
                    })
            server=http
                   .createServer(app)
                   .listen(testport,done)

        })
    after(function(done){
        server.close(done)
    })

    var zoom = 10
    var column = 176
    var row = 409
    it('should generate a bbox from zoom,column,row'
      ,function(done){
           superagent.get('http://'+testhost+':'+testport+['/bbox',zoom,column,row].join('/'))
           //.set('accept','application/json')
           .end(function(err,res){
               if(err) return done(err)
               res.ok.should.be.true
               res.should.have.property('text')
               var c = res.text
               c.should.match(/-118.1250,33.7243,-117.7734,34.0162/)
               return done()
           })
       })

})
describe('polymaps_coordinateLocation',function(){
    it('should give the coordinate of a row, column, zoom tile'
      ,function(done){
           var zoom = 10
           var column = 176
           var row = 409
           var nw = geom_utils.polymaps_coordinateLocation({row:row
                                                           ,column:column
                                                           ,zoom:zoom})
           nw.should.have.property('lon',-118.1250)
           nw.should.have.property('lat',34.016241889667015)
           var se = geom_utils.polymaps_coordinateLocation({row:row+1
                                                           ,column:column+1
                                                           ,zoom:zoom})
           se.should.have.property('lon', -117.7734375)
           se.should.have.property('lat',33.72433966174761)
           done()
       })

})
// no longer exporting these because they *dont* do the below.
// That is, they are more complicated to use that their name implies
//
// describe('lat2y',function(){
//     it('should convert latitude to a y row'
//       ,function(done){
//            var row = geom_utils.lat2y(34.0162418896)
//            row.should.equal(409)
//            done()
//        })
// })
// describe('y2lat',function(){
//     it('should convert a y row to a latitude'
//       ,function(done){
//            var row = geom_utils.y2lat(409)
//            row.should.equal(34.016241889667015)
//            done()
//        })

// })
describe('precision',function(){
    it('should return a reasonable precision based on the zoom level'
      ,function(done){
           var pn = geom_utils.precision(10)
           pn.should.equal(4)
           pn = geom_utils.precision(17)
           pn.should.equal(5)
           pn = geom_utils.precision(4)
           pn.should.equal(2)
           done()
       })

})
describe('isEmptyHack',function(){
    var emp = {}
    var notemp = {'a':null}
    it('should tell if an object is empty'
      ,function(done){
           var a = geom_utils.isEmptyHack(emp)
           a.should.be.true
           a = geom_utils.isEmptyHack(notemp)
           a.should.not.be.true
           return done()
       })
})
describe('meters_to_miles',function(){
    it('should convert meters to miles'
      ,function(done){
           var meters = 10
           var miles = geom_utils.meters_to_miles * meters
           miles.should.equal(0.00621371192)
           done()
       })
})
describe('pad',function(){
    it('should fill 1 with a zero'
      ,function(done){
           var month = geom_utils.pad(1)
           month.should.equal('01')
           done()
       })
    it('should not mess with two digit numbers'
      ,function(done){
           var month = geom_utils.pad(10)
           month.should.equal(10)
           month = geom_utils.pad(1997)
           month.should.equal(1997)
           done()
       })

})
describe('fips_lookup',function(){
    it('should give a fips list'
      ,function(done){
           var f_l = geom_utils.fips_lookup()
           var fips_codes = _.keys(f_l)
           fips_codes.should.have.length(58)
           _.each(f_l
                 ,function(v,k){
                      should.exist(v)
                      k.should.match(/^06\d\d\d/)
                  });
           done()
       })
    it('should give a copy of the fips list'
      ,function(done){
           var f_l_e = geom_utils.fips_lookup()
           _.each(f_l_e
                 ,function(v,k){
                      delete f_l_e[k]
                  });
           (geom_utils.isEmptyHack(f_l_e)).should.be.true
           // but we didn't touch the original
           var f_l = geom_utils.fips_lookup()
           _.each(f_l
                 ,function(v,k){
                      should.exist(v)
                      k.should.match(/^06\d\d\d/)
                  });

           done()
       })
})
describe('replace_fips',function(){
    it('should replace a fips code with a county name'
      ,function(done){
           var f_l = geom_utils.fips_lookup()
           _.each(f_l
                 ,function(v,k){
                      should.exist(v)
                      k.should.match(/^06\d\d\d/)
                      geom_utils.replace_fips(k).should.equal(v)
                  });
           done()
       })
})

describe('replace_city_abbrev',function(){
    var cities = require('../lib/cities.js').cities
    it('should replace a city abbreviation code with a city name'
      ,function(done){
           _.each(cities
                 ,function(v,k){
                      should.exist(v)
                      geom_utils.replace_city_abbrev(k).should.equal(v.name)
                  });
           done()
       })
    it('should replace a city abbreviation code with a fips code'
      ,function(done){
           _.each(cities
                 ,function(v,k){
                      should.exist(v)
                      geom_utils.replace_city_abbrev(k,true).should.equal(v.fips)
                  });
           done()
       })
})
describe('time_formatter',function(){
    it('should format a date the way I need it for sql queries'
      ,function(done){
           var d = new Date(2012,8,11,13,13)
           var f = geom_utils.time_formatter(d)
           f.should.equal('2012-09-11T13:00:00Z')
           done()
       })
})
describe('toQuery',function(){
    it('should HTML encode key, startkey, endkey'
      ,function(done){
           var query={'startkey':[2012,9,'banana/pancakes',[12,11]]
                     ,'endkey':[2012,10,{}]
                     ,'limit':10
                     ,'reduce':true}
           var q_str = geom_utils.toQuery(query)
           q_str.should.equal('startkey=%5B2012%2C9%2C%22banana%2Fpancakes%22%2C%5B12%2C11%5D%5D&endkey=%5B2012%2C10%2C%7B%7D%5D&limit=10&reduce=true')
           done()
       })
})
