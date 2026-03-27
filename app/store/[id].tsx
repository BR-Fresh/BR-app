import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Fonts } from '../../constants/theme';
import { IconSymbol } from '../../components/ui/icon-symbol';
import { router, useLocalSearchParams } from 'expo-router';
import { ProductCard } from '../../components/product-card';

export default function StoreScreen() {
  const { id } = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <IconSymbol name="arrow_back" size={24} color={Colors.light.onSurface} />
        </TouchableOpacity>
        <View style={styles.headerInfo}>
          <Text style={styles.storeName}>Sharma General Store</Text>
          <Text style={styles.storeAddress}>Sector 21, Chandigarh</Text>
        </View>
        <TouchableOpacity style={styles.cartButton}>
          <IconSymbol name="shopping_cart" size={24} color={Colors.light.onSurface} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} stickyHeaderIndices={[1]}>
        {/* Hero */}
        <View style={styles.heroSection}>
          <Image 
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmkIdldCPeKnJXcXtPkaJUWoMS7eHLGS0Hykq7s1IL4RSeOYd8j1xiO1v0opZ-DfXVpN43DPQ63ovpVfhbPx8uYh9LjVbbt_nD_FEe8DBRuOkg1ZKAv-B0WpWbEouJDIEZBBks_dsVtFNONZnHWLnXzUIMML-eYO53IejxXgIJ8hLGIXkki6xJezAHAbYf1gcex9UzEfY-6uThB2Kls5Rphmi7zPtzXoZkkcyu49OD-dzh8e2cjD_dxesGb6KimxSWqz--TTnB2qY' }}
            style={styles.heroImage}
          />
          <View style={styles.heroOverlay}>
             <View style={styles.storeBadge}>
                 <Text style={styles.badgeText}>TOP RATED</Text>
             </View>
             <Text style={styles.heroTitle}>Sourced with care, for your kitchen.</Text>
          </View>
        </View>

        {/* Sticky Search & Filter */}
        <View style={styles.filterSection}>
          <View style={styles.storeSearchBar}>
            <IconSymbol name="search" size={20} color={Colors.light.outline} />
            <TextInput 
              placeholder="Search in this store..."
              style={styles.storeSearchInput}
            />
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.shelfRow}>
             {['All', 'Dairy', 'Vegetables', 'Fruits', 'Staples'].map((cat, i) => (
               <TouchableOpacity key={i} style={[styles.shelfBadge, i === 0 && styles.activeShelf]}>
                 <Text style={[styles.shelfText, i === 0 && styles.activeShelfText]}>{cat}</Text>
               </TouchableOpacity>
             ))}
          </ScrollView>
        </View>

        {/* Product Grid */}
        <View style={styles.productGrid}>
           {[
             { name: 'Amul Taaza Milk', size: '500ml', price: '30' },
             { name: 'Organic Tomatoes', size: '500g', price: '45' },
             { name: 'Mother Dairy Ghee', size: '1kg', price: '640' },
             { name: 'Basmati Rice', size: '5kg', price: '550' },
           ].map((prod: any, i) => (
             <ProductCard 
               key={i} 
               product={prod} 
               onPress={() => router.push('/product/1')} 
             />
           ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.light.background },
  header: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 16, 
    gap: 16,
    backgroundColor: Colors.light.background,
  },
  backButton: { padding: 8 },
  headerInfo: { flex: 1 },
  storeName: { fontFamily: Fonts.headline, fontSize: 18, fontWeight: '800', color: Colors.light.onSurface },
  storeAddress: { fontSize: 12, color: Colors.light.onSurfaceVariant },
  cartButton: { padding: 8 },
  scrollContent: { paddingBottom: 100 },
  heroSection: { height: 240, position: 'relative' },
  heroImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  heroOverlay: { 
    ...StyleSheet.absoluteFillObject, 
    backgroundColor: 'rgba(0,0,0,0.3)', 
    padding: 24, 
    justifyContent: 'flex-end' 
  },
  storeBadge: { 
    backgroundColor: Colors.light.primaryContainer, 
    paddingHorizontal: 8, 
    paddingVertical: 4, 
    borderRadius: 99, 
    alignSelf: 'flex-start',
    marginBottom: 8 
  },
  badgeText: { color: 'white', fontSize: 10, fontWeight: '800' },
  heroTitle: { fontFamily: Fonts.headline, fontSize: 24, fontWeight: '700', color: 'white', width: '70%' },
  filterSection: { 
    backgroundColor: Colors.light.background, 
    paddingTop: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.surfaceContainer,
  },
  storeSearchBar: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: Colors.light.surfaceContainerLow, 
    marginHorizontal: 16, 
    borderRadius: 12, 
    paddingHorizontal: 16, 
    paddingVertical: 8,
    marginBottom: 16
  },
  storeSearchInput: { flex: 1, marginLeft: 12, fontFamily: Fonts.body, fontSize: 14 },
  shelfRow: { paddingHorizontal: 16, gap: 12, paddingBottom: 16 },
  shelfBadge: { 
    paddingHorizontal: 16, 
    paddingVertical: 8, 
    borderRadius: 99, 
    backgroundColor: Colors.light.surfaceContainerLow,
    borderWidth: 1,
    borderColor: Colors.light.outlineVariant + '33'
  },
  activeShelf: { backgroundColor: Colors.light.primary, borderColor: Colors.light.primary },
  shelfText: { fontSize: 13, fontWeight: '700', color: Colors.light.onSurfaceVariant },
  activeShelfText: { color: 'white' },
  productGrid: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    padding: 16, 
    gap: 16 
  },
  productCard: { 
    flex: 1,
    minWidth: '30%', 
    backgroundColor: Colors.light.surfaceContainerLowest, 
    borderRadius: 16, 
    padding: 8,
    borderWidth: 1,
    borderColor: Colors.light.outlineVariant + '33'
  },
  productImageBg: { 
    aspectRatio: 1, 
    backgroundColor: Colors.light.surfaceContainerLow, 
    borderRadius: 16, 
    marginBottom: 12,
    overflow: 'hidden'
  },
  productImage: { width: '100%', height: '100%', resizeMode: 'contain' },
  productInfo: { gap: 4 },
  productName: { fontFamily: Fonts.headline, fontWeight: '700', fontSize: 12, color: Colors.light.onSurface },
  productSize: { fontSize: 10, color: Colors.light.onSurfaceVariant },
  productPriceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 4 },
  productPrice: { fontFamily: Fonts.headline, fontSize: 14, fontWeight: '700', color: Colors.light.primary },
  addButton: { 
    backgroundColor: Colors.light.secondary, 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingHorizontal: 8, 
    paddingVertical: 4, 
    borderRadius: 8 
  },
  addButtonText: { color: 'white', fontSize: 11, fontWeight: '700', marginLeft: 4 }
});
