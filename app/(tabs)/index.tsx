import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  ScrollView, 
  TextInput, 
  Image, 
  TouchableOpacity,
  Platform
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors, Fonts } from '../../constants/theme';
import { IconSymbol } from '../../components/ui/icon-symbol';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      {/* TopAppBar */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.brandLogo}>BR Fresh</Text>
          <View style={styles.locationContainer}>
             <View style={styles.locationInner}>
                <IconSymbol name="location_on" size={18} color={Colors.light.primary} />
                <Text style={styles.locationText}>Sector 21, Chandigarh</Text>
             </View>
          </View>
          <TouchableOpacity style={styles.cartButton}>
            <IconSymbol name="shopping_cart" size={24} color={Colors.light.onSurface} />
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>3</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.headerDivider} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Search Bar Section */}
        <View style={styles.searchSection}>
          <View style={styles.searchBar}>
            <IconSymbol name="search" size={20} color={Colors.light.outline} style={styles.searchIcon} />
            <TextInput 
              style={styles.searchInput}
              placeholder="Search for milk, atta, rice..."
              placeholderTextColor={Colors.light.onSurfaceVariant}
            />
            <IconSymbol name="mic" size={24} color={Colors.light.primary} />
          </View>
        </View>

        {/* Hero Delivery Banner */}
        <View style={styles.heroSection}>
          <View style={styles.heroBanner}>
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxe_oxxpgow8C-5e9wy2F3Ei2EKEPSU62harV1tqnYUubeDlUhcZuA4OHPBBqVFhPBCbZB3EBLIL3I-Uk8pB1jyEXj8sUcjyKtLqBUplzq3TPtPNWqxGT_cNv3eAtYllfV61HOfEL6scAoR8hTQo70zlJVwI7E4YbUBTU9smxVLeo4xzs-ewvHM9YotBQG1dE_vwKac4UtyopMll_854hnxzDsQXCyQbgmzbbDZYUSi6O3SUAQo9xfWatejZFsST9LNdAeF24w4E4' }}
              style={styles.heroImage}
            />
            <View style={styles.heroOverlay}>
              <View style={styles.deliveryBadge}>
                <Text style={styles.deliveryBadgeText}>Delivery in 20-30 mins</Text>
              </View>
              <Text style={styles.heroTitle}>Fresh harvest at your doorstep</Text>
            </View>
          </View>
        </View>

        {/* Category Row */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Shop by Category</Text>
          <Text style={styles.viewAllText}>View All</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryRow}>
          {[
            { name: 'Dairy', icon: 'water_drop', color: Colors.light.primaryContainer },
            { name: 'Vegetables', icon: 'eco', color: '#A5F4B8' },
            { name: 'Fruits', icon: 'nutrition', color: Colors.light.surfaceContainer },
            { name: 'Snacks', icon: 'cookie', color: Colors.light.surfaceContainer },
            { name: 'Beverages', icon: 'local_cafe', color: Colors.light.surfaceContainer },
            { name: 'Cleaning', icon: 'cleaning_services', color: Colors.light.surfaceContainer },
          ].map((cat, i) => (
            <TouchableOpacity key={i} style={styles.categoryItem}>
              <View style={[styles.categoryIconBg, { backgroundColor: cat.color + '33' }]}>
                <IconSymbol name={cat.icon} size={32} color={Colors.light.primary} />
              </View>
              <Text style={styles.categoryName}>{cat.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Stores Section */}
        <View style={styles.sectionHeader}>
           <Text style={styles.sectionTitle}>Stores near you</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.storeRow}>
           <TouchableOpacity style={styles.storeCard} onPress={() => router.push('/store/1')}>
             <View style={styles.storeCardHeader}>
                <Image 
                    source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmkIdldCPeKnJXcXtPkaJUWoMS7eHLGS0Hykq7s1IL4RSeOYd8j1xiO1v0opZ-DfXVpN43DPQ63ovpVfhbPx8uYh9LjVbbt_nD_FEe8DBRuOkg1ZKAv-B0WpWbEouJDIEZBBks_dsVtFNONZnHWLnXzUIMML-eYO53IejxXgIJ8hLGIXkki6xJezAHAbYf1gcex9UzEfY-6uThB2Kls5Rphmi7zPtzXoZkkcyu49OD-dzh8e2cjD_dxesGb6KimxSWqz--TTnB2qY' }}
                    style={styles.storeImage}
                />
                <View style={styles.storeInfo}>
                    <View style={styles.storeTitleRow}>
                        <Text style={styles.storeName}>Sharma General Store</Text>
                        <View style={styles.openBadge}><Text style={styles.openBadgeText}>OPEN</Text></View>
                    </View>
                    <Text style={styles.storeCategory}>Staples & Essentials</Text>
                </View>
             </View>
             <View style={styles.storeCardFooter}>
                <View style={styles.storeFooterItem}>
                    <IconSymbol name="location_on" size={14} color={Colors.light.outline} />
                    <Text style={styles.storeFooterText}>1.2 km</Text>
                </View>
                <View style={styles.storeFooterItem}>
                    <IconSymbol name="schedule" size={14} color={Colors.light.outline} />
                    <Text style={styles.storeFooterText}>15 mins</Text>
                </View>
             </View>
           </TouchableOpacity>
        </ScrollView>

        {/* Editor's Choice Grid */}
        <View style={styles.sectionHeader}>
           <Text style={[styles.sectionTitle, styles.italicTitle]}>Editor's Choice</Text>
        </View>
        <View style={styles.productGrid}>
           {[
             { name: 'Amul Taaza Milk', size: '500ml', price: '30', uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7_YYu3erkZQuZXXy2-UwewD-HzgW7yFQilU20MxBn3DJdBu9xXMi53-O0F9-ncmzTRi2Z_J5S6I3eR0y092mkIVP6HSXUsDweK1KKN4sQsy744rOSDcmQXALvNNmsyxQfFRbcKoKkwrl5Y616JzzFdfnNmiCVsCw2tbKvrHW3RMujx8s78IFJhFjQHXZJqyF99Ktg9zM2R_pb1Yw0IULTDk15hOMAqIWU0VfqYvlEtN3bPzEV-fUncVoqsc1bC21Jrh_k99zW9Zc' },
             { name: 'Organic Tomatoes', size: '500g', price: '45', uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJzK_4y6b-ARMdi7fyNgPBfE7OHSx_IeB_bCQGXK3Dm17bJMT-2ABOUzKFq5G3YklsZJUrQyJgNayBSzv7Kk4PaP4cEZdV1K3qDdMNf20lQTODEfwHHxNks2_JNUD2m3W5QQ0nMXBJuNkD4rAK-L_0HKcFwqgrURngCinWAQEtjYOlUZ71mwV9X3Z4SLayPA6VTRodn7N7IhLT4jEH-Ue9fgyuDYHL46blho_MlgYcbWXv77banvZ4HVPnKUOd9qki4RReyyN9t6o' }
           ].map((prod, i) => (
             <TouchableOpacity key={i} style={styles.productCard}>
               <View style={styles.productImageBg}>
                 <Image source={{ uri: prod.uri }} style={styles.productImage} />
               </View>
               <View style={styles.productInfo}>
                 <Text style={styles.productName}>{prod.name}</Text>
                 <Text style={styles.productSize}>{prod.size}</Text>
                 <View style={styles.productPriceRow}>
                    <Text style={styles.productPrice}>₹{prod.price}</Text>
                    <TouchableOpacity style={styles.addButton}>
                        <IconSymbol name="add" size={14} color={Colors.light.onSecondary} />
                        <Text style={styles.addButtonText}>Add</Text>
                    </TouchableOpacity>
                 </View>
               </View>
             </TouchableOpacity>
           ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  header: {
    paddingVertical: 12,
    backgroundColor: Colors.light.background + 'CC', // 80% opacity
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 12,
  },
  brandLogo: {
    fontFamily: Fonts.headline,
    fontSize: 22,
    fontWeight: '800',
    color: Colors.light.primaryContainer,
    fontStyle: 'italic',
    letterSpacing: -1,
  },
  locationContainer: {
    alignItems: 'center',
  },
  locationInner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  locationText: {
    fontFamily: Fonts.headline,
    fontSize: 14,
    fontWeight: '700',
    color: Colors.light.primary,
  },
  cartButton: {
    padding: 8,
    borderRadius: 999,
  },
  cartBadge: {
    position: 'absolute',
    top: 4,
    right: 4,
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
  headerDivider: {
    height: 1,
    backgroundColor: Colors.light.surfaceContainerLow,
    width: '100%',
  },
  scrollContent: {
    paddingBottom: 100,
    paddingTop: 16,
  },
  searchSection: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.light.surfaceContainerLow,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontFamily: Fonts.body,
    fontSize: 15,
    fontWeight: '500',
    color: Colors.light.onSurface,
  },
  heroSection: {
    paddingHorizontal: 16,
    marginBottom: 32,
  },
  heroBanner: {
    height: 192,
    borderRadius: 24,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)',
    padding: 24,
    justifyContent: 'center',
  },
  deliveryBadge: {
    backgroundColor: Colors.light.primaryContainer,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  deliveryBadgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '700',
  },
  heroTitle: {
    fontFamily: Fonts.headline,
    fontSize: 28,
    fontWeight: '700',
    color: 'white',
    lineHeight: 34,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: Fonts.headline,
    fontSize: 18,
    fontWeight: '800',
    color: Colors.light.onSurface,
  },
  italicTitle: {
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    textDecorationColor: Colors.light.primary + '33',
  },
  viewAllText: {
    color: Colors.light.primary,
    fontWeight: '600',
    fontSize: 14,
  },
  categoryRow: {
    paddingHorizontal: 20,
    gap: 16,
    paddingBottom: 8,
  },
  categoryItem: {
    alignItems: 'center',
    width: 72,
  },
  categoryIconBg: {
    width: 64,
    height: 64,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  categoryName: {
    fontFamily: Fonts.body,
    fontSize: 11,
    fontWeight: '700',
    color: Colors.light.onSurface,
  },
  storeRow: {
    paddingHorizontal: 20,
    gap: 16,
    paddingBottom: 16,
  },
  storeCard: {
    width: 280,
    backgroundColor: Colors.light.surfaceContainerLowest,
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.light.outlineVariant + '33',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  storeCardHeader: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  storeImage: {
    width: 64,
    height: 64,
    borderRadius: 12,
    backgroundColor: Colors.light.surfaceContainer,
  },
  storeInfo: {
    flex: 1,
  },
  storeTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  storeName: {
    fontFamily: Fonts.headline,
    fontWeight: '700',
    fontSize: 15,
    color: Colors.light.onSurface,
    flex: 1,
  },
  openBadge: {
    backgroundColor: Colors.light.primaryContainer,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 99,
  },
  openBadgeText: {
    color: Colors.light.onPrimaryContainer,
    fontSize: 9,
    fontWeight: '800',
  },
  storeCategory: {
    fontSize: 12,
    color: Colors.light.onSurfaceVariant,
    marginTop: 4,
  },
  storeCardFooter: {
    flexDirection: 'row',
    gap: 16,
    borderTopWidth: 1,
    borderTopColor: Colors.light.outlineVariant + '1A',
    paddingTop: 12,
  },
  storeFooterItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  storeFooterText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.light.onSurface,
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    gap: 16,
  },
  productCard: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: Colors.light.surfaceContainerLowest,
    borderRadius: 20,
    padding: 12,
    borderWidth: 1,
    borderColor: Colors.light.outlineVariant + '33',
  },
  productImageBg: {
    height: 128,
    backgroundColor: Colors.light.surfaceContainerLow,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 12,
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  productInfo: {
    gap: 4,
  },
  productName: {
    fontFamily: Fonts.headline,
    fontWeight: '700',
    fontSize: 14,
    color: Colors.light.onSurface,
  },
  productSize: {
    fontSize: 10,
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
    fontSize: 16,
    fontWeight: '700',
    color: Colors.light.primary,
  },
  addButton: {
    backgroundColor: Colors.light.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
  },
  addButtonText: {
    color: Colors.light.onSecondary,
    fontSize: 12,
    fontWeight: '700',
  }
});
