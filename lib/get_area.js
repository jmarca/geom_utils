/**
 * Use this to join against known areas, like grids, counties, etc
 */

// in the form of a with clause, my latest pet idiom in postgresql

function area_with(options){
    return [options.alias
           ,'as (select'
           ,options.geom
           ,'as geom'
           ,'from'
           ,options.table
           ,options.where
           ,')'].join(' ');

};
function counties_with(req,opts){
    return area_with({alias:opts.alias
                     ,'geom':'geom4326'
                          ,'table':'public.carb_counties_aligned_03'
                          ,'where':"join counties_fips a on (carb_counties_aligned_03.name ~* a.name) where fips='"+req.params[opts.area_param]+"'"
                          });
};
function airbasins_with(req,opts){
    return area_with({alias:opts.alias
                     ,'geom':'geom_4326'
                          ,'table':'public.carb_airbasins_aligned_03'
                          ,'where':"where ab='"+req.params[opts.area_param]+"'"
                          });
};
function airdistricts_with(req,opts){
    return area_with({alias:opts.alias
                     ,'geom':'geom4326'
                          ,'table':'public.carb_airdistricts_aligned_03'
                          ,'where':"where dis='"+req.params[opts.area_param]+"'"
                          });
};
function grid_with(req,opts){
    return area_with({alias:opts.alias
                     ,'geom':'geom4326'
                          ,'table':'carbgrid.state4k'
                          ,'where':[' where i_cell='
                                   ,req.params['i_cell']
                                   ,' and j_cell='
                                   ,req.params['j_cell']
                                   ].join(' ')
                          });
};


//in the form of a subselect
function area_subselect(options){
    return ['(select'
           ,options.geom
           ,'as geom'
           ,'from'
           ,options.table
           ,options.where
           ,') as area'].join(' ');

};

function counties_subselect(req,area_param){
    return area_subselect({'geom':'geom4326'
                          ,'table':'public.carb_counties_aligned_03'
                          ,'where':"join counties_fips a on (carb_counties_aligned_03.name ~* a.name) where fips='"+req.params[area_param]+"'"
                          });
};
function airbasins_subselect(req,area_param){
    return area_subselect({'geom':'geom_4326'
                          ,'table':'public.carb_airbasins_aligned_03'
                          ,'where':"where ab='"+req.params[area_param]+"'"
                          });
};
function airdistricts_subselect(req,area_param){
    return area_subselect({'geom':'geom4326'
                          ,'table':'public.carb_airdistricts_aligned_03'
                          ,'where':"where dis='"+req.params[area_param]+"'"
                          });
};
function grid_subselect(req,area_param){
    return area_subselect({'geom':'geom4326'
                          ,'table':'carbgrid.state4k'
                          ,'where':[' where i_cell='
                                   ,req.params['i_cell']
                                   ,' and j_cell='
                                   ,req.params['j_cell']
                                   ].join(' ')
                          });
};


function get_area_subselect(req,opts){
    var area_type=opts.area_type_param
    var area_param=opts.area_param
    // try a subselect
    var bbox
    if(req.params[area_type]){
        switch (req.params[area_type] ){
            case 'counties':
            bbox = counties_subselect(req,area_param)
            break
            case 'airbasins':
            bbox = airbasins_subselect(req,area_param)
            break
            case 'airdistricts':
            bbox = airdistricts_subselect(req,area_param)
            break
            case 'grid':
            bbox = grid_subselect(req,area_param)
            break
        }
    }
    //console.log({'subquerybox':bbox})
    return bbox;
}
function get_area_with(req,opts){
    // try a with clause instead
    var bbox
    if(req.params[opts.area_type_param]){
        switch (req.params[opts.area_type_param] ){
            case 'counties':
            bbox = counties_with(req,opts)
            break
            case 'airbasins':
            bbox = airbasins_with(req,opts)
            break
            case 'airdistricts':
            bbox = airdistricts_with(req,opts)
            break
            case 'grid':
            bbox = grid_with(req,opts)
            break
        }
    }
    //console.log({'withbox':bbox})
    return bbox;
}
exports.get_area_with=get_area_with
exports.get_area_subselect=get_area_subselect
