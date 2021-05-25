import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, BrowserRouter as Router, Route } from 'react-router-dom';
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
                    <div className="sign-up">
                        <div className="sign-up-form">
                            <h1 className="sign-up-text">ĐĂNG KÝ</h1>
                            <input type="username" id="name" placeholder="Họ tên" required/>
                            <input type="date" id="age" value="2021-01-01"/>
                            <input type="username" id="user" placeholder="Địa chỉ email" required/>
                            <input type="password" id="password" placeholder="Mật khẩu" required/>
                            <input type="password" id="password" placeholder="Nhập lại mật khẩu" required/>
                            <button className="button-sign-up">Đăng Ký</button>
                        </div>
                    </div>
        )
    }
}
export default Login;