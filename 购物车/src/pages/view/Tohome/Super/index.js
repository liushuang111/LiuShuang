import React, { Component } from 'react';
import request from '../../../../util/request'
import { connect } from 'react-redux'
import './index.css'
class index extends Component {
    componentDidMount(){
        request('/api/list').then(res=>{
            this.props.initialData(res);
        })
    }
    goDetail(id){
        this.props.history.push('/detail?id='+id)
    }
    render(){
        let {list} = this.props;
        return <div className="wrap">{
            list.map((item, index)=>{
                return <li key={index} onClick={()=>this.goDetail(item.id)}>
                    <img src={item.image}/>
                    <p>{item.name}</p>
                    <div>
                        <span>${item.money}</span>
                        <button>+</button>
                    </div>
                </li>
            })    
        }</div>;
    }
}
    
const mapStateToProps = state=>{
    console.log('state...', state);
    return {
        list: state.list
    }
}
const mapDispatchToProps = dispatch=>{
    return {
        initialData: payload=>{
            dispatch({
                type: 'ADD_ADD',
                payload
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(index)