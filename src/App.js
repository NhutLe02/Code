//import logo from './logo.svg';
import './App.css';
import './compoment/login_user/img_alta/dangnhap.css'
//import { dangnhap} from './compoment/login_user/dangnhap';
//import{Info} from './compoment/login_user/Info';
import bg_gruop from "./compoment/login_user/img_alta/bg_gruop.png";
import logo_alta from "./compoment/login_user/img_alta/logo_alta.png";
import "./compoment/login_user/img_alta/login_user.css"
import thongtin from './compoment/login_user/Info';


function App() {
  return (
    <div className='App'>
        <dangnhap/>
      <div className='container'>
                    <div className='left-container'>
                        <div className='left-login-form'>
                            <div className='logo-login'>
                                <img src={logo_alta} alt="logo_alta" width={170} height={136}/>
                            </div>
                            <div className='login-form'>
                                <div className='login-username-title'>
                                    <label>Tên đăng nhập <span>*</span></label>
                                </div>
                                <div className='login-username-input'>
                                    <input className='input-username' placeholder='lequynhaivan01' ></input>
                                </div>
                                <div className='login-password-title' >
                                    <label>Mật khẩu <span>*</span></label>
                                </div>
                                <div className='login-password-input'>
                                    <input className='input-password' placeholder='213152624' ></input><p className='eye-icon fas fa-eye-slash'></p>
                                </div>
                                <div className='login-forgot-password'>
                                    <p className='forgot-password-title'>Quên mật khẩu?</p>
                                </div>
                                <div className='login-button'>
                                    <button className='login-button-signin'>Login<link className='Info'></link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='right-container'>
                        <div className='right-content'>
                            <div className='right-image-background'>
                                <img src={bg_gruop} alt="bg_gruop" width={605} height={614.06}/>
                            </div>
                            <div className='right-title-background'>
                                <p className='right-top-title'>Hệ thống <br/><b className='right-bottom-title'>QUẢN LÝ XẾP HÀNG</b></p>
                            </div>
                        </div>
                    </div>
                </div>
                <thongtin/>
    </div>
  );
}

export default App;
