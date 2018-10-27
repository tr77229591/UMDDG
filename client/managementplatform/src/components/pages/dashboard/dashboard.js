import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon,Row, Col  } from 'antd';


import './dashboard.css'
import Logo from '../../logo/logo'
import Users from '../users/users'
import Bookings from '../bookings/bookings'
import Recharge from '../bookings/recharge'
import Transactions from '../transactions/transactions'
import {logout} from '../../../action/login'
import {connect} from 'react-redux'

import { withRouter } from 'react-router-dom'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;



class Dashboard extends Component {


  constructor(){
    super()
    this.state={
      openPage:'users'

    }
    this.handleLogout=this.handleLogout.bind(this)

  }

  handleLogout(){
    this.props.logout()
    this.props.history.push('/login')

  }


  render() {

    return (
      <div className="">
        <Layout>
          <Header className="header">

            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >

                    <Menu.Item key="1" onClick={()=>this.setState({openPage:'users'})}>Users </Menu.Item>

                    <Menu.Item key="2" onClick={()=>this.setState({openPage:'bookings'})}>Block Info </Menu.Item>

                    <Menu.Item key="3" onClick={()=>this.setState({openPage:'transactions'})}>Trans List</Menu.Item>

                    <Menu.Item key="logout" onClick={this.handleLogout}>Logout</Menu.Item>









            </Menu>

          </Header>
          <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <SubMenu key="sub1" title={<span><Icon type="user" />Users Info</span>}>
                  <Menu.Item key="1" onClick={()=>this.setState({openPage:'users'})}>Users List</Menu.Item>
                    <Menu.Item key="6" onClick={()=>this.setState({openPage:'recharge'})}>Recharge</Menu.Item>


                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="laptop" />Block Info</span>}>
                  <Menu.Item key="5" onClick={()=>this.setState({openPage:'bookings'})}>Block Info</Menu.Item>

                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="notification" />Transactions</span>}>
                  <Menu.Item key="9" onClick={()=>this.setState({openPage:'transactions'})}>Transactions List</Menu.Item>

                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Pages</Breadcrumb.Item>
                <Breadcrumb.Item>{this.state.openPage}</Breadcrumb.Item>
              </Breadcrumb>
              <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                {(this.state.openPage=='users')?(<Users></Users>):null}
                {(this.state.openPage=='bookings')?(<Bookings></Bookings>):null}
                {(this.state.openPage=='recharge')?(<Recharge></Recharge>):null}
                {(this.state.openPage=='transactions')?(<Transactions></Transactions>):null}
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    )
  }
}




export default withRouter(connect (null,{logout})(Dashboard))
