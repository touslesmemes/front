import React, { Component } from 'react';
import { getFoodData } from '../utils/data-api';


class FoodJokes extends Component {

  constructor() {
    console.log("constru foodJokes")
    super()
    this.state = { jokes: [] };
  }

  getFoodJokes() {
    getFoodData().then((jokes) => {
      this.setState({ jokes });
    });
  }

  componentDidMount() {// after render
    console.log("ok")
    this.getFoodJokes();
    document.title = "Food jokes";
  }

  render() {
    const { jokes }  = this.state;
    return (
      <div>
        <h3 className="text-center">Food Jokes</h3>
        <hr/>
        { jokes.map((joke, index) => (
              <div className="col-sm-6" key={index}>
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title"> <span className="btn">#{ joke.id }</span></h3>
                  </div>
                  <div className="panel-body">
                    <p> { joke.joke } </p>
                  </div>
                </div>
              </div>
          ))}
        <div className="col-sm-12">
          <div className="jumbotron text-center">
            <h2>Get Access to Celebrity Jokes By Logging In</h2>
          </div>
        </div>
        <div className="col-sm-12">
            <div className="jumbotron text-center">
              <h2>View Celebrity Jokes</h2>
            </div>
        </div>
      </div>
    );
  }
}

export default FoodJokes;
