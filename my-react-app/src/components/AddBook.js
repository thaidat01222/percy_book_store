import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, BrowserRouter as Router, Route } from 'react-router-dom';
export default class AddBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    uploadImgae = () => {

    }
    render() {
        return (
            <div className="add-book-form">
                <h1 className="add-book-text">Thêm sách</h1>
                <div className="add-form-input">
                    <label className="add-input-tilte">Tên sách
                        <input type="text" className="add-input" id="name-of-book" required />
                    </label>
                    <label className="add-input-tilte">Tác giả
                        <input type="text" className="add-input" id="author" required />
                    </label>
                    <label className="add-input-tilte">Nhà xuất bản
                        <input type="text" className="add-input" id="publishing" required />
                    </label>
                    <label className="add-input-tilte">Giá
                        <input type="number" className="add-input" id="price" placeholder="VNĐ" required />
                    </label>
                    <label className="add-input-tilte">Ngôn ngữ
                        <input type="text" className="add-input" id="languages" required />
                    </label>
                    <label className="add-input-tilte synopsis"> <p className="synopsis-title">Tóm tắt</p>
                        <input type="text" className="add-input" id="synopsis" required />
                    </label>
                    <label className="add-input-tilte">Ảnh bìa
                        <input type="image" className="add-input" id="image" onClick={this.uploadImgae} required />
                    </label>
                    <label className="add-input-tilte">Ngày cập nhật
                        <input type="date" className="add-input" id="date-update" required />
                    </label>
                </div>
                <div className="add-book-button">
                    <button className="button-add">Thêm mới</button>
                    <button className="button-cancel">Hủy</button>
                </div>
            </div>
        )
    }
}