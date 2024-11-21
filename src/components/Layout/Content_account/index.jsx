import { Layout } from 'antd'
import UserInfoForm from '../../Mini_components/User_info_form';
import UserOptionMenu from '../../Mini_components/User_option_menu';

function ContentAccount() {

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

                    <div className="user__info" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid black' }}>
                        <div className='user__info__label' style={{ fontSize: '30px', fontWeight: '700', margin: '20px', textAlign: 'center' }}>
                            Thông tin tài khoản
                        </div>

                        <div className='user__info__form'>
                            <UserInfoForm />
                        </div>
                    </div>
                </div>
            </div>
        </Content>
    );
}

export default ContentAccount;