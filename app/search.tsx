import { router } from 'expo-router';
import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  FlatList,
  Image,
  Platform
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { IconSymbol } from '../components/ui/icon-symbol';
import { Colors, Fonts } from '../constants/theme';
import AntDesign from '@expo/vector-icons/AntDesign';
import { ProductCard } from '../components/product-card';

export default function SearchScreen() {
  const insets = useSafeAreaInsets();
  const [query, setQuery] = useState('');
  
  const recentSearches = ['Amul Milk', 'Fresh Tomatoes', 'Atta 10kg', 'Bread'];
  const popularCategories = ['Dairy', 'Eggs', 'Fresh Fruits', 'Cleaning'];

  return (
    <View style={styles.container}>
      <SafeAreaView edges={['top']} style={{ flex: 1 }}>
        {/* Search Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <IconSymbol name="arrow_back" size={24} color={Colors.light.onSurface} />
          </TouchableOpacity>
          <View style={styles.searchBar}>
            <IconSymbol name="search" size={20} color={Colors.light.outline} style={styles.searchIcon} />
            <TextInput 
              style={styles.searchInput}
              placeholder="Search products..."
              autoFocus
              value={query}
              onChangeText={setQuery}
              placeholderTextColor={Colors.light.onSurfaceVariant}
            />
            {query.length > 0 && (
              <TouchableOpacity onPress={() => setQuery('')}>
                <AntDesign name="close" size={18} color={Colors.light.outlineVariant} />
              </TouchableOpacity>
            )}
            <IconSymbol name="mic" size={22} color={Colors.light.primary} />
          </View>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          {query.length === 0 ? (
            <>
              {/* Recent Searches */}
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Recent Searches</Text>
                <TouchableOpacity><Text style={styles.clearAll}>Clear All</Text></TouchableOpacity>
              </View>
              <View style={styles.chipContainer}>
                {recentSearches.map((item, i) => (
                  <TouchableOpacity key={i} style={styles.chip} onPress={() => setQuery(item)}>
                    <IconSymbol name="schedule" size={14} color={Colors.light.onSurfaceVariant} />
                    <Text style={styles.chipText}>{item}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              {/* Popular Categories */}
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Popular Categories</Text>
              </View>
              <View style={styles.grid}>
                 {popularCategories.map((cat, i) => (
                   <TouchableOpacity key={i} style={styles.gridItem}>
                      <View style={styles.itemBg}>
                         <IconSymbol name="eco" size={32} color={Colors.light.primary} />
                      </View>
                      <Text style={styles.gridText}>{cat}</Text>
                   </TouchableOpacity>
                 ))}
              </View>
            </>
          ) : (
            <View style={styles.resultsContainer}>
               <Text style={styles.resultsTitle}>Showing results for "{query}"</Text>
               <View style={styles.productGrid}>
                 {[
                   { name: 'Amul Taaza Milk', size: '500ml', price: '30' },
                   { name: 'Organic Tomatoes', size: '500g', price: '45' }
                 ].map((prod, i) => (
                   <ProductCard 
                     key={i} 
                     product={prod} 
                     onPress={() => router.push('/product/1')} 
                   />
                 ))}
               </View>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.light.background },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 12,
    backgroundColor: 'white',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.surfaceContainerLow,
  },
  backButton: { padding: 4 },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.light.surfaceContainerLow,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: Platform.OS === 'ios' ? 12 : 8,
    gap: 12,
  },
  searchIcon: {},
  searchInput: {
    flex: 1,
    fontFamily: Fonts.body,
    fontSize: 15,
    fontWeight: '500',
    color: Colors.light.onSurface,
  },
  scrollContent: { padding: 24 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, marginTop: 8 },
  sectionTitle: { fontFamily: Fonts.headline, fontSize: 16, fontWeight: '800', color: Colors.light.onSurface },
  clearAll: { fontSize: 12, fontWeight: '700', color: Colors.light.primary },
  chipContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 32 },
  chip: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 6, 
    backgroundColor: 'white', 
    paddingHorizontal: 14, 
    paddingVertical: 10, 
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.light.outlineVariant + '33' 
  },
  chipText: { fontSize: 13, fontWeight: '600', color: Colors.light.onSurfaceVariant },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 16 },
  gridItem: { width: '22%', alignItems: 'center', gap: 10 },
  itemBg: { 
    width: 64, 
    height: 64, 
    borderRadius: 20, 
    backgroundColor: Colors.light.surfaceContainerLow, 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  gridText: { fontSize: 11, fontWeight: '700', textAlign: 'center', color: Colors.light.onSurface },
  resultsContainer: { },
  resultsTitle: { fontSize: 14, color: Colors.light.onSurfaceVariant, marginBottom: 20, fontWeight: '500' },
  productGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 16 }
});
