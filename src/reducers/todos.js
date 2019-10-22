
let initialState = [
  {
    id: 0,
    text: 'Copy TodoApp by Hande',
    completed: true
  },
  {
    id: 1,
    text: 'add cypress.io testing',
    completed: false
  }
]



const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
        return state.map(todo => 
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
          )
    default:
      return state;
  }
}

export default todos