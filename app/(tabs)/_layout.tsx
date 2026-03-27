import { Tabs } from 'expo-router';
import React from 'react';
import { View, Platform, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors, Fonts } from '../../constants/theme';
import { useColorScheme } from '../../hooks/use-color-scheme';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#000000',
          tabBarInactiveTintColor: '#888888',
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#FFFFFF',
            borderTopColor: Colors.light.outlineVariant + '33',
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
            tabBarIcon: ({ color, size }) => (
              <Entypo name="home" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="orders"
          options={{
            title: 'Orders',
            tabBarIcon: ({ color, size }) => (
              <Entypo name="shopping-bag" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}
