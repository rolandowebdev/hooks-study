import { useState, useEffect } from 'react';

// TODO: Function for save data into localStorage
const getSavedValue = (key, initialValue) => {
  const savedValue = JSON.parse(localStorage.getItem(key));

  // * check id savedValue is exist
  if (savedValue) return savedValue;

  // * check if initial value is Function, return as Function initial value
  if (initialValue instanceof Function) return initialValue();

  return initialValue;
};

const useLocalStorage = (key, initialState) => {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialState);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
