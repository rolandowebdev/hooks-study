import { useState, useEffect } from 'react';

const AdvanceUseEffect = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerHeight);
  };

  useEffect(() => {
    // initialize & update
    window.addEventListener('resize', handleResize);
    // cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  return (
    <div className='text-center'>
      <h2 className='my-5 text-xl tracking-wide underline uppercase bg-rose-600'>
        Advance useEffect
      </h2>
      <p className='text-lg tracking-wide uppercase text-rose-600'>
        Window width size : {windowWidth}
      </p>
    </div>
  );
};

export default AdvanceUseEffect;
