import { Layout } from 'antd'
import UserOptionMenu from '../../Mini_components/User_option_menu';


function ContentOderTracking() {

    const { Content } = Layout;

    return (
        <Content>
            <div className='content__container'>
                <div className="content__user__head"
                    style={{ display: 'flex', alignItems: 'center', marginTop: '12px' }}>
                    <div className='content__user__head-home'>
                        <i className="fa-solid fa-house"
                            style={{ fontSize: '30px', margin: '20px' }}></i>
                        <a href='/' style={{ fontSize: '20px', fontWeight: '700' }}>Trang chủ</a>
                    </div>
                    <i className="fa-solid fa-chevron-right"
                        style={{ fontSize: '30px', margin: '20px' }}></i>
                    <span style={{ fontSize: '20px', fontWeight: '700' }}>Thông tin tài khoản</span>
                </div>

                <div className="content__user__main"
                    style={{ display: 'grid', gridTemplateColumns: '2.5fr 5fr', gap: '20px', padding: '20px' }}>
                    <div className="user__aside"

                        style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '8px', border: '1px solid black' }}>
                        <div className='user__avatar'
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '40px 0' }}>
                            <i className="fa-solid fa-circle-user"
                                style={{ fontSize: '80px', display: 'flex' }}></i>
                        </div>

                        <div className='user__account__opt'>
                            <UserOptionMenu />
                        </div>
                    </div>

                    <div className="oder__tracking" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid black' }}>
                        <div className='oder__tracking__label' style={{ fontSize: '30px', fontWeight: '700', margin: '20px', textAlign: 'center' }}>
                            Theo dõi đơn hàng
                        </div>

                        <div className='oder__tracking__info' style={{
                            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                            fontSize: '18px', fontWeight: '600', border: '1px solid black', margin: '40px',
                            borderRadius: '8px'
                        }}>
                            <div className='oder__main__info' style={{ margin: '0 50px 20px 50px', padding: '0 30px' }}>
                                <p style={{ margin: '20px 0 5px', display: 'flex', justifyContent: 'space-between' }} >
                                    <span>Mã đơn hàng:</span> <span>0923</span></p>
                                <p style={{ margin: '5px 0', display: 'flex', justifyContent: 'space-between' }}>
                                    <span>Hình thức thanh toán:</span> <span>Tiền mặt</span></p>
                                <p style={{ margin: '5px 0', display: 'flex', justifyContent: 'space-between' }}>
                                    <span>Tình trạng đơn hàng:</span> <span>Đang chờ xác nhận</span></p>
                            </div>

                            <div className='oder__info' style={{ backgroundColor: '#E5E7EB', margin: '0 60px 20px', padding: '0 30px 10px' }}>
                                <h3 style={{ margin: '10px 0 5px' }}>Thông tin đặt hàng</h3>
                                <p style={{ margin: '5px 0', display: 'flex', justifyContent: 'space-between' }}>
                                    <span>Họ tên:</span> <span>0923</span></p>
                                <p style={{ margin: '5px 0', display: 'flex', justifyContent: 'space-between' }}>
                                    <span>Số điện thoại:</span> <span>0923</span></p>
                                <p style={{ margin: '5px 0', display: 'flex', justifyContent: 'space-between' }}>
                                    <span>Địa chỉ:</span> <span>0923</span></p>
                            </div>

                            <div className='cart__info' style={{ backgroundColor: '#E5E7EB', margin: '0 60px 20px', padding: '0 30px 10px' }}>
                                <h3 style={{ margin: '10px 0 5px', display: 'flex', justifyContent: 'space-between' }}>
                                    <span>Thông tin giỏ hàng</span> <span style={{ color: '#1677ff' }}>100.000đ</span></h3>
                                <div className='cart__info__item' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
                                    <img src="https://placehold.jp/80x72.png" alt="Rau xà lách" />
                                    <div class="item-info" style={{ flexGrow: '1', marginLeft: '10px' }} >
                                        <p style={{ margin: '0 0 4px 0', fontSize: '14px' }}>RAU XÀ LÁCH</p>
                                        <p class="item-quantity" style={{ margin: '4px 0 0 0', fontWeight: '500', fontSize: '14px' }}>Số lượng: 6</p>
                                    </div>
                                    <p class="total-price" style={{ fontWeight: '500' }}>40.000đ</p>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Content >
    );
}


export default ContentOderTracking;