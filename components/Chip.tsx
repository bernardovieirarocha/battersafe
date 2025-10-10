import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { BRAND } from '../constants/theme';

interface ChipProps {
  label: string;
  active?: boolean;
  onPress?: () => void;
}

export function Chip({ label, active = false, onPress }: ChipProps) {
  return (
    <TouchableOpacity
      style={[styles.chip, active && styles.chipActive]}
      onPress={onPress}
    >
      <Text style={[styles.chipText, active && styles.chipTextActive]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
  },
  chipActive: {
    backgroundColor: BRAND.blue,
  },
  chipText: {
    fontSize: 14,
    fontWeight: '600',
    color: BRAND.textSecondary,
  },
  chipTextActive: {
    color: BRAND.white,
  },
});