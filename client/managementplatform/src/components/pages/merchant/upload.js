import React, { Component } from 'react'
import {Button,Form,Upload,Icon,message} from 'antd'
import {APIURL} from '../../../constants'
import {connect} from 'react-redux'
import {uploadSuccess,uploadFailure} from '../../../action/upload'



class UploadComponent extends Component {

  constructor(){
    super()
    this.state={
      addr:''
    }
    this.uploadS=this.uploadS.bind(this)
    this.handleChange=this.handleChange.bind(this)
  }

  uploadS(name){
    this.setState({
      addr:`http://10.8.207.25:8080/image/${name}`
    })
    this.props.uploadSuccess({addr:this.state.addr})
  }


   handleChange(info) {
     const status = info.file.status;
     if (status !== 'uploading') {
     }
     if (status === 'done') {
       message.success(`${info.file.name} file uploaded successfully.`)
       this.uploadS(info.file.name)
       // this.props.uploadSuccess(info.file.name)
     } else if (status === 'error') {
       message.error(`${info.file.name} file upload failed.`);


     }
   }



  render() {
    const props = {
      name: 'file',
      multiple: true,
      // action: `${APIURL}/api/uploadImage`,
      action: `${APIURL}/api/upload`,
      // action:'http://192.168.1.100:8080/uploadImage',
      onChange:this.handleChange
    }
  const Dragger = Upload.Dragger;





    return (

      <div>

          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
          </Dragger>

      </div>

    )
  }
}

const mapStateToProps=(state)=>{
  return {upload:state.upload}
}


export default connect(mapStateToProps,{uploadFailure,uploadSuccess})(UploadComponent)
