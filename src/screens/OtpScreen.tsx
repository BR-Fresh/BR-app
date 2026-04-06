import React, { useState, useRef } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform,
  Image
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Colors, Fonts } from '../../constants/theme';

export default function OtpScreen() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputs = useRef<Array<TextInput | null>>([]);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const handleOtpChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text.length === 1 && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flex}
      >
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerBrand}>BR Fresh</Text>
          <View style={styles.spacer} />
        </View>

        <View style={styles.content}>
          <View style={styles.textSection}>
            <Text style={styles.title}>Verify OTP</Text>
            <Text style={styles.subtitle}>
              Enter the 6-digit code sent to <Text style={styles.boldText}>+91 9876543210</Text>
            </Text>
          </View>

          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => { inputs.current[index] = ref; }}
                style={styles.otpInput}
                value={digit}
                onChangeText={(text) => handleOtpChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                keyboardType="numeric"
                maxLength={1}
                placeholder="•"
                placeholderTextColor={Colors.light.primary}
              />
            ))}
          </View>

          <View style={styles.actionSection}>
            <View style={styles.timerBadge}>
              <Text style={styles.timerText}>Resend OTP in 00:30</Text>
            </View>

            <TouchableOpacity 
              style={styles.verifyButton}
              onPress={() => navigation.replace('MainTabs')}
            >
              <Text style={styles.verifyText}>Verify and Proceed</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.helpText}>
                Having trouble? <Text style={styles.helpLink}>Get help</Text>
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.decorativeFooter}>
             <View style={styles.imageOuter}>
                 <Image 
                    source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAB2K_NFWIOYhZloOR61klbGXu1gBdxYVSKiO3owoiDRS4kjjGhvNAW0Migo35Wp4IZdfxtcT5w6u51fOslns3nSmliX2h9iU3Q7wvJRg_aC1H3hmguOMiIQuZfowXzamda6Wtgn8oySKp-KwbO4llU7N2u5e049clNl4bsg9hV5lp8mqSx656Z71YuTrjvFVUu_7UW-D37JMaHjsZbE2PslB5Ps1xkQamnZ9GqSBb-J0mPXqfQk94cxIGKunGdJYKH9ffcAoy6BXk' }}
                    style={styles.footerImage}
                 />
             </View>
             <Text style={styles.footerBrandText}>SOURCED FROM LOCAL CURATORS</Text>
          </View>
        </View>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
  },
  backButton: {
    padding: 8,
    borderRadius: 999,
    backgroundColor: Colors.light.surfaceContainerLow,
  },
  backButtonText: {
    fontSize: 24,
    color: Colors.light.onSurface,
  },
  headerBrand: {
    fontFamily: Fonts.headline,
    fontWeight: '700',
    fontSize: 20,
    fontStyle: 'italic',
    color: Colors.light.primaryContainer,
  },
  spacer: {
    width: 40,
  },
  content: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 48,
  },
  textSection: {
    marginBottom: 40,
  },
  title: {
    fontFamily: Fonts.headline,
    fontSize: 32,
    fontWeight: '700',
    color: Colors.light.onSurface,
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: Fonts.body,
    fontSize: 16,
    color: Colors.light.onSurfaceVariant,
    lineHeight: 24,
    fontWeight: '500',
  },
  boldText: {
    color: Colors.light.primary,
    fontWeight: '600',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 40,
  },
  otpInput: {
    flex: 1,
    height: 64,
    backgroundColor: Colors.light.surfaceContainerLow,
    borderRadius: 12,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: Fonts.headline,
    fontWeight: '700',
    color: Colors.light.primary,
  },
  actionSection: {
    alignItems: 'center',
    gap: 24,
  },
  timerBadge: {
    backgroundColor: Colors.light.surfaceContainer,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 999,
  },
  timerText: {
    fontFamily: Fonts.body,
    fontSize: 14,
    fontWeight: '600',
    color: Colors.light.onSurfaceVariant,
  },
  verifyButton: {
    backgroundColor: Colors.light.secondary,
    width: '100%',
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
  verifyText: {
    fontFamily: Fonts.headline,
    fontSize: 18,
    fontWeight: '700',
    color: Colors.light.onSecondary,
  },
  helpText: {
    fontFamily: Fonts.body,
    fontSize: 14,
    fontWeight: '600',
    color: Colors.light.onSurfaceVariant,
  },
  helpLink: {
    color: Colors.light.secondary,
    textDecorationLine: 'underline',
  },
  decorativeFooter: {
    marginTop: 'auto',
    marginBottom: 32,
    alignItems: 'center',
  },
  imageOuter: {
      width: 96,
      height: 96,
      borderRadius: 48,
      borderWidth: 4,
      borderColor: Colors.light.surfaceContainerLowest,
      backgroundColor: Colors.light.primaryFixed,
      overflow: 'hidden',
      marginBottom: 24,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
  },
  footerImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
  },
  footerBrandText: {
      fontFamily: Fonts.body,
      fontSize: 11,
      fontWeight: '600',
      color: Colors.light.outline,
      letterSpacing: 1.5,
  }
});
