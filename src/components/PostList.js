import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends Component {

  // action creator(api request) called whenever PostList is initially rendered onto the screen. 
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        Post List
      </div>
    )
  }
}

export default connect(null, {
  fetchPosts
})(PostList);
