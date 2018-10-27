
import React, { Component } from 'react'
import {Button,Form,Input,Icon,InputNumber,message} from 'antd'
import nonce, {CHARS} from 'nonce-str'
import UploadComponent from './upload'
import {connect} from 'react-redux'
import {postProduct} from '../../../action/getdatas'
const FormItem = Form.Item
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
}

class AddProduct extends Component {

  constructor(){
    super()
    this.state={
      "id":"",
      "productType":"Mooc",
      "merchantID":"123",
      "vURL":"http://10.8.207.25:8080/image/aaa.png",
      "img":"",
      "title":"",
      "description":"",
      "price":"0"
    }
    this.onChange=this.onChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
}


componentDidMount() {
  console.log(nonce(16))
  if (this.props.upload.addr===''){
    // message.error(`file does not upload yet`);
    this.setState({
      vURL:"http://10.8.207.25:8080/image/aaa.png"
    })

  }else{
    this.setState({
      id:nonce(16),
      vURL:this.props.upload.addr
    })
  }
  // this.setState({
  //   id:nonce(16),
  //   productType:"Mooc",
  //   merchantID:"123",
  //   vURL:this.props.upload.addr,
  //   img:"",
  //   title:this.state.title,
  //   description:this.state.description,
  //   price:this.state.price
  // })


}







  onChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }


  onPriceChange=(value)=>{
    this.setState({
      price:value.toString()
    })
  }





  handleSubmit=()=>{
    console.log(nonce(16))
    if (this.props.upload.addr===''){
      message.error(`file does not upload yet`);

    }
    this.setState({
      vURL:this.props.upload.addr
    })
    var data={
      "id":nonce(16),
      "productType":this.state.productType,
      "merchantID":this.state.merchantID,
      "vURL":this.state.vURL,
      "img":this.state.img,
      "title":this.state.title,
      "description":this.state.description,
      "price":this.state.price
    }

    this.props.postProduct(data)
    console.log(data)
  }


  render() {
    const {name,email,gender} = this.state

    return (
      <div className="">
        <Form  className=''>
          <FormItem    {...formItemLayout} label="Name">
            <Input
              name='title'
              placeholder="Product"
              prefix={<Icon type="diff"  theme="twoTone" style={{ color: 'rgba(0,0,0,.25)' }} />}
              value={this.state.title}
              onChange={this.onChange}
            />
          </FormItem>
          <FormItem  {...formItemLayout} label="Description" >
            <Input.TextArea
              rows={4}
              name='description'
              placeholder="Enter your description"
              prefix={<Icon type="align-left" theme="outlined" style={{ color: 'rgba(0,0,0,.25)' }} />}
              value={this.state.description}
              onChange={this.onChange}
            />
          </FormItem>
          <FormItem {...formItemLayout} label="Upload">
              <h2>Product image upload</h2>
                <UploadComponent ></UploadComponent>
        </FormItem>


        <FormItem {...formItemLayout} label="Price">

            <InputNumber
              defaultValue={1000}
              formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={value => value.replace(/\$\s?|(,*)/g, '')}
              onChange={this.onPriceChange}
            />
          </FormItem>


          <FormItem {...formItemLayout} label="Submit">
            <Button type="primary"  className="login-form-button" onClick={this.handleSubmit}>
              Confirm
            </Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}


const mapStateToProps=(state)=>{
  return {upload:state.upload}
}

export default connect(mapStateToProps,{postProduct})(AddProduct)
