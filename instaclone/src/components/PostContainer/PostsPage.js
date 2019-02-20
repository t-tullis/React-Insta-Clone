// import React from 'react';
// import PostContainer from './PostContainer'


// const PostsPage = (props) => {
//     console.log(props.user)
//     return (
//       <div>
//             <PostContainer user={props.user} />
//       </div>
//     );
//   }

// export default PostsPage;

import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import data from '../../dummy-data';
import '../../App.css';

class PostsPage extends Component {
  constructor(){
    super()
    this.state={
      user: []
    }
  }

  componentDidMount(){
    this.setState({
      user: data
    })
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

export default PostsPage;