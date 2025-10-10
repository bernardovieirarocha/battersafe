import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Animated, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Header } from '../../components/Header';
import { Stat } from '../../components/Stat';
import { BRAND } from '../../constants/theme';

export default function DashboardScreen() {
  const [batteryLevel, setBatteryLevel] = useState(96);
  const [temperature, setTemperature] = useState(28);
  const [isCharging, setIsCharging] = useState(false);
  const pulseAnim = useState(new Animated.Value(1))[0];

  // Simular mudança de bateria ao carregar
  useEffect(() => {
    if (isCharging && batteryLevel < 100) {
      const interval = setInterval(() => {
        setBatteryLevel(prev => {
          if (prev >= 100) {
            setIsCharging(false);
            return 100;
          }
          return prev + 1;
        });
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isCharging, batteryLevel]);

  // Animação de pulse quando carregando
  useEffect(() => {
    if (isCharging) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.2,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    } else {
      pulseAnim.setValue(1);
    }
  }, [isCharging]);

  const toggleCharging = () => {
    setIsCharging(!isCharging);
  };

  const getBatteryIcon = (): keyof typeof MaterialCommunityIcons.glyphMap => {
    if (isCharging) return 'battery-charging-80';
    if (batteryLevel > 80) return 'battery-90';
    if (batteryLevel > 50) return 'battery-70';
    if (batteryLevel > 20) return 'battery-40';
    return 'battery-10';
  };

  const getBatteryColor = () => {
    if (batteryLevel > 80) return BRAND.success;
    if (batteryLevel > 20) return BRAND.warn;
    return BRAND.danger;
  };
  return (
    <View style={styles.screen}>
      <Header title="Dashboard" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.card}>
          {/* Car Header */}
          <View style={styles.carHeader}>
            <View>
              <Text style={styles.carTitle}>BYD Dolphin</Text>
              <Text style={styles.carSub}>da Letícia</Text>
            </View>
            <TouchableOpacity onPress={toggleCharging}>
              <Animated.View 
                style={[
                  styles.batteryBadge,
                  { 
                    backgroundColor: isCharging ? '#fef3c7' : '#f0fdf4',
                    transform: [{ scale: pulseAnim }]
                  }
                ]}
              >
                <MaterialCommunityIcons 
                  name={getBatteryIcon()} 
                  size={20} 
                  color={getBatteryColor()} 
                />
                <Text style={[styles.batteryText, { color: getBatteryColor() }]}>
                  {batteryLevel}%
                </Text>
              </Animated.View>
            </TouchableOpacity>
          </View>

          {/* Car Image */}
          <View style={styles.carImageContainer}>
            <Image
              source={require('@/assets/images/byd-dolphin.jpg')}
              style={styles.carImage}
              resizeMode="cover"
            />
            {isCharging && (
              <View style={styles.chargingOverlay}>
                <Ionicons name="flash" size={32} color={BRAND.warn} />
                <Text style={styles.chargingText}>Carregando...</Text>
              </View>
            )}
          </View>

          {/* Stats Grid */}
          <View style={styles.row}>
            <Stat label="Saúde" value={`${batteryLevel}%`} />
            <Stat label="Temperatura" value={`${temperature}°C`} />
          </View>
          <View style={styles.row}>
            <Stat label="Ciclos" value="1247" />
            <Stat label="Degradação" value="1.8%/ano" />
          </View>

          {/* Recommendation Banner */}
          <View style={styles.banner}>
            <Ionicons name="bulb" size={18} color={BRAND.blue} />
            <View style={styles.bannerContent}>
              <Text style={styles.bannerTitle}>💡 Recomendação</Text>
              <Text style={styles.bannerText}>
                Carregue entre 20% e 80% para maximizar a vida da bateria
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: BRAND.grayBg,
  },
  scrollView: {
    flex: 1,
  },
  card: {
    backgroundColor: BRAND.white,
    margin: 16,
    padding: 16,
    borderRadius: 16,
    gap: 12,
  },
  carHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  carTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: BRAND.text,
  },
  carSub: {
    fontSize: 13,
    color: BRAND.textSecondary,
    marginTop: 2,
  },
  batteryBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0fdf4',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 4,
  },
  batteryText: {
    fontSize: 14,
    fontWeight: '700',
    color: BRAND.success,
  },
  carImageContainer: {
    alignItems: 'center',
    marginVertical: 8,
    position: 'relative',
  },
  carImage: {
    width: '100%',
    height: 180,
    borderRadius: 12,
  },
  chargingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  chargingText: {
    color: BRAND.white,
    fontSize: 16,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  banner: {
    marginTop: 8,
    borderRadius: 12,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#eff6ff',
    gap: 10,
  },
  bannerContent: {
    flex: 1,
    gap: 4,
  },
  bannerTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: BRAND.blue,
  },
  bannerText: {
    fontSize: 13,
    color: BRAND.blue,
    lineHeight: 18,
  },
});
