import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function UseEffect() {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);

  // NOTE: useEffect call when page render
  /* TODO:  useEffect have 3 livecycle in class component :
    1. componentDidAmount() { initialized }
    2. componentDidUpdate() { state updated }
    3. componentWillUnmount() { destroyed }
  */
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${resourceType}`
      );
      setItems(response.data);
    };
    fetchData();
  }, [resourceType]);

  return (
    <section className='my-12 text-center'>
      <h2 className='text-xl tracking-wide underline uppercase bg-rose-600'>
        useEffect
      </h2>
      <div className='mt-3'>
        <button
          className='bg-indigo-700 btn hover:bg-indigo-800'
          onClick={() => setResourceType('posts')}>
          Get Posts
        </button>
        <button
          className='bg-indigo-700 btn hover:bg-indigo-800'
          onClick={() => setResourceType('users')}>
          Get Users
        </button>
        <button
          className='bg-indigo-700 btn hover:bg-indigo-800'
          onClick={() => setResourceType('comments')}>
          Get Comments
        </button>
      </div>
      <h2 className='p-4 text-xl tracking-wide uppercase bg-rose-600'>
        {resourceType}
      </h2>
      {items.map((item) => {
        return (
          <pre key={item.id}>
            {resourceType === 'posts' ? item.title : item.name}
          </pre>
        );
      })}
    </section>
  );
}
