import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import MapRoute from '../../../route/MapRoute'
import './index.css'
class index extends Component {
    state = {  }
    render() {
        return (
            <div>
                <nav className="nav">
                    <div>
                        <NavLink to='/tohome/super'>全球超市</NavLink>
                    </div>
                    <div>
                        <NavLink to="/tohome/global">全球精选</NavLink>
                    </div>
                </nav>
                <div>
                    <MapRoute route={this.props.route}></MapRoute>
                </div>
            </div>
        );
    }
}

export default index;