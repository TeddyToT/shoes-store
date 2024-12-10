
import { Button, Input, Layout } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMeteor, faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function Footer() {
    const { Footer } = Layout;
    return (
        <Footer style={{
            backgroundColor: 'white',
            borderTop: '2px solid #dbdbdb',
            padding: 'clamp(20px, 3vw, 40px) clamp(16px, 2vw, 24px)' // Responsive padding
        }}>
            <div className='footer__container' style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', // Responsive grid
                gap: 'clamp(20px, 3vw, 40px)',
                maxWidth: '1400px',
                margin: '0 auto'
            }}>
                {/* Logo và thông tin công ty */}
                <div className='footer__app__info'>
                    <div className='footer__logo' style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '16px'
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            marginBottom: '16px'
                        }}>
                            <FontAwesomeIcon
                                icon={faMeteor}
                                style={{
                                    fontSize: 'clamp(40px, 5vw, 60px)',
                                    color: '#1677ff'
                                }}
                            />
                            <span style={{
                                fontSize: 'clamp(40px, 5vw, 60px)',
                                fontWeight: 'bold'
                            }}>Feduu</span>
                        </div>
                        <ul style={{
                            listStyle: 'none',
                            fontSize: 'clamp(14px, 1.6vw, 16px)',
                            padding: '0',
                            margin: '0'
                        }}>
                            <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
                                <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: '8px', fontSize: '20px' }} />
                                Trường Đại học Công Nghệ Thông Tin
                            </li>
                            <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
                                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '8px', fontSize: '20px' }} />
                                2152xxxx@gmail.com
                            </li>
                            <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
                                <FontAwesomeIcon icon={faPhone} style={{ marginRight: '8px', fontSize: '20px' }} />
                                0123456789
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Sản phẩm */}
                <div className='footer__product'>
                    <p style={{
                        fontSize: 'clamp(18px, 2vw, 20px)',
                        fontWeight: '500',
                        marginBottom: '16px'
                    }}>Sản phẩm</p>
                    <ul style={{
                        listStyle: 'none',
                        fontSize: 'clamp(14px, 1.6vw, 16px)',
                        padding: '0',
                        margin: '0'
                    }}>
                        <li className="footer__product__list__item" style={{ marginBottom: '8px' }}>
                            <a href='/'
                                style={{
                                    color: '#666',
                                    transition: 'color 0.2s ease' // Thêm transition cho smooth hover
                                }}
                                onMouseEnter={(e) => e.target.style.color = 'rgb(22, 119, 255)'}
                                onMouseLeave={(e) => e.target.style.color = '#666'}
                            >Giày nam</a>
                        </li>
                        <li className="footer__product__list__item" style={{ marginBottom: '8px' }}>
                            <a href='/'
                                style={{
                                    color: '#666',
                                    transition: 'color 0.2s ease' // Thêm transition cho smooth hover
                                }}
                                onMouseEnter={(e) => e.target.style.color = 'rgb(22, 119, 255)'}
                                onMouseLeave={(e) => e.target.style.color = '#666'}
                            >Giày nữ</a>
                        </li>
                        <li className="footer__product__list__item" style={{ marginBottom: '8px' }}>
                            <a href='/'
                                style={{
                                    color: '#666',
                                    transition: 'color 0.2s ease' // Thêm transition cho smooth hover
                                }}
                                onMouseEnter={(e) => e.target.style.color = 'rgb(22, 119, 255)'}
                                onMouseLeave={(e) => e.target.style.color = '#666'}
                            >Giày thể thao</a>
                        </li>
                        <li className="footer__product__list__item" style={{ marginBottom: '8px' }}>
                            <a href='/'
                                style={{
                                    color: '#666',
                                    transition: 'color 0.2s ease' // Thêm transition cho smooth hover
                                }}
                                onMouseEnter={(e) => e.target.style.color = 'rgb(22, 119, 255)'}
                                onMouseLeave={(e) => e.target.style.color = '#666'}
                            >Giày chạy bộ</a>
                        </li>
                        <li className="footer__product__list__item" style={{ marginBottom: '8px' }}>
                            <a href='/'
                                style={{
                                    color: '#666',
                                    transition: 'color 0.2s ease' // Thêm transition cho smooth hover
                                }}
                                onMouseEnter={(e) => e.target.style.color = 'rgb(22, 119, 255)'}
                                onMouseLeave={(e) => e.target.style.color = '#666'}
                            >Hàng mới về</a>
                        </li>
                    </ul>
                </div>

                {/* Danh mục */}
                <div className='footer__category'>
                    <p style={{
                        fontSize: 'clamp(18px, 2vw, 20px)',
                        fontWeight: '500',
                        marginBottom: '16px'
                    }}>Danh mục</p>
                    <ul style={{
                        listStyle: 'none',
                        fontSize: 'clamp(14px, 1.6vw, 16px)',
                        padding: '0',
                        margin: '0'
                    }}>
                        <li className="footer__product__list__item" style={{ marginBottom: '8px' }}>
                            <a href='/'
                                style={{
                                    color: '#666',
                                    transition: 'color 0.2s ease' // Thêm transition cho smooth hover
                                }}
                                onMouseEnter={(e) => e.target.style.color = 'rgb(22, 119, 255)'}
                                onMouseLeave={(e) => e.target.style.color = '#666'}
                            >Trang chủ</a>
                        </li>
                        <li className="footer__product__list__item" style={{ marginBottom: '8px' }}>
                            <Link to="/gioi-thieu"
                                style={{
                                    color: '#666',
                                    transition: 'color 0.2s ease'
                                }}
                                // onMouseEnter={(e) => e.target.style.color = 'rgb(22, 119, 255)'}
                                // onMouseLeave={(e) => e.target.style.color = '#666'}
                            >Giới thiệu</Link>
                        </li>
                        <li className="footer__product__list__item" style={{ marginBottom: '8px' }}>
                            <a href='/'
                                style={{
                                    color: '#666',
                                    transition: 'color 0.2s ease' // Thêm transition cho smooth hover
                                }}
                                onMouseEnter={(e) => e.target.style.color = 'rgb(22, 119, 255)'}
                                onMouseLeave={(e) => e.target.style.color = '#666'}
                            >Cửa hàng</a>
                        </li>
                        <li className="footer__product__list__item" style={{ marginBottom: '8px' }}>
                            <a href='/'
                                style={{
                                    color: '#666',
                                    transition: 'color 0.2s ease' // Thêm transition cho smooth hover
                                }}
                                onMouseEnter={(e) => e.target.style.color = 'rgb(22, 119, 255)'}
                                onMouseLeave={(e) => e.target.style.color = '#666'}
                            >Chính hãng</a>
                        </li>
                        <li className="footer__product__list__item" style={{ marginBottom: '8px' }}>
                            <a href='/'
                                style={{
                                    color: '#666',
                                    transition: 'color 0.2s ease' // Thêm transition cho smooth hover
                                }}
                                onMouseEnter={(e) => e.target.style.color = 'rgb(22, 119, 255)'}
                                onMouseLeave={(e) => e.target.style.color = '#666'}
                            >Liên hệ</a>
                        </li>
                    </ul>
                </div>

                {/* Đăng ký */}
                <div className='footer__register'>
                    <p style={{
                        fontSize: 'clamp(18px, 2vw, 20px)',
                        fontWeight: '500',
                        marginBottom: '16px'
                    }}>Đăng ký</p>
                    <p style={{
                        fontSize: 'clamp(14px, 1.6vw, 16px)',
                        marginBottom: '16px',
                        color: '#666'
                    }}>
                        Đăng ký ngay để nhận được thông tin mới nhất từ chúng tôi
                    </p>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '8px'
                    }}>
                        <Input
                            style={{
                                flex: '1',
                                minWidth: '200px',
                                borderRadius: '8px',
                                height: '40px'
                            }}
                            placeholder='Email...'
                        />
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={{
                                height: '40px',
                                borderRadius: '8px',
                                padding: '0 24px'
                            }}
                        >
                            Đăng ký
                        </Button>
                    </div>
                </div>
            </div>
        </Footer>
    );
}

export default Footer;