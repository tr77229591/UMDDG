import axios from 'axios'


export function getMerchant({userName,password}){

  return dispatch=>{
    axios.get('/api/getmerchant')
    .then(res=>{
        console.log(res.data)
      }
    )
  }
}


export function postProduct(data){

  return dispatch=>{
    axios.post('/api/invoke',{
      "action":"addProduct",
      "data":data
    })
    .then(res=>{
        console.log(res.data)
      }
    )
  }
}


export function postRecharge(data){

  return dispatch=>{
    axios.post('/api/update',{
      "name":"User",
      "id":data.studentNo,
      "data":data

    })
    .then(res=>{
        console.log(res.data)
      }
    )
  }
}

export function postUserUpdate(data){

  return dispatch=>{
    axios.post('/api/update',{
      "name":"User",
      "id":data.studentNo,
      "data":data

    })
    .then(res=>{
        console.log(res.data)
      }
    )
  }
}

export function getBlockInfo(){
  return dispatch=>{
    return   axios.get('/api/blockinfo')
    // .then(res=>{
    //   console.log(res)
    //   return res
    // })
  }
}
