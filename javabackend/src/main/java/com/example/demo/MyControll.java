package com.example.demo;

import com.alibaba.fastjson.JSONObject;
import com.example.demo.bean.Resp;
import com.example.demo.service.AliBass;
import org.hyperledger.fabric.sdk.ProposalResponse;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import com.alibaba.fastjson.JSON;

@RestController
@RequestMapping(value = "/api")
public class MyControll {

    AliBass aliBass = new AliBass();

    @RequestMapping(value = "/id", method = RequestMethod.GET)
    public String receive(){
        return "d";
    }

    @PostMapping("/post")
    public void createUserByMap(@RequestBody String params){
        JSONObject jsonObject = JSONObject.parseObject(params);
        System.out.println("Your Message : " + jsonObject.getString("tel"));
    }

    @PostMapping("/invoke")
    @ResponseBody
    public String invokeInfomation(@RequestBody String params){
        Resp response = new Resp();

        JSONObject jsonObject = JSONObject.parseObject(params);
        String action = jsonObject.getString("action").toString();
        String data = jsonObject.getString("data").toString();

//        data = JSON.toJSONString(jsonObject.getString("data"));
//        String a = new String("");
        System.out.println("action : " + action);
        System.out.println("data : " + data);
        Collection<ProposalResponse> results  = null;
        try {
            results = aliBass.executeChaincode(action,data);
        }  catch (Exception e) {
            response.setCode("0");
            response.setPayload("fail");
            String res = JSON.toJSONString(response);
            return res;
        }
        System.out.println("results : " + results);
        response.setCode("0");
        response.setPayload("success");
        String res = JSON.toJSONString(response);
        return res;
    }

    @RequestMapping(value = "query/{id}", method = RequestMethod.GET)
    public Resp queryInfomation(@PathVariable String id){
        Resp response = new Resp();

//        JSONObject jsonObject = JSONObject.parseObject(params);
//        String id = jsonObject.getString("id").toString();
        System.out.println("Request query id : " + id);
        String result = null;
        try {
            result =  aliBass.executeChaincode(id);
        }  catch (Exception e) {
            response.setCode("0");
            response.setPayload("fail");
            return response;
        }
//        JSONObject jsonresult = JSON.parseObject(result);
//        aliBass.getBlockInfo();
        System.out.println(result);
        response.setCode("0");
        JSONObject ob = JSONObject.parseObject(result);
        response.setPayload(ob);
//        String res = JSON.toJSONString(response);
        return response;
    }


    @PostMapping("/update")
    @ResponseBody
    public Resp updateInfomation(@RequestBody String params){
        JSONObject jsonObject = JSONObject.parseObject(params);
//        String action = jsonObject.getString("action").toString();
        String name = jsonObject.getString("name").toString();
        String id = jsonObject.getString("id").toString();
        String data = jsonObject.getString("data").toString();

//        data = JSON.toJSONString(jsonObject.getString("data"));
//        String a = new String("");
//        System.out.println("action : " + action);
        System.out.println("data : " + data);
        System.out.println("name : " + name);
        System.out.println("id : " + id);

        Collection<ProposalResponse> results  = null;
        try {
            results = aliBass.executeChaincode("update",name,id,data);
        }  catch (Exception e) {
//            logger.error("exception", e);
        }
        System.out.println("results : " + results);
        Resp response = new Resp();
        response.setCode("0");
        response.setPayload("success");
        return response;
    }

    @RequestMapping(value = "/block", method = RequestMethod.GET)
    public String getBlockInfo(){

        aliBass.getBlockInfo();
        return "a";
    }
}
