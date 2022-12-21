import React, { useState } from 'react';

export default function UseState() {
  // count as 'reactive value' & setCount as 'setter'
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('Change Type..');

  /* handleclick using useState case */
  const handleClick = (type) => {
    if (type === '+') setCount(count + 1);
    if (type === '-') count <= 0 ? setCount(count) : setCount(count - 1);
  };

  /* handle user input change */
  const handleInput = (event) => {
    event.target.value === ''
      ? setInputValue('Change Type..')
      : setInputValue(event.target.value);
  };

  return (
    <section className='my-12 text-center'>
      <h2 className='text-xl tracking-wide underline uppercase bg-rose-600'>
        useState
      </h2>
      <div className='mt-3'>
        <button
          className='w-full p-4 text-2xl font-semibold transition-colors duration-200 bg-indigo-600 rounded-sm hover:bg-indigo-800'
          onClick={() => handleClick('+')}>
          +
        </button>
        <h3 className='my-2 text-xl'>{count}</h3>
        <button
          className='w-full p-4 text-2xl font-semibold transition-colors duration-200 bg-indigo-600 rounded-sm hover:bg-indigo-800'
          onClick={() => handleClick('-')}>
          -
        </button>
      </div>
      <div className='mt-6'>
        <h3 className='my-2 text-md'>{inputValue}</h3>
        <input
          className='w-full p-2 text-white bg-indigo-600 rounded placeholder:text-white focus:outline-none focus:ring focus:ring-indigo-400 focus:ring-offset-0'
          type='text'
          placeholder='Type..'
          onChange={handleInput}
        />
      </div>
    </section>
  );
}
