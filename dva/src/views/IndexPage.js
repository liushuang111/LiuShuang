import React,{Component} from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

class IndexPage extends Component {
  btnClick(e){
    
  }
  render() {
    let { changeNum } = this.props
    return (
        <div>
          <button onClick={()=>changeNum('+')}>+</button>
            <span>{this.props.num}</span>
          <button onClick={()=>changeNum('-')}>-</button>
        </div>
    );
  }
}
 //props 类型检测
IndexPage.propTypes = {
    num:Number
};
 //默认值
IndexPage.defaultProps = {
  num:1000
}

const MapStateToProps = state=>{
  console.log(state.num)
   return {
     num:state.num.num 
     
   }
}

const MapDispatchToProps = dispatch=>{
   return {
     changeNum:type=>dispatch({
       type:'num/changeNum',
       payload:{type}
     })
   }
}

export default connect(MapStateToProps,MapDispatchToProps)(IndexPage);
