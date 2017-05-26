import React, { Component } from 'react';

import Comment from './Comment';

class Post extends Component {
  constructor(props){
    super(props);

    this.state = {
      value: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  renderComments (comments) {
    return comments.map(comment => {
      return <Comment key={comment.id} data={comment} />
    })
  }

  handleInputChange(e) {
    this.setState({value: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const value = this.state.value;

    if(value) {
      this.props.addComment(value, this.props.data.id);
      this.setState({value: ''});
    }
  }

  render() {
    const { author, title, text, comments } = this.props.data;
    const commenting = this.props.authenticated 
    ? <form className="form-inline" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input 
          type="text"
          className="form-control"
          onChange={this.handleInputChange}
          value={this.state.value}
          placeholder="Enter comment text" />
        </div>
        <button className="btn btn-success">Comment</button>
      </form>
    : null;

    return(
      <div className="post">
        <h2>{title}</h2>
        <p>{text}</p>
        <p>by <b>{author}</b></p>
        {commenting}
        {this.renderComments(comments)}
      </div>
    )
  }
}

export default Post;