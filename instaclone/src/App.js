import React, { Component } from 'react';
import data from './dummy-data';
import Post from './components/PostContainer/Post';
// import CommentSection from './components/CommentSection/CommentSection';
import './App.css';

class App extends Component {
    constructor(){
      super();
      this.state ={
        user: data
      };
    }
  render() {
    console.log(this.state.user)
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Set up CRA Boilerplate!
          </p>
          <Post user={this.state.user}/>
          {/* <CommentSection /> */}
        </header>
      </div>
    );
  }
}

export default App;
