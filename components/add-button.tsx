import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Colors, Fonts } from '../constants/theme';
import { IconSymbol } from './ui/icon-symbol';

interface AddButtonProps {
  quantity: number;
  onAdd: (e: any) => void;
  onRemove: (e: any) => void;
  style?: ViewStyle;
}

export function AddButton({ quantity, onAdd, onRemove, style }: AddButtonProps) {
  if (quantity > 0) {
    return (
      <View style={[styles.counterContainer, style]}>
        <TouchableOpacity style={styles.counterBtn} onPress={onRemove} activeOpacity={0.6}>
          <IconSymbol name="remove" size={12} color="white" />
        </TouchableOpacity>
        <View style={styles.quantityBox}>
          <Text style={styles.quantityText}>{quantity}</Text>
        </View>
        <TouchableOpacity style={styles.counterBtn} onPress={onAdd} activeOpacity={0.6}>
          <IconSymbol name="add" size={12} color="white" />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <TouchableOpacity
      style={[styles.addButton, style]}
      activeOpacity={0.6}
      onPress={onAdd}
    >
      <IconSymbol name="add" size={12} color={Colors.light.onSecondary} />
      <Text style={styles.addButtonText}>Add</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: Colors.light.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    width: 80,
    height: 28,
    borderRadius: 8,
  },
  addButtonText: {
    color: Colors.light.onSecondary,
    fontSize: 11,
    fontWeight: '800',
    fontFamily: Fonts.headline,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.light.secondary,
    borderRadius: 8,
    overflow: 'hidden',
    width: 80,
    height: 28,
    borderWidth: 1,
    borderColor: Colors.light.secondary,
  },
  counterBtn: {
    width: 24,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityBox: {
    backgroundColor: 'white',
    width: 32,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityText: {
    color: Colors.light.onSurface,
    fontSize: 12,
    fontWeight: '800',
    textAlign: 'center',
    fontFamily: Fonts.headline,
  }
});
