import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter, BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './Footer';
import Trending from './Trending';

export default class BookInfor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // nameOfBook: '',
            // author: '',
            // price:'',
            // synopsis:'',
            // languages:'',
            // image:''
            book: {}
        };
    }
    componentDidMount = async () => {
        let id = this.props.match.params.id;
        axios.get(`http://localhost:4000/book/${id}`)
            .then(res => {
                const bookreceive = res.data;
                this.setState({ book: bookreceive.booksending[0] })

            })
            .catch(error => console.log(error));
    }
    render() {
        return (
            <BrowserRouter>
                <div >
                    <p className="label-menu-book-infor"><center><b>Thông Tin Sách</b></center></p>
                    <div className="book-infor">
                        <div className="poster-book">
                            <img src={this.state.book.image} />
                            <button className="add-to-shoping-cart" onClick={this.handleShopingCart}>Thêm Vào Giỏ Hàng</button>
                        </div>
                        <div className="book-detail">
                            <h1>{this.state.book.nameofbook}</h1>
                            <h3>Nhà xuất bản: {this.state.book.publishing}</h3>
                            <h3>Tác giả: {this.state.book.author}</h3>
                            <h3>Ngôn ngữ: {this.state.book.languages}</h3>
                            <h2>{this.state.book.price}</h2>
                            <p> <strong>Tóm tắt <br /></strong> {this.state.book.synopsis}</p>
                        </div>
                    </div>
                    <Footer></Footer>

                </div>
            </BrowserRouter>

        )
    }
}