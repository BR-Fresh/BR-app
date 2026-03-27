import { Tabs } from 'expo-router';
import React from 'react';
import { View, Platform, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors, Fonts } from '../../constants/theme';
import { useColorScheme } from '../../hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, backgroundColor: '#000000' }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#A5F4B8',
          tabBarInactiveTintColor: '#9DA29D',
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#1A1A1A',
            borderTopColor: '#2C2F2C',
            elevation: 0,
            borderTopWidth: 1,
            // Fixed height - do NOT include insets.bottom
            // so the tab bar stops ABOVE the system nav area
            height: 64,
            paddingTop: 6,
            paddingBottom: 8,
            // Remove any safe area margin the tab bar adds by default
            marginBottom: 0,
          },
          tabBarLabelStyle: {
            fontFamily: Fonts.headline,
            fontWeight: '700',
            fontSize: 10,
            marginTop: 2,
          },
          // This is the key: tell the tab bar to NOT handle safe area itself
          tabBarHideOnKeyboard: true,
        }}
        safeAreaInsets={{ bottom: 0 }}
      >

        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <Text style={{ fontSize: 22 }}>{focused ? '🏠' : '🏡'}</Text>
            ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: 'Search',
            tabBarIcon: ({ color, focused }) => (
              <Text style={{ fontSize: 22 }}>{focused ? '🔍' : '🔎'}</Text>
            ),
          }}
        />
        <Tabs.Screen
          name="orders"
          options={{
            title: 'Orders',
            tabBarIcon: ({ color, focused }) => (
              <Text style={{ fontSize: 22 }}>{focused ? '🛍️' : '📦'}</Text>
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, focused }) => (
              <Text style={{ fontSize: 22 }}>{focused ? '👤' : '👥'}</Text>
            ),
          }}
        />
      </Tabs>

      {/* This black spacer sits between the tab bar and the screen edge,
          filling the system navigation area with pure black */}
      <View style={{ height: insets.bottom, backgroundColor: '#000000' }} />
    </View>
  );
}
