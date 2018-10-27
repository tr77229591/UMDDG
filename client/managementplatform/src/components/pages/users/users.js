import React, { Component } from 'react'
import { List, Avatar, Button, Skeleton } from 'antd'
import {Link} from 'react-router-dom'
import {APIURL} from '../../../constants'
import Edit from './edit'
import reqwest from 'reqwest'
const count = 3;
const fakeDataUrl = `${APIURL}/api/queryall/users`;




class Users extends Component {


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
      callback(res);
    },
  });
}

onLoadMore = () => {
  this.setState({
    loading: true,
    list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
  });
  this.getData((res) => {
    const data = this.state.data.concat(res.payload);
    this.setState({
      data,
      list: data,
      loading: false,
    }, () => {
      // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
      // In real scene, you can using public method of react-virtualized:
      // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
      window.dispatchEvent(new Event('resize'));
    });
  });
}


handleEdit=(e)=>{
  console.log(e)
}


handleDisable=(e)=>{
  console.log(e)
}



  render() {
    const { initLoading, loading, list } = this.state;
    const loadMore = !initLoading && !loading ? (
      <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
        <Button onClick={this.onLoadMore}>loading more</Button>
      </div>
    ) : null;

    return (
      <List
             className="demo-loadmore-list"
             loading={initLoading}
             itemLayout="horizontal"
             loadMore={loadMore}
             dataSource={list}
             renderItem={item => (
               // <List.Item>
                  <List.Item actions={[
                    <Link
                      to={{
                        pathname: "/edit",
                        state: { item }
                      }}
                    >Edit</Link>
                  ]}>
                 <Skeleton avatar title={false} loading={item.loading} active>
                   <List.Item.Meta
                     avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                     title={item.name}
                     description={item.course}
                   />
                 </Skeleton>
               </List.Item>
             )}
           />
    )
  }
}

const mapStateToProps=(state)=>{
  return {user:state.user}
}

export default Users
