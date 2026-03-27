// Fallback for using MaterialIcons on Android and web.

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolWeight, SymbolViewProps } from 'expo-symbols';
import { ComponentProps } from 'react';
import { OpaqueColorValue, type StyleProp, type TextStyle } from 'react-native';

type IconMapping = Record<SymbolViewProps['name'], ComponentProps<typeof MaterialIcons>['name']>;
type IconSymbolName = keyof typeof MAPPING;

/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
const MAPPING: Record<string, ComponentProps<typeof MaterialIcons>['name']> = {
  'house.fill': 'home',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
  'location_on': 'location-on',
  'shopping_cart': 'shopping-cart',
  'shopping_bag': 'shopping-bag',
  'search': 'search',
  'eco': 'eco',
  'shopping_basket': 'shopping-basket',
  'mic': 'mic',
  'water_drop': 'opacity',
  'nutrition': 'restaurant',
  'cookie': 'cookie',
  'local_cafe': 'local-cafe',
  'cleaning_services': 'cleaning-services',
  'schedule': 'schedule',
  'arrow_back': 'arrow-back',
  'add': 'add',
  'remove': 'remove',
  'sell': 'sell',
  'edit': 'edit',
  'person': 'person',
  'home': 'home',
  'star': 'star',
  'shopping_bag_filled': 'shopping-bag',
  'close': 'close',
};

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: string;
  size?: number;
  color?: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
}) {
  const iconName = MAPPING[name] || (name as any);
  return <MaterialIcons color={color} size={size} name={iconName} style={style} />;
}


