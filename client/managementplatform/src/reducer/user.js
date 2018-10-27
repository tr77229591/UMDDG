import {LOGIN_MERCHANT_SUCCESS,LOGIN_SUCCESS,LOGOUT} from '../constants'


const initialState={
  isFetching:false,
  errors:null,
  user:null,
  redirect:'/login'
}

const user = (state=initialState,action={})=>{
  switch(action.type){
    case LOGIN_SUCCESS:
    return{...state,msg:"",redirect:"/dashboard",...action.payload}
      case LOGIN_MERCHANT_SUCCESS:
    return{...state,msg:"",redirect:'/merchant',...action.payload}
    case LOGOUT:
      return {
        isFetching:false,
        errors:null,
        user:null,
        redirect:'/login'
      }
    default: return state
  }
}

export default user
