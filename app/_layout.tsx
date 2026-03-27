import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '../hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        {/* Splash screen is index in app/, so it's the root */}
        <Stack.Screen name="index" />
        {/* These are folders with their own _layouts */}
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />
        {/* Individual screens or other groups */}
        <Stack.Screen name="store/[id]" />
        <Stack.Screen name="product/[id]" options={{ presentation: 'modal' }} />
        <Stack.Screen name="cart" options={{ animation: 'slide_from_bottom' }} />
        <Stack.Screen name="tracking" />
      </Stack>
      <StatusBar style="dark" />
    </ThemeProvider>
  );
}
