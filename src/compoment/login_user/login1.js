//import React, { Component } from 'react';
import bg_gruop from "./img_alta/bg_gruop.png";
import logo_alta from "./img_alta/logo_alta.png";
import "./img_alta/login_user1.css"
import { Link } from "react-router-dom";


    const login1 = () => {

        return (
                <div className='App'>
                    
                <div className='container'>
                    <div className='left-container3'>
                        <div className='left-login-form'>
                            <div className='logo-login'>
                                <img src={logo_alta} alt="logo_alta" width={170} height={136}/>
                            </div>
                            <div className='login-form2'>
                                <div className='login-username-title2'>
                                    <label>Tên đăng nhập <span>*</span></label>
                                </div>
                                <div className='login-username-input'>
                                    <input className='input-username' placeholder='anvan288' ></input>
                                </div>
                                <div className='login-password-title2' >
                                    <label>Mật khẩu <span>*</span></label>
                                </div>
                                <div className='login-password-input'>
                                    <input className='input-password' placeholder='213152624' ></input><p className='eye-icon fas fa-eye-slash'></p>
                                </div>
                                <div className="fall_login">
                                    <p className="fall_login_title">Sai mật khẩu hoặc tên đăng nhập</p>
                                </div>
                                <div className='login-forgot-password'>
                                    <p className='forgot-password-title'><Link to="/Login2">Quên mật khẩu ?</Link> </p>
                                </div>
                                <div className='login-button'>
                                    <button className='login-button-signin1'>Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='right-container'>
                        <div className='right-content'>
                            <div className='right-image-background'>
                                <img src={bg_gruop} alt="bg_gruop" width={604} height={614.06}/>
                            </div>
                            <div className='right-title-background'>
                                <p className='right-top-title'>Hệ thống <br/><b className='right-bottom-title'>QUẢN LÝ XẾP HÀNG</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    
        }
export default login1;
