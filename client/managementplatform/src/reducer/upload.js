import {UPLOAD_SUCCESS,UPLOAD_FAILURE} from '../constants'


const initialState={
  addr:''
}

const upload = (state=initialState,action={})=>{
  switch(action.type){
    case UPLOAD_SUCCESS:
    return{...state,msg:"",...action.payload}
      case UPLOAD_FAILURE:
    return{...state,msg:"",...action.payload}
    default:
    return state
  }
}

export default upload
