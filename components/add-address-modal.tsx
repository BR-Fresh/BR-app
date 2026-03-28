import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity,
  Modal,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Image
} from 'react-native';
import { Colors, Fonts } from '../constants/theme';
import { IconSymbol } from './ui/icon-symbol';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

interface AddAddressModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export function AddAddressModal({ isVisible, onClose }: AddAddressModalProps) {
  const [addressType, setAddressType] = useState('Home');

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
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.modalContent}
        >
          <View style={styles.handleBar} />
          
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Enter Address Details</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
               <IconSymbol name="close" size={20} color={Colors.light.onSurfaceVariant} />
            </TouchableOpacity>
          </View>

          <ScrollView 
            contentContainerStyle={styles.modalScroll} 
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
             {/* Map Section */}
             <View style={styles.mapSection}>
                <View style={styles.mapContainer}>
                   <Image 
                      source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3_KkZz99-Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_Z_Z9_99_XpS8ZzV9gQ' }}
                      style={styles.mapImage}
                   />
                   <View style={styles.pinContainer}>
                      <View style={styles.pinCircle}>
                         <IconSymbol name="location_on" size={24} color="white" />
                      </View>
                      <View style={styles.pinStem} />
                   </View>
                </View>
                <View style={styles.mapInfoOverlay}>
                   <View style={styles.mapInfoTextRow}>
                      <IconSymbol name="my_location" size={18} color={Colors.light.primary} />
                      <Text style={styles.mapInfoText} numberOfLines={1}>Sector 21, Chandigarh, 160022</Text>
                   </View>
                   <TouchableOpacity style={styles.changeBtn}>
                      <Text style={styles.changeBtnText}>CHANGE</Text>
                   </TouchableOpacity>
                </View>
             </View>


             {/* Form Fields */}
             <View style={styles.form}>
                <View style={styles.inputGroup}>
                   <Text style={styles.inputLabel}>HOUSE / FLAT / BLOCK NO.</Text>
                   <TextInput 
                      style={styles.input} 
                      placeholder="e.g. 42nd Floor, Sky Tower" 
                      placeholderTextColor={Colors.light.outline}
                   />
                </View>

                <View style={styles.inputGroup}>
                   <Text style={styles.inputLabel}>APARTMENT / ROAD / AREA</Text>
                   <TextInput 
                      style={styles.input} 
                      placeholder="e.g. Sector 21" 
                      placeholderTextColor={Colors.light.outline}
                   />
                </View>

                <View style={styles.inputGroup}>
                   <Text style={styles.inputLabel}>LANDMARK (OPTIONAL)</Text>
                   <TextInput 
                      style={styles.input} 
                      placeholder="e.g. Near Rose Garden" 
                      placeholderTextColor={Colors.light.outline}
                   />
                </View>

                {/* Address Type */}
                <View style={styles.typeSection}>
                   <Text style={styles.inputLabel}>SAVE AS</Text>
                   <View style={styles.typeRow}>
                      {[
                        { label: 'Home', icon: 'home' },
                        { label: 'Work', icon: 'work' },
                        { label: 'Other', icon: 'location_on' },
                      ].map((item) => (
                        <TouchableOpacity 
                           key={item.label}
                           style={[styles.typeBtn, addressType === item.label && styles.typeBtnSelected]}
                           onPress={() => setAddressType(item.label)}
                        >
                           <IconSymbol name={item.icon} size={18} color={addressType === item.label ? Colors.light.primary : Colors.light.onSurfaceVariant} />
                           <Text style={[styles.typeBtnText, addressType === item.label && styles.typeBtnTextSelected]}>{item.label}</Text>
                        </TouchableOpacity>
                      ))}
                   </View>
                </View>
             </View>

             <TouchableOpacity style={styles.saveBtn} onPress={onClose}>
                <Text style={styles.saveBtnText}>Save Address</Text>
             </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
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
    height: SCREEN_HEIGHT * 0.85,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalTitle: {
    fontFamily: Fonts.headline,
    fontSize: 22,
    fontWeight: '800',
    color: Colors.light.primary,
  },
  closeBtn: {
     width: 32,
     height: 32,
     borderRadius: 16,
     backgroundColor: Colors.light.surfaceContainer,
     alignItems: 'center',
     justifyContent: 'center',
  },
  modalScroll: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  mapSection: { 
     height: 200, 
     borderRadius: 24, 
     overflow: 'hidden', 
     marginBottom: 24,
     borderWidth: 1,
     borderColor: Colors.light.outlineVariant + '33',
  },
  mapContainer: { 
     flex: 1, 
     alignItems: 'center', 
     justifyContent: 'center',
  },
  mapImage: { 
     ...StyleSheet.absoluteFillObject,
     width: '100%',
     height: '100%',
  },
  pinContainer: { 
     alignItems: 'center',
     marginBottom: 24, // Offset pin position to stand on the center
  },
  pinCircle: { 
     width: 40, 
     height: 40, 
     borderRadius: 20, 
     backgroundColor: Colors.light.primary, 
     alignItems: 'center', 
     justifyContent: 'center',
     shadowColor: '#000',
     shadowOffset: { width: 0, height: 4 },
     shadowOpacity: 0.3,
     shadowRadius: 4,
     elevation: 5,
  },
  pinStem: { 
     width: 2, 
     height: 10, 
     backgroundColor: Colors.light.primary,
  },
  mapInfoOverlay: { 
     position: 'absolute',
     bottom: 0,
     left: 0,
     right: 0,
     backgroundColor: 'white',
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-between',
     padding: 12,
     paddingHorizontal: 16,
     borderTopWidth: 1,
     borderTopColor: Colors.light.outlineVariant + '1A',
  },
  mapInfoTextRow: { 
     flexDirection: 'row', 
     alignItems: 'center', 
     gap: 8, 
     flex: 1 
  },
  mapInfoText: { 
     fontSize: 13, 
     fontWeight: '700', 
     color: Colors.light.onSurface, 
     flex: 1 
  },
  changeBtn: {
     backgroundColor: 'white',
     paddingHorizontal: 12,
     paddingVertical: 6,
     borderRadius: 8,
     borderWidth: 1,
     borderColor: Colors.light.primary,
  },
  changeBtnText: {
     color: Colors.light.primary,
     fontSize: 11,
     fontWeight: '800',
  },
  form: {
     gap: 24,
     marginBottom: 32,
  },
  inputGroup: {
     gap: 8,
  },
  inputLabel: {
     fontSize: 11,
     fontWeight: '800',
     color: Colors.light.onSurfaceVariant,
     letterSpacing: 1,
  },
  input: {
     backgroundColor: 'white',
     borderWidth: 1,
     borderColor: Colors.light.outlineVariant + '4D',
     borderRadius: 16,
     paddingHorizontal: 16,
     paddingVertical: 14,
     fontFamily: Fonts.body,
     fontSize: 15,
     color: Colors.light.onSurface,
  },
  typeSection: {
     gap: 12,
  },
  typeRow: {
     flexDirection: 'row',
     gap: 12,
  },
  typeBtn: {
     flex: 1,
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'center',
     gap: 8,
     backgroundColor: 'white',
     borderWidth: 1,
     borderColor: Colors.light.outlineVariant + '4D',
     borderRadius: 16,
     paddingVertical: 12,
  },
  typeBtnSelected: {
     borderColor: Colors.light.primary,
     backgroundColor: Colors.light.primary + '08',
  },
  typeBtnText: {
     fontSize: 13,
     fontWeight: '700',
     color: Colors.light.onSurfaceVariant,
  },
  typeBtnTextSelected: {
     color: Colors.light.primary,
  },
  saveBtn: {
     backgroundColor: Colors.light.primary,
     width: '100%',
     paddingVertical: 18,
     borderRadius: 20,
     alignItems: 'center',
     shadowColor: Colors.light.primary,
     shadowOffset: { width: 0, height: 4 },
     shadowOpacity: 0.2,
     shadowRadius: 8,
     elevation: 4,
  },
  saveBtnText: {
     color: 'white',
     fontFamily: Fonts.headline,
     fontSize: 16,
     fontWeight: '800',
  }
});
