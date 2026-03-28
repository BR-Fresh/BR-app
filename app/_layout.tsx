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

import { CartProvider } from '../context/cart-context';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <CartProvider>
        <LayoutContent colorScheme={colorScheme} />
      </CartProvider>
    </SafeAreaProvider>
  );
}

import { useSegments } from 'expo-router';
import { CartFloatingBar } from '../components/cart-floating-bar';

function LayoutContent({ colorScheme }: { colorScheme: any }) {
  const insets = useSafeAreaInsets();
  const segments = useSegments();
  
  // Hide cart bar on specific screens
  const hideCartBar = segments.some(seg => 
    ['cart', 'tracking', 'payment-process', 'search', '(auth)'].includes(seg)
  );

  // If we are in tabs, the tab bar is 64px. 
  // We need to be above the tab bar AND the safe area inset bottom.
  const isInTabs = (segments as any[]).includes('(tabs)');
  const bottomOffset = isInTabs ? insets.bottom + 64 + 10 : insets.bottom + 16;

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
        {!hideCartBar && <CartFloatingBar bottomOffset={bottomOffset} />}
        {/* Universal Black System Navigation Bar area */}
        <View style={{ height: insets.bottom, backgroundColor: '#000000' }} />
      </View>
      <StatusBar style="dark" />
    </ThemeProvider>
  );
}
