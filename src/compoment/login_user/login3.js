//import React, { Component } from 'react';
import bg_gruop1 from "./img_alta/bg_gruop1.png";
import logo_alta from "./img_alta/logo_alta.png";
import "./img_alta/login_user3.css";
import { Link } from "react-router-dom";


    const login3 = () => {

        return (
                <div className='App'>
                    
                <div className='container'>
                    <div className='left-container3'>
                        <div className='left-login-form'>
                            <div className='logo-login'>
                                <img src={logo_alta} alt="logo_alta" width={170} height={136}/>
                            </div>
                            <div className='login-form3'>
                                <div className='login-username-title'>
                                    <label>Mật khẩu <span>*</span></label>
                                </div>
                                <div className='login-username-input'>
                                    <input className='input-username' placeholder='lequynhaivan01' ></input>
                                </div>
                                <div className='login-password-title' >
                                    <label>Nhập lại mật khẩu <span>*</span></label>
                                </div>
                                <div className='login-password-input'>
                                    <input className='input-password' placeholder='213152624' ></input><p className='eye-icon fas fa-eye-slash'></p>
                                </div>
                            
                                <div className='login-button'>
                                <button className="login-button-title"><Link to="/thongtin" >OK</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>  
                    <div className='right-container'>
                        <div className='right-content'>
                            <div className='right-image-background'>
                                <img src={bg_gruop1} alt="bg_gruop1" width={604} height={614.06}/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    
        }
export default login3;