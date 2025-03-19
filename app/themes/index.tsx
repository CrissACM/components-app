import { useThemeChangerContext } from '@/presentation/context/ThemeChangerContext';
import { ThemedCard } from '@/presentation/shared/ThemedCard';
import { ThemedSwitch } from '@/presentation/shared/ThemedSwitch';
import { ThemedView } from '@/presentation/shared/ThemedView';
import React, { useState } from 'react';

export default function ThemesScreen() {
  const { currentTheme, isSystemTheme, setSystemTheme, toggleTheme } =
    useThemeChangerContext();

  const [darkModeSettings, setDarkModeSettings] = useState({
    darkMode: currentTheme === 'dark',
    systemMode: isSystemTheme,
  });

  const setDarkMode = (value: boolean) => {
    // setColorScheme(value ? 'dark' : 'light');
    toggleTheme();

    setDarkModeSettings(() => ({
      darkMode: value,
      systemMode: false,
    }));
  };

  const setSystemMode = (value: boolean) => {
    if (value) {
      setSystemTheme();
    }

    setDarkModeSettings(() => ({
      darkMode: darkModeSettings.darkMode,
      systemMode: value,
    }));
  };

  return (
    <ThemedView>
      <ThemedCard>
        <ThemedSwitch
          text='Dark Mode'
          value={darkModeSettings.darkMode}
          onValueChange={setDarkMode}
        />
        <ThemedSwitch
          text='System Mode'
          value={darkModeSettings.systemMode}
          onValueChange={setSystemMode}
        />
      </ThemedCard>
    </ThemedView>
  );
}
