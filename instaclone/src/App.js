import React, { Component } from 'react';
import PostsPage from './components/PostContainer/PostsPage';
import Login from './components/Login/Login';
import authenticate from './components/Authentication/authenticate'
import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state={
    }
  }
  
  render() {
    return (
      <div>
          <div className="App">
            <PostsPage />
          </div>
      </div>
    );
  }
}

export default authenticate(App)(Login);
