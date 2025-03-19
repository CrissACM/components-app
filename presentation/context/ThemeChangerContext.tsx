import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useColorScheme } from 'nativewind';
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from 'react';

interface ThemeChangerContextType {
  currentTheme: 'light' | 'dark';
  isSystemTheme: boolean;
  toggleTheme: () => void;
  setSystemTheme: () => void;
}

const ThemeChangerContext = createContext({} as ThemeChangerContextType);

export function useThemeChangerContext() {
  const themeChanger = useContext(ThemeChangerContext);

  return themeChanger;
}

export function ThemeChangerProvider({ children }: PropsWithChildren) {
  const { colorScheme, setColorScheme } = useColorScheme();

  const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');
  const [isSystemThemeEnabled, setIsSystemThemeEnabled] = useState(true);

  const currentTheme = isSystemThemeEnabled
    ? colorScheme
    : isDarkMode
    ? 'dark'
    : 'light';

  useEffect(() => {
    AsyncStorage.getItem('selected-theme').then((theme) => {
      if (!theme) return;

      setIsDarkMode(theme === 'dark');
      setIsSystemThemeEnabled(theme === 'system');
      setColorScheme(theme as 'light' | 'dark' | 'system');
    });
  }, []);

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <ThemeChangerContext.Provider
        value={{
          currentTheme: currentTheme ?? 'light',
          isSystemTheme: isSystemThemeEnabled,
          toggleTheme: async () => {
            setIsDarkMode(!isDarkMode);
            setColorScheme(isDarkMode ? 'light' : 'dark');
            setIsSystemThemeEnabled(false);

            await AsyncStorage.setItem(
              'selected-theme',
              isDarkMode ? 'dark' : 'light',
            );
          },

          setSystemTheme: async () => {
            setIsSystemThemeEnabled(true);
            setColorScheme('system');

            await AsyncStorage.setItem('selected-theme', 'system');
          },
        }}
      >
        {children}
      </ThemeChangerContext.Provider>
    </ThemeProvider>
  );
}
