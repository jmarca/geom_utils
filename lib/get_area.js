/**
 * Use this to join against known areas, like grids, counties, etc
 */

// in the form of a with clause, my latest pet idiom in postgresql

function area_with(options){
    return ['area as (select'
           ,options.geom
           ,'as geom'
           ,'from'
           ,options.table
           ,options.where
           ,')'].join(' ');

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


function get_area(req,area_type,area_param){
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
    return bbox;
}
exports.get_area=get_area
