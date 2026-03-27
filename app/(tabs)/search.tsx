import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Fonts } from '../../constants/theme';
import { IconSymbol } from '../../components/ui/icon-symbol';

export default function SearchScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <IconSymbol name="search" size={20} color={Colors.light.outline} />
          <TextInput 
            placeholder="Search products, stores..."
            style={styles.input}
          />
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>Recent Searches</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.light.background },
  header: { padding: 16 },
  searchBar: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: Colors.light.surfaceContainerLow, 
    borderRadius: 16, 
    padding: 12,
    gap: 12
  },
  input: { flex: 1, fontFamily: Fonts.body, fontSize: 16 },
  content: { flex: 1, padding: 24 },
  text: { fontFamily: Fonts.headline, fontWeight: '700', color: Colors.light.onSurfaceVariant }
});
