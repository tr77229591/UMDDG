import React, { Component } from 'react'
import { Card, Icon, Avatar,Row,Col } from 'antd';
import {APIURL} from '../../../constants'
import reqwest from 'reqwest'
const count = 3;
const fakeDataUrl = `${APIURL}/api/queryall/Product`;



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
      data: res.payload,
      list: res.payload,
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
      console.log(res)
      callback(res);
    },
  });
}

// actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}


  render() {
    const cardList = this.state.list.map((item,index)=>
            (<Col span={8} key={item.key}>
              <Card
                key={item.key}
                style={{ width: 300 }}
                cover={<img alt="example" src={item.Record.vURL} />}

              >
              <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={item.Record.title}
                description={item.Record.description}
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
