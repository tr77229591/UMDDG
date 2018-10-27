import React, { Component } from 'react'
import {List,Avatar} from 'antd'
import {connect} from 'react-redux'
import {getMerchant} from '../../../action/getdatas'
import UploadComponent from './upload'


class MerchantInfo extends Component {

  getMerchantData(){
    this.props.getMerchant()
  }

  render() {
    const data =["Name:    Merchant CC","Description:    We provide the best products in the world","Credits:     MUC1000"]

    return (
      <div>
        <h3 style={{ margin: '16px 0' }}>Merchant Information</h3>
        <List
          size="large"
          header={  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
}


          bordered
          dataSource={data}
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
      </div>
    )
  }
}

export default connect(null,{getMerchant})(MerchantInfo)
