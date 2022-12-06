import './videoSearch.sass'
import { SearchOutlined } from '@ant-design/icons';
import { Input,Typography,Button, Space } from 'antd';
const { Title } = Typography;

const VideoSearch = ()=>{
    return(
        <div className="video_search">
            <Title level={2}>
                Поиск видео
            </Title>
            <div className='video_search-wrapper'>
                <Input placeholder="Поиск видео" className='video_search-input' />
                <Space wrap>
                    <Button type="primary" icon={<SearchOutlined />}>
                        Search
                    </Button>
                </Space>
            </div>
        </div>
    )
}

export default VideoSearch;