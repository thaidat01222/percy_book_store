import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, BrowserRouter as Router, Route } from 'react-router-dom';
export default class BookInfor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameOfBook: "Đắc nhân tâm",
            author: "Ai biết",
            publishing: "Ai biết too",
            price: "123$",
            language: "Tiếng Việt",
            synopsis: "Đây một mùa xuân trăm hoa hé tưng bừng. Đây thời niên thiếu hát ca vang lừng. Khăn quàng đỏ tươi em đeo em mến yêu. Quyết tâm luyện rèn cho mình tiến nhanh...  "

        };
    }
    render() {
        return (
            <div className="book-inf">
                <div className="poster-book">
                    <img src="" />
                </div>
                <div className="name-of-book">{this.state.nameOfBook}</div>
                <div className="" >
                    <div>Nhà xuất bản: {this.state.publishing}</div>
                    <div>Tác giả: {this.state.author}</div>
                    <div>{this.state.price} VNĐ</div>
                </div>

            </div>
        )
    }
}