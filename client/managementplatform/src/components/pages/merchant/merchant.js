import React, { Component } from 'react'
import {APIURL} from '../../../constants'
import {Layout, Menu, Breadcrumb, Icon} from 'antd'
import MerchantInfo from './merchantInfo'
import AddProduct from './addProduct'
import {logout} from '../../../action/login'
import {connect} from 'react-redux'

import { withRouter } from 'react-router-dom'

const { Header, Content, Sider } = Layout;

class Merchant extends Component {

  constructor(){
    super()
    this.state={
      openPage:'merchantInfo'

    }
    this.handleLogout=this.handleLogout.bind(this)

  }

  handleLogout(){
    this.props.logout()
    this.props.history.push('/login')

  }





  render() {

    return (
      <div>
        <Layout>
          <Header className="header">


            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
                    <Menu.Item key="1" onClick={()=>this.setState({openPage:'merchantInfo'})}>Merchant Info </Menu.Item>

                    <Menu.Item key="2" onClick={()=>this.setState({openPage:'addProduct'})}>Add Product </Menu.Item>

                    <Menu.Item key="logout" onClick={this.handleLogout}>Logout</Menu.Item>

            </Menu>

          </Header>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Pages</Breadcrumb.Item>
            <Breadcrumb.Item>{this.state.openPage}</Breadcrumb.Item>
          </Breadcrumb>
          <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
            {(this.state.openPage=='merchantInfo')?(<MerchantInfo></MerchantInfo>):null}
            {(this.state.openPage=='addProduct')?(<AddProduct></AddProduct>):null}
          </Content>
        </Layout>






      </div>






    )
  }
}


export default withRouter(connect (null,{logout})(Merchant))
