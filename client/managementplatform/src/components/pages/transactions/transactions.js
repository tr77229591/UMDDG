import React, { Component } from 'react'
import { Card, Icon, Avatar,Row,Col } from 'antd';

import reqwest from 'reqwest'
const count = 3;
const fakeDataUrl = `https://nodejs.91bquan.com/api/getusers`;



const { Meta } = Card;

class Transaction extends Component {

  constructor(){
    super()
    this.state={
      initLoading: true,
      loading: false,
      data: [],
      list: [],
      currentUser:null
    }
  }

  componentDidMount() {
  this.getData((res) => {
    this.setState({
      initLoading: false,
      data: res.results,
      list: res.results,
    });
  });
}

getData = (callback) => {
  reqwest({
    url: fakeDataUrl,
    type: 'json',
    method: 'get',
    contentType: 'application/json',
    success: (res) => {
      callback(res);
    },
  });
}

// actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}


  render() {
    const cardList = this.state.list.map((item,index)=>

            (<Col span={8} key={item.id}>
              <Card
                style={{ width: 300 }}
                cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}

              >
              <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={item.email}
                description={index}
              />
            </Card>
          </Col>)
    )

    return (
      <div className="">
        {cardList}
      </div>
    )
  }
}

export default Transaction
