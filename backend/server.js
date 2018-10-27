var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var multer  = require('multer')
var fs = require('fs');

var upload = multer({ dest: 'upload/' });

var app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(express.static('public'))

app.use(cors())

app.post('/api/login',function(req,res){
  if(req.body.userName==="admin"&&req.body.password==="123"){
    res.json({code:"0",payload:{user:"admin"}})
  }else if(req.body.userName==="merchant"&&req.body.password==="123"){
    console.log('merchant')
    res.json({code:"0",payload:{user:"merchant"}})

  }
  else{
    res.status(500).send({code:1,error:"username or password is incorrect"})
  }

})


app.post('/api/upload', upload.single('file'), function(req, res, next){
    var file = req.file;

    console.log('文件类型：%s', file.mimetype);
    console.log('原始文件名：%s', file.originalname);
    console.log('文件大小：%s', file.size);
    console.log('文件保存路径：%s', file.path);

    res.send({code: '0',msg:'file upload'});
});


app.get('/api/getusers',function(req,res){

  res.json({

  "results": [
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "alfred",
        "last": "johansen"
      },
      "email": "alfred.johansen@example.com",
      "nat": "DK"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "marcos",
        "last": "hernandez"
      },
      "email": "marcos.hernandez@example.com",
      "nat": "ES"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "german",
        "last": "vega"
      },
      "email": "german.vega@example.com",
      "nat": "ES"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "anatole",
        "last": "masson"
      },
      "email": "anatole.masson@example.com",
      "nat": "FR"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "paul",
        "last": "dubois"
      },
      "email": "paul.dubois@example.com",
      "nat": "FR"
    }
  ]

  })

})


app.listen(8080,function(){
  console.log("server is runing on 8080")
})
