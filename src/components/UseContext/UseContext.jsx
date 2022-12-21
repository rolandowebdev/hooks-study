import { useState, createContext } from 'react';
import Login from './Login';
import User from './User';

export const AppContext = createContext(null);

// TODO useContext definition : share data without passing props

export default function UseContext() {
  const [username, setUserName] = useState('');
  return (
    <section className='my-12 text-center'>
      <h2 className='text-xl tracking-wide underline uppercase bg-rose-600'>
        useContext
      </h2>
      <div className='mt-3'>
        {/* Must Wrapped component using createContext for passing data to child component*/}
        <AppContext.Provider value={{ username, setUserName }}>
          <Login /> <User />
        </AppContext.Provider>
      </div>
    </section>
  );
}
