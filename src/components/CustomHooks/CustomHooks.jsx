import useLocalStorage from './useLocalStorage';
import useUpdateLogger from './useUpdateLogger';

const CustomHooks = () => {
  // * custom hooks for save data into localStorage
  const [name, setName] = useLocalStorage('name', '');

  // * custom hooks log update data
  useUpdateLogger(name);

  return (
    <input
      className='w-full p-2 mt-4 mb-4 text-white bg-indigo-700 rounded placeholder:text-white focus:outline-none focus:ring focus:ring-indigo-400 focus:ring-offset-0'
      type='text'
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
};

export default CustomHooks;
