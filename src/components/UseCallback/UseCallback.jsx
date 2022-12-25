import { useState, useCallback } from 'react';
import List from './List';

const UseCallback = () => {
  const [dark, setDark] = useState(false);
  const [number, setNumber] = useState(1);

  /** NOTE
   * * useCallback can optimize computation to improve perfomance
   * * useCallback return the function
   * * useCallback can add parameter and useMemo can't
   * *
   */

  // * If not use useCallback, getItems will be rerender everytime
  const getItems = useCallback(
    (incrementor) => {
      return [
        number + incrementor,
        number + incrementor + 1,
        number + incrementor + 2,
      ];
    },
    [number] // getItems only change when number change
  );

  const containerStyle = {
    backgroundColor: dark ? 'bg-indigo-600' : 'bg-white',
    color: dark ? 'text-white' : 'text-indigo-600',
  };

  const elementStyle = {
    backgroundColor: dark ? 'bg-white' : 'bg-indigo-600',
    color: dark ? 'text-indigo-600' : 'text-white',
  };

  return (
    <div
      className={`${containerStyle.backgroundColor} ${containerStyle.color} p-4 rounded-md`}>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        className={`${elementStyle.backgroundColor} ${elementStyle.color} duration-200 w-full p-2 mt-4 mb-4 focus:outline-none focus:ring focus:ring-indigo-400 rounded-sm focus:ring-offset-0`}
      />
      <button
        className={`btn ${elementStyle.backgroundColor} ${elementStyle.color}`}
        onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <List getItems={getItems} />
    </div>
  );
};

export default UseCallback;
