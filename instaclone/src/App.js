import React, { Component } from 'react';
import PostContainer from './components/PostContainer/PostContainer';
import data from './dummy-data';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      user: data
    }
  }
  render() {
    console.log(this.state.user)
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Hello from App.js
          </p>
          <PostContainer user={this.state.user} />
        </header>
      </div>
    );
  }
}

export default App;
