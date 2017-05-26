import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadFeed, addComment } from './../actions/feed';
import './../styles/feed.css';
import Post from './../components/Post';

class Feed extends Component {
  componentDidMount() {
    this.props.loadFeed();
  }

  renderPosts(posts) {
    const { authenticated, userName } = this.props.auth;
    return posts.map(post => {
      return <Post
                key={post.id} 
                data={post}
                addComment={this.props.addComment.bind(null, userName)}
                authenticated={authenticated}/>
    })
  }

  render() {
    return(
      <div>
        {this.renderPosts(this.props.posts)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    posts: state.feed
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ loadFeed, addComment }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);