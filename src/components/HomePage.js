import React, { Component } from 'react';
import '../App.css';
import pct from '../img/brain-meme-whom.jpg'


class HomePage extends Component {

  constructor() {
    console.log("constru")
    super()
  }

  componentDidMount() {// after render
    document.title = "Tous les memes";
  }


  render() {

    return (
      <div>

        <hr/>
        <div className="post">
          <i className="like fa fa-thumbs-o-up fa-2x" ></i>
          <i className="dislike fa fa-thumbs-o-down fa-2x" ></i>
          <img src={pct} alt='Post'/>
        </div>
        <hr/>

      </div>
    );
  }
}

export default HomePage;
