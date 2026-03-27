import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets, SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-reanimated';

import { useColorScheme } from '../hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <LayoutContent colorScheme={colorScheme} />
    </SafeAreaProvider>
  );
}

function LayoutContent({ colorScheme }: { colorScheme: any }) {
  const insets = useSafeAreaInsets();
  
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <View style={{ flex: 1, backgroundColor: '#000000' }}>
        <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#FFFFFF' } }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="store/[id]" />
          <Stack.Screen name="product/[id]" options={{ presentation: 'modal' }} />
          <Stack.Screen name="cart" options={{ animation: 'slide_from_bottom' }} />
          <Stack.Screen name="tracking" />
        </Stack>
        {/* Universal Black System Navigation Bar area */}
        <View style={{ height: insets.bottom, backgroundColor: '#000000' }} />
      </View>
      <StatusBar style="dark" />
    </ThemeProvider>
  );
}
