import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, BrowserRouter as Router, Route,Link } from 'react-router-dom';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Username: '',
            Password: ''
        };
    }
    render() {
        return (
                    <div>
                        <div className="login-form">
                            <h1>ĐĂNG NHẬP</h1>
                            <input type="username" id="user-input" placeholder="Tên người dùng hoặc địa chỉ email" required></input>
                            <input type="password" id="password-input" placeholder="Mật khẩu" required></input>
                            <button>Đăng Nhập</button>
                        </div>
                        <div className="sign-up">
                            <Link to="/signup">Đăng Ký Nè</Link>
                        </div>
                    </div>
            

        )


    }
}
export default Login;