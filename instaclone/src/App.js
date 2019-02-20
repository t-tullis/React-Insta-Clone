import React, { Component } from 'react';
import PostsPage from './components/PostContainer/PostsPage';
import Login from './components/Login/Login';
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
        <Login />
          <div className="App">
            <PostsPage user={this.state.user} />
          </div>
      </div>
    );
  }
}

export default App;
