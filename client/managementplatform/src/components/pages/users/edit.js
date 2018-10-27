import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon,Row, Col,Form,Input,Button,Upload  } from 'antd';
import { withRouter } from 'react-router-dom'
import {logout} from '../../../action/login'
import {postUserUpdate} from '../../../action/getdatas'
import {connect} from 'react-redux'
import './edit.css'

const { Header, Content, Sider } = Layout;

class Edit extends Component {

  constructor(){
    super()
    this.state={
      name:"",
      id:"",
      avatar:"",
      studentNo:"",
      course:"",
      credit:""
    }
    this.handleLogout=this.handleLogout.bind(this)
    this.onChange=this.onChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)

  }

  componentDidMount() {
    // console.log()
    if(this.props.location.state!=null){
      if(this.props.location.state.item!=null){
        this.setState({
          name:this.props.location.state.item.name,
          id:this.props.location.state.item.id,
          avatar:this.props.location.state.item.avatar,
          studentNo:this.props.location.state.item.studentNo,
          course:this.props.location.state.item.course,
          credit:this.props.location.state.item.credit
        })
      }
    }

  }



  onChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }


  handleLogout(){
    this.props.logout()
    this.props.history.push('/login')

  }


  handleSubmit(){
    this.props.postUserUpdate(this.state)
  }




  render() {
    const FormItem = Form.Item
    const {name,id,avatar,studentNo,course,credit} = this.state
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    }

    return (
      <Layout>
        <Header className="header">

          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
                  <Menu.Item key="1" onClick={()=>this.props.history.push('/dashboard')}>Home </Menu.Item>
                  <Menu.Item key="logout" onClick={this.handleLogout}>Logout</Menu.Item>

          </Menu>

        </Header>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Pages</Breadcrumb.Item>
            <Breadcrumb.Item>Edit</Breadcrumb.Item>
          </Breadcrumb>
          <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>


            <div className='divEdit'>
            <Form  className=''>
              <FormItem    {...formItemLayout} label="Name">
                <Input
                  name='name'
                  placeholder="Enter your name"
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  value={this.state.name}
                  onChange={this.onChange}

                />
              </FormItem>
              <FormItem  {...formItemLayout} label="StudentNo" >
                <Input
                  name='studentNo'
                  placeholder="Enter your studentNo"
                  prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  value={this.state.studentNo}
                  onChange={this.onChange}
                />
              </FormItem>
              <FormItem  {...formItemLayout} label="avatar" >
                <Input
                  name='avatar'
                  placeholder="Enter your avartar http address"
                  prefix={<Icon type="link" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  value={this.state.avatar}
                  onChange={this.onChange}
                />
              </FormItem>
              <FormItem  {...formItemLayout} label="credit" >
                <Input
                  name='credit'
                  placeholder="credit"
                  prefix={<Icon type="file" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  value={this.state.credit}
                  onChange={this.onChange}
                />
              </FormItem>



              <FormItem {...formItemLayout} label="Submit">

                <Button type="primary"  className="login-form-button" onClick={this.handleSubmit}>
                  Confirm
                </Button>
              </FormItem>
            </Form>
          </div>


          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default withRouter(connect (null,{logout,postUserUpdate})(Edit))
