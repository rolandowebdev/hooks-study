import { useState, useEffect } from 'react';

import useLocalStorage from '../CustomHooks/useLocalStorage';

const AdvanceUseState = () => {
  // * use custom hooks useLocalStorage for store data into local storage
  const [username, setUsername] = useLocalStorage('username', '');
  const [profile, setProfile] = useState({ name: '', age: 0 });
  const { name, age } = profile; // TODO: desctructure for state easy use

  /**
   * * If state type data like object, array, etc...
   * * you should still update all state using spread operator.
   * * if don't update all state, value will be replaced.
   */

  const addAge = () => {
    setProfile((prevProfile) => {
      return { name: username, age: prevProfile.age++ };
    });
  };

  useEffect(() => {
    console.log('Username is change');
  }, [profile]);

  return (
    <div>
      <h2 className='my-5 text-xl tracking-wide text-center underline uppercase bg-rose-600'>
        Advance useState
      </h2>
      <input
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='w-full p-2 mb-6 text-white bg-indigo-700 rounded placeholder:text-white focus:outline-none focus:ring focus:ring-indigo-400 focus:ring-offset-0'
      />
      <button
        className='bg-indigo-700 btn hover:bg-indigo-800'
        type='button'
        onClick={addAge}>
        Click
      </button>
      <p className='mt-2 text-lg tracking-wide text-center uppercase text-rose-600'>{`Your name is ${name} and age is ${age}`}</p>
    </div>
  );
};

export default AdvanceUseState;
