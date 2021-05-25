import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
      <div>
        <p>Sách Đang Hot</p>
          {this.state.booktrending.map(item => (
            <li key={item.id}>
              <h1>{item.nameofbook}</h1>
              <h2>{item.name}</h2>
              <h3>{item.author}</h3>
            </li>
          ))}
      </div>
    );
  }
}
export default Trending;