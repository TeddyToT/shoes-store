import { Tabs } from 'antd';
import { Link } from 'react-router-dom';

const onChange = (key) => {
    console.log(key);
};

const items = [
    {
        key: '1',
        label: <Link to="/">Trang chủ</Link>,
    },
    {
        key: '2',
        label: <Link to="/san-pham">Sản phẩm</Link>,
    },
    // {
    //     key: '4',
    //     label: <Link to="/chinh-hang">Chính hãng</Link>,
    // },
    {
        key: '5',
        label: <Link to="/gioi-thieu">Giới thiệu</Link>,
    },


    {
        key: '6',
        label: <Link to="/lien-he">Liên hệ</Link>,
    },
];

const Navbar = () => (
    <Tabs
        tabBarStyle={{ margin: '0' }}
        justifycontent="center"
        defaultActiveKey="1"
        size="large"
        items={items}
        onChange={onChange}
    />
);

export default Navbar;
