
import {UPLOAD_SUCCESS,UPLOAD_FAILURE} from '../constants'

export function uploadSuccess(data){
  return {type:UPLOAD_SUCCESS,payload:data}
}


export function uploadFailure(){
  return {type:UPLOAD_FAILURE}
}
