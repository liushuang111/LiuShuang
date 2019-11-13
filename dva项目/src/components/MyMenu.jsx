import React,{Component} from 'react';
import { Menu, Icon } from 'antd';
import { NavLink, withRouter } from 'dva/router';

// 引入路由配置表
import routes from '../routes/router.config';

const { SubMenu } = Menu;

//递归创建子组件或者菜单选选项
function createMenu(ary){
    return ary.map((item , index)=>{
        if(item.path){
            return item.show && <Menu.Item key={item.path}>
                <NavLink to={item.path}>{item.title}</NavLink>
            </Menu.Item>
        }else{
            return <SubMenu
                key={item.title}
                title={
                    <span>
                        <Icon type="mail" />
                    <span>{item.title}</span>
                    </span>
                }
            >{createMenu(item.children)}
            </SubMenu>
        }
    })
}
class MyMenu extends Component {
    state = {  }
    render() {
        let { path } = this.props.match;
        return <Menu
            onClick={this.handleClick}
            defaultSelectedKeys={[path]}
            defaultOpenKeys={[routes.routes[0].title]}
        >
            {
                createMenu(routes.routes)
            }
        </Menu>
    }
}

export default withRouter(MyMenu);