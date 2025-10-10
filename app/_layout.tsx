import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BRAND } from '../constants/theme';

export default function RootLayout() {
  const theme = { ...DefaultTheme, colors: { ...DefaultTheme.colors, background: BRAND.grayBg } } as const;
  return (
    <SafeAreaProvider>
      <ThemeProvider value={theme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="(tabs)" />
        </Stack>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
