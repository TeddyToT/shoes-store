import { Layout } from 'antd'
import { Input } from 'antd';
import Navbar from '../../Mini_components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBagShopping } from '@fortawesome/free-solid-svg-icons';
function Header() {
    const { Header } = Layout;
    const { Search } = Input;

    const onSearch = (value, _e, info) => {
        console.log(info?.source, value);
    }

    return (
        <Header style={{
            position: 'sticky', top: 0,
            zIndex: 1, backgroundColor: 'white', height: 'auto', lineHeight: '0', borderBottom: '2px solid #dbdbdb'
        }} >
            <div className='header__container' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className='header__logo' style={{ fontSize: '60px', fontWeight: 'bold' }}>
                {/* <FontAwesomeIcon icon={faCanadianMapleLeaf} /> */}
                    Feduu
                </div>

                <div className='search__nav' style={{ width: '44%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <div className='header__search' style={{ marginTop: '10px', width: '100%' }}>
                        <Search size='large' placeholder="Tìm kiếm sản phẩm" onSearch={onSearch} enterButton />
                    </div>

                    <div className='header__nav'>
                        <Navbar />
                    </div>
                </div>

                <div className='header__control' style={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
                    <div className='header__account'>
                   
                        <FontAwesomeIcon icon={faUser} style={{ fontSize: '30px', padding: '0 8px' }}/>
                        <div className='header__account__text' style={{
                            display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
                        }}>
                            <h5 style={{ margin: 0, paddingBottom: '20px' }}>Tài khoản</h5>
                            <a href='/account' style={{ display: 'block' }}>Username</a>
                        </div>
                    </div>
                    
                    <div className='header__cart'>
                        <i className="fa-sharp fa-solid fa-bag-shopping" style={{ fontSize: '30px', padding: '0 8px' }}></i>
                        <FontAwesomeIcon icon={faBagShopping} style={{ fontSize: '30px', padding: '0 8px' }}/>
                        <div className='header__cart__text' style={{
                            display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
                        }}>
                            <h5 style={{ margin: 0, paddingBottom: '20px' }}>Giỏ hàng</h5>
                            <a href='/'>Số sản phẩm</a>
                        </div>
                    </div>
                </div>
            </div >
        </Header >
    );
}

export default Header;