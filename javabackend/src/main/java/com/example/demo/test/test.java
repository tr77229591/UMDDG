package com.example.demo.test;

import org.python.core.PyFunction;
import org.python.core.PyInteger;
import org.python.core.PyObject;
import org.python.util.PythonInterpreter;

import java.io.File;


public class test {

    public static void main(String[] args) {
        // TODO Auto-generated method stub
        String path = System.getProperty("user.dir")+ File.separator+"src"+
                File.separator+"main"+File.separator+"py"+File.separator+"add.py";
        PythonInterpreter interpreter = new PythonInterpreter();
        interpreter.execfile(path);

        // 第一个参数为期望获得的函数（变量）的名字，第二个参数为期望返回的对象类型
        PyFunction pyFunction = interpreter.get("add", PyFunction.class);
        int a = 5, b = 10;
        //调用函数，如果函数需要参数，在Java中必须先将参数转化为对应的“Python类型”
        PyObject pyobj = pyFunction.__call__(new PyInteger(a), new PyInteger(b));
        System.out.println("the anwser is: " + pyobj);
//        PythonInterpreter interpreter = new PythonInterpreter();
//        interpreter.exec("a=[5,2,3,9,4,0]; ");
//        interpreter.exec("print(sorted(a));");
    }

}
