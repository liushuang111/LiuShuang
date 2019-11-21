import React, { Component } from 'react';
import MapRoute from '../../route/MapRoute'
import { NavLink } from 'react-router-dom'
import './index.css'
class index extends Component {
    state = {  }
    render() {
        return (
            <div>
                <div>
                    <MapRoute route={this.props.route}></MapRoute>
                </div>
                <nav className="nav">
                    <div>
                        <NavLink to="/tohome">配送到家</NavLink>
                    </div>
                    <div>
                        <NavLink to="/class">分类</NavLink>
                    </div>
                    <div>
                        <NavLink to="/member">会员</NavLink>
                    </div>
                    <div>
                        <NavLink to="/shop">购物车</NavLink>
                    </div>
                    <div>
                        <NavLink to="/my">我的</NavLink>
                    </div>
                </nav>
            </div>
        );
    }
}

export default index;