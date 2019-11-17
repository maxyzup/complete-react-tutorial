import React, { Component } from 'react';
import axios from 'axios';

class Todo extends Component {
  state = {
    todo: null
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    axios.get('https://jsonplaceholder.typicode.com/todos/' + id)
      .then(res => {
        this.setState({
          todo: res.data
        })
      })
  }

  render() {

    const todo = this.state.todo ? (
      <div className="post">
        <h4 className="center">{this.state.todo.title}</h4>
        <p>{this.state.todo.title}</p>
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

export default Todo
