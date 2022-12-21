import { ACTIONS } from './AdvanceUseReducer';

const Todo = ({ todo, dispatch }) => {
  return (
    <div className='flex items-center gap-2 mt-2'>
      <p
        className={`${todo.complete ? 'text-green-500' : 'text-white'}`}
        key={todo.id}>
        - {todo.name}
      </p>
      <button
        className='px-3 py-1 bg-green-500 rounded-sm'
        onClick={() =>
          dispatch({
            type: ACTIONS.DONE_TODO,
            payload: { id: todo.id },
          })
        }>
        Done
      </button>
      <button
        className='px-3 py-1 bg-red-500 rounded-sm'
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        }>
        Delete
      </button>
    </div>
  );
};

export default Todo;
