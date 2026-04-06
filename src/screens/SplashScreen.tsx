import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Image, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Colors, Fonts } from '../../constants/theme';

export default function SplashScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigation, fadeAnim, scaleAnim]);

  return (
    <View style={styles.container}>
      <View style={styles.backgroundTexture} />
      
      <Animated.View style={[styles.content, { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }]}>
        <View style={styles.logoContainer}>
            <View style={styles.logoContent}>
                <Image 
                  source={require('../../assets/image/icon transparent.png')} 
                  style={{ width: 280, height: 280, resizeMode: 'contain' }} 
                />
            </View>
        </View>
      </Animated.View>

      <View style={styles.loadingContainer}>
        <View style={styles.progressBar}>
           <Animated.View style={styles.progressFill} />
        </View>
        <Text style={styles.loadingText}>CURATING SELECTION</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundTexture: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.1,
    backgroundColor: '#005129',
  },
  content: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 40,
  },
  logoContainer: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  logoContent: {
    alignItems: 'center',
  },
  loadingContainer: {
    position: 'absolute',
    bottom: 64,
    alignItems: 'center',
  },
  progressBar: {
    width: 48,
    height: 2,
    backgroundColor: Colors.light.outlineVariant + '4D',
    borderRadius: 999,
    overflow: 'hidden',
    marginBottom: 16,
  },
  progressFill: {
    width: '40%',
    height: '100%',
    backgroundColor: Colors.light.primary,
    borderRadius: 999,
  },
  loadingText: {
    fontFamily: Fonts.body,
    fontSize: 10,
    fontWeight: '700',
    color: Colors.light.onSurfaceVariant,
    letterSpacing: 2,
  }
});
