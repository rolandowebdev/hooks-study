import { useTheme, useThemeUpdate } from './ThemeProvider';

const FunctionContext = () => {
  // TODO: step 4 useContext with custom function from ThemeProvider
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  return (
    <div>
      <h2 className='my-5 text-xl tracking-wide text-center underline uppercase bg-rose-600'>
        Advance useContext
      </h2>
      <button
        className='bg-indigo-700 btn hover:bg-indigo-800'
        onClick={toggleTheme}>
        Switch Theme
      </button>
      <div
        className={`w-full text-xl font-bold p-6 text-center mt-2 ${
          darkTheme ? 'bg-indigo-700' : 'bg-white'
        } ${darkTheme ? 'text-white' : 'text-indigo-700'}`}>
        Function Theme
      </div>
    </div>
  );
};

export default FunctionContext;
