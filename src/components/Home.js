import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddForm';
import { connect } from 'react-redux';

class Home extends Component {
  // state = {
  //   todos: []
  // }

  // componentDidMount() {
  //   axios.get('https://jsonplaceholder.typicode.com/todos')
  //        .then(res => {
  //          console.log(res)
  //          this.setState({
  //            todos: res.data.slice(0, 10)
  //          })
  //        })
  // }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })
  }

  render () {
    console.log(this.props)
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.props.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(Home)
