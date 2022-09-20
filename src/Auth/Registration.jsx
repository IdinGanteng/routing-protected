import { Button, Checkbox, Form, Input } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {userRegistration} from "../service";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 0,
    },
  },
};

export const Registration = () => {
  const [form] = Form.useForm();

  const navigate = useNavigate();
  const [userCredentials,setUserCredentials]=useState({usreName:"",email:"",password:""});
  // console.log(userCredentials);

  
  const onFinish = async event => {
    
    navigate("/login") 
  };

  return (
    <div className="registration">
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
      >
         <Form.Item
          name="username"
          // placeholder="Username"
          onChange={(e) => setUserCredentials({...userCredentials,userName:e.target.value})}
          tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: "Please input your username!",
              whitespace: true,
            },
          ]}
        >
          <Input placeholder="Username"/>
        </Form.Item>
        <Form.Item
          name="email"
          
          onChange={(e) => setUserCredentials({...userCredentials,email:e.target.value})}
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input placeholder="please enter your email"/>
        </Form.Item>

        <Form.Item
          name="password"
          
          onChange={(e) => setUserCredentials({...userCredentials,password:e.target.value})}
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder="please enter your password"/>
        </Form.Item>

        
            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(new Error("Should accept agreement")),
                },
              ]}
              {...tailFormItemLayout}
            >
              <Checkbox>
                I have read the <a href="-">agreement</a>
              </Checkbox>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit" onClick={()=>{userRegistration(userCredentials,navigate)}}>
                Register
              </Button>
            </Form.Item>
          </Form>
    </div>
  );
};