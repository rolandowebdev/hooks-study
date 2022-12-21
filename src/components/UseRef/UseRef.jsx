import React, { useRef, useState } from 'react';

export default function UseRef() {
  const inputRef = useRef(null);
  const [data, setData] = useState('');

  /**
   * * : useRef can be usefull if you doesn't want the value changes when render UI
   * * and useRef can grab native HTMl elements from JSX.
   */

  const onClick = () => {
    inputRef.current.focus(); // TODO: trigger if input focus
    const value = inputRef.current.value; // TODO: get input value
    setData(value); // TODO: set input value into data state
    inputRef.current.value = ''; // TODO: and the last part is clear input value
  };

  return (
    <section className='my-12 text-center'>
      <h2 className='text-xl tracking-wide underline uppercase bg-rose-600'>
        useRef
      </h2>
      <div className='mt-3'>
        <input
          className='w-full p-2 mb-4 text-white bg-indigo-600 rounded placeholder:text-white focus:outline-none focus:ring focus:ring-indigo-400 focus:ring-offset-0'
          type='text'
          placeholder='Type..'
          ref={inputRef}
        />
        <button
          className='w-full p-4 text-2xl font-semibold transition-colors duration-200 bg-indigo-600 rounded-sm hover:bg-indigo-800'
          onClick={onClick}>
          Click
        </button>
        <p className='mt-2 text-xl'>{data}</p>
      </div>
    </section>
  );
}
