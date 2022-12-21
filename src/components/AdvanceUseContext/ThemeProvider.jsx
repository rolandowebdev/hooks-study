import { useState, createContext, useContext } from 'react';

// TODO: step 1 create context
const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);

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
