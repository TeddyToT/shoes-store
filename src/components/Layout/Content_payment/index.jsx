import { Layout } from 'antd'
import PaymentInfoForm from '../../Mini_components/Payment_info_form';


function ContentPayment() {

    const { Content } = Layout;

    return (
        <Content>
            <div className='content__container'>
                <div className="content__user__head" style={{ display: 'flex', alignItems: 'center', marginTop: '12px' }}>
                    <div className='content__user__head-home'>
                        <i className="fa-solid fa-house" style={{ fontSize: '30px', margin: '20px' }}></i>
                        <a href='/' style={{ fontSize: '20px', fontWeight: '700' }}>Trang chủ</a>
                    </div>
                    <i className="fa-solid fa-chevron-right" style={{ fontSize: '30px', margin: '20px' }}></i>
                    <span style={{ fontSize: '20px', fontWeight: '700' }}>Thanh toán</span>
                </div>

                <div className='content_payment_main' style={{ padding: '20px' }} >
                    <div className="user__info" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid black' }}>
                        <div className='user__info__label' style={{ fontSize: '30px', fontWeight: '700', margin: '20px', textAlign: 'center' }}>
                            Thông tin tài khoản
                        </div>

                        <div className='user__info__form'>
                            <PaymentInfoForm />
                        </div>
                    </div>
                </div>
            </div>
        </Content>
    );
}

export default ContentPayment;