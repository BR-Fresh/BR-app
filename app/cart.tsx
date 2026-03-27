import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Platform } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors, Fonts } from '../constants/theme';
import { IconSymbol } from '../components/ui/icon-symbol';
import { router } from 'expo-router';

export default function CartScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <SafeAreaView edges={['top']} style={{ flex: 1 }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <IconSymbol name="arrow_back" size={24} color={Colors.light.onSurface} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Review Cart</Text>
          <View style={styles.headerSpacer} />
        </View>

        <ScrollView contentContainerStyle={[styles.scrollContent, { paddingBottom: 180 + insets.bottom }]}>
          {/* Shipment 1 */}
          <View style={styles.shipmentCard}>
             <View style={styles.shipmentHeader}>
                <View style={styles.shipmentBadge}><Text style={styles.shipmentBadgeText}>Shipment 1</Text></View>
                <Text style={styles.deliveryTime}>Delivery in 15 mins</Text>
             </View>

             {[1, 2].map((_, i) => (
               <View key={i} style={styles.cartItem}>
                  <Image 
                      source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7_YYu3erkZQuZXXy2-UwewD-HzgW7yFQilU20MxBn3DJdBu9xXMi53-O0F9-ncmzTRi2Z_J5S6I3eR0y092mkIVP6HSXUsDweK1KKN4sQsy744rOSDcmQXALvNNmsyxQfFRbcKoKkwrl5Y616JzzFdfnNmiCVsCw2tbKvrHW3RMujx8s78IFJhFjQHXZJqyF99Ktg9zM2R_pb1Yw0IULTDk15hOMAqIWU0VfqYvlEtN3bPzEV-fUncVoqsc1bC21Jrh_k99zW9Zc' }}
                      style={styles.itemImage}
                  />
                  <View style={styles.itemInfo}>
                      <Text style={styles.itemName}>Amul Taaza Milk</Text>
                      <Text style={styles.itemSize}>500ml</Text>
                      <Text style={styles.itemPrice}>₹30</Text>
                  </View>
                  <View style={styles.itemControls}>
                     <TouchableOpacity style={styles.controlBtn}><IconSymbol name="remove" size={16} color={Colors.light.primary} /></TouchableOpacity>
                     <Text style={styles.qtyText}>1</Text>
                     <TouchableOpacity style={styles.controlBtn}><IconSymbol name="add" size={16} color={Colors.light.primary} /></TouchableOpacity>
                  </View>
               </View>
             ))}
          </View>

          {/* Coupon Section */}
          <TouchableOpacity style={styles.couponBtn}>
            <IconSymbol name="sell" size={24} color={Colors.light.primary} />
            <Text style={styles.couponText}>Apply Coupon</Text>
            <IconSymbol name="chevron.right" size={20} color={Colors.light.outlineVariant} />
          </TouchableOpacity>

          {/* Bill Summary */}
          <View style={styles.billSummary}>
            <Text style={styles.billTitle}>Bill Summary</Text>
            <View style={styles.billRow}>
               <Text style={styles.billLabel}>Item Total</Text>
               <Text style={styles.billValue}>₹60</Text>
            </View>
            <View style={styles.billRow}>
               <Text style={styles.billLabel}>Delivery Fee</Text>
               <Text style={[styles.billValue, { color: Colors.light.primary }]}>FREE</Text>
            </View>
            <View style={styles.billRow}>
               <Text style={styles.billLabel}>Handling Fee</Text>
               <Text style={styles.billValue}>₹2</Text>
            </View>
            <View style={styles.totalRow}>
               <Text style={styles.totalLabel}>Total Payable</Text>
               <Text style={styles.totalValue}>₹62</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

      {/* Address & Checkout */}
      <View style={[styles.footer, { paddingBottom: Math.max(insets.bottom, 24) }]}>
         <View style={styles.addressSection}>
            <IconSymbol name="location_on" size={24} color={Colors.light.primary} />
            <View style={styles.addressInfo}>
               <Text style={styles.addressLabel}>Delivering to Home</Text>
               <Text style={styles.addressValue} numberOfLines={1}>Sector 21, Chandigarh, 160022</Text>
            </View>
            <TouchableOpacity><Text style={styles.changeBtn}>Change</Text></TouchableOpacity>
         </View>
         <TouchableOpacity style={styles.payBtn}>
            <View>
               <Text style={styles.payTotal}>₹62</Text>
               <Text style={styles.paySubText}>View Bill</Text>
            </View>
            <View style={styles.payRight}>
               <Text style={styles.payText}>Place Order</Text>
               <IconSymbol name="chevron.right" size={24} color="white" />
            </View>
         </TouchableOpacity>
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
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  backButton: { padding: 8 },
  headerTitle: { fontFamily: Fonts.headline, fontSize: 18, fontWeight: '800' },
  headerSpacer: { width: 40 },
  scrollContent: { padding: 16 },
  shipmentCard: { 
    backgroundColor: 'white', 
    borderRadius: 24, 
    padding: 16, 
    marginBottom: 16,
    borderWidth: 1,
    borderColor: Colors.light.outlineVariant + '33' 
  },
  shipmentHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  shipmentBadge: { backgroundColor: Colors.light.surfaceContainerHigh, paddingHorizontal: 12, paddingVertical: 4, borderRadius: 8 },
  shipmentBadgeText: { fontSize: 11, fontWeight: '800', color: Colors.light.onSurfaceVariant },
  deliveryTime: { fontFamily: Fonts.headline, fontSize: 14, fontWeight: '700', color: Colors.light.primary },
  cartItem: { flexDirection: 'row', gap: 16, marginBottom: 20, alignItems: 'center' },
  itemImage: { width: 64, height: 64, borderRadius: 12, backgroundColor: Colors.light.surfaceContainerLow },
  itemInfo: { flex: 1, gap: 2 },
  itemName: { fontFamily: Fonts.headline, fontWeight: '700', fontSize: 14, color: Colors.light.onSurface },
  itemSize: { fontSize: 12, color: Colors.light.onSurfaceVariant },
  itemPrice: { fontWeight: '800', fontSize: 15, marginTop: 4 },
  itemControls: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: Colors.light.primaryContainer, 
    borderRadius: 12, 
    padding: 2 
  },
  controlBtn: { padding: 8 },
  qtyText: { color: 'white', fontWeight: '800', paddingHorizontal: 4 },
  couponBtn: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: 'white', 
    padding: 16, 
    borderRadius: 20, 
    gap: 16, 
    marginBottom: 24,
    borderWidth: 1,
    borderColor: Colors.light.outlineVariant + '33'
  },
  couponText: { flex: 1, fontFamily: Fonts.body, fontSize: 16, fontWeight: '700' },
  billSummary: { 
    backgroundColor: 'white', 
    padding: 20, 
    borderRadius: 24, 
    borderWidth: 1, 
    borderColor: Colors.light.outlineVariant + '33',
  },
  billTitle: { fontFamily: Fonts.headline, fontSize: 16, fontWeight: '800', marginBottom: 16 },
  billRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  billLabel: { fontSize: 14, color: Colors.light.onSurfaceVariant, fontWeight: '500' },
  billValue: { fontSize: 14, fontWeight: '700' },
  totalRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 12, paddingTop: 12, borderTopWidth: 1, borderTopColor: Colors.light.surfaceContainer },
  totalLabel: { fontFamily: Fonts.headline, fontSize: 16, fontWeight: '800' },
  totalValue: { fontFamily: Fonts.headline, fontSize: 18, fontWeight: '800', color: Colors.light.primary },
  footer: { 
    position: 'absolute', 
    bottom: 0, 
    left: 0, 
    right: 0, 
    backgroundColor: 'white', 
    padding: 20, 
    borderTopWidth: 1, 
    borderTopColor: Colors.light.surfaceContainer 
  },
  addressSection: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 16, paddingHorizontal: 4 },
  addressInfo: { flex: 1 },
  addressLabel: { fontSize: 13, fontWeight: '800', color: Colors.light.onSurface },
  addressValue: { fontSize: 12, color: Colors.light.onSurfaceVariant },
  changeBtn: { color: Colors.light.primary, fontWeight: '800', fontSize: 13 },
  payBtn: { 
    backgroundColor: Colors.light.secondary, 
    borderRadius: 20, 
    padding: 16, 
    paddingHorizontal: 24, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    shadowColor: Colors.light.secondary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8
  },
  payTotal: { color: 'white', fontFamily: Fonts.headline, fontSize: 18, fontWeight: '800' },
  paySubText: { color: 'rgba(255,255,255,0.7)', fontSize: 11, fontWeight: '700' },
  payRight: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  payText: { color: 'white', fontFamily: Fonts.headline, fontSize: 18, fontWeight: '800' }
});
