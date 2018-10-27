import React, { Component } from 'react'
import {connect} from "react-redux"
import { withRouter } from 'react-router-dom'
class AuthRoute extends Component {
  componentDidMount() {
    if(this.props.user.user===null){
      this.props.history.push('/login')
    }
  }
  render() {
    return (
      null
    )
  }
}
const mapStateToProps=(state)=>{
  return {user:state.user}
}
export default withRouter(connect(mapStateToProps,{})(AuthRoute))
