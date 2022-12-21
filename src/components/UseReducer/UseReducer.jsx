import React, { useReducer } from 'react';

// TODO: initial state for reducer
const initialState = { count: 0, showText: false };

/**
 * TODO: Function for switch reducer state condition.
 */
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1, showText: !state.showText };
    case 'toogleShowText':
      return { count: state.count, showText: state.showText };
    default:
      return state;
  }
};

export default function UseReducer() {
  /**
   * TODO: useReducer explain : in use for set 2 state in 1 state.
   * TODO: reducer : in use for switch condition state in reducer.
   */
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <section className='my-12 text-center'>
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
            dispatch({ type: 'increment' });
            dispatch({ type: 'toogleShowText' });
          }}>
          InDec
        </button>
      </div>
    </section>
  );
}
