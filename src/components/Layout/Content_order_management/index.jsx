import { Layout, Input } from 'antd'
import UserOptionMenu from '../../Mini_components/User_option_menu';
import OdermanagementTable from '../../Mini_components/Oder_management_table';


function ContentOderManagement() {

    const { Content } = Layout;
    const { Search } = Input;

    const onSearch = (value, _e, info) => {
        console.log(info?.source, value);
    }

    return (
        <Content>
            <div className='content__container'>
                <div className="content__user__head" style={{ display: 'flex', alignItems: 'center', marginTop: '12px' }}>
                    <div className='content__user__head-home'>
                        <i className="fa-solid fa-house" style={{ fontSize: '30px', margin: '20px' }}></i>
                        <a href='/' style={{ fontSize: '20px', fontWeight: '700' }}>Trang chủ</a>
                    </div>
                    <i className="fa-solid fa-chevron-right" style={{ fontSize: '30px', margin: '20px' }}></i>
                    <span style={{ fontSize: '20px', fontWeight: '700' }}>Thông tin tài khoản</span>
                </div>

                <div className="content__user__main" style={{ display: 'grid', gridTemplateColumns: '2.5fr 5fr', gap: '20px', padding: '20px' }}>
                    <div className="user__aside" style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '8px', border: '1px solid black' }}>
                        <div className='user__avatar' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '40px 0' }}>
                            <i className="fa-solid fa-circle-user" style={{ fontSize: '80px', display: 'flex' }}></i>
                        </div>

                        <div className='user__account__opt'>
                            <UserOptionMenu />
                        </div>
                    </div>

                    <div className="oder__management" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid black' }}>
                        <div className='oder__management__label' style={{ fontSize: '30px', fontWeight: '700', margin: '20px', textAlign: 'center' }}>
                            Lịch sử đơn hàng
                            <Search size='large' placeholder="Nhập từ khóa tìm kiếm..." style={{ width: '900px', margin: '30px 0 0 0' }} onSearch={onSearch} enterButton />
                        </div>

                        <div className='oder__management__info' style={{
                            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                            fontSize: '18px', fontWeight: '600',
                            borderRadius: '8px'
                        }}>
                            {/* <div className='oder__management__info__heading' style={{ display: 'flex', justifyContent: 'space-between', margin: '20px 40px', paddingBottom: '20px', borderBottom: '2px solid black', fontWeight: 'bold' }}>
                                <span>Mã đơn hàng</span>
                                <span>Ngày đặt hàng</span>
                                <span>Tổng tiền</span>
                                <span>Trạng thái</span>
                            </div> */}

                            <div className='oder__management__history__table' style={{ backgroundColor: 'white', margin: '0 20px 20px', padding: '0' }}>
                                <OdermanagementTable />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Content >
    );
}


export default ContentOderManagement;