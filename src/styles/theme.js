import { darkTheme, lightTheme } from './themes';

const getTheme = (themeMode) => {
  return themeMode === 'light' ? lightTheme : darkTheme;
};

export { darkTheme, lightTheme, getTheme };

// For backward compatibility, export dark theme as default
export default darkTheme;