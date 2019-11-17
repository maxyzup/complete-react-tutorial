const initState = {
  todos: [
    {id:1 , title: "Title 1"},
    {id:2 , title: "Title 2"},
    {id:3 , title: "Title 3"}
  ]
}

const rootReducer = (state = initState, action) => {
  if (action.type === 'DELETE_TODO') {
    let newTodos = state.todos.filter(todo => {
      return action.id !== todo.id
    });
    return {
      ...state,
      todos: newTodos
    }
  }
  
  return state;
}

export default rootReducer