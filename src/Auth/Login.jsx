import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import React, {useState} from 'react';
import { useNavigate } from 'react-router';
import './Auth.css'
import { userLogin } from '../service/authService';

export const Login = () => {
  const navigate = useNavigate()
  
  // const [username, setusername] = useState('');
  // const [password, setpassword] = useState('');
  const [userCredentials,setUserCredentials]=useState({user:"",password:""});



  
  const onFinish = () => userLogin(userCredentials,navigate)

  return (
    <div className='login'>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          onChange={(e) => setUserCredentials({...userCredentials,user:e.target.value})}
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          onChange={(e) => setUserCredentials({...userCredentials,password:e.target.value})}
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="-">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="/registration">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};