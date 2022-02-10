//import React, { Component } from 'react';
import bg_gruop1 from "./img_alta/bg_gruop1.png";
import logo_alta from "./img_alta/logo_alta.png";
import "./img_alta/login_user2.css"
import { Link } from "react-router-dom";


    const login2 = () => {

        return (
                <div className='App'>
                    
                <div className='container'>
                    <div className='left-container2'>
                        <div className='left-login-form'>
                            <div className='logo-login'>    
                                <img src={logo_alta} alt="logo_alta" width={170} height={136}/>
                            </div>
                            <div className='login-form2'>
                                <h2>Đặt lại mật khẩu của bạn</h2>
                                <p>Vui lòng nhập email của bạn để đặt lại mật khẩu mới *</p>
                                <div className="input-email">
                                    <input className="input-title" placeholder=" "></input>
                                </div>
                                <div className='login-button'>
                                <button className='login-button-signin0'><Link to="login2" >Hủy</Link></button>
                                </div>
                                <div className="login-button1">
                                <button className="login-button-signin1"><Link to="/login3" >Tiếp tục</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='right-container'>
                        <div className='right-content'>
                            <div className='right-image-background'>
                                <img src={bg_gruop1} alt="bg_gruop" width={604} height={614.06}/>
                            </div>
                         
                        </div>
                    </div>
                </div>
            </div>
        );
    
        }
export default login2;
