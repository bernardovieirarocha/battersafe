import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BRAND } from '../constants/theme';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'white' | 'blue';
  showTagline?: boolean;
}

export function Logo({ size = 'medium', color = 'white', showTagline = false }: LogoProps) {
  const sizes = {
    small: { icon: 24, title: 20, tagline: 12 },
    medium: { icon: 36, title: 28, tagline: 14 },
    large: { icon: 56, title: 42, tagline: 16 },
  };

  const colors = {
    white: BRAND.white,
    blue: BRAND.blue,
  };

  const currentSize = sizes[size];
  const currentColor = colors[color];

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Ionicons 
          name="battery-charging" 
          size={currentSize.icon} 
          color={currentColor} 
        />
        <Text 
          style={[
            styles.title, 
            { fontSize: currentSize.title, color: currentColor }
          ]}
        >
          Batterysafe
        </Text>
      </View>
      {showTagline && (
        <Text 
          style={[
            styles.tagline, 
            { fontSize: currentSize.tagline, color: currentColor }
          ]}
        >
          O poder da proteção
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  title: {
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  tagline: {
    fontWeight: '400',
    opacity: 0.9,
  },
});
