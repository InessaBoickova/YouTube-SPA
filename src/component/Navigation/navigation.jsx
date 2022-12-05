import './navigation.sass'
import {  Layout, Menu} from 'antd';
const { Header } = Layout;
const items1 = ['Поиск', 'Избранное', 'Выйти'].map((key) => ({
  key,
  label: `${key}`,
}));

const Navigation = () =>{
    return (
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
                </Header>
            </Layout>
          );
}
export default Navigation;

