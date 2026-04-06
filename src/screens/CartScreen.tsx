import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Platform, Modal } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Colors, Fonts } from '../../constants/theme';
import { IconSymbol } from '../../components/ui/icon-symbol';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { useCart } from '../../context/cart-context';
import { ProductCard } from '../../components/product-card';

export default function CartScreen() {
  const insets = useSafeAreaInsets();
  const { items, totalPrice, addItem, removeItem, itemCount } = useCart();
  const [selectedPayment, setSelectedPayment] = useState('Google Pay');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const paymentMethods = [
    { id: 'upi', name: 'Google Pay', icon: 'money-bill-transfer', type: 'fa6' },
    { id: 'upi_other', name: 'Other UPI', icon: 'receipt', type: 'fa6' },
    { id: 'card', name: 'Credit / Debit Card', icon: 'credit-card', type: 'fa' },
    { id: 'cod', name: 'Cash on Delivery', icon: 'payments', type: 'symbol' },
  ];

  const currentMethod = paymentMethods.find(m => m.name === selectedPayment) || paymentMethods[0];

  const renderIcon = (iconName: string, type: string, size: number, color: string) => {
    if (type === 'fa') return <FontAwesome name={iconName as any} size={size} color={color} />;
    if (type === 'fa6') return <FontAwesome6 name={iconName as any} size={size} color={color} />;
    return <IconSymbol name={iconName} size={size} color={color} />;
  }

  if (itemCount === 0) {
    return (
      <View style={styles.container}>
        <SafeAreaView edges={['top']} style={{ flex: 1 }}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <IconSymbol name="arrow_back" size={24} color={Colors.light.onSurface} />
            </TouchableOpacity>
            <View style={styles.headerInfo}>
              <Text style={styles.customerName}>Aaditya Sharma</Text>
              <Text style={styles.headerAddress} numberOfLines={1}>Sector 21, Chandigarh, 160022</Text>
            </View>
            <View style={styles.headerDeliveryContainer} />
          </View>
          <View style={styles.emptyContainer}>
            <IconSymbol name="shopping_cart" size={64} color={Colors.light.outlineVariant} />
            <Text style={styles.emptyText}>Your cart is empty</Text>
            <TouchableOpacity style={styles.shopBtn} onPress={() => navigation.replace('MainTabs')}>
              <Text style={styles.shopBtnText}>Start Shopping</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SafeAreaView edges={['top']} style={{ flex: 1 }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <IconSymbol name="arrow_back" size={24} color={Colors.light.onSurface} />
          </TouchableOpacity>
          <View style={styles.headerInfo}>
            <Text style={styles.customerName}>Aaditya Sharma</Text>
            <Text style={styles.headerAddress} numberOfLines={1}>Sector 21, Chandigarh, 160022</Text>
          </View>
          <View style={styles.headerDeliveryContainer}>
             <Text style={styles.headerDeliveryLabel}>ARRIVING IN</Text>
             <Text style={styles.headerDeliveryTime}>15 MINS</Text>
          </View>
        </View>

        <ScrollView contentContainerStyle={[styles.scrollContent, { paddingBottom: 110 + insets.bottom }]}>
          <View style={styles.shipmentCard}>
            <View style={styles.shipmentHeader}>
                <View style={styles.shipmentBadge}><Text style={styles.shipmentBadgeText}>Shipment 1</Text></View>
                <TouchableOpacity style={styles.shareButton}>
                  <Entypo name="share" size={18} color={Colors.light.primary} />
                  <Text style={styles.shareText}>Share</Text>
                </TouchableOpacity>
             </View>

             {items.map((item: any, i: number) => (
               <View key={i} style={styles.cartItem}>
                  <Image 
                      source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7_YYu3erkZQuZXXy2-UwewD-HzgW7yFQilU20MxBn3DJdBu9xXMi53-O0F9-ncmzTRi2Z_J5S6I3eR0y092mkIVP6HSXUsDweK1KKN4sQsy744rOSDcmQXALvNNmsyxQfFRbcKoKkwrl5Y616JzzFdfnNmiCVsCw2tbKvrHW3RMujx8s78IFJhFjQHXZJqyF99Ktg9zM2R_pb1Yw0IULTDk15hOMAqIWU0VfqYvlEtN3bPzEV-fUncVoqsc1bC21Jrh_k99zW9Zc' }}
                      style={styles.itemImage}
                  />
                  <View style={styles.itemInfo}>
                      <Text style={styles.itemName}>{item.name}</Text>
                      <Text style={styles.itemSize}>{item.size}</Text>
                      <Text style={styles.itemPrice}>₹{item.price}</Text>
                  </View>
                  <View style={styles.itemControls}>
                     <TouchableOpacity style={styles.controlBtn} onPress={() => removeItem(item.id)}>
                        <IconSymbol name="remove" size={16} color="white" />
                     </TouchableOpacity>
                     <Text style={styles.qtyText}>{item.quantity}</Text>
                     <TouchableOpacity style={styles.controlBtn} onPress={() => addItem(item)}>
                        <IconSymbol name="add" size={16} color="white" />
                     </TouchableOpacity>
                  </View>
               </View>
             ))}
          </View>

          {/* Recommended Section */}
          <View style={styles.recommendSection}>
             <Text style={styles.recommendTitle}>Before you checkout</Text>
             <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.recommendRow}>
                {[
                  { id: '101', name: 'Brown Bread', size: '400g', price: '45', uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7_YYu3erkZQuZXXy2-UwewD-HzgW7yFQilU20MxBn3DJdBu9xXMi53-O0F9-ncmzTRi2Z_J5S6I3eR0y092mkIVP6HSXUsDweK1KKN4sQsy744rOSDcmQXALvNNmsyxQfFRbcKoKkwrl5Y616JzzFdfnNmiCVsCw2tbKvrHW3RMujx8s78IFJhFjQHXZJqyF99Ktg9zM2R_pb1Yw0IULTDk15hOMAqIWU0VfqYvlEtN3bPzEV-fUncVoqsc1bC21Jrh_k99zW9Zc' },
                  { id: '102', name: 'Fresh Eggs', size: '6 pcs', price: '36', uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7_YYu3erkZQuZXXy2-UwewD-HzgW7yFQilU20MxBn3DJdBu9xXMi53-O0F9-ncmzTRi2Z_J5S6I3eR0y092mkIVP6HSXUsDweK1KKN4sQsy744rOSDcmQXALvNNmsyxQfFRbcKoKkwrl5Y616JzzFdfnNmiCVsCw2tbKvrHW3RMujx8s78IFJhFjQHXZJqyF99Ktg9zM2R_pb1Yw0IULTDk15hOMAqIWU0VfqYvlEtN3bPzEV-fUncVoqsc1bC21Jrh_k99zW9Zc' },
                  { id: '103', name: 'Salted Butter', size: '100g', price: '58', uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7_YYu3erkZQuZXXy2-UwewD-HzgW7yFQilU20MxBn3DJdBu9xXMi53-O0F9-ncmzTRi2Z_J5S6I3eR0y092mkIVP6HSXUsDweK1KKN4sQsy744rOSDcmQXALvNNmsyxQfFRbcKoKkwrl5Y616JzzFdfnNmiCVsCw2tbKvrHW3RMujx8s78IFJhFjQHXZJqyF99Ktg9zM2R_pb1Yw0IULTDk15hOMAqIWU0VfqYvlEtN3bPzEV-fUncVoqsc1bC21Jrh_k99zW9Zc' },
                ].map((item, i) => (
                  <ProductCard 
                    key={i} 
                    product={item} 
                    style={{ width: 140, flex: 0, minWidth: 0 }}
                  />
                ))}
             </ScrollView>
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
               <Text style={styles.billValue}>₹{totalPrice}</Text>
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
               <Text style={styles.totalValue}>₹{totalPrice + 2}</Text>
            </View>
          </View>

        </ScrollView>
      </SafeAreaView>

      {/* Address & Checkout */}
      <View style={[styles.footer, { paddingBottom: Math.max(insets.bottom, 16) }]}>
         <View style={styles.paymentSection}>
            <TouchableOpacity style={styles.paymentInfo} onPress={() => setIsModalVisible(true)}>
               {renderIcon(currentMethod.icon, currentMethod.type, 22, Colors.light.primary)}
               <View style={styles.payByContainer}>
                  <Text style={styles.payByLabel}>Pay by</Text>
                  <View style={styles.payMethodRow}>
                     <Text style={styles.paymentMethod}>{selectedPayment}</Text>
                     <AntDesign name="up" size={10} color={Colors.light.onSurfaceVariant} style={styles.payCaret} />
                  </View>
               </View>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.payNowBtn}
              onPress={() => navigation.navigate('Payment')}
            >
               <Text style={styles.payNowText}>Pay Now</Text>
               <IconSymbol name="chevron.right" size={20} color="white" />
            </TouchableOpacity>
         </View>
      </View>

      <Modal 
        visible={isModalVisible} 
        transparent 
        animationType="slide" 
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <TouchableOpacity 
            style={styles.modalBackground} 
            activeOpacity={1} 
            onPress={() => setIsModalVisible(false)} 
          />
          <View style={[styles.modalContent, { paddingBottom: insets.bottom + 24 }]}>
            <View style={styles.modalHeader}>
               <Text style={styles.modalTitle}>Select Payment Method</Text>
               <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                  <IconSymbol name="close" size={24} color={Colors.light.onSurfaceVariant} />
               </TouchableOpacity>
            </View>
            {paymentMethods.map((method) => (
              <TouchableOpacity
                key={method.id}
                style={[styles.paymentOption, selectedPayment === method.name && styles.selectedOption]}
                onPress={() => {
                  setSelectedPayment(method.name);
                  setIsModalVisible(false);
                }}
              >
                <View style={[styles.methodIcon, { backgroundColor: selectedPayment === method.name ? Colors.light.primary + '1A' : Colors.light.surfaceContainerLow }]}>
                   {renderIcon(method.icon, method.type as string, 18, selectedPayment === method.name ? Colors.light.primary : Colors.light.onSurfaceVariant)}
                </View>
                <Text style={[styles.paymentOptionText, selectedPayment === method.name && styles.selectedOptionText]}>{method.name}</Text>
                {selectedPayment === method.name && <IconSymbol name="check" size={20} color={Colors.light.primary} />}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
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
  headerInfo: { flex: 1, marginLeft: 8 },
  customerName: { fontFamily: Fonts.headline, fontSize: 15, fontWeight: '800', color: Colors.light.onSurface, lineHeight: 20 },
  headerAddress: { fontSize: 12, color: Colors.light.onSurfaceVariant, marginTop: 1, lineHeight: 16 },
  headerDeliveryContainer: { alignItems: 'flex-end' },
  headerDeliveryLabel: { fontSize: 9, fontWeight: '800', color: Colors.light.primary, letterSpacing: 0.5 },
  headerDeliveryTime: { fontFamily: Fonts.headline, fontSize: 14, fontWeight: '900', color: Colors.light.primary, marginTop: -2 },
  scrollContent: { padding: 16 },
  shipmentCard: { 
    backgroundColor: 'white', 
    borderRadius: 24, 
    padding: 16, 
    marginBottom: 16,
    borderWidth: 1,
    borderColor: Colors.light.outlineVariant + '33' 
  },
  shipmentHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, alignItems: 'center' },
  shipmentBadge: { backgroundColor: Colors.light.surfaceContainerHigh, paddingHorizontal: 12, paddingVertical: 4, borderRadius: 8 },
  shipmentBadgeText: { fontSize: 11, fontWeight: '800', color: Colors.light.onSurfaceVariant },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: Colors.light.primary + '14',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 99,
  },
  shareText: {
    fontSize: 12,
    fontWeight: '800',
    color: Colors.light.primary,
  },
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
    padding: 16,
    paddingTop: 12,
    borderTopWidth: 1, 
    borderTopColor: Colors.light.surfaceContainer 
  },
  paymentSection: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    paddingHorizontal: 4
  },
  paymentInfo: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  payByContainer: { gap: 1 },
  payByLabel: { fontSize: 10, fontWeight: '700', color: Colors.light.onSurfaceVariant, textTransform: 'uppercase', letterSpacing: 0.5 },
  payMethodRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  paymentMethod: { fontSize: 13, fontWeight: '800', color: Colors.light.onSurface },
  payCaret: { marginTop: 2 },
  paymentAmount: { fontSize: 12, fontWeight: '700', color: Colors.light.onSurfaceVariant },
  payNowBtn: { 
    backgroundColor: Colors.light.secondary, 
    borderRadius: 16, 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 8, 
    paddingVertical: 12, 
    paddingHorizontal: 20,
    shadowColor: Colors.light.secondary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4
  },
  payNowText: { color: 'white', fontFamily: Fonts.headline, fontSize: 16, fontWeight: '800' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
  modalBackground: { ...StyleSheet.absoluteFillObject },
  modalContent: { 
    backgroundColor: 'white', 
    borderTopLeftRadius: 32, 
    borderTopRightRadius: 32, 
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -12 },
    shadowOpacity: 0.1,
    shadowRadius: 24,
    elevation: 20
  },
  modalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  modalTitle: { fontFamily: Fonts.headline, fontSize: 20, fontWeight: '800', color: Colors.light.onSurface },
  paymentOption: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 16, 
    borderRadius: 20, 
    gap: 16, 
    marginBottom: 8,
    borderWidth: 1,
    borderColor: 'transparent'
  },
  selectedOption: { borderColor: Colors.light.primary + '33', backgroundColor: Colors.light.primary + '08' },
  methodIcon: { width: 44, height: 44, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  paymentOptionText: { flex: 1, fontFamily: Fonts.body, fontSize: 16, fontWeight: '600', color: Colors.light.onSurface },
  selectedOptionText: { color: Colors.light.primary, fontWeight: '700' }
});
