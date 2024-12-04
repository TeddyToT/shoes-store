import { Layout } from 'antd'
import UserOptionMenu from '../../Mini_components/User_option_menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faChevronRight, faCircleUser } from '@fortawesome/free-solid-svg-icons';


function ContentOderTracking() {
    const { Content } = Layout;

    return (
        <Content style={{
            padding: '0 24px',
            maxWidth: '1600px',
            margin: '0 auto',
            width: '100%'
        }}>
            <div className='content__container'>
                <div className="content__user__head" style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '12px'
                }}>
                    <div className='content__user__head-home'>
                        <FontAwesomeIcon icon={faHouse} style={{ fontSize: '26px', margin: '20px ' }} />
                        <a href='/' style={{ fontSize: '20px', fontWeight: '700' }}>Trang chủ</a>
                    </div>
                    <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: '20px', margin: '20px' }} />
                    <span style={{ fontSize: '20px', fontWeight: '700' }}>Theo dõi đơn hàng</span>
                </div>

                <div className="content__user__main" style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(350px, 450px) minmax(600px, 1000px)', // Giống layout account
                    gap: '40px',
                    padding: 'clamp(24px, 3vw, 32px)',
                    maxWidth: '1500px',
                    margin: '0 auto',
                    justifyContent: 'center',
                    alignItems: 'start'
                }}>
                    <div className="user__aside" style={{
                        backgroundColor: '#fff',
                        padding: 'clamp(24px, 3vw, 36px)',
                        borderRadius: '12px',
                        border: '1px solid #e0e0e0',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        width: '100%',
                        height: '100%'
                    }}>
                        <div className='user__avatar' style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '10px'
                        }}>
                            <FontAwesomeIcon icon={faCircleUser} style={{ fontSize: '80px', display: 'flex' }} />
                        </div>

                        <div className='user__account__opt'>
                            <UserOptionMenu />
                        </div>
                    </div>

                    <div className="oder__tracking" style={{
                        backgroundColor: '#fff',
                        padding: 'clamp(24px, 3vw, 36px)',
                        borderRadius: '12px',
                        border: '1px solid #e0e0e0',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        width: '100%'
                    }}>
                        <div className='oder__tracking__label' style={{
                            fontSize: '30px',
                            fontWeight: '700',
                            margin: '20px',
                            textAlign: 'center'
                        }}>
                            Theo dõi đơn hàng
                        </div>

                        <div className='oder__tracking__info' style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            fontSize: '18px',
                            fontWeight: '600',
                            border: '1px solid #e0e0e0',
                            margin: '40px',
                            borderRadius: '8px'
                        }}>
                            <div className='oder__main__info' style={{
                                margin: '0 50px 20px 50px',
                                padding: '0 30px'
                            }}>
                                <p style={{ margin: '20px 0 5px', display: 'flex', justifyContent: 'space-between' }}>
                                    <span>Mã đơn hàng:</span> <span>0923</span>
                                </p>
                                <p style={{ margin: '5px 0', display: 'flex', justifyContent: 'space-between' }}>
                                    <span>Hình thức thanh toán:</span> <span>Tiền mặt</span>
                                </p>
                                <p style={{ margin: '5px 0', display: 'flex', justifyContent: 'space-between' }}>
                                    <span>Tình trạng đơn hàng:</span> <span>Đang chờ xác nhận</span>
                                </p>
                            </div>

                            <div className='oder__info' style={{
                                backgroundColor: '#E5E7EB',
                                margin: '0 60px 20px',
                                padding: '0 30px 10px'
                            }}>
                                <h3 style={{ margin: '10px 0 5px' }}>Thông tin đặt hàng</h3>
                                <p style={{ margin: '5px 0', display: 'flex', justifyContent: 'space-between' }}>
                                    <span>Họ tên:</span> <span>0923</span>
                                </p>
                                <p style={{ margin: '5px 0', display: 'flex', justifyContent: 'space-between' }}>
                                    <span>Số điện thoại:</span> <span>0923</span>
                                </p>
                                <p style={{ margin: '5px 0', display: 'flex', justifyContent: 'space-between' }}>
                                    <span>Địa chỉ:</span> <span>0923</span>
                                </p>
                            </div>

                            <div className='cart__info' style={{
                                backgroundColor: '#E5E7EB',
                                margin: '0 60px 20px',
                                padding: '0 30px 10px'
                            }}>
                                <h3 style={{
                                    margin: '10px 0 5px',
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}>
                                    <span>Thông tin đơn hàng</span>
                                    <span style={{ color: '#1677ff' }}>100.000đ</span>
                                </h3>
                                <div className='cart__info__item' style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}>
                                    <img src="https://placehold.jp/80x72.png" alt="Rau xà lách" />
                                    <div className="item-info" style={{ flexGrow: '1', marginLeft: '10px' }}>
                                        <p style={{ margin: '0 0 4px 0', fontSize: '14px' }}>RAU XÀ LÁCH</p>
                                        <p className="item-quantity" style={{
                                            margin: '4px 0 0 0',
                                            fontWeight: '500',
                                            fontSize: '14px'
                                        }}>Số lượng: 6</p>
                                    </div>
                                    <p className="total-price" style={{ fontWeight: '500' }}>40.000đ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Content>
    );
}


export default ContentOderTracking;