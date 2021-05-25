import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


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
                this.setState({ lastestbook: bookreceive.booksending })
                console.log("lastestbook")
            })
            .catch(error => console.log(error))
    }
    render() {
        return (
            <div className="lastestupdate">
                <p>Sách Mới</p>
                <ul>
                    {this.state.lastestbook.map(item => (
                        <li key={item.id}>
                            <h2>{item.nameofbook}</h2>
                            <h3>{item.author}</h3>
                            <p>{item.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

}
export default LastestUpdate;