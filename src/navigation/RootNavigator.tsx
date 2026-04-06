import React from 'react';
import { View, StatusBar as RNStatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import OtpScreen from '../screens/OtpScreen';
import StoreScreen from '../screens/StoreScreen';
import ProductScreen from '../screens/ProductScreen';
import CartScreen from '../screens/CartScreen';
import TrackingScreen from '../screens/TrackingScreen';
import SearchScreen from '../screens/SearchScreen';
import PaymentScreen from '../screens/PaymentScreen';
import TabNavigator from './TabNavigator';

import { CartFloatingBar } from '../../components/cart-floating-bar';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const insets = useSafeAreaInsets();
  
  return (
    <View style={{ flex: 1, backgroundColor: '#000000' }}>
      <RNStatusBar barStyle="dark-content" />
      <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#FFFFFF' } }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Otp" component={OtpScreen} />
        <Stack.Screen name="MainTabs" component={TabNavigator} />
        <Stack.Screen name="Store" component={StoreScreen} />
        <Stack.Screen name="Product" component={ProductScreen} options={{ presentation: 'modal' }} />
        <Stack.Screen name="Cart" component={CartScreen} options={{ animation: 'slide_from_bottom' }} />
        <Stack.Screen name="Tracking" component={TrackingScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
      </Stack.Navigator>

      {/* Floating cart bar requires navigation context wrapper inside its own implementation or handled via Redux/Context */}
      
      {/* Universal Black System Navigation Bar area */}
      <View style={{ height: insets.bottom, backgroundColor: '#000000' }} />
    </View>
  );
}
