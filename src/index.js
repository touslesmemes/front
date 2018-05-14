import React from "react";
import ReactDOM from "react-dom";
import Nav from "./components/Nav";
import User from "./components/User";
import Home from "./components/HomePage";
import Food from "./components/FoodJokes";
import Celebrity from "./components/CelebrityJokes";
import Login from "./components/Login";
import Setting from "./components/Setting";
import Register from "./components/Register";
import {Router, Route, browserHistory} from 'react-router';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render((
 <Nav/>
),
    document.getElementById('navbar'));

ReactDOM.render((
 <Router history={browserHistory}>
      <Route path='/' component={Home}/>
      <Route path='/user' component={User} />
      <Route path='/food' component={Food} />
      <Route path='/celebrity' component={Celebrity} />
      <Route path='/login' component={Login} />
      <Route path='/setting' component={Setting} />
      <Route path='/register' component={Register} />
  </Router>),
    document.getElementById('root'));
