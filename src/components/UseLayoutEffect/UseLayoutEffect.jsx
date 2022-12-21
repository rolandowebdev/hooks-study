import React, { useLayoutEffect, useEffect, useRef } from 'react';

export default function UseLayoutEffect() {
  const inputRef = useRef(null);

  /**
   * NOTE: useLayoutEffect call before useEffect
   */

  useEffect(() => {
    inputRef.current.value = 'ReactJS!';
    console.log('ReactJS');
  }, []);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  return (
    <section className='my-12 text-center'>
      <h2 className='text-xl tracking-wide underline uppercase bg-rose-600'>
        UseLayoutEffect
      </h2>
      <div className='mt-3'>
        <input
          className='w-full p-2 mb-4 text-white bg-indigo-600 rounded placeholder:text-white focus:outline-none focus:ring focus:ring-indigo-400 focus:ring-offset-0'
          defaultValue='NextJS'
          ref={inputRef}
        />
      </div>
    </section>
  );
}
