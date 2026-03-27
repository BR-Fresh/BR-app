import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Fonts } from '../../constants/theme';
import { IconSymbol } from '../../components/ui/icon-symbol';

export default function OrdersScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Orders</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
         {[1, 2, 3].map((_, i) => (
           <View key={i} style={styles.orderCard}>
              <View style={styles.orderHeader}>
                 <View style={styles.storeIcon} />
                 <View style={styles.orderMeta}>
                    <Text style={styles.storeName}>Sharma General Store</Text>
                    <Text style={styles.orderStatus}>Delivered • Yesterday</Text>
                 </View>
                 <Text style={styles.orderPrice}>₹124</Text>
              </View>
              <View style={styles.orderFooter}>
                 <TouchableOpacity style={styles.reorderBtn}>
                    <Text style={styles.reorderText}>Reorder</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.detailsBtn}>
                    <Text style={styles.detailsText}>View Details</Text>
                 </TouchableOpacity>
              </View>
           </View>
         ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.light.background },
  header: { padding: 24, paddingBottom: 12 },
  headerTitle: { fontFamily: Fonts.headline, fontSize: 24, fontWeight: '800' },
  scrollContent: { padding: 16 },
  orderCard: { 
    backgroundColor: 'white', 
    borderRadius: 24, 
    padding: 16, 
    marginBottom: 16,
    borderWidth: 1,
    borderColor: Colors.light.outlineVariant + '33'
  },
  orderHeader: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 16 },
  storeIcon: { width: 48, height: 48, borderRadius: 12, backgroundColor: Colors.light.surfaceContainerLow },
  orderMeta: { flex: 1 },
  storeName: { fontFamily: Fonts.headline, fontSize: 16, fontWeight: '700' },
  orderStatus: { fontSize: 13, color: Colors.light.onSurfaceVariant, marginTop: 2 },
  orderPrice: { fontFamily: Fonts.headline, fontSize: 16, fontWeight: '800' },
  orderFooter: { flexDirection: 'row', gap: 12, borderTopWidth: 1, borderTopColor: Colors.light.surfaceContainer, paddingTop: 16 },
  reorderBtn: { flex: 1, backgroundColor: Colors.light.secondary, padding: 12, borderRadius: 12, alignItems: 'center' },
  reorderText: { color: 'white', fontWeight: '800', fontSize: 14 },
  detailsBtn: { flex: 1, padding: 12, borderRadius: 12, alignItems: 'center', borderWidth: 1, borderColor: Colors.light.outlineVariant },
  detailsText: { fontWeight: '700', color: Colors.light.onSurfaceVariant, fontSize: 14 }
});
