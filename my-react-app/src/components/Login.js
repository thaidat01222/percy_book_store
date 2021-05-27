import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios'
class Login extends Component {
    constructor(props) {
        super(props);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            user: '',
            password: '',
            redirect: false
        };
    }
    handleUserChange(e) {
        this.setState({ user: e.target.value })
    }
    handlePasswordChange(e) {
        this.setState({ password: e.target.value })
    }
    handleSubmit(e) {
        e.preventDefault();
        const account = {
            user: this.state.user,
            password: this.state.password
        }
        console.log("data sent: " + JSON.stringify(account));
        axios.post('http://localhost:4000/login', account)
            .then(response => {
                if (response.status == 200) {
                    console.log("da login");
                    this.setState({ redirect: true });
                }
                console.log(response);
                if (response.status == 400) {
                    alert("Sai Thong Tin Tai Khoan");
                    console.log("sai thong tin");
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        if (this.state.redirect) {
            console.log("chuyen trang");
            alert("Welcome Back!")
            return (
                <Redirect to="/" />
            )
        }
        return (
            <div className="login">
                <div className="login-form">
                    <h1 className="login-text">ĐĂNG NHẬP</h1>
                    <input type="username" onChange={this.handleUserChange} id="user-input" placeholder="Tên người dùng hoặc địa chỉ email" required></input>
                    <input type="password" onChange={this.handlePasswordChange} id="password-input" placeholder="Mật khẩu" required></input>
                    <button type="submit" className="button-login" onClick={this.handleSubmit} >Đăng Nhập</button>
                </div>
                <div className="sign-up-in-here">
                    <Link to="/signup" className="sign-up-link">Đăng Ký</Link>
                </div>
            </div>


        )


    }
}
export default Login;