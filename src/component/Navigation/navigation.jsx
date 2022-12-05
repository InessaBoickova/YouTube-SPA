import './navigation.sass'
import { useState } from 'react';
import { Card } from 'antd';

const tabListNoTitle = [
  {
    key: 'Поиск',
    tab: 'Поиск',
  },
  {
    key: 'Избранное',
    tab: 'Избранное',
  },
];

const Navigation = () =>{
    const [activeTabKey, setActiveTabKey] = useState('app');
    const onTabChange = (key) => {
      setActiveTabKey(key);
    };

    return (
      <>
        <Card className='navigation'
          tabList={tabListNoTitle}
          activeTabKey={activeTabKey}
          tabBarExtraContent={
            <a href='#'>Выйти</a>
          }
          onTabChange={(key) => {
            onTabChange(key);
          }}>
        </Card>
      </>
    );
}

export default Navigation;