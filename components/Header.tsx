import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BRAND } from '../constants/theme';
import { Logo } from './Logo';

interface HeaderProps {
  title: string;
  showLogo?: boolean;
  showMenu?: boolean;
}

export function Header({ title, showLogo = false, showMenu = true }: HeaderProps) {
  return (
    <View style={styles.header}>
      {showMenu ? (
        <TouchableOpacity>
          <Ionicons name="menu" size={22} color="#fff" />
        </TouchableOpacity>
      ) : (
        <View style={{ width: 22 }} />
      )}
      
      {showLogo ? (
        <Logo size="small" color="white" />
      ) : (
        <Text style={styles.headerTitle}>{title}</Text>
      )}
      
      <View style={{ width: 22 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: { backgroundColor: BRAND.blue, paddingTop: 52, paddingBottom: 12, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  headerTitle: { color: 'white', fontSize: 18, fontWeight: '800' },
});

