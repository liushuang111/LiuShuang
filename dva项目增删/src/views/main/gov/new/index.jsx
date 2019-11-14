import React from 'react'
import { connect } from 'dva'
import WrappedRegistrationForm from './froms.jsx'
const mapStateToProps = state=>{
  return {
    type: state.gov.type,
    info: state.gov.info
  }
}

@connect(mapStateToProps)
class NewGov extends React.Component{
  render(){
    return <>
      <p>新增机构</p>
      <WrappedRegistrationForm />sdadasd
    </>
  }
}

export default NewGov