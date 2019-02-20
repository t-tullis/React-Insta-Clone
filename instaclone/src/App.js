import React, { Component } from 'react';
import data from './dummy-data';
import Post from './components/PostContainer/Post';
import SearchBar from './components/SearchBar/SearchBar';
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
      <div>
        <SearchBar />
        <div className="App">
          <header className="App-header">
            <Post user={this.state.user}/>
          </header>
        </div>
      </div>
    );
  }
}

export default App;
