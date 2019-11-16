import React from 'react';

const Todos = ({todos, deleteTodo}) => {
  const todoLists = todos.length ? (
    todos.map(todo =>  {
      return (
        <div className="collection-item" key={todo.id}>
          <span onClick={() => deleteTodo(todo.id)}>{todo.content}</span>
        </div>
      )
    })
  ) : (
    <p className="center">You have no todo</p>
  )

  return (
    <div className="todos collection">
      {todoLists}
    </div>
  )
}
export default Todos
