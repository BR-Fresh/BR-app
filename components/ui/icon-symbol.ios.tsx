import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { OpaqueColorValue, type StyleProp, type TextStyle } from 'react-native';

const MAPPING: Record<string, string> = {
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
  'my_location': 'my-location',
  'near_me': 'near-me',
  'work': 'work',
  'add_circle': 'add-circle',
  'check': 'check',
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
  return <MaterialIcons color={color as string} size={size} name={MAPPING[name] || name} style={style} />;
}
