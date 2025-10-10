import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BRAND } from '../constants/theme';

interface AlertCardProps {
  title: string;
  subtitle: string;
  color: 'green' | 'orange' | 'red';
}

export function AlertCard({ title, subtitle, color }: AlertCardProps) {
  const colorMap = {
    green: BRAND.success,
    orange: BRAND.warn,
    red: BRAND.danger,
  };

  return (
    <View style={styles.card}>
      <View style={[styles.indicator, { backgroundColor: colorMap[color] }]} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: BRAND.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  indicator: {
    width: 4,
    borderRadius: 2,
    marginRight: 12,
  },
  content: {
    flex: 1,
    gap: 4,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: BRAND.text,
  },
  subtitle: {
    fontSize: 13,
    color: BRAND.textSecondary,
  },
});
