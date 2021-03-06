import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, BrowserRouter } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <span className="header">
                <Link to="/"><img id="logo" src="logo.png" /></Link>
                <input type="text" id="search" placeholder="Bạn muốn tìm sách gì ...."></input>
                <div className="ico-header">
                    <img id="search-icon" src="search-icon.png" />
                    <img id="nortify" src="notification.png" />
                    <img id="shoping-cart" src="shopping-cart.png" />
                </div>
                <Link to="/login"><img id="login" src="login.png" /></Link>
            </span>
        )
    }
}
export default Header;