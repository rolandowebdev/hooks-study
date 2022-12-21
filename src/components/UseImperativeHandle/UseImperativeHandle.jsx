import React, { useRef } from 'react';
import Button from './Button';

export default function UseImperativeHandle() {
  const buttonRef = useRef(null);
  return (
    <section className='my-12 text-center'>
      <h2 className='text-xl tracking-wide underline uppercase bg-rose-600'>
        useImperativeHandle
      </h2>
      <div className='mt-3'>
        <button
          className='w-full p-4 mb-4 text-2xl font-semibold transition-colors duration-200 bg-indigo-600 rounded-sm hover:bg-indigo-800'
          onClick={() => {
            buttonRef.current.alterToggle(); // function from child component
          }}>
          Button from Parent
        </button>
        <Button ref={buttonRef} />
      </div>
    </section>
  );
}
