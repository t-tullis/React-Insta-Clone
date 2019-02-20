import React, { Component } from 'react';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
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
      <div>
        <SearchBar />
        <div className="App">
          <header className="App-header">
            <PostContainer user={this.state.user} />
          </header>
        </div>
      </div>
    );
  }
}

export default App;
