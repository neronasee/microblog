import React, { PureComponent } from 'react';

class Comment extends PureComponent {
  render() {
    const { author, text } = this.props.data;

    return(
      <div>
        <blockquote>
          <p>
            {text}
          </p>
          <cite>
            -{author}
          </cite>
        </blockquote>
      </div>
    )
  }
}

export default Comment;