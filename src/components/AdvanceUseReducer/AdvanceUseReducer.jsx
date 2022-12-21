/* eslint-disable array-callback-return */
import { useState, useReducer } from 'react';
import Todo from './Todo';

// TODO: step 3 create constant variable for action
export const ACTIONS = {
  ADD_TODO: 'add-todo',
  DONE_TODO: 'done-todo',
  DELETE_TODO: 'delete-todo',
};

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.DONE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
};

// TODO: Function for add new todo
const newTodo = (name) => {
  return { id: Date.now(), name: name, complete: false };
};

// TODO: step 2 create reducer function for action state+

const AdvanceUseReducer = () => {
  // TODO: step 1 setup useReducer function
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');

  // TODO: step 4 useReducer using dispatch function
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className='w-full p-2 mt-4 mb-4 text-white bg-indigo-600 rounded placeholder:text-white focus:outline-none focus:ring focus:ring-indigo-400 focus:ring-offset-0'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </form>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </>
  );
};

export default AdvanceUseReducer;
