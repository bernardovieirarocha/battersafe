import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AlertCard } from '../../components/AlertCard';
import { Header } from '../../components/Header';
import { BRAND } from '../../constants/theme';

interface Alert {
  id: string;
  title: string;
  subtitle: string;
  color: 'green' | 'orange' | 'red';
  timestamp: string;
}

export default function AlertsScreen() {
  const [alerts, setAlerts] = useState<Alert[]>([
    {
      id: '1',
      title: 'Carregamento Eficiente',
      subtitle: 'Para manter a saúde da bateria',
      color: 'green',
      timestamp: 'Há 2 horas',
    },
    {
      id: '2',
      title: 'Otimização Disponível',
      subtitle: 'Ver modo de ECO para economizar energia',
      color: 'orange',
      timestamp: 'Há 5 horas',
    },
    {
      id: '3',
      title: 'Temperatura Elevada',
      subtitle: 'Evitar carregar em locais muito quentes',
      color: 'red',
      timestamp: 'Há 1 dia',
    },
  ]);

  const dismissAlert = (id: string) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  const clearAllAlerts = () => {
    setAlerts([]);
  };

  return (
    <View style={styles.screen}>
      <Header title="Alertas" />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        {alerts.length > 0 ? (
          <>
            <View style={styles.headerRow}>
              <Text style={styles.countText}>{alerts.length} alertas</Text>
              <TouchableOpacity onPress={clearAllAlerts}>
                <Text style={styles.clearText}>Limpar todos</Text>
              </TouchableOpacity>
            </View>
            {alerts.map(alert => (
              <TouchableOpacity
                key={alert.id}
                onLongPress={() => dismissAlert(alert.id)}
                activeOpacity={0.7}
              >
                <View style={styles.alertWrapper}>
                  <AlertCard
                    title={alert.title}
                    subtitle={alert.subtitle}
                    color={alert.color}
                  />
                  <View style={styles.alertFooter}>
                    <Text style={styles.timestampText}>{alert.timestamp}</Text>
                    <TouchableOpacity
                      onPress={() => dismissAlert(alert.id)}
                      style={styles.dismissButton}
                    >
                      <Ionicons name="close-circle" size={20} color={BRAND.textSecondary} />
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </>
        ) : (
          <View style={styles.emptyState}>
            <Ionicons name="checkmark-circle" size={64} color={BRAND.success} />
            <Text style={styles.emptyTitle}>Tudo certo! 🎉</Text>
            <Text style={styles.emptySubtitle}>
              Nenhum alerta no momento. Sua bateria está saudável.
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: BRAND.grayBg,
  },
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  countText: {
    fontSize: 15,
    fontWeight: '600',
    color: BRAND.text,
  },
  clearText: {
    fontSize: 14,
    fontWeight: '600',
    color: BRAND.blue,
  },
  alertWrapper: {
    marginBottom: 4,
  },
  alertFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 8,
    backgroundColor: BRAND.white,
    marginTop: -12,
    marginBottom: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  timestampText: {
    fontSize: 12,
    color: BRAND.textSecondary,
  },
  dismissButton: {
    padding: 4,
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
    gap: 12,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: BRAND.text,
    marginTop: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    color: BRAND.textSecondary,
    textAlign: 'center',
    paddingHorizontal: 32,
  },
});
