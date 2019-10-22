import React from 'react';
import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';
import VisibilityTodoList from './containers/VisibilityTodoList';

let divStyle = {
  width: '100%',
  height: '500px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

const App = () => (
  <div style={divStyle}>
    <AddTodo />
    <VisibilityTodoList />
    <Footer />
  </div>
)

export default App