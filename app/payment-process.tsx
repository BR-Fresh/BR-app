import { router } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity, 
  ActivityIndicator,
  Animated,
  Easing
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Fonts } from '../constants/theme';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function PaymentProcessScreen() {
  const [status, setStatus] = useState<'processing' | 'choice' | 'success' | 'failed'>('processing');

  // Multi-step animation values
  const ringScale = useRef(new Animated.Value(0)).current;
  const ringOpacity = useRef(new Animated.Value(0.6)).current;
  const circleScale = useRef(new Animated.Value(0)).current;
  const iconOpacity = useRef(new Animated.Value(0)).current;
  const iconScale = useRef(new Animated.Value(0.3)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;
  const textTranslateY = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus('choice');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const runResultAnimation = (isSuccess: boolean) => {
    // Reset all values
    ringScale.setValue(0);
    ringOpacity.setValue(0.6);
    circleScale.setValue(0);
    iconOpacity.setValue(0);
    iconScale.setValue(0.3);
    textOpacity.setValue(0);
    textTranslateY.setValue(30);

    setStatus(isSuccess ? 'success' : 'failed');

    // Step 1: Ring expands outward and fades
    // Step 2: Circle scales up with a springy bounce
    // Step 3: Icon fades in and scales up
    // Step 4: Text slides up and fades in
    Animated.sequence([
      // Step 1 + 2 together
      Animated.parallel([
        Animated.timing(ringScale, {
          toValue: 1.6,
          duration: 600,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.timing(ringOpacity, {
          toValue: 0,
          duration: 600,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.spring(circleScale, {
          toValue: 1,
          tension: 60,
          friction: 6,
          useNativeDriver: true,
          delay: 100,
        }),
      ]),
      // Step 3: icon pops in
      Animated.parallel([
        Animated.spring(iconScale, {
          toValue: 1,
          tension: 100,
          friction: 8,
          useNativeDriver: true,
        }),
        Animated.timing(iconOpacity, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]),
      // Step 4: text slides in
      Animated.parallel([
        Animated.timing(textOpacity, {
          toValue: 1,
          duration: 400,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.timing(textTranslateY, {
          toValue: 0,
          duration: 400,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
      ]),
    ]).start();

    // Navigate after animation completes
    setTimeout(() => {
      if (isSuccess) {
        router.replace('/tracking');
      } else {
        router.back();
      }
    }, 3000);
  };

  const handleSuccess = () => runResultAnimation(true);
  const handleDecline = () => runResultAnimation(false);

  const isSuccess = status === 'success';
  const isFailed = status === 'failed';
  const showResult = isSuccess || isFailed;

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {status === 'processing' && (
          <View style={styles.centerSection}>
             <ActivityIndicator size="large" color={Colors.light.primary} />
             <Text style={styles.statusText}>Connecting to Payment Gateway...</Text>
          </View>
        )}

        {status === 'choice' && (
          <View style={styles.choiceSection}>
             <View style={styles.iconCircle}>
                <AntDesign name="bank" size={48} color={Colors.light.primary} />
             </View>
             <Text style={styles.title}>Confirm Payment</Text>
             <Text style={styles.subtitle}>Please approve the transaction of ₹342 from your bank app.</Text>
             
             <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.btn, styles.successBtn]} onPress={handleSuccess}>
                   <Text style={styles.btnText}>Success</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, styles.failBtn]} onPress={handleDecline}>
                   <Text style={styles.btnText}>Decline</Text>
                </TouchableOpacity>
             </View>
          </View>
        )}

        {showResult && (
          <View style={[styles.centerSection, StyleSheet.absoluteFill, { backgroundColor: 'white', zIndex: 100, justifyContent: 'center' }]}>
             {/* Expanding ring pulse */}
             <View style={styles.ringContainer}>
                <Animated.View style={[
                  styles.ringPulse,
                  { 
                    borderColor: isSuccess ? Colors.light.secondary : '#FF3B30',
                    transform: [{ scale: ringScale }],
                    opacity: ringOpacity
                  }
                ]} />
             </View>

             {/* Main circle */}
             <Animated.View style={{ transform: [{ scale: circleScale }] }}>
                <View style={[styles.resultCircle, { backgroundColor: isSuccess ? Colors.light.secondary : '#FF3B30', shadowColor: isSuccess ? Colors.light.secondary : '#FF3B30' }]}>
                   {/* Icon inside circle */}
                   <Animated.View style={{ opacity: iconOpacity, transform: [{ scale: iconScale }] }}>
                     {isSuccess ? (
                       <MaterialIcons name="check" size={64} color="white" />
                     ) : (
                       <MaterialIcons name="close" size={64} color="white" />
                     )}
                   </Animated.View>
                </View>
             </Animated.View>

             {/* Text with slide-up animation */}
             <Animated.View style={{ opacity: textOpacity, transform: [{ translateY: textTranslateY }], alignItems: 'center', gap: 8 }}>
                <Text style={styles.statusText}>
                  {isSuccess ? 'Payment Successful!' : 'Payment Declined'}
                </Text>
                <Text style={styles.subStatus}>
                  {isSuccess ? 'Delivering to: B-45, Green Valley...' : 'Please check your payment details'}
                </Text>
             </Animated.View>
          </View>
        )}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  centerSection: { alignItems: 'center', gap: 24 },
  ringContainer: { position: 'absolute', alignItems: 'center', justifyContent: 'center' },
  ringPulse: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    backgroundColor: 'transparent',
  },
  resultCircle: {
     width: 120,
     height: 120,
     borderRadius: 60,
     alignItems: 'center',
     justifyContent: 'center',
     shadowOffset: { width: 0, height: 8 },
     shadowOpacity: 0.35,
     shadowRadius: 20,
     elevation: 12,
  },
  statusText: { fontFamily: Fonts.headline, fontSize: 24, fontWeight: '800', color: Colors.light.onSurface, marginTop: 12 },
  subStatus: { fontSize: 16, color: Colors.light.onSurfaceVariant, fontWeight: '500' },
  choiceSection: { width: '100%', paddingHorizontal: 40, alignItems: 'center' },
  iconCircle: { width: 100, height: 100, borderRadius: 50, backgroundColor: Colors.light.primary + '1A', alignItems: 'center', justifyContent: 'center', marginBottom: 32 },
  title: { fontFamily: Fonts.headline, fontSize: 28, fontWeight: '800', marginBottom: 16, color: Colors.light.onSurface },
  subtitle: { textAlign: 'center', fontSize: 16, lineHeight: 24, color: Colors.light.onSurfaceVariant, marginBottom: 48 },
  buttonContainer: { width: '100%', gap: 16 },
  btn: { width: '100%', paddingVertical: 18, borderRadius: 20, alignItems: 'center' },
  successBtn: { backgroundColor: Colors.light.secondary },
  failBtn: { backgroundColor: '#FF3B30' },
  btnText: { color: 'white', fontFamily: Fonts.headline, fontSize: 18, fontWeight: '800' }
});
