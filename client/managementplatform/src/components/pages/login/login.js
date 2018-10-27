import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

import {Form,Icon,Input,Button,Checkbox} from 'antd'
import {login} from '../../../action/login'
import {Helmet} from 'react-helmet'
import {connect} from 'react-redux'
import Logo from '../../logo/logo'
import './login.css'



class Login extends Component {

  constructor(){
    super()
    this.state={
      userName:'',
      password:''
    }
    this.handleLogin=this.handleLogin.bind(this)
  }

  onChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

 handleLogin(){
   this.props.login(this.state)
 }

 emitUserEmpty = () => {
   this.userNameInput.focus();
   this.setState({
     userName: ''
   });
 }

 emitPwdEmpty = () => {
   this.userNameInput.focus();
   this.setState({
     password: ''
   });
 }


  render() {
    if(this.props.user.redirect==="/dashboard"){
      return(
        <Redirect to="/dashboard"/>
      )
    }

    else if(this.props.user.redirect==="/merchant"){
      return(
        <Redirect to="/merchant"/>
      )
    }

    else{

        const FormItem = Form.Item
        const {userName,password} = this.state
        const userSuffix = userName ? <Icon type="close-circle" onClick={this.emitUserEmpty} /> : null;
        const pwdSuffix = password  ? <Icon type="close-circle" onClick={this.emitPwdEmpty} /> : null;
        return (
            <div className='divForm' >
               {/* <Helmet>
                <style>{`body {background-image:url(${BackgroundImg});}`}</style>
              </Helmet> * */}

              <h1 align="center">DDG  Login page</h1>

              <Logo></Logo>
              <Form  className='login-form'>
                <FormItem>
                  <Input
                    name='userName'
                    placeholder="Enter your username"
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    suffix={userSuffix}
                    value={userName}
                    onChange={this.onChange}
                    ref={node => this.userNameInput = node}
                  />
                </FormItem>
                <FormItem>
                  <Input
                    name='password'
                    placeholder="Enter your password"
                    type="password"
                    prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    suffix={pwdSuffix}
                    value={password}
                    onChange={this.onChange}
                    ref={node => this.userNameInput = node}
                  />
                </FormItem>

                <FormItem>
                  <Checkbox>Remember me</Checkbox>

                  <a className="login-form-forgot" href="">Forgot password</a>
                  <Button type="primary"  className="login-form-button" onClick={this.handleLogin}>
                    Log in
                  </Button>
                  Or <a href="">register now!</a>
                </FormItem>
              </Form>
            </div>
        )
    }

  }



}

const mapStateToProps=(state)=>{
  return {user:state.user}
}

export default connect(mapStateToProps,{login})(Login)
