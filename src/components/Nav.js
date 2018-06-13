import React, { Component } from 'react';
import { Link } from 'react-router';
import '../App.css';
import reece from '../img/Logo.png';
import 'font-awesome/css/font-awesome.min.css';


class Nav extends Component {
  constructor() {
    console.log("pretty good")
    super();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tous les Memes</h1>
          <a href=''><i className="top-right-img pull-right fa fa-bell fa-3x"></i></a>
          <a href=''><i className="top-right-img pull-right fa fa-plus fa-3x"></i></a>
        </header>
        <div className="App-left">
            <img className="top-left-img" src={reece} alt='logo'/>
            <p>Channels :</p>
            <ul className="list-group">
              <li className="list-group-item">
                <Link href="/" className="link" activeClassName="active">My Memes</Link>
              </li>
              <li className="list-group-item">
                <Link href="/user" className="link" activeClassName="active">user</Link>
              </li>
              <li className="list-group-item"><a className="link" href='/Food'> Other 1 </a></li>
              <li className="list-group-item"><a className="link" href='/Login'> Login </a></li>
              <li className="list-group-item"><a className="link" href='/Celebrity'> Need to be logged </a></li>
            </ul>

            <a href='/Setting'><i className="bottom-left-img fa fa-cog fa-3x"></i></a>
        </div>

      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Launch demo modal
      </button>
      
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
        <div id="root" className="root"></div>
      </div>



    );
  }
}

export default Nav;
