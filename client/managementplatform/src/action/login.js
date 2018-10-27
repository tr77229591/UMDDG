import axios from 'axios'
import {LOGIN_MERCHANT_SUCCESS,LOGIN_SUCCESS,ERROR_MSG,LOGOUT} from '../constants'





export function login({userName,password}){
  if(!userName||!password){
    return errorMsg("user name and password is required")
  }
  return dispatch=>{
    axios.post('/api/login',{userName,password})

    .then(res=>{
      if (res.status === 200 && res.data.code==="0"&&res.data.payload.user=='admin'){
          dispatch(loginSuccess({obj:res.data.payload}))
      }
      else if (res.status === 200 && res.data.code==="0"&&res.data.payload.user=='merchant') {
          dispatch(loginMerchantSuccess({obj:res.data.payload}))
      }
      else{
          dispatch(errorMsg(res.data.msg))
      }
    })
  }
}

export function logout(){
  return {type:LOGOUT}
}





function errorMsg(msg){
  return {msg,type:ERROR_MSG}
}

function loginSuccess(data){
  return {type:LOGIN_SUCCESS,payload:data}
}

function loginMerchantSuccess(data){
  return {type:LOGIN_MERCHANT_SUCCESS,payload:data}
}
