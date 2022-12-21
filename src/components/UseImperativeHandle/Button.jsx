import React, { useState, forwardRef, useImperativeHandle } from 'react';

/**
 * forwardRef use for passing ref into parent component
 */
const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  /**
   * For create & set action button for access into parent component using useRef
   */
  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));

  return (
    <>
      <button className='w-full p-4 text-2xl font-semibold transition-colors duration-200 bg-indigo-600 rounded-sm hover:bg-indigo-800'>
        Button from Child
      </button>
      <p>{toggle && <span>Toggle</span>}</p>
    </>
  );
});

export default Button;
