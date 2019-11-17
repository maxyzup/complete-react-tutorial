import React from 'react';
import { Link } from 'react-router-dom';

const Todos = ({todos, deleteTodo}) => {
  const todoLists = todos.length ? (
    todos.map(todo =>  {
      return (
        <div className="collection-item" key={todo.id}>
          <div>
            <Link to={'/todos/' + todo.id}>
              <span>{todo.title}</span>
            </Link>
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
