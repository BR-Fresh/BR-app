import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { IconSymbol } from '../../components/ui/icon-symbol';
import { Colors, Fonts } from '../../constants/theme';
import { useCart } from '../../context/cart-context';
import { ProductCard } from '../../components/product-card';

export default function ProductScreen() {
  const route = useRoute<RouteProp<{ params: { id: string } }>>();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { id } = route.params || {};
  const insets = useSafeAreaInsets();
  const { items, addItem, removeItem } = useCart();
  const cartItem = items.find(item => item.id === 'current-product');
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <View style={styles.container}>
      <SafeAreaView edges={['top']} style={{ flex: 1 }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
            <IconSymbol name="close" size={24} color={Colors.light.onSurface} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Product Details</Text>
          <View style={styles.spacer} />
        </View>

        <ScrollView contentContainerStyle={[styles.scrollContent, { paddingBottom: 120 + insets.bottom }]}>
          <View style={styles.imageSection}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7_YYu3erkZQuZXXy2-UwewD-HzgW7yFQilU20MxBn3DJdBu9xXMi53-O0F9-ncmzTRi2Z_J5S6I3eR0y092mkIVP6HSXUsDweK1KKN4sQsy744rOSDcmQXALvNNmsyxQfFRbcKoKkwrl5Y616JzzFdfnNmiCVsCw2tbKvrHW3RMujx8s78IFJhFjQHXZJqyF99Ktg9zM2R_pb1Yw0IULTDk15hOMAqIWU0VfqYvlEtN3bPzEV-fUncVoqsc1bC21Jrh_k99zW9Zc' }}
              style={styles.productImage}
            />
          </View>

          <View style={styles.infoSection}>
            <View style={styles.titleRow}>
              <View>
                <Text style={styles.brandName}>Amul</Text>
                <Text style={styles.productName}>Amul Taaza Toned Milk</Text>
              </View>
              <View style={styles.vegBadge}>
                <View style={styles.vegDot} />
              </View>
            </View>

            <View style={styles.priceSection}>
              <Text style={styles.priceText}>₹30</Text>
              <Text style={styles.mrpText}>MRP ₹32</Text>
              <View style={styles.discountBadge}>
                <Text style={styles.discountText}>6% OFF</Text>
              </View>
            </View>


            <View style={styles.shelfLifeBadge}>
              <IconSymbol name="schedule" size={16} color={Colors.light.primary} />
              <Text style={styles.shelfLifeText}>Shelf Life: 2 Days</Text>
            </View>

            <View style={styles.detailsContainer}>
              <Text style={styles.detailsTitle}>Product Details</Text>
              <Text style={styles.detailsText}>
                Freshly sourced toned milk from Amul. High in calcium and essential vitamins.
                Perfect for your daily nutritional needs and morning coffee.
              </Text>
            </View>

            <View style={styles.relatedSection}>
              <Text style={styles.detailsTitle}>Related Products</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.relatedRow}>
                {[
                  { id: 'rel-1', name: 'Amul Gold', size: '500ml', price: '35', uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7_YYu3erkZQuZXXy2-UwewD-HzgW7yFQilU20MxBn3DJdBu9xXMi53-O0F9-ncmzTRi2Z_J5S6I3eR0y092mkIVP6HSXUsDweK1KKN4sQsy744rOSDcmQXALvNNmsyxQfFRbcKoKkwrl5Y616JzzFdfnNmiCVsCw2tbKvrHW3RMujx8s78IFJhFjQHXZJqyF99Ktg9zM2R_pb1Yw0IULTDk15hOMAqIWU0VfqYvlEtN3bPzEV-fUncVoqsc1bC21Jrh_k99zW9Zc' },
                  { id: 'rel-2', name: 'Amul SlimnTrim', size: '500ml', price: '28', uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7_YYu3erkZQuZXXy2-UwewD-HzgW7yFQilU20MxBn3DJdBu9xXMi53-O0F9-ncmzTRi2Z_J5S6I3eR0y092mkIVP6HSXUsDweK1KKN4sQsy744rOSDcmQXALvNNmsyxQfFRbcKoKkwrl5Y616JzzFdfnNmiCVsCw2tbKvrHW3RMujx8s78IFJhFjQHXZJqyF99Ktg9zM2R_pb1Yw0IULTDk15hOMAqIWU0VfqYvlEtN3bPzEV-fUncVoqsc1bC21Jrh_k99zW9Zc' },
                  { id: 'rel-3', name: 'Amul Cow Milk', size: '500ml', price: '32', uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7_YYu3erkZQuZXXy2-UwewD-HzgW7yFQilU20MxBn3DJdBu9xXMi53-O0F9-ncmzTRi2Z_J5S6I3eR0y092mkIVP6HSXUsDweK1KKN4sQsy744rOSDcmQXALvNNmsyxQfFRbcKoKkwrl5Y616JzzFdfnNmiCVsCw2tbKvrHW3RMujx8s78IFJhFjQHXZJqyF99Ktg9zM2R_pb1Yw0IULTDk15hOMAqIWU0VfqYvlEtN3bPzEV-fUncVoqsc1bC21Jrh_k99zW9Zc' },
                ].map((prod: any, i) => (
                  <ProductCard 
                    key={i} 
                    product={prod} 
                    onPress={() => navigation.navigate('Product', { id: prod.id })}
                    style={{ width: 140, flex: 0, minWidth: 0 }}
                  />
                ))}
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

      <View style={[styles.footer, { paddingBottom: Math.max(insets.bottom, 24) }]}>
        {quantity > 0 ? (
          <View style={{ flex: 1, flexDirection: 'row', gap: 16 }}>
            <View style={styles.quantitySection}>
              <TouchableOpacity style={styles.qtyBtn} onPress={() => removeItem('current-product')}>
                <IconSymbol name="remove" size={20} color="white" />
              </TouchableOpacity>
              <View style={styles.qtyBox}>
                <Text style={styles.qtyText}>{quantity}</Text>
              </View>
              <TouchableOpacity style={styles.qtyBtn} onPress={() => addItem({ id: 'current-product', name: 'Amul Taaza Toned Milk', price: '30' })}>
                <IconSymbol name="add" size={20} color="white" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.addToCartBtn} onPress={() => navigation.navigate('Cart')}>
              <Text style={styles.addToCartText}>View Cart</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            style={[styles.addToCartBtn, { height: 56 }]}
            onPress={() => addItem({ id: 'current-product', name: 'Amul Taaza Toned Milk', price: '30' })}
          >
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.light.background },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    justifyContent: 'space-between'
  },
  closeButton: { padding: 8 },
  headerTitle: { fontFamily: Fonts.headline, fontSize: 16, fontWeight: '800' },
  cartButton: { padding: 8, position: 'relative' },
  cartBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: Colors.light.secondary,
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: Colors.light.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartBadgeText: {
    fontSize: 10,
    fontWeight: '800',
    color: Colors.light.onSecondary,
  },
  spacer: { width: 40 },
  scrollContent: { paddingBottom: 40 },
  imageSection: {
    aspectRatio: 1,
    backgroundColor: Colors.light.surfaceContainerLow,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    borderRadius: 32,
    overflow: 'hidden'
  },
  productImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  infoSection: { padding: 24 },
  titleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 },
  brandName: { fontSize: 14, fontWeight: '700', color: Colors.light.primary, marginBottom: 4 },
  productName: { fontFamily: Fonts.headline, fontSize: 24, fontWeight: '800', color: Colors.light.onSurface },
  vegBadge: { width: 20, height: 20, borderWidth: 1, borderColor: '#005129', alignItems: 'center', justifyContent: 'center' },
  vegDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#005129' },
  priceSection: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 20 },
  priceText: { fontFamily: Fonts.headline, fontSize: 28, fontWeight: '800', color: Colors.light.onSurface },
  mrpText: { fontSize: 16, color: Colors.light.onSurfaceVariant, textDecorationLine: 'line-through' },
  discountBadge: { backgroundColor: Colors.light.secondaryContainer, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
  discountText: { color: Colors.light.onSecondaryContainer, fontSize: 12, fontWeight: '800' },
  shelfLifeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: Colors.light.surfaceContainerHigh,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginBottom: 32
  },
  shelfLifeText: { fontSize: 13, fontWeight: '700', color: Colors.light.onSurfaceVariant },
  detailsContainer: { marginBottom: 32 },
  detailsTitle: { fontFamily: Fonts.headline, fontSize: 18, fontWeight: '800', marginBottom: 12, color: Colors.light.onSurface },
  detailsText: { fontSize: 15, lineHeight: 24, color: Colors.light.onSurfaceVariant, fontWeight: '500' },
  relatedSection: {},
  relatedRow: { gap: 16 },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 24,
    flexDirection: 'row',
    gap: 16,
    borderTopWidth: 1,
    borderTopColor: Colors.light.surfaceContainer,
  },
  quantitySection: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: Colors.light.secondary, 
    borderRadius: 16, 
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.light.secondary,
  },
  qtyBtn: { 
    width: 48,
    height: 48,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  qtyBox: {
    backgroundColor: 'white',
    width: 60,
    height: 48,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  qtyText: { fontFamily: Fonts.headline, fontSize: 18, fontWeight: '800', color: Colors.light.onSurface },
  addToCartBtn: {
    flex: 1,
    backgroundColor: Colors.light.primary,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.light.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8
  },
  addToCartText: { color: 'white', fontFamily: Fonts.headline, fontSize: 18, fontWeight: '700' }
});
