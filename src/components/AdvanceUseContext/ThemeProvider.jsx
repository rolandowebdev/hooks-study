import { createContext, useContext } from 'react';
import useLocalStorage from '../CustomHooks/useLocalStorage';

// TODO: step 1 create context
const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

const ThemeProvider = ({ children }) => {
  // * use custom hooks useLocalStorage for store data into local storage
  const [darkTheme, setDarkTheme] = useLocalStorage('theme', false);

  const toggleTheme = () => setDarkTheme((prevDarkTheme) => !prevDarkTheme);

  return (
    // TODO: step 2 create context provider
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

/**
 * TODO: step 3 use context with create custom function (Optional)
 * * This function can be use directly into function
 */

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const useThemeUpdate = () => {
  return useContext(ThemeUpdateContext);
};

export default ThemeProvider;
