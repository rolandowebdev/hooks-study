import { useState, useTransition } from 'react';

const UseTransition = () => {
  /**
   * * isPending use for waiting data before render on page
   * * startTransition use for initialize transition
   * */
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  const LIZE_SIZE = 2000;

  const handleChange = (e) => {
    setInput(e.target.value);
    startTransition(() => {
      const l = [];
      for (let i = 0; i < LIZE_SIZE; i++) l.push(e.target.value);
      setList(l);
    });
  };

  return (
    <>
      <h2 className='text-xl tracking-wide text-center underline uppercase bg-rose-600'>
        useTransition
      </h2>
      <input
        className='w-full p-2 mt-4 mb-4 text-white bg-indigo-600 rounded placeholder:text-white focus:outline-none focus:ring focus:ring-indigo-400 focus:ring-offset-0'
        type='text'
        value={input}
        onChange={handleChange}
      />
      {isPending
        ? 'Loading...'
        : list.map((item, index) => <div key={index}>{item}</div>)}
    </>
  );
};

export default UseTransition;
