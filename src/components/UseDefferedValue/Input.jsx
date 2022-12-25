import { useState } from 'react';
import UseDefferedValue from './UseDefferedValue';

const Input = () => {
  const [input, setInput] = useState('');
  return (
    <>
      <h2 className='mt-4 text-xl tracking-wide text-center underline uppercase bg-rose-600'>
        useDefferedValue
      </h2>
      <input
        className='w-full p-2 mt-4 mb-4 text-white bg-indigo-600 rounded placeholder:text-white focus:outline-none focus:ring focus:ring-indigo-400 focus:ring-offset-0'
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <UseDefferedValue input={input} />
    </>
  );
};

export default Input;
