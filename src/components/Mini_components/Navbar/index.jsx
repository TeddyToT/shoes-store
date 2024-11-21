
import { Tabs } from 'antd';

const onChange = (key) => {
    console.log(key);
};
const items = [
    {
        key: '1',
        label: 'Trang chủ',
    },
    {
        key: '2',
        label: 'Giới thiệu',
    },
    {
        key: '3',
        label: 'Cửa hàng',
    },
    {
        key: '4',
        label: 'Chính hãng',
    },
    {
        key: '5',
        label: 'Blog',
    },
    {
        key: '6',
        label: 'Liên hệ',
    }
];
const Navbar = () => <Tabs tabBarStyle={{ margin: '0' }} defaultActiveKey="1" size='large' items={items} onChange={onChange} />;
export default Navbar;