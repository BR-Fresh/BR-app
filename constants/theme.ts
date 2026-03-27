import { Platform } from 'react-native';

export const Colors = {
  light: {
    text: '#1C1C18',
    background: '#FCF9F3',
    tint: '#005129',
    icon: '#707A70',
    tabIconDefault: '#707A70',
    tabIconSelected: '#005129',
    
    // Brand Palette from prompt.txt
    primary: '#005129',
    onPrimary: '#ffffff',
    primaryContainer: '#1A6B3C',
    onPrimaryContainer: '#9AE9AE',
    
    secondary: '#006E1C',
    onSecondary: '#ffffff',
    secondaryContainer: '#91F78E',
    onSecondaryContainer: '#00731E',
    
    tertiary: '#005047',
    onTertiary: '#ffffff',
    tertiaryContainer: '#006A5F',
    onTertiaryContainer: '#82EAD9',
    
    surface: '#FCF9F3',
    onSurface: '#1C1C18',
    surfaceVariant: '#E5E2DC',
    onSurfaceVariant: '#404940',
    
    surfaceContainerLow: '#F6F3ED',
    surfaceContainer: '#F0EEE8',
    surfaceContainerHigh: '#EBE8E2',
    surfaceContainerHighest: '#E5E2DC',
    surfaceContainerLowest: '#FFFFFF',
    primaryFixed: '#A5F4B8',
    primaryFixedDim: '#89D89E',
    
    outline: '#707A70',
    outlineVariant: '#BFC9BE',
    
    error: '#BA1A1A',
    onError: '#ffffff',
    errorContainer: '#FFDAD6',
    onErrorContainer: '#93000A',
    
    inverseSurface: '#31312D',
    inverseOnSurface: '#F3F0EA',
    inversePrimary: '#89D89E',
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: '#89D89E',
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: '#89D89E',
    
    primary: '#89D89E',
    onPrimary: '#00391A',
    primaryContainer: '#005229',
    onPrimaryContainer: '#A5F4B8',
    
    secondary: '#78DC77',
    onSecondary: '#00390A',
    secondaryContainer: '#005313',
    onSecondaryContainer: '#94F990',
    
    surface: '#1C1C18',
    onSurface: '#E5E2DC',
    surfaceVariant: '#404940',
    onSurfaceVariant: '#BFC9BE',
    
    surfaceContainerLow: '#1C1C18',
    surfaceContainer: '#31312D',
    surfaceContainerHigh: '#3C3C38',
    surfaceContainerHighest: '#474743',
    surfaceContainerLowest: '#000000',
    primaryFixed: '#A5F4B8',
  },
};


export const Fonts = {
  headline: 'Plus Jakarta Sans',
  body: 'Inter',
  label: 'Inter',
  mono: Platform.select({ ios: 'Courier', android: 'monospace', default: 'monospace' }),
  rounded: Platform.select({ ios: 'Arial Rounded MT Bold', default: 'normal' }),
};

