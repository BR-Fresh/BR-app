import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Colors, Fonts } from '../../constants/theme';
import { useColorScheme } from '../../hooks/use-color-scheme';

import HomeScreen from '../screens/HomeScreen';
import OrdersScreen from '../screens/OrdersScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#000000',
          tabBarInactiveTintColor: '#888888',
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#FFFFFF',
            borderTopColor: Colors.light.outlineVariant + '33',
            elevation: 0,
            borderTopWidth: 1,
            height: 64,
            paddingTop: 6,
            paddingBottom: 8,
            marginBottom: 0,
          },
          tabBarLabelStyle: {
            fontFamily: Fonts.headline,
            fontWeight: '700',
            fontSize: 10,
            marginTop: 2,
          },
          tabBarHideOnKeyboard: true,
        }}
        safeAreaInsets={{ bottom: 0 }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Entypo name="home" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Orders"
          component={OrdersScreen}
          options={{
            title: 'Orders',
            tabBarIcon: ({ color, size }) => (
              <Entypo name="shopping-bag" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}
