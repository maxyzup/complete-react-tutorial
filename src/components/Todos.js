import React from 'react';

const Todos = ({todos, deleteTodo}) => {
  const todoLists = todos.length ? (
    todos.map(todo =>  {
      return (
        <div className="collection-item" key={todo.id}>
          <div>
            <span>{todo.title}</span>
            <button onClick={() => deleteTodo(todo.id)} className="material-icons red-text right">delete</button>
          </div>
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
