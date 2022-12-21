import React, { useContext } from 'react';
import { AppContext } from './UseContext';

export default function Login() {
  const { setUserName } = useContext(AppContext); // for use createContext from parent component

  return (
    <input
      className='w-full p-2 mb-4 text-white bg-indigo-600 rounded placeholder:text-white focus:outline-none focus:ring focus:ring-indigo-400 focus:ring-offset-0'
      type='text'
      onChange={(e) => setUserName(e.target.value)}
    />
  );
}
