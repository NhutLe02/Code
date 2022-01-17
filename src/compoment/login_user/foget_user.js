import React, { Component } from 'react';
import './img_user/foget_user_style.css';
class foget_user extends Component {
    render() {
        return (
            <div className='container'>
                <div className='left-container'>
                    <div className='top-content'>
                        <div className='logo_alta'>
                            <img src={require('./img_alta/logo_alta.png')} />
                        </div>
                    </div>
                    <div className='middle-content'>
                        <div className='forgot-pw'>
                            <div className='forgot-title'>
                                <p>Đặt lại mật khẩu</p>
                            </div>
                            <div className='forgot-description'>
                                <p>Vui lòng nhập email để đặt lại mật khẩu của bạn *</p>
                            </div>
                            <div className='forgot-input'>
                                <input />
                            </div>
                            <div className='forgot-actions'>
                                <div>
                                    <button>Hủy</button>
                                </div>
                                <div>
                                    <button>Tiếp tục</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right-container'>
                    <img className='img-bg_gruop1' src={require('./img_alta/bg_gruop1.png')} />
                </div>
            </div>
        );
    }
}

export default foget_user;