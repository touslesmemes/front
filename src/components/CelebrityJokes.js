
import React, { Component } from 'react';
import { getCelebrityData } from '../utils/data-api';

class CelebrityJokes extends Component {

  constructor() {
    console.log("pretty good")
    super();
    this.state = { jokes: [] };
  }

  getCelebrityJokes() {
    getCelebrityData().then((jokes) => {
      this.setState({ jokes });
    });
  }

  componentDidMount() {
    this.getCelebrityJokes();
    document.title = "Celebrity jokes";
  }

  render() {

    const { jokes } = this.state;
        console.log(jokes.length)

    return (
      <div>
        <h3 className="text-center">Privileged Chuck Norris Celebrity Jokes</h3>
        <hr/>
        { jokes.map((joke, index) => (
              <div className="col-sm-6" key={index}>
                <div className="panel panel-warning">
                  <div className="panel-heading">
                    <h3 className="panel-title"><span className="btn">#{ joke.id }</span></h3>
                  </div>
                  <div className="panel-body">
                    <p> { joke.joke } </p>
                  </div>
                </div>
              </div>
          ))}
      </div>
    );
  }
}

export default CelebrityJokes;
