import { useState, useMemo, useEffect } from 'react';

const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // * NOTE: useMemo can optimize computation for improve perfomance
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  // * useMemo hero in use for make themeStyle only call/render once
  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? 'bg-indigo-600' : 'bg-white',
      color: dark ? 'text-white' : 'text-indigo-600',
    };
  }, [dark]);

  useEffect(() => {
    console.log('Theme Change');
  }, [themeStyle]);

  return (
    <>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        className='w-full p-2 mt-4 mb-4 text-white bg-indigo-600 rounded placeholder:text-white focus:outline-none focus:ring focus:ring-indigo-400 focus:ring-offset-0'
      />
      <button className='btn' onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <p className={`${themeStyle.backgroundColor} ${themeStyle.color}`}>
        {doubleNumber}
      </p>
    </>
  );
};

const slowFunction = (num) => {
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
};

export default UseMemo;
