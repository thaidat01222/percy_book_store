import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            name: '',
            age: '',
            username: '',
            password: '',
            email: '',
            redirect: false
        };
    }
    handleNameChange(e) {
        this.setState({ name: e.target.value })
    }
    handleAgeChange(e) {
        this.setState({ age: e.target.value })
    }
    handleUserChange(e) {
        this.setState({ username: e.target.value })
    }
    handleEmailChange(e) {
        this.setState({ email: e.target.value })
    }
    handlePasswordChange(e) {
        this.setState({ password: e.target.value })
    }
    handleSubmit(e) {
        e.preventDefault();
        const account = {
            name: this.state.name,
            age: this.state.age,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        console.log("account sign up: " + JSON.stringify(account));
        axios.post('http://localhost:4000/signup', account)
            .then(response => {
                if (response.status == 401) {
                    alert("Tai khoan da ton tai");
                    console.log("Tai khoan da ton tai");
                }
                if (response.status == 200) {
                    alert("Da dang ky thanh cong");
                    console.log(response);
                    this.setState({ redirect: true });
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        if (this.state.redirect) {
            console.log("chuyen trang");
            return (
                <Redirect to="/login" />
            )
        }
        return (
            <div className="sign-up">
                <div className="sign-up-form">
                    <h1 className="sign-up-text">ĐĂNG KÝ</h1>
                    <input type="name" id="name" onChange={this.handleNameChange} placeholder="Họ tên" required />
                    <input type="age" id="age" onChange={this.handleAgeChange} placeholder="Tuổi" required />
                    <input type="username" id="user" onChange={this.handleUserChange} placeholder="Tai khoan" required />
                    <input type="email" id="email" onChange={this.handleEmailChange} placeholder="Nhập email" required />
                    <input type="password" id="password" onChange={this.handlePasswordChange} placeholder="Mật khẩu" required />
                    <button type="submit" onClick={this.handleSubmit} className="button-sign-up">Đăng Ký</button>
                </div>
            </div>
        )
    }
}
export default Signup;