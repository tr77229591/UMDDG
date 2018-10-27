package com.example.demo;


import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.example.demo.bean.Resp;
import com.example.demo.bean.cla;
import com.example.demo.service.AliBass;
import org.apache.commons.io.IOUtils;
import org.hyperledger.fabric.sdk.ProposalResponse;
import org.hyperledger.fabric.sdk.exception.InvalidArgumentException;
import org.hyperledger.fabric.sdk.exception.ProposalException;
import org.springframework.context.annotation.Scope;
import org.springframework.web.bind.annotation.*;

import java.io.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Map;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeoutException;

@RequestMapping("/api")
@RestController
public class UserController {
    AliBass aliBass = new AliBass();
    static Boolean bool = Boolean.TRUE;

    private String connectionProfilePath = System.getProperty("user.dir")+ File.separator+"src"+
            File.separator+"main"+File.separator+"data/"+File.separator+"user.json";
    private String connectionProfilePath2 = System.getProperty("user.dir")+ File.separator+"src"+
            File.separator+"main"+File.separator+"data/"+File.separator+"cala.json";
    private String connectionProfilePath3 = System.getProperty("user.dir")+ File.separator+"src"+
            File.separator+"main"+File.separator+"bass/"+File.separator+"tag.txt";

    @RequestMapping(value = "queryall/{obj}", method = RequestMethod.GET)
    public Resp createUserByMap(@PathVariable String obj){
//        JSONObject jsonObject = JSONObject.parseObject(params);
//        String obj = jsonObject.getString("objname");
//        String a = "Course";
//        System.out.println("aaa"+"  "+a.toString());
        System.out.println(obj);
        String action = "queryByObjectType";
        Resp response = new Resp();

//        JSONObject jsonObject = JSONObject.parseObject(params);
//        String id = jsonObject.getString("id").toString();

        System.out.println("Request obj name : " + obj);
        String result = null;
        try {
            result =  aliBass.executeChaincodeAll(action,obj.toString());
        }  catch (Exception e) {
            response.setCode("0");
            response.setPayload("fail");
            return response;
        }
//        JSONObject jsonresult = JSON.parseObject(result);
//        aliBass.getBlockInfo();
        System.out.println(result);
        response.setCode("0");
//        response.setPayload(result);
        JSONArray ob = JSONArray.parseArray(result);
//        String res = JSON.toJSONString(response);
        response.setPayload(ob);
        System.out.println(ob);
        return response;
    }

    @RequestMapping(value = "queryall/users", method = RequestMethod.GET)
    public Resp getUsers(){
//        JSONObject jsonObject = JSONObject.parseObject(params);
//        String obj = jsonObject.getString("objname");
//        String a = "Course";
//        System.out.println("aaa"+"  "+a.toString());
        String obj = "User";
        String action = "queryByObjectType";
        Resp response = new Resp();

//        JSONObject jsonObject = JSONObject.parseObject(params);
//        String id = jsonObject.getString("id").toString();

        System.out.println("Request obj name : " + obj);
        String result = null;
        try {
            result =  aliBass.executeChaincodeAll(action,obj.toString());
        }  catch (Exception e) {
            response.setCode("0");
            response.setPayload("fail");
            return response;
        }
//        JSONObject jsonresult = JSON.parseObject(result);
//        aliBass.getBlockInfo();
        System.out.println(result);
        response.setCode("0");
//        response.setPayload(result);
        JSONArray ob = JSONArray.parseArray(result);
//        String res = JSON.toJSONString(response);
        response.setPayload(ob);
        System.out.println(ob);
        return response;
    }

    @RequestMapping(value = "/blockinfo", method = RequestMethod.GET)
    public Resp getBlock(){
        JSONObject result = aliBass.getBlockInfo();
        Resp resp = new Resp();
        resp.setCode("0");
        resp.setPayload(result);
        return resp;
    }

    @RequestMapping(value = "/booking/{id}", method = RequestMethod.GET)
    @Scope("session")
    public cla booking(@PathVariable String id) {
        cla res = new cla();
        System.out.println(bool);
        int a  = getindex();
        System.out.println(a);
        InputStream inputStream = null;
        InputStream inputStream2 = null;

        try {
            inputStream = new FileInputStream(connectionProfilePath2);
            inputStream2 = new FileInputStream(connectionProfilePath2);

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        String text = null;
        String text2 = null;

        try {

            text = IOUtils.toString(inputStream, "utf8");
            text2 = IOUtils.toString(inputStream2, "utf8");

        } catch (IOException e) {
            e.printStackTrace();
        }

        System.out.println(text.isEmpty());
        JSONObject courses = JSONObject.parseObject(text);

        res.setCode("0");
        res.setPayload(courses);

        ArrayList<String> arrlist = new ArrayList();
        arrlist.add("2018-10-27");
        arrlist.add("2018-09-24");
        arrlist.add("2018-12-17");
        arrlist.add("2018-11-04");
        arrlist.add("2018-10-17");
        arrlist.add("2018-08-06");
        arrlist.add("2018-11-07");

        arrlist.add("2018-11-09");
        arrlist.add("2018-09-17");
        arrlist.add("2018-09-27");

        res.setPayload2(arrlist);

        System.out.println(courses);
        return res;

//        Object[] list = courses.toArray();
//        for (Map.Entry<String, Object> entry : courses.entrySet()) {
//            System.out.println(entry.getKey() + ":" + entry.getValue());
//        }

//        System.out.println(courses.toArray());
//        for(int i = 0;i< list.length;i++){
//
//
//
//        }
//        for(JSONObject element :courses){
//            JSONObject object = new JSONObject();
//            System.out.println(element.toString());
////        System.out.println(courses);
//
//    }
//            if ("CISC8001".equals(id)){
//
//
//            }
//            if ("STGC8002".equals(id)) {
//            }
//

    }

    public int getindex(){
        int i = 0;
        i++;
        return i;
    }

}
