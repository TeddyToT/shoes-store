import { Layout } from 'antd'
import CartInfoList from '../../Mini_components/Cart_info_list';

function ContentCart() {

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
                    <span style={{ fontSize: '20px', fontWeight: '700' }}>Giỏ hàng</span>
                </div>

                <div className="content__cart__main" style={{ padding: '20px' }}>
                    <div className="cart__info" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid black' }}>
                        <CartInfoList />
                    </div>

                </div>
            </div>
        </Content>
    );
}

export default ContentCart;