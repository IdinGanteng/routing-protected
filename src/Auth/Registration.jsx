import { Button, Checkbox, Form, Input, Select } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

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

  const navigate = useNavigate()

  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [phone, setphone] = useState('');
  const [gender, setgender] = useState('');
  
  const onFinish = () => {
    
    localStorage.setItem("username", JSON.stringify(username))
    localStorage.setItem("email", JSON.stringify(email))
    localStorage.setItem("password", JSON.stringify(password))
    localStorage.setItem("phone", JSON.stringify(phone))
    localStorage.setItem("gender", JSON.stringify(gender))

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
          onChange={(e) => setusername(e.target.value)}
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
          
          onChange={(e) => setemail(e.target.value)}
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
          
          onChange={(e) => setpassword(e.target.value)}
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
          name="confirm"
         
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder="repeat and confirm your password"/>
        </Form.Item>

       

        <Form.Item
          name="phone"
          
          onChange={(e) => setphone(e.target.value)}
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input
            placeholder="please enter your phone number"
            style={{
              width: "100%",
            }}
          />
        </Form.Item>

        <Form.Item
          name="gender"
          
          rules={[
            {
              required: true,
              message: "Please select gender!",
            },
          ]}
          >
          <Select 
             onChange={(value) => setgender(value)}
             placeholder="select your gender">
            <Option value="male">CWK</Option>
            <Option value="female">CWK</Option>
            <Option value="other">Gak punya kelamin</Option>
          </Select>
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
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
    </div>
  );
};