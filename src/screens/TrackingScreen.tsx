import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Image, 
  TouchableOpacity, 
  Platform,
  Dimensions
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Colors, Fonts } from '../../constants/theme';
import { IconSymbol } from '../../components/ui/icon-symbol';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function TrackingScreen() {
  const insets = useSafeAreaInsets();
  const [selectedTip, setSelectedTip] = useState<number | 'custom' | null>(null);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={styles.container}>
      {/* Top Navigation */}
      <SafeAreaView edges={['top']} style={styles.navBar}>
        <View style={styles.navContent}>
          <View style={styles.navLeft}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <IconSymbol name="arrow_back" size={24} color={Colors.light.primary} />
            </TouchableOpacity>
            <Text style={styles.navTitle}>Order Tracking</Text>
          </View>
        </View>
        <View style={styles.navDivider} />
      </SafeAreaView>

      <ScrollView 
        contentContainerStyle={[styles.scrollContent, { paddingBottom: 100 + insets.bottom }]}
        showsVerticalScrollIndicator={false}
      >
        {/* Live Map Section */}
        <View style={styles.mapSection}>
          <Image 
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3_TWZEmN7f3abgrdg-dZsiowsDrFJ3rWcY0JMKSi2WOBLvt_v0A6rAUxx7jqMTwYZ7rR8G_CKDvz4kDT844FaATUCrxhJ4AucXoPjzOsh5LfKWT-5-qA8-7tDLH6tbdkFFQqxAYRUKc7q0oZP9sgsDlCiyYAg0sayg05WhvHrLBYAfVmReQzUbo-3qx4QC_t5VB1h9GjIGcuqc8Eytnu0np6fe0v77tfqO5LkJoera1EFKI4og4SBPC9hClIsqr_-k4s5IkJ-NjA' }}
            style={styles.mapImage}
          />
          {/* Map Overlay UI */}
          <View style={styles.mapOverlay}>
            {/* Destination Pin */}
            <View style={[styles.pinContainer, { top: '25%', left: '33.33%' }]}>
              <View style={styles.destinationPinBg}>
                <MaterialIcons name="location-on" size={20} color="white" />
              </View>
              <View style={styles.destinationBadge}>
                <Text style={styles.destinationText}>Destination</Text>
              </View>
            </View>

            {/* Delivery Agent Icon */}
            <View style={[styles.agentContainer, { bottom: '25%', right: '25%' }]}>
              <View style={styles.agentIconBg}>
                <MaterialIcons name="directions-bike" size={24} color="white" />
              </View>
            </View>
          </View>
        </View>

        {/* Status Section */}
        <View style={styles.statusSection}>
          <View style={styles.statusContent}>
            <View style={styles.statusTextContainer}>
              <View style={styles.statusLabelRow}>
                <View style={styles.pingDot} />
                <Text style={styles.statusLabel}>CURRENT STATUS</Text>
              </View>
              <Text style={styles.statusTitle}>Out for Delivery</Text>
              <View style={styles.etaRow}>
                <MaterialIcons name="schedule" size={14} color="white" style={{ opacity: 0.9 }} />
                <Text style={styles.etaText}>
                  Estimated arrival in <Text style={styles.etaUnderline}>14 mins</Text>
                </Text>
              </View>
            </View>
            <View style={styles.etaCard}>
              <Text style={styles.etaTimeCount}>14</Text>
              <Text style={styles.etaTimeUnit}>MINS</Text>
            </View>
          </View>
          <View style={styles.decorShape} />
        </View>

        {/* Delivery Agent Card */}
        <View style={styles.agentCard}>
          <View style={styles.agentMainInfo}>
            <View style={styles.agentAvatarContainer}>
              <Image 
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1_O2rrf8vDk7XnwPeS8dzfObCN0Eo1_TY5WwkwU4RC1w6EYZ81I_fL6wvXVVw5DMb4NLnXAd0GdRCidOsFWSAQeyLX5JRZXNchFmmwycagRaBalk8Mv_FDFAmwcYQqGxHQkiSXX54SH3o-mb2xyDd7rL5N_xgzJDJ3ASZ0yx0IEJhgT6FDfMA1tzDWpsfj1sp9abQXPdiSq2xdXObZgZaj6X8Z9LIFjTOiJfjKhnjW2JFqBB6rQfJgmY-D7mvJmStTYCEwl8fp4U' }}
                style={styles.agentAvatar}
              />
              <View style={styles.ratingBadge}>
                <Text style={styles.ratingText}>4.8</Text>
                <MaterialIcons name="star" size={10} color="white" />
              </View>
            </View>
            <View>
              <Text style={styles.agentName}>Rahul Singh</Text>
              <View style={styles.verifiedRow}>
                <MaterialIcons name="verified" size={12} color={Colors.light.onSurfaceVariant} />
                <Text style={styles.verifiedText}>Platinum Delivery Partner</Text>
              </View>
            </View>
          </View>
          <View style={styles.agentControls}>
            <TouchableOpacity style={styles.controlBtnSmall}>
              <MaterialIcons name="chat-bubble" size={20} color={Colors.light.primary} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.controlBtnSmall, styles.callBtn]}>
              <MaterialIcons name="call" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Tip Section */}
        <View style={styles.tipSection}>
          <Text style={styles.tipTitle}>Say thanks with a tip</Text>
          <Text style={styles.tipSubtitle}>100% of the tip goes to your delivery partner</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tipOptionsRow}>
            {[20, 30, 50].map((amount) => (
              <TouchableOpacity 
                key={amount} 
                style={[styles.tipOption, selectedTip === amount && styles.tipOptionSelected]}
                onPress={() => setSelectedTip(amount)}
              >
                <Text style={[styles.tipAmountText, selectedTip === amount && styles.tipAmountTextSelected]}>₹{amount}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity 
              style={[styles.tipOption, selectedTip === 'custom' && styles.tipOptionSelected]}
              onPress={() => setSelectedTip('custom')}
            >
              <Text style={[styles.tipAmountText, selectedTip === 'custom' && styles.tipAmountTextSelected]}>Custom</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Order Summary Section */}
        <View style={styles.orderSummary}>
          <TouchableOpacity style={styles.summaryHeader}>
            <View style={styles.summaryLeft}>
              <View style={styles.summaryIconBg}>
                <MaterialIcons name="shopping-basket" size={24} color={Colors.light.primary} />
              </View>
              <View>
                <Text style={styles.summaryOrderId}>Order #BR-99210</Text>
                <Text style={styles.summaryDetails}>8 Items • ₹1,248.00</Text>
              </View>
            </View>
            <MaterialIcons name="keyboard-arrow-down" size={24} color={Colors.light.onSurfaceVariant} />
          </TouchableOpacity>
          <View style={styles.itemsPreview}>
            <View style={styles.previewImageBg}>
              <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYWsjDG8CwcNHJqbWw4btM9gdAhzZyzG_9Bt0Gq0B40t7bULamyZZh7mslwWMJ8j1KI9VzYaWzM4Qwa6DwuUK0NVwiUm-_oT_roNkJ28J42BnquglPd_HTsS3PtPHFpuimPM0v89w4rROtU9fYhWVcmnCbVLTuGCkrDfTUhGdp9s5EB1gX9TcyaJZK1HdD2eNZXWJwjth8My6nXitk_K1YeLDeHzxCUKw0whyvKXJmiDStmyPQsWF8xYxA4NThTPizIT-GYBxlrkQ' }} style={styles.previewImage} />
            </View>
            <View style={styles.previewImageBg}>
              <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOyyFiLTPOzP8bG-_VHmnYGYQVyrWhwXVJC3auk5nvtvSC9CjQUUUXnKaAySgIsOTLVk7h5zuaisbSHCOxFDQbHqK5nqRkmHnlTTeoXxUdRCvVlFlkAP6pG6hIpFG2LyoiNTRj4EAXq0MRaIZTaRKV5TVcwWah3MsMmvhMWE1E10RvY8oGMoZ9-FpQ1vNnydoRbiCNMStCIcbF4sK15WaMxOpTJKW932aoiyNh0upAvjeodrpEF7jsWGJ4FIURcCb1zmSkFQDdW_U' }} style={styles.previewImage} />
            </View>
            <View style={[styles.previewImageBg, styles.moreBadge]}>
              <Text style={styles.moreText}>+6</Text>
            </View>
          </View>
        </View>
        
        {/* Action Buttons */}
        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity style={styles.helpButton}>
            <MaterialIcons name="support-agent" size={24} color={Colors.light.primary} />
            <Text style={styles.helpButtonText}>Need Help</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Cancel Order</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FCF9F3' },
  navBar: { backgroundColor: 'rgba(252, 249, 243, 0.8)', paddingBottom: 8 },
  navContent: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, paddingVertical: 16 },
  navLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  backButton: { padding: 8, borderRadius: 99 },
  navTitle: { fontFamily: Fonts.headline, fontWeight: '700', fontSize: 18, color: Colors.light.primary },
  brandTitle: { fontSize: 24, fontWeight: '800', color: '#1A6B3C', fontStyle: 'italic' },
  navDivider: { height: 1, backgroundColor: '#F6F3ED', width: '100%' },
  scrollContent: { paddingHorizontal: 16, paddingTop: 16, gap: 16 },
  mapSection: { height: 380, borderRadius: 32, overflow: 'hidden', backgroundColor: Colors.light.surfaceContainer, borderWidth: 4, borderColor: 'white', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 12 },
  mapImage: { width: '100%', height: '100%', opacity: 0.8 },
  mapOverlay: { ...StyleSheet.absoluteFillObject },
  pinContainer: { position: 'absolute', alignItems: 'center' },
  destinationPinBg: { backgroundColor: Colors.light.primary, padding: 8, borderRadius: 99, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2 },
  destinationBadge: { marginTop: 4, backgroundColor: 'white', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 99, borderWidth: 1, borderColor: 'rgba(0,0,0,0.05)' },
  destinationText: { fontSize: 10, fontWeight: 'bold', paddingHorizontal: 12, paddingVertical: 4 },
  agentContainer: { position: 'absolute', alignItems: 'center' },
  agentIconBg: { backgroundColor: Colors.light.secondary, padding: 12, borderRadius: 16, borderLeftWidth: 2, borderRightWidth: 2, borderColor: 'white', transform: [{ rotate: '-12deg' }], shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.25 },
  statusSection: { backgroundColor: Colors.light.primary, borderRadius: 32, padding: 24, shadowColor: '#000', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.2, shadowRadius: 20, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  statusContent: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', zIndex: 10 },
  statusTextContainer: { gap: 4 },
  statusLabelRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  pingDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: Colors.light.primaryFixedDim },
  statusLabel: { fontSize: 10, fontWeight: '800', color: Colors.light.primaryFixed, letterSpacing: 1 },
  statusTitle: { fontFamily: Fonts.headline, fontSize: 24, fontWeight: '800', color: 'white' },
  etaRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 8 },
  etaText: { fontSize: 13, color: 'white', opacity: 0.9, fontWeight: '500' },
  etaUnderline: { fontWeight: 'bold', textDecorationLine: 'underline' },
  etaCard: { backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: 16, borderRadius: 24, borderWidth: 1, borderColor: 'rgba(255, 255, 255, 0.1)', alignItems: 'center', minWidth: 64 },
  etaTimeCount: { fontSize: 24, fontWeight: '900', color: 'white', lineHeight: 28 },
  etaTimeUnit: { fontSize: 10, fontWeight: '800', color: 'white', letterSpacing: -0.5 },
  decorShape: { position: 'absolute', bottom: -24, right: -24, width: 128, height: 128, borderRadius: 64, backgroundColor: Colors.light.primaryContainer, opacity: 0.2 },
  agentCard: { backgroundColor: 'white', borderRadius: 24, padding: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, borderWidth: 1, borderColor: Colors.light.outlineVariant + '33' },
  agentMainInfo: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  agentAvatarContainer: { position: 'relative' },
  agentAvatar: { width: 64, height: 64, borderRadius: 16, backgroundColor: Colors.light.surfaceContainer, borderWidth: 2, borderColor: '#F0EEE8' },
  ratingBadge: { position: 'absolute', bottom: -8, right: -8, backgroundColor: Colors.light.secondary, paddingHorizontal: 8, paddingVertical: 2, borderRadius: 8, flexDirection: 'row', alignItems: 'center', gap: 4, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2 },
  ratingText: { fontSize: 10, fontWeight: 'bold', color: 'white' },
  agentName: { fontFamily: Fonts.headline, fontWeight: '800', fontSize: 18, color: Colors.light.onSurface },
  verifiedRow: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 2 },
  verifiedText: { fontSize: 10, color: Colors.light.onSurfaceVariant, fontWeight: '500' },
  agentControls: { flexDirection: 'row', gap: 8 },
  controlBtnSmall: { width: 48, height: 48, borderRadius: 16, backgroundColor: Colors.light.surfaceContainerLow, alignItems: 'center', justifyContent: 'center' },
  callBtn: { backgroundColor: Colors.light.secondary, shadowColor: Colors.light.secondary, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2 },
  orderSummary: { backgroundColor: Colors.light.surfaceContainerLow, borderRadius: 24, overflow: 'hidden', borderWidth: 1, borderColor: Colors.light.outlineVariant + '33' },
  summaryHeader: { width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 24 },
  summaryLeft: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  summaryIconBg: { width: 48, height: 48, backgroundColor: 'white', borderRadius: 12, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'rgba(0,0,0,0.05)' },
  summaryOrderId: { fontFamily: Fonts.headline, fontWeight: '700', fontSize: 14, color: Colors.light.onSurface },
  summaryDetails: { fontSize: 12, color: Colors.light.onSurfaceVariant, marginTop: 2 },
  itemsPreview: { paddingHorizontal: 24, paddingBottom: 24, flexDirection: 'row', gap: 12, marginBottom: 24 },
  previewImageBg: { width: 56, height: 56, backgroundColor: 'white', borderRadius: 12, padding: 4 },
  previewImage: { width: '100%', height: '100%', resizeMode: 'contain' },
  moreBadge: { alignItems: 'center', justifyContent: 'center', borderStyle: 'dashed', borderWidth: 1, borderColor: '#bfc9be' },
  moreText: { fontSize: 12, fontWeight: 'bold', color: Colors.light.onSurfaceVariant },
  bottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(252,249,243, 0.9)', paddingHorizontal: 16, paddingTop: 12, borderTopWidth: 1, borderTopColor: '#F6F3ED', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', shadowColor: '#1C1C18', shadowOffset: { width: 0, height: -4 }, shadowOpacity: 0.04, shadowRadius: 20 },
  navItem: { alignItems: 'center', justifyContent: 'center', paddingHorizontal: 12, paddingVertical: 4 },
  navLabel: { fontFamily: Fonts.headline, fontSize: 11, fontWeight: '600', color: '#78716C', marginTop: 4 },
  activeNavItem: { backgroundColor: 'rgba(165, 244, 184, 0.2)', borderRadius: 12 },
  activeNavLabel: { color: Colors.light.primary },
  actionButtonsContainer: { flexDirection: 'row', gap: 12, marginTop: 8 },
  helpButton: { flex: 1, backgroundColor: 'white', borderWidth: 1, borderColor: '#bfc9be', borderRadius: 16, paddingVertical: 14, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 },
  helpButtonText: { fontFamily: Fonts.headline, fontSize: 14, fontWeight: '700', color: Colors.light.primary },
  cancelButton: { flex: 1, backgroundColor: '#FFF0F0', borderRadius: 16, paddingVertical: 14, alignItems: 'center', justifyContent: 'center' },
  cancelButtonText: { fontFamily: Fonts.headline, fontSize: 14, fontWeight: '700', color: '#BA1A1A' }
});
