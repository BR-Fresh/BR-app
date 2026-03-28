import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  ScrollView, 
  TextInput, 
  Image, 
  TouchableOpacity,
  Platform,
  Modal,
  Dimensions
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors, Fonts } from '../../constants/theme';
import { IconSymbol } from '../../components/ui/icon-symbol';
import { router } from 'expo-router';
import { ProductCard } from '../../components/product-card';

import { useCart } from '../../context/cart-context';

import { LocationModal } from '../../components/location-modal';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function HomeScreen() {
  const { itemCount } = useCart();
  const [isLocationModalVisible, setIsLocationModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      {/* TopAppBar */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Image 
            source={require('../../assets/image/logo tab.png')} 
            style={{ width: 32, height: 32, resizeMode: 'contain' }} 
          />
          <TouchableOpacity 
            style={styles.locationContainer} 
            onPress={() => setIsLocationModalVisible(true)}
          >
            <View style={styles.locationTitleRow}>
              <Text style={styles.locationTitle}>Sector 21</Text>
              <IconSymbol name="chevron.down" size={14} color={Colors.light.onSurfaceVariant} />
            </View>
            <Text style={styles.locationSubText} numberOfLines={1}>Chandigarh, India</Text>
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
             { name: 'Amul Taaza Milk', size: '500ml', price: '30' },
             { name: 'Organic Tomatoes', size: '500g', price: '45' }
           ].map((prod: any, i) => (
             <ProductCard 
               key={i} 
               product={prod} 
               onPress={() => router.push('/product/1')} 
             />
           ))}
        </View>
      </ScrollView>

      {/* Location Modal */}
      <LocationModal 
        isVisible={isLocationModalVisible} 
        onClose={() => setIsLocationModalVisible(false)} 
      />
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
    backgroundColor: Colors.light.background,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 8,
    gap: 12,
  },
  locationContainer: {
    flex: 1,
  },
  locationTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  locationTitle: {
    fontFamily: Fonts.headline,
    fontSize: 16,
    fontWeight: '800',
    color: Colors.light.onSurface,
  },
  locationSubText: {
    fontFamily: Fonts.body,
    fontSize: 12,
    fontWeight: '500',
    color: Colors.light.onSurfaceVariant,
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
  }
});


