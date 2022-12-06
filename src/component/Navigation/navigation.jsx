import './navigation.sass'
import VideoSearch from '../VideoSearch/videoSearch';
import { Link } from 'react-router-dom';
import { Tabs} from 'antd';

const Navigation = () =>{
  const onExit = ()=>{
      localStorage.removeItem("token");
  }
    return (
      <>
       <Tabs className='navigation' 
            tabBarExtraContent={<Link to={'/YouTube-SPA/'} onClick={()=>onExit()} >Выйти</Link>}>
          <Tabs.TabPane tab="Поиск" key="item-1">
              <VideoSearch/>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Избранное" key="item-2">

          </Tabs.TabPane>
          <Tabs.TabPane>Right Extra Action</Tabs.TabPane>
        </Tabs>
        
        
      </>
    );
}

export default Navigation;