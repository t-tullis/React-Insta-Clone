import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import data from '../../dummy-data';
import '../../App.css';

class PostsPage extends Component {
  constructor(){
    super()
    this.state={
      user: [],
      filteredPosts: []
    };
  }

  componentDidMount(){
    this.setState({
      user: data
    })
  }

  filterSearch = e =>{
      const user = this.state.user.filter(user =>{
          if(user.username.includes(e.target.value)){
              return user
          }
      });
      this.setState({
          filteredPosts: user
      })
  }
  render() {
    console.log(this.state.filteredPosts)
    return (
      <div>
        <SearchBar filterSearch={this.filterSearch} />
        <div className="App">
          <header className="App-header">
            <PostContainer user={this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.user} />
          </header>
        </div>
      </div>
    );
  }
}

export default PostsPage;