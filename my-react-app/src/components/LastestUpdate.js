import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Switch } from 'react-router-dom';


class LastestUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastestbook: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:4000/api/lastestupdate')
            .then(res => {
                const bookreceive = res.data;
                console.log(bookreceive);
                this.setState({ lastestbook: bookreceive.booksending })
                console.log("lastestbook")
            })
            .catch(error => console.log(error))
    }
    render() {
        return (
            <div className="lastestupdate">
                <p className="label-menu-book"><center><b>Sách Mới</b></center></p>
                <ul>
                    <div className="books">
                        {this.state.lastestbook.map(item => (
                            <Link to={`/book/${item.id}`}><div className="book">
                                <li key={item.id}>
                                    <img className="img-book" src={item.image} height="300px" width="300px"></img>
                                    <h3 className="name-of-book">{item.nameofbook}</h3>
                                </li>
                            </div>
                            </Link>
                        ))}
                    </div>
                </ul>
            </div>
        );
    }

}
export default LastestUpdate;