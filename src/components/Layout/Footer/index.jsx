
import { Button, Input, Layout } from 'antd'


function Footer() {

    const { Footer } = Layout;
    return (
        <Footer style={{ backgroundColor: 'white', borderTop: '2px solid #dbdbdb' }}>
            <div className='footer__container' style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 2fr', gap: '20px', padding: '20px' }}>
                <div className='footer__app__info'>
                    <div className='footer__logo'>
                        <i className="fa-brands fa-canadian-maple-leaf" style={{ fontSize: '60px', color: '#1677ff' }}></i>
                        <span style={{ fontSize: '60px', fontWeight: 'bold' }}>Feduu</span>
                        <ul style={{ listStyle: 'none', fontSize: '16px', padding: '0' }}>
                            <li>
                                <i className="fa-solid fa-location-dot" style={{ margin: '0px 8px 8px 0', fontSize: '20px' }}></i>
                                Trường Đại học Công Nghệ Thông Tin
                            </li>

                            <li>
                                <i class="fa-solid fa-envelope" style={{ margin: '0px 8px 8px 0', fontSize: '20px' }}></i>
                                2152xxxx@gmail.com
                            </li>

                            <li>
                                <i class="fa-solid fa-phone" style={{ margin: '0px 8px 8px 0', fontSize: '20px' }}></i>
                                0123456789
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='footer__product'>
                    <h2>Sản phẩm</h2>
                    <ul style={{ listStyle: 'none', fontSize: '16px', padding: '0' }}>
                        <li className="footer__product__list__item" style={{ marginBottom: '6px' }}><a href='/'>Giày nam</a></li>
                        <li className="footer__product__list__item" style={{ marginBottom: '6px' }}><a href='/'>Giày nữ</a></li>
                        <li className="footer__product__list__item" style={{ marginBottom: '6px' }}><a href='/'>Giày thể thao</a></li>
                        <li className="footer__product__list__item" style={{ marginBottom: '6px' }}><a href='/'>Giày chạy bộ</a></li>
                        <li className="footer__product__list__item" style={{ marginBottom: '6px' }}><a href='/'>Hàng mới về</a></li>
                    </ul>
                </div>

                <div className='footer__category'>
                    <h2>Danh mục</h2>
                    <ul style={{ listStyle: 'none', fontSize: '16px', padding: '0' }}>
                        <li className="footer__category__list__item" style={{ marginBottom: '6px' }}><a href='/'>Trang chủ</a></li>
                        <li className="footer__category__list__item" style={{ marginBottom: '6px' }}><a href='/'>Giới thiệu</a></li>
                        <li className="footer__category__list__item" style={{ marginBottom: '6px' }}><a href='/'>Cửa hàng</a></li>
                        <li className="footer__category__list__item" style={{ marginBottom: '6px' }}><a href='/'>Chính hãng</a></li>
                        <li className="footer__category__list__item" style={{ marginBottom: '6px' }}><a href='/'>Liên hệ</a></li>
                    </ul>
                </div>

                <div className='footer__register'>
                    <h2>Đăng ký</h2>
                    <p style={{ fontSize: '16px' }}>Đăng ký ngay để nhận được thông tin mới nhất từ chúng tôi</p>
                    <Input style={{ width: '320px', borderRadius: '8px', marginRight: '8px' }} placeholder='Email...' />
                    <Button type="primary" htmlType="submit" size='medium'>Đăng ký</Button>
                </div>
            </div>
        </Footer >
    );
}

export default Footer;