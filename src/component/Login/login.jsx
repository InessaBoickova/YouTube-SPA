import React from 'react';
import login from '../../login.json'
import './login.sass'
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input,Typography} from 'antd';
const { Title } = Typography;

const getToken = ()=>{
  return Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2); 
}

const Login = () => {
  const navigate = useNavigate();
  
  const onFinish = (values) => {
    if(values.username === login.login && values.password === login.password){
      localStorage.setItem('token', getToken());
      navigate('/Youtube-SPA/VideoSearch');
    } else{
      alert('Не верные данные');
    }
  };

  const onFinishFailed = () => {
    alert('Не верные данные');
  };

  return (
    <div className='login'>
        <Title level={2}>
            Вход
        </Title>
        <Form name="basic" labelCol={{ span: 5,}} 
            wrapperCol={{ span: 15}}
            initialValues={{remember: true,}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off">
            <Form.Item label="Логин" name="username"
                    initialValue={login.login}
                    rules={[{required: true,
                        message: 'Пожалуйста введите ваш логин',}, ]}>
                <Input />
            </Form.Item>

            <Form.Item label="Пароль" name="password" 
                initialValue={login.password}
                rules={[{ required: true, message: 'Пожалуйста введите ваш пароль',},]}>
                <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked"
                wrapperCol={{offset: 2,span: 9, }}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item  wrapperCol={{offset: 10,}}>
                <Button type="primary" htmlType="submit">
                        Войти
                </Button>
            </Form.Item>
        </Form> 
    </div>
  );
};

export default Login;