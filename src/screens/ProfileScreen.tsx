import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Fonts } from '../../constants/theme';
import { IconSymbol } from '../../components/ui/icon-symbol';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Account</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
         <View style={styles.profileHeader}>
            <View style={styles.avatarPlaceholder} />
            <View style={styles.userInfo}>
               <Text style={styles.userName}>Rahul Sharma</Text>
               <Text style={styles.userPhone}>+91 98765 43210</Text>
            </View>
            <TouchableOpacity style={styles.editBtn}>
               <IconSymbol name="edit" size={20} color={Colors.light.primary} />
            </TouchableOpacity>
         </View>

         <View style={styles.menuSection}>
            {[
              { icon: 'location_on', label: 'My Addresses' },
              { icon: 'credit_card', label: 'Payment Methods' },
              { icon: 'notifications', label: 'Notifications' },
              { icon: 'security', label: 'Privacy Policy' },
              { icon: 'help', label: 'Help & Support' },
              { icon: 'logout', label: 'Logout', color: '#D32F2F' },
            ].map((item, i) => (
              <TouchableOpacity key={i} style={styles.menuItem}>
                 <IconSymbol name={item.icon as any} size={24} color={item.color || Colors.light.onSurfaceVariant} />
                 <Text style={[styles.menuLabel, item.color && { color: item.color }]}>{item.label}</Text>
                 <IconSymbol name="chevron.right" size={20} color={Colors.light.outlineVariant} />
              </TouchableOpacity>
            ))}
         </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.light.background },
  header: { padding: 24, paddingBottom: 12 },
  headerTitle: { fontFamily: Fonts.headline, fontSize: 24, fontWeight: '800' },
  scrollContent: { padding: 24 },
  profileHeader: { flexDirection: 'row', alignItems: 'center', gap: 20, marginBottom: 40 },
  avatarPlaceholder: { width: 80, height: 80, borderRadius: 40, backgroundColor: Colors.light.surfaceContainerHigh },
  userInfo: { flex: 1, gap: 4 },
  userName: { fontFamily: Fonts.headline, fontSize: 20, fontWeight: '800' },
  userPhone: { fontSize: 14, color: Colors.light.onSurfaceVariant, fontWeight: '500' },
  editBtn: { padding: 8, backgroundColor: Colors.light.surfaceContainerLow, borderRadius: 12 },
  menuSection: { backgroundColor: 'white', borderRadius: 24, padding: 8, borderWidth: 1, borderColor: Colors.light.outlineVariant + '33' },
  menuItem: { flexDirection: 'row', alignItems: 'center', padding: 16, gap: 16 },
  menuLabel: { flex: 1, fontFamily: Fonts.body, fontSize: 16, fontWeight: '600', color: Colors.light.onSurface },
});
