import React from 'react';
import { connect } from 'react-redux';
import { saveComment } from 'actions/index';

class CommentBox extends React.Component {
  state = {
    comment: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Comment Box</h3>
        <textarea
          onChange={(e) => this.setState({ comment: e.target.value })}
          value={this.state.comment}
        />
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

export default connect(null, { saveComment })(CommentBox);
