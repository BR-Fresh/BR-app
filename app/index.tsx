import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image, Animated } from 'react-native';
import { Colors, Fonts } from '../constants/theme';
import { router } from 'expo-router';

export default function SplashScreen() {
  const fadeAnim = new Animated.Value(0);
  const scaleAnim = new Animated.Value(0.9);

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
      router.replace('/(auth)/login');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.backgroundTexture} />
      
      <Animated.View style={[styles.content, { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }]}>
        <View style={styles.logoContainer}>
            <View style={styles.logoBg1} />
            <View style={styles.logoBg2} />
            <View style={styles.logoContent}>
                <Text style={styles.logoIcon}>🍃</Text>
                <Text style={styles.logoIconSub}>🧺</Text>
            </View>
        </View>

        <View style={styles.brandInfo}>
          <Text style={styles.brandName}>BR Fresh</Text>
          <Text style={styles.brandSlogan}>Fresh from your neighbourhood.</Text>
        </View>

        <View style={styles.editorialGrid}>
            <Image 
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDldgPs9mq8nEMDP4taa-tMTbGuH40I0cfEvcxS-CvOY5gw-e3l_DTZxACJwDoOSR2RUVE7H6SAwYnQIdsRy7naP39kj-voNfcCienbM6zuPvI0BpLX8bC08NDADS7ODjxq2ZLnrmwchjgqtH9s7o0X5mcZlgrX0wm4-jzbmrzjzqupMCscQa4u6Jd8OzXH9VPn5Ff4_8sD4bM5SYAyqIBwz5c0jzVReRqd5nCBRs1H24PUFBaMIF96LUe0zRjpgVcbWwtfv9lGqC8' }}
                style={[styles.editorialImage, styles.imageRotateLeft]}
            />
            <Image 
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfhblyNtK1ZAmC8qi9L1jSvLYRhGbTtjER5TFhSKKSVK-T9GHnEyBkrcvsPxsYk0eyxf3tACpvn8bfwraVD8XWbfbHnd4-UwjfK73OOL6dgpY7mxnCWOGayZP-z-GTvc0CwwYn8dleRoTEWGoLh1dTy9tSOfLSDic3kJs5kCpntxi1Nfj4RRtocDvKytGyZJ40Pfd2YJmWo5dJsc3LreFxiynAN_PjW7bpz6DNSRAUZLVVJL_4fdoW01FDDSz8cNyd_O0_Kw9Mfqg' }}
                style={[styles.editorialImage, styles.imageRotateRight]}
            />
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
    backgroundColor: '#005129', // Subtle texture bias
  },
  content: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 40,
  },
  logoContainer: {
    width: 128,
    height: 128,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  logoBg1: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.light.surfaceContainerLowest,
    borderRadius: 40,
    transform: [{ rotate: '12deg' }],
    shadowColor: Colors.light.onSurface,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.04,
    shadowRadius: 32,
  },
  logoBg2: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 40,
    transform: [{ rotate: '-6deg' }],
  },
  logoContent: {
    alignItems: 'center',
  },
  logoIcon: {
    fontSize: 48,
  },
  logoIconSub: {
    fontSize: 48,
    marginTop: -20,
  },
  brandInfo: {
    alignItems: 'center',
    marginBottom: 48,
  },
  brandName: {
    fontFamily: Fonts.headline,
    fontSize: 48,
    fontWeight: '800',
    color: Colors.light.primary,
    fontStyle: 'italic',
    letterSpacing: -1,
  },
  brandSlogan: {
    fontFamily: Fonts.body,
    fontSize: 18,
    color: Colors.light.onSurfaceVariant,
    opacity: 0.8,
    textAlign: 'center',
    lineHeight: 28,
  },
  editorialGrid: {
    flexDirection: 'row',
    gap: 16,
    width: '100%',
    justifyContent: 'center',
  },
  editorialImage: {
    width: 140,
    height: 140,
    borderRadius: 24,
    backgroundColor: Colors.light.surfaceContainerLowest,
  },
  imageRotateLeft: {
    transform: [{ rotate: '2deg' }],
  },
  imageRotateRight: {
    transform: [{ rotate: '-3deg' }, { translateY: 16 }],
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
