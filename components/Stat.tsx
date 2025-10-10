import React from 'react';
import { Text, View } from 'react-native';
import { BRAND } from '../constants/theme';

export function Stat({ label, value }: { label: string; value: string }) {
  return (
    <View style={{ flex: 1, paddingVertical: 8 }}>
      <Text style={{ color: '#6b7280', marginBottom: 4 }}>{label}</Text>
      <Text style={{ fontSize: 18, fontWeight: '700', color: BRAND.text }}>{value}</Text>
    </View>
  );
}
