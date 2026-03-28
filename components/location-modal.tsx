import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity,
  Modal,
  Dimensions
} from 'react-native';
import { Colors, Fonts } from '../constants/theme';
import { IconSymbol } from './ui/icon-symbol';
import { AddAddressModal } from './add-address-modal';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

interface LocationModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export function LocationModal({ isVisible, onClose }: LocationModalProps) {
  const [isAddModalVisible, setIsAddModalVisible] = React.useState(false);
  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <TouchableOpacity 
          style={styles.modalBackground} 
          activeOpacity={1} 
          onPress={onClose} 
        />
        <View style={styles.modalContent}>
          <View style={styles.handleBar} />
          
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Select Location</Text>
          </View>

          <ScrollView contentContainerStyle={styles.modalScroll} showsVerticalScrollIndicator={false}>
            {/* Current Location Action */}
            <TouchableOpacity style={styles.actionCard} onPress={onClose}>
              <View style={styles.actionIconBg}>
                <IconSymbol name="near_me" size={24} color={Colors.light.primary} />
              </View>
              <View style={styles.actionInfo}>
                <Text style={styles.actionTitle}>Use current location</Text>
                <Text style={styles.actionSubtitle}>Using GPS • Accurate within 10m</Text>
              </View>
              <IconSymbol name="chevron.right" size={20} color={Colors.light.outlineVariant} />
            </TouchableOpacity>

            {/* Saved Addresses Section */}
            <View style={styles.addressSection}>
              <Text style={styles.sectionSubtitle}>Saved Addresses</Text>
              
              {/* Home Address */}
              <TouchableOpacity style={styles.addressCard} onPress={onClose}>
                <View style={styles.addressIconBg}>
                  <IconSymbol name="home" size={20} color={Colors.light.primary} />
                </View>
                <View style={styles.addressInfo}>
                  <View style={styles.addressTitleRow}>
                    <Text style={styles.addressTitle}>Home</Text>
                    <View style={styles.defaultBadge}>
                      <Text style={styles.defaultBadgeText}>DEFAULT</Text>
                    </View>
                  </View>
                  <Text style={styles.addressText}>42nd Floor, Sky Tower, Sector 21, Chandigarh</Text>
                </View>
              </TouchableOpacity>

              {/* Work Address */}
              <TouchableOpacity style={styles.addressCard} onPress={onClose}>
                <View style={styles.addressIconBg}>
                  <IconSymbol name="work" size={20} color={Colors.light.primary} />
                </View>
                <View style={styles.addressInfo}>
                  <Text style={styles.addressTitle}>Work</Text>
                  <Text style={styles.addressText}>Tech Hub 1, Phase 8, Mohali</Text>
                </View>
              </TouchableOpacity>
            </View>

            {/* Add New Address CTA */}
            <TouchableOpacity 
               style={styles.addAddressBtn} 
               onPress={() => setIsAddModalVisible(true)}
            >
              <IconSymbol name="add_circle" size={20} color={Colors.light.primary} />
              <Text style={styles.addAddressText}>Add New Address</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>

      <AddAddressModal 
        isVisible={isAddModalVisible} 
        onClose={() => setIsAddModalVisible(false)} 
      />
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalBackground: {
    ...StyleSheet.absoluteFillObject,
  },
  modalContent: {
    height: SCREEN_HEIGHT * 0.7,
    backgroundColor: Colors.light.background,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -12 },
    shadowOpacity: 0.1,
    shadowRadius: 40,
    elevation: 20,
  },
  handleBar: {
    width: 48,
    height: 6,
    backgroundColor: Colors.light.outlineVariant + '4D',
    borderRadius: 99,
    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 20,
  },
  modalHeader: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  modalTitle: {
    fontFamily: Fonts.headline,
    fontSize: 24,
    fontWeight: '800',
    color: Colors.light.primary,
  },
  modalScroll: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  actionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    gap: 16,
    borderWidth: 1,
    borderColor: Colors.light.outlineVariant + '33',
    marginBottom: 32,
  },
  actionIconBg: {
    width: 48,
    height: 48,
    backgroundColor: Colors.light.primaryFixed,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionInfo: {
    flex: 1,
  },
  actionTitle: {
    fontFamily: Fonts.headline,
    fontSize: 16,
    fontWeight: '700',
    color: Colors.light.onSurface,
  },
  actionSubtitle: {
    fontSize: 13,
    color: Colors.light.onSurfaceVariant,
    marginTop: 2,
    fontWeight: '500',
  },
  addressSection: {
    marginBottom: 32,
  },
  sectionSubtitle: {
    fontFamily: Fonts.headline,
    fontSize: 18,
    fontWeight: '800',
    color: Colors.light.onSurface,
    marginBottom: 16,
  },
  addressCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.light.outlineVariant + '33',
    marginBottom: 12,
    gap: 16,
  },
  addressIconBg: {
    width: 40,
    height: 40,
    backgroundColor: Colors.light.surfaceContainer,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addressInfo: {
    flex: 1,
  },
  addressTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  addressTitle: {
    fontFamily: Fonts.headline,
    fontSize: 16,
    fontWeight: '700',
    color: Colors.light.onSurface,
  },
  defaultBadge: {
    backgroundColor: Colors.light.primaryFixed + '4D',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  defaultBadgeText: {
    fontSize: 10,
    fontWeight: '800',
    color: Colors.light.primary,
    letterSpacing: 1,
  },
  addressText: {
    fontSize: 14,
    color: Colors.light.onSurfaceVariant,
    lineHeight: 20,
    fontWeight: '500',
  },
  addAddressBtn: {
    width: '100%',
    padding: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.light.primary + '33',
    borderStyle: 'dashed',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  addAddressText: {
    fontFamily: Fonts.headline,
    fontSize: 16,
    fontWeight: '700',
    color: Colors.light.primary,
  }
});
