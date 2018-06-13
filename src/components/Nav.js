import React, { Component } from 'react';
import { Link } from 'react-router';
import '../App.css';
import reece from '../img/Logo.png';
import 'font-awesome/css/font-awesome.min.css';
import Modal from 'react-modal';

Modal.setAppElement('#navbar');

const modalStyle = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    backgroundColor       : 'transparent',
    border                : 'none'
  },
};

class Nav extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.postMeme = this.postMeme.bind(this);

  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  postMeme() {
    if(window.confirm('meme post')==true){
      this.setState({modalIsOpen: false});
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tous les Memes</h1>
          <a href=''><i className="top-right-img pull-right fa fa-bell fa-3x"></i></a>
          <i onClick={this.openModal} className="top-right-img pull-right fa fa-plus fa-3x"></i>
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
              
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={modalStyle}
          contentLabel="modal adding post"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">ADD a meme</h5>
                <button type="button" className="close" onClick={this.closeModal} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="inputName">Name</label>
                    <input type="text" className="form-control" id="inputName" placeholder="name"/>
                  </div>
                  <div class="form-group">
                    <label htmlFor="selectCategory">Category</label>
                    <select className="form-control" id="selectCategory">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputImg">Image link</label>
                    <input type="text" className="form-control" id="inputImg" placeholder="link"/>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={this.postMeme}>Post</button>
                <button type="button" className="btn btn-secondary" onClick={this.closeModal}>Close</button>
              </div>
            </div>
          </div>
        </Modal>
        
        <div id="root" className="root"></div>
      </div>



    );
  }
}

export default Nav;
