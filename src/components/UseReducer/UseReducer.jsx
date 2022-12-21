import React, { useReducer } from 'react';

// TODO: step 3 create constant variable for action
const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
};

// TODO: step 2 create reducer function for action state
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default function UseReducer() {
  /**
   * * useReducer explain : useReducer can use for set 2 state in 1 state.
   * * useReducer in use for switch condition state in reducer.
   */
  // TODO: step 1 setup useReducer function
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <section className='my-5 text-center'>
      <h2 className='text-xl tracking-wide underline uppercase bg-rose-600'>
        useReducer
      </h2>
      <div className='mt-3'>
        <h3 className='mb-4 text-xl'>{state.count}</h3>
        <h3 className='mt-4 mb-2 text-xl'>
          {state.showText && 'Text is show up!'}
        </h3>
        <button
          className='w-full p-4 text-2xl font-semibold transition-colors duration-200 bg-indigo-600 rounded-sm hover:bg-indigo-800'
          onClick={() => {
            dispatch({ type: ACTIONS.INCREMENT });
          }}>
          +
        </button>
        <button
          className='w-full p-4 mt-3 text-2xl font-semibold transition-colors duration-200 bg-indigo-600 rounded-sm hover:bg-indigo-800'
          onClick={() => {
            dispatch({ type: ACTIONS.DECREMENT });
          }}>
          -
        </button>
      </div>
    </section>
  );
}
