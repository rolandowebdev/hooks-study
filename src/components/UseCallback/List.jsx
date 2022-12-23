import { useState, useEffect } from 'react';

const List = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems(2)); // add incrementor here
    console.log('Update Items');
  }, [getItems]);

  return items.map((item) => <div key={item}>{item}</div>);
};

export default List;
