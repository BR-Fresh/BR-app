import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { CartProvider } from '../context/cart-context';
import { useColorScheme } from '../hooks/use-color-scheme';
import RootNavigator from './navigation/RootNavigator';

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <CartProvider>
        <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <RootNavigator />
        </NavigationContainer>
      </CartProvider>
    </SafeAreaProvider>
  );
}
