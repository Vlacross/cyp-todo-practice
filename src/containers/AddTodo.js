import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
      onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addTodo(input.value))
        input.value = '';
      }}>

        <label htmlFor="todo-input" className="todo-input-label">Make a new Todo</label>
        <input className="todo-input" id="todo-input" ref={node => (input = node)} />
        <button className="todo-submit" type="submit">Add Todo</button>

      </form>
    </div>
  )
}

export default connect()(AddTodo)