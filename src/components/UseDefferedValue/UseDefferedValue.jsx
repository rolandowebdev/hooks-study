import { useEffect } from 'react';
import { useMemo, useDeferredValue } from 'react';

const UseDefferedValue = ({ input }) => {
  const LIST_SIZE = 20000;
  // * useDeffered value waiting value and update when data rendered
  const defferedInput = useDeferredValue(input);
  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{defferedInput}</div>);
    }
    return l;
  }, [defferedInput]);

  useEffect(() => {
    console.log(`Input: ${input}\nDeffered: ${defferedInput}`);
  }, [input, defferedInput]);

  return list;
};

export default UseDefferedValue;
