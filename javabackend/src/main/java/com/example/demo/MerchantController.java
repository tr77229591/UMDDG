package com.example.demo;


import com.alibaba.fastjson.JSONObject;
import com.example.demo.bean.Resp;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api")
@RestController
public class MerchantController {

    @PostMapping("/login")
    public Resp vailad(@RequestBody String params){
        JSONObject jsonObject = JSONObject.parseObject(params);
        String usrname = jsonObject.get("userName").toString();
        String password = jsonObject.get("password").toString();
        System.out.println(usrname);
        System.out.println(password);
        JSONObject obj = new JSONObject();
        Resp response = new Resp();
        if ("admin".equals(usrname) && "123".equals(password)){
            obj.put("user","admin");
            response.setPayload(obj);
            response.setCode("0");
            return response;
        }

        if ("merchant".equals(usrname) && "123".equals(password)){
            obj.put("user","merchant");
            response.setPayload(obj);
            response.setCode("0");
            return response;

        }
        response.setPayload("1");
        response.setPayload("fail");
        return response;

    }
}
