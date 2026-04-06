import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors, Fonts } from '../constants/theme';
import { useCart } from '../context/cart-context';
import { IconSymbol } from './ui/icon-symbol';

export function CartFloatingBar({ bottomOffset = 16 }: { bottomOffset?: number }) {
  const { itemCount, items, totalPrice } = useCart();
  const [isVisible, setIsVisible] = useState(itemCount > 0);
  const translateY = useRef(new Animated.Value(itemCount > 0 ? 0 : 100)).current;
  const scaleX = useRef(new Animated.Value(itemCount > 0 ? 1 : 0.5)).current;
  const opacity = useRef(new Animated.Value(itemCount > 0 ? 1 : 0)).current;
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  useEffect(() => {
    if (itemCount > 0) {
      if (!isVisible) setIsVisible(true);
      Animated.parallel([
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true,
          tension: 40,
          friction: 8,
        }),
        Animated.spring(scaleX, {
          toValue: 1,
          useNativeDriver: true,
          tension: 40,
          friction: 8,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    } else if (itemCount === 0 && isVisible) {
      Animated.parallel([
        Animated.timing(scaleX, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setIsVisible(false);
      });
    }
  }, [itemCount]);

  if (!isVisible && itemCount === 0) return null;

  const lastItem = items[items.length - 1];

  return (
    <Animated.View 
      style={[
        styles.container, 
        { 
          bottom: bottomOffset,
          opacity: opacity,
          transform: [
            { translateY: translateY },
            { scaleX: scaleX },
          ]
        }
      ]}
    >
      <TouchableOpacity
        style={styles.bar}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('Cart')}
      >
        <View style={styles.leftSection}>
          <View style={styles.countSquare}>
            <Text style={styles.countText}>{itemCount}</Text>
          </View>
          <View style={styles.infoSection}>
            {lastItem && (
              <Text style={styles.itemName} numberOfLines={1}>
                {lastItem.name}
              </Text>
            )}
            <Text style={styles.totalText}>View cart • ₹{totalPrice}</Text>
          </View>
        </View>

        <View style={styles.rightSection}>
          <Text style={styles.checkoutText}>Checkout</Text>
          <IconSymbol name="chevron.right" size={20} color="white" />
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    zIndex: 1000,
  },
  bar: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    paddingLeft: 12,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
    borderColor: Colors.light.outlineVariant + '33',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  countSquare: {
    width: 32,
    height: 32,
    backgroundColor: Colors.light.primary + '1A',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.light.primary + '33',
  },
  countText: {
    color: Colors.light.primary,
    fontFamily: Fonts.headline,
    fontSize: 14,
    fontWeight: '800',
  },
  infoSection: {
    flex: 1,
  },
  itemName: {
    color: Colors.light.onSurface,
    fontFamily: Fonts.headline,
    fontSize: 13,
    fontWeight: '700',
  },
  totalText: {
    color: Colors.light.onSurfaceVariant,
    fontSize: 11,
    fontWeight: '600',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: Colors.light.primary,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
  },
  checkoutText: {
    color: 'white',
    fontFamily: Fonts.headline,
    fontSize: 14,
    fontWeight: '800',
  }
});
