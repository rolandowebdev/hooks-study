import { useState } from 'react';

const AdvanceUseState = () => {
  const [profile, setProfile] = useState({ name: '', age: 0 });
  const { name, age } = profile; // TODO: desctructure for state easy use

  /**
   * * If state type data like object, array, etc...
   * * you should still update all state using spread operator.
   * * if don't update all state, value will be replaced.
   */
  const addAge = () => {
    setProfile((prevProfile) => {
      return { ...prevProfile, age: prevProfile.age + 1 };
    });
  };

  return (
    <div>
      <h2 className='my-5 text-xl tracking-wide text-center underline uppercase bg-rose-600'>
        Advance useState
      </h2>
      <button className='btn' type='button' onClick={addAge}>
        Click
      </button>
      <p className='mt-2 text-lg tracking-wide text-center uppercase text-rose-600'>{`Your name is ${name} and age is ${age}`}</p>
    </div>
  );
};

export default AdvanceUseState;
