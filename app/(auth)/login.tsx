import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  KeyboardAvoidingView, 
  Platform,
  ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors, Fonts } from '../../constants/theme';
import { router } from 'expo-router';
import { IconSymbol } from '../../components/ui/icon-symbol';

export default function LoginScreen() {
  const [phone, setPhone] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flex}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          scrollEnabled={false}
        >
          {/* Illustration Container */}
          <View style={styles.illustrationContainer}>
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_ctxkqO1TVdJkrzSMwAGxpGVvlNkerC5f_jdrhnbpkyiSOOZU0iIx4X8_hbJVZxiC6fgRyLQZxDOryAZt0dpNWG0w6JXQciQ2N5l_1a9hYT1FYAQ8peoKSZkzv-FRTnIJJSpiVar1anhKNXDEaHUq4yZyIeZqRtxwbUbxXzY3R1ndraJKw5YsDkd9ln6bF6qLpqaVflWA475wASw5PZCfPaPbP-HwqGkqj1t0w-E56lOGEbq3cVHmbtzTvVQNyCxO6rKp9ZVZx-4' }}
              style={styles.illustration}
            />
            <View style={styles.tonalOverlay} />
          </View>

          {/* Typography */}
          <View style={styles.headerSection}>
            <Text style={styles.title}>Enter your phone number</Text>
            <Text style={styles.subtitle}>
              We will send you a one-time password to verify your account.
            </Text>
          </View>

          {/* Input Section */}
          <View style={styles.inputSection}>
            <View style={styles.phoneInputContainer}>
              <View style={styles.countryPrefix}>
                <Text style={styles.prefixText}>+91</Text>
              </View>
              <TextInput 
                style={styles.input}
                placeholder="98765 43210"
                placeholderTextColor={Colors.light.outlineVariant}
                keyboardType="phone-pad"
                maxLength={10}
                value={phone}
                onChangeText={setPhone}
              />
            </View>

            <TouchableOpacity 
              style={styles.ctaButton}
              onPress={() => router.push('/(auth)/otp')}
            >
              <Text style={styles.ctaText}>Send OTP</Text>
            </TouchableOpacity>
          </View>

          {/* Footer moved inside ScrollView */}
          <View style={styles.footer}>
            <View style={styles.footerBadge}>
              <Text style={styles.footerText}>
                By continuing you agree to our{' '}
                <Text style={styles.linkText}>Terms of Service</Text> and{' '}
                <Text style={styles.linkText}>Privacy Policy</Text>.
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  flex: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 32,
    paddingTop: 32,
    alignItems: 'center',
  },
  illustrationContainer: {
    width: '100%',
    aspectRatio: 1,
    maxHeight: 320,
    backgroundColor: Colors.light.surfaceContainerLow,
    borderRadius: 24,
    overflow: 'hidden',
    marginBottom: 24,
  },
  illustration: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.9,
  },
  tonalOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.light.primary + '0D', // 5% opacity
  },
  headerSection: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontFamily: Fonts.headline,
    fontSize: 28,
    fontWeight: '700',
    color: Colors.light.onSurface,
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontFamily: Fonts.body,
    fontSize: 14,
    color: Colors.light.onSurfaceVariant,
    textAlign: 'center',
    maxWidth: 260,
    lineHeight: 20,
  },
  inputSection: {
    width: '100%',
    gap: 24,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.light.surfaceContainerLow,
    borderRadius: 16,
    height: 64,
  },
  countryPrefix: {
    paddingHorizontal: 16,
    borderRightWidth: 1,
    borderRightColor: Colors.light.outlineVariant + '33', // 20% opacity
  },
  prefixText: {
    fontFamily: Fonts.headline,
    fontSize: 16,
    fontWeight: '600',
    color: Colors.light.onSurface,
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    fontSize: 18,
    fontWeight: '600',
    fontFamily: Fonts.headline,
    color: Colors.light.onSurface,
  },
  ctaButton: {
    backgroundColor: Colors.light.secondary,
    height: 64,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.light.secondary,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.15,
    shadowRadius: 32,
    elevation: 8,
  },
  ctaText: {
    fontFamily: Fonts.headline,
    fontSize: 18,
    fontWeight: '700',
    color: Colors.light.onSecondary,
  },
  footer: {
    paddingBottom: 24,
    width: '100%',
    marginTop: 32,
  },
  footerBadge: {
    backgroundColor: Colors.light.surfaceContainerLow + '80', // 50% opacity
    padding: 16,
    borderRadius: 16,
  },
  footerText: {
    fontFamily: Fonts.body,
    fontSize: 11,
    color: Colors.light.onSurfaceVariant,
    textAlign: 'center',
    lineHeight: 16,
  },
  linkText: {
    fontFamily: Fonts.body,
    fontWeight: '600',
    color: Colors.light.primary,
    textDecorationLine: 'underline',
  },
});
