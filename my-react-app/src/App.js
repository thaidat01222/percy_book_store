import ListTypeOfBook from "./components/ListTypeOfBook"
import Header from "./components/Header";
import Trending from "./components/Trending";
import Footer from "./components/Footer";
import LastestUpdate from "./components/LastestUpdate";
import {BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { Component } from "react";
import SlideMain from "./components/slideShow/slidemain";
import React from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AddBook from "./components/AddBook";
import BookInfor from "./components/BookInfor"
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>            
        <div className="App">
          <Route path="/" component={Header}/>
          <div className="list-slide">
            <Route exact path="/" component={ListTypeOfBook}/>
            <Route exact path="/" component={SlideMain}/>
            
          </div>
          
          <Route exact path="/" component={Trending}/>
          <Route exact path="/" component={LastestUpdate}/>
          <Route exact path="/" component={Footer}/>
          
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/admin" component={AddBook} />
          <Link to="/book" >Book</Link>
          <Route exact path="book" component={BookInfor} />
        </div>
        
      </BrowserRouter>
    );
  }
}
export default App;