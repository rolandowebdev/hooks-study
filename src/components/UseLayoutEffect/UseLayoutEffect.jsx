import { useLayoutEffect, useRef, useState } from 'react';

const UseLayoutEffect = () => {
  const [show, setShow] = useState(false);
  const popup = useRef();
  const button = useRef();

  /**
   * NOTE:
   * * - if you want to update dom in react you can use useLayoutEffect and useRef
   * * - useLayoutEffect run syncronously after the DOM has been updated
   * TODO: useLayoutEffect : use for trigger an effect after a component has rendered.
   * TODO: useRef : use for manipulation DOM in react
   */

  useLayoutEffect(() => {
    if (popup.current == null || button.current == null) return;
    const { bottom } = button.current.getBoundingClientRect();
    console.log(button.current.getBoundingClientRect());
    popup.current.style.top = `${bottom + 24}px`;
  }, [show]);

  return (
    <>
      <button
        ref={button}
        className='mt-4 btn'
        onClick={() => setShow((prevState) => !prevState)}>
        Click
      </button>
      {show && (
        <div ref={popup} className='absolute'>
          This is popup!
        </div>
      )}
    </>
  );
};

export default UseLayoutEffect;
