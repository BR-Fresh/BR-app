import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  ViewStyle 
} from 'react-native';
import { Colors, Fonts } from '../constants/theme';
import { IconSymbol } from './ui/icon-symbol';

interface Product {
  name: string;
  size: string;
  price: string;
  uri?: string;
}

interface ProductCardProps {
  product: Product;
  onPress?: () => void;
  style?: ViewStyle;
}

export function ProductCard({ product, onPress, style }: ProductCardProps) {
  const fallbackImage = require('../assets/image/logo.png');

  return (
    <TouchableOpacity 
      style={[styles.productCard, style]} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.productImageBg}>
        <Image 
          source={product.uri ? { uri: product.uri } : fallbackImage} 
          style={styles.productImage} 
        />
      </View>
      <View style={styles.productInfo}>
        <Text style={styles.productName} numberOfLines={1}>{product.name}</Text>
        <Text style={styles.productSize}>{product.size}</Text>
        <View style={styles.productPriceRow}>
          <Text style={styles.productPrice}>₹{product.price}</Text>
          <TouchableOpacity style={styles.addButton} activeOpacity={0.6}>
            <IconSymbol name="add" size={12} color={Colors.light.onSecondary} />
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  productCard: {
    flex: 1,
    minWidth: '30%',
    backgroundColor: Colors.light.surfaceContainerLowest,
    borderRadius: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: Colors.light.outlineVariant + '33',
  },
  productImageBg: {
    aspectRatio: 1,
    backgroundColor: Colors.light.surfaceContainerLow,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.light.outlineVariant + '33',
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  productInfo: {
    gap: 2,
  },
  productName: {
    fontFamily: Fonts.headline,
    fontWeight: '700',
    fontSize: 11,
    color: Colors.light.onSurface,
  },
  productSize: {
    fontSize: 9,
    fontWeight: '600',
    color: Colors.light.onSurfaceVariant,
  },
  productPriceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  productPrice: {
    fontFamily: Fonts.headline,
    fontSize: 13,
    fontWeight: '800',
    color: Colors.light.primary,
  },
  addButton: {
    backgroundColor: Colors.light.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 6,
  },
  addButtonText: {
    color: Colors.light.onSecondary,
    fontSize: 10,
    fontWeight: '800',
  }
});
