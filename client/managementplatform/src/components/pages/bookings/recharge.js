import React, { Component } from 'react'
import {Form,Icon,Input,Button,InputNumber} from 'antd'
import {postRecharge} from '../../../action/getdatas'
import {connect} from 'react-redux'

const FormItem = Form.Item
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
}
class Recharge extends Component {


  constructor(){
    super()
    this.state={
      studentNo:'',
      credit:''
    }
    this.onChange=this.onChange.bind(this)
    this.onPriceChange=this.onPriceChange.bind(this)
    this.onClick=this.onClick.bind(this)
  }

  componentDidMount() {
    this.setState({
      price:10
    })
  }

  onChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  onPriceChange=(value)=>{
    this.setState({
      credit:value.toString()
    })
  }

  onClick(){
    console.log(this.props)
    this.props.postRecharge(this.state)
  }

  render() {



    return (
      <div className="">
        {/* <Button type='primary'>Button</Button> */}
        <Form  className=''>
          <FormItem {...formItemLayout} label="StudentNo:">
            <Input
              name='studentNo'
              placeholder="Enter your student No"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              onChange={this.onChange}

            />
          </FormItem>
          <FormItem>
            <FormItem {...formItemLayout} label="Credits:">

                <InputNumber
                  defaultValue={5}
                  formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  parser={value => value.replace(/\$\s?|(,*)/g, '')}
                  onChange={this.onPriceChange}
                />
              </FormItem>
          </FormItem>

          <FormItem {...formItemLayout} label="Submit:">

            <Button type="primary"  className="login-form-button" onClick={this.onClick}>
              Add
            </Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default connect(null,{postRecharge})(Recharge)
