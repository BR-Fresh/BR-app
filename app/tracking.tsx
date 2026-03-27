import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Platform } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors, Fonts } from '../constants/theme';
import { IconSymbol } from '../components/ui/icon-symbol';
import { router } from 'expo-router';

export default function TrackingScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <SafeAreaView edges={['top']} style={{ flex: 1 }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <IconSymbol name="arrow_back" size={24} color={Colors.light.onSurface} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Track Order #BR9482</Text>
          <View style={styles.headerSpacer} />
        </View>

        <ScrollView contentContainerStyle={{ paddingBottom: 100 + insets.bottom }}>
          {/* Map Placeholder */}
          <View style={styles.mapContainer}>
            <View style={styles.mapOverlay}>
               <View style={styles.etaBadge}>
                  <Text style={styles.etaTime}>12</Text>
                  <Text style={styles.etaUnit}>MINS</Text>
               </View>
               <Text style={styles.etaStatus}>Arriving at your doorstep</Text>
            </View>
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3Vn3R8F6iG5e7H8e0X0-0X0-0X0-0X0-0X0-0X0-0X0-0X0-0X0-0X0-0X0-0X0-0X0-0X0-0X0' }}
              style={styles.mapImage}
            />
          </View>

          {/* Delivery Partner */}
          <View style={styles.partnerCard}>
             <Image 
               source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0P0-p0-p0-p0-p0-p0-p0-p0-p0-p0-p0-p0-p0-p0-p0-p0-p0-p0-p0-p0-p0-p0-p0-p0' }}
               style={styles.partnerAvatar}
             />
             <View style={styles.partnerInfo}>
                <Text style={styles.partnerName}>Rahul Kumar</Text>
                <Text style={styles.partnerRating}>⭐ 4.9 (2.4k deliveries)</Text>
             </View>
             <TouchableOpacity style={styles.callBtn}>
                <IconSymbol name="local_cafe" size={20} color={Colors.light.primary} />
             </TouchableOpacity>
          </View>

          {/* Milestone Steps */}
          <View style={styles.milestoneSection}>
             {[
               { title: 'Order Received', time: '12:30 PM', completed: true },
               { title: 'Order Picked Up', time: '12:38 PM', completed: true, active: true },
               { title: 'Out for Delivery', time: 'Expected 12:45 PM', completed: false },
               { title: 'Delivered', time: 'Expected 12:50 PM', completed: false },
             ].map((step, i) => (
               <View key={i} style={styles.milestoneItem}>
                  <View style={styles.milestoneLeft}>
                     <View style={[styles.milestoneDot, step.completed && styles.dotCompleted]} />
                     {i < 3 && <View style={[styles.milestoneLine, step.completed && styles.lineCompleted]} />}
                  </View>
                  <View style={styles.milestoneRight}>
                     <Text style={[styles.milestoneTitle, step.active && styles.activeTitle]}>{step.title}</Text>
                     <Text style={styles.milestoneTime}>{step.time}</Text>
                  </View>
               </View>
             ))}
          </View>
        </ScrollView>
      </SafeAreaView>

      <View style={[styles.footer, { paddingBottom: Math.max(insets.bottom, 24) }]}>
         <TouchableOpacity style={styles.helpBtn}>
            <Text style={styles.helpText}>Need help with your order?</Text>
         </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.light.background },
  header: { flexDirection: 'row', alignItems: 'center', padding: 16, justifyContent: 'space-between', backgroundColor: 'white' },
  backButton: { padding: 8 },
  headerTitle: { fontFamily: Fonts.headline, fontSize: 16, fontWeight: '800' },
  headerSpacer: { width: 40 },
  mapContainer: { height: 300, backgroundColor: Colors.light.surfaceContainerLow, position: 'relative' },
  mapImage: { width: '100%', height: '100%', opacity: 0.5 },
  mapOverlay: { position: 'absolute', top: 24, left: 24, right: 24, backgroundColor: 'white', borderRadius: 20, padding: 20, flexDirection: 'row', alignItems: 'center', gap: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 12, elevation: 6 },
  etaBadge: { width: 64, height: 64, borderRadius: 32, backgroundColor: Colors.light.primary, alignItems: 'center', justifyContent: 'center' },
  etaTime: { color: 'white', fontFamily: Fonts.headline, fontSize: 24, fontWeight: '800' },
  etaUnit: { color: 'white', fontSize: 10, fontWeight: '800', marginTop: -4 },
  etaStatus: { flex: 1, fontFamily: Fonts.headline, fontSize: 18, fontWeight: '700', color: Colors.light.onSurface },
  partnerCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', margin: 24, padding: 16, borderRadius: 24, gap: 16, borderWidth: 1, borderColor: Colors.light.outlineVariant + '33' },
  partnerAvatar: { width: 48, height: 48, borderRadius: 24, backgroundColor: Colors.light.surfaceContainerHigh },
  partnerInfo: { flex: 1 },
  partnerName: { fontFamily: Fonts.headline, fontWeight: '700', fontSize: 16 },
  partnerRating: { fontSize: 12, color: Colors.light.onSurfaceVariant, marginTop: 2 },
  callBtn: { width: 48, height: 48, borderRadius: 24, backgroundColor: Colors.light.surfaceContainerLow, alignItems: 'center', justifyContent: 'center' },
  milestoneSection: { padding: 32, paddingTop: 8 },
  milestoneItem: { flexDirection: 'row', gap: 24, height: 80 },
  milestoneLeft: { alignItems: 'center', width: 24 },
  milestoneDot: { width: 12, height: 12, borderRadius: 6, backgroundColor: Colors.light.outlineVariant, marginTop: 6 },
  dotCompleted: { backgroundColor: Colors.light.primary },
  milestoneLine: { width: 2, flex: 1, backgroundColor: Colors.light.outlineVariant, marginVertical: 4 },
  lineCompleted: { backgroundColor: Colors.light.primary },
  milestoneRight: { flex: 1 },
  milestoneTitle: { fontFamily: Fonts.headline, fontSize: 16, fontWeight: '700', color: Colors.light.onSurfaceVariant },
  activeTitle: { color: Colors.light.primary, fontWeight: '800' },
  milestoneTime: { fontSize: 13, color: Colors.light.onSurfaceVariant, marginTop: 4 },
  footer: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: 24, backgroundColor: 'white' },
  helpBtn: { alignItems: 'center', padding: 16, backgroundColor: Colors.light.surfaceContainerLow, borderRadius: 16 },
  helpText: { fontWeight: '700', color: Colors.light.primary }
});
