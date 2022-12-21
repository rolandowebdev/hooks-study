import React, { useContext } from 'react';
import { AppContext } from './UseContext';

export default function User() {
  const { username } = useContext(AppContext); // for use createContext from parent component
  return <h1 className='text-2xl'>USER : {username}</h1>;
}
