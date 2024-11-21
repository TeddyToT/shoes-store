import { Menu } from 'antd';
import { UserOutlined, ShoppingCartOutlined, HistoryOutlined, LogoutOutlined } from '@ant-design/icons';


function UserOptionMenu() {
    return (
        <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            style={{
                width: '100%',
                fontSize: '20px',
                fontWeight: '700',
                textAlign: 'center',
                borderRadius: 16,
                padding: '0 50px',
                overflow: 'hidden',
            }}
        >
            <Menu.Item key="1" icon={<UserOutlined style={{ fontSize: '24px' }} />} style={{ margin: '12px 0' }} >
                Thông tin tài khoản
            </Menu.Item>
            <Menu.Item key="2" icon={<ShoppingCartOutlined style={{ fontSize: '24px' }} />} style={{ margin: '12px 0' }}>
                Theo dõi đơn hàng
            </Menu.Item>
            <Menu.Item key="3" icon={<HistoryOutlined style={{ fontSize: '24px' }} />} style={{ margin: '12px 0' }}>
                Lịch sử đơn hàng
            </Menu.Item>
            <Menu.Item key="4" icon={<LogoutOutlined style={{ fontSize: '24px' }} />} style={{ margin: '12px 0' }}>
                Đăng xuất
            </Menu.Item>
        </Menu>
    );
}

export default UserOptionMenu;