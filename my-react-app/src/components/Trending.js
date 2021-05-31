import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';

class Trending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booktrending: []
    }
  };
  componentDidMount = async () => {
    axios.get('http://localhost:4000/api/trending')
      .then(res => {
        const bookreceive = res.data;
        this.setState({ booktrending: bookreceive.booksending });
        console.log("book", this.state)
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="trending-book">
        <p className="label-menu-book"><center><b>Sách Đang Hot</b></center></p>
        <div className="books">
        {this.state.booktrending.map(item => (
          <Link to={`/book/${item.id}`}><div className="book">
            <li key={item.id}>
              <img className="img-book" src={item.image}></img>
              <h3 className="name-of-book">{item.nameofbook}</h3>
            </li>
          </div>
          </Link>
        ))}
        </div>
      </div>
    );
  }
}
export default Trending;