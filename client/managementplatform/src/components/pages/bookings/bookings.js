import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react';  // or var ReactEcharts = require('echarts-for-react');
import {List} from 'antd'
import {connect} from 'react-redux'
import {getBlockInfo} from '../../../action/getdatas'



class Bookings extends Component {

  constructor(){
    super()
    this.state={
      peerInfo:[]
    }
  }



  componentDidMount() {
    let data = [

    ]
    this.props.getBlockInfo()
    .then(res=>{
      // this.setState({
      //   peerInfo:res.data.payload
      // })
      console.log(res.data.payload)
      data.push("Orders:  "+res.data.payload.Orders)
      data.push("CurrentBlockHash:  "+res.data.payload.CurrentBlockHash)
      data.push("Peers:    "+res.data.payload.Peers)
      data.push("Height:    "+res.data.payload.Height)
      data.push("PreviousBlockHash:    "+res.data.payload.PreviousBlockHash)
      // console.log(data)

      this.setState({
        peerInfo:data
      })



    })
  }




  render() {
    console.log(this.state)


    return (
      <div className="">
        <h2 align="center">The quantity of generated blocks</h2>
        <ReactEcharts
          option={{
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : [ new Date(new Date().getTime()-3000000).toLocaleString(), new Date(new Date().getTime()-2400000).toLocaleString(), new Date(new Date().getTime()-1800000).toLocaleString(), new Date(new Date().getTime()-1200000).toLocaleString()],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'The number of bookings',
                    type:'bar',
                    barWidth: '60%',
                    data:[2,0,3,1]
                }
            ]
        }}
          notMerge={true}
          lazyUpdate={true}
          theme={"theme_name"}
          onChartReady={this.onChartReadyCallback}
      />

      <h2 align="center">Information of block peers</h2>

      <List
        header={<div>BlockInfo</div>}
        bordered
        dataSource={this.state.peerInfo}
        renderItem={item => (<List.Item><h3>{item}</h3></List.Item>)}
      />



      </div>
    )
  }
}

export default connect(null,{getBlockInfo})(Bookings)
