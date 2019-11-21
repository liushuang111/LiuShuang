import React from 'react';

import { Switch,Redirect,Route } from 'react-router-dom'

const MapRoute = props =>(
    <Switch>
        {props.route.map(item=>
              item.path ? (
                  <Route 
                    path={item.path}
                    key={item.path}
                    render={props=><item.component {...props} route={item.children} />}                  
                  />
              ):(
                  <Redirect {...item} key={item.from} />
              )
            )}
    </Switch>
)

export default MapRoute