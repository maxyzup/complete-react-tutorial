import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions';

class Todo extends Component {
  // state = {
  //   todo: null
  // }

  // componentDidMount() {
  //   let id = this.props.match.params.id;
  //   axios.get('https://jsonplaceholder.typicode.com/todos/' + id)
  //     .then(res => {
  //       this.setState({
  //         todo: res.data
  //       })
  //     })
  // }

  handleClick = () => {
    this.props.deleteTodo(this.props.todo.id);
    this.props.history.push('/')
  }
  
  render() {
    const todo = this.props.todo ? (
      <div className="post">
        <h4 className="center">{this.props.todo.title}</h4>
        <p>{this.props.todo.title}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleClick}>
            Delete
          </button>
        </div>
      </div>
    ) : (
      <div className="container">
        Loading todo...
      </div>
    )

    return (
      <div className="container">
        { todo }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id
  return {
    todo: state.todos.find(post => post.id == id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => { dispatch(deletePost(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
