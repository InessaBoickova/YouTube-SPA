import Service from '../../services/service';
import './login.sass'
import { Button, Checkbox, Form, Input,Typography} from 'antd';
const { Title } = Typography;



const Login = () => {
  const {onLogin} = Service();

  const onFinish = (values) => {
    onLogin(values.login , values.password)
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
            <Form.Item label="Логин" name="login"
                    rules={[{required: true,
                        message: 'Пожалуйста введите ваш логин',}, ]}>
                <Input />
            </Form.Item>

            <Form.Item label="Пароль" name="password" 
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