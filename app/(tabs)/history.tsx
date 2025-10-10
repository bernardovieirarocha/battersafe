import React, { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Chip } from '../../components/Chip';
import { Header } from '../../components/Header';
import { Stat } from '../../components/Stat';
import { BRAND } from '../../constants/theme';

type Period = 'Dia' | 'Mês' | 'Ano';

export default function HistoryScreen() {
  const [selectedPeriod, setSelectedPeriod] = useState<Period>('Mês');

  // Dynamic data based on period
  const getChartData = () => {
    switch (selectedPeriod) {
      case 'Dia':
        return {
          labels: ['00h', '04h', '08h', '12h', '16h', '20h'],
          datasets: [{
            data: [95.5, 95.6, 96.2, 96.8, 96.5, 96.0],
            color: (opacity = 1) => BRAND.blue,
            strokeWidth: 3,
          }],
        };
      case 'Ano':
        return {
          labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
          datasets: [{
            data: [100, 98.5, 97.8, 97.0, 96.2, 95.0],
            color: (opacity = 1) => BRAND.blue,
            strokeWidth: 3,
          }],
        };
      default: // Mês
        return {
          labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
          datasets: [{
            data: [98, 97.8, 97.6, 97.5, 97.3, 97],
            color: (opacity = 1) => BRAND.blue,
            strokeWidth: 3,
          }],
        };
    }
  };

  const chartData = getChartData();

  return (
    <View style={styles.screen}>
      <Header title="Histórico" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Período</Text>
          <View style={styles.chipsRow}>
            <Chip
              label="Dia"
              active={selectedPeriod === 'Dia'}
              onPress={() => setSelectedPeriod('Dia')}
            />
            <Chip
              label="Mês"
              active={selectedPeriod === 'Mês'}
              onPress={() => setSelectedPeriod('Mês')}
            />
            <Chip
              label="Ano"
              active={selectedPeriod === 'Ano'}
              onPress={() => setSelectedPeriod('Ano')}
            />
          </View>

          {/* Chart */}
          <View style={styles.chartContainer}>
            <LineChart
              data={chartData}
              width={Dimensions.get('window').width - 64}
              height={180}
              chartConfig={{
                backgroundColor: BRAND.white,
                backgroundGradientFrom: BRAND.white,
                backgroundGradientTo: BRAND.white,
                decimalPlaces: 1,
                color: (opacity = 1) => BRAND.blue,
                labelColor: (opacity = 1) => BRAND.textSecondary,
                style: {
                  borderRadius: 12,
                },
                propsForDots: {
                  r: '4',
                  strokeWidth: '2',
                  stroke: BRAND.blue,
                },
              }}
              bezier
              style={styles.chart}
            />
          </View>

          <Text style={styles.sectionTitle}>Saúde da bateria</Text>
          <Text style={styles.subtitle}>
            Veja a evolução da capacidade da bateria ao longo do tempo
          </Text>
          <View style={styles.row}>
            <Stat label="Saúde atual (com 1 ano)" value="95%" />
            <Stat label="Perda no último mês" value="-0.4%" />
          </View>
          <View style={styles.row}>
            <Stat label="Status de saúde" value="Ótimo" />
            <Stat label="Ciclos de carga" value="1.247" />
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
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: BRAND.text,
    marginTop: 8,
  },
  subtitle: {
    fontSize: 13,
    color: BRAND.textSecondary,
    marginTop: -4,
    marginBottom: 4,
  },
  chipsRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 4,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  chartContainer: {
    marginVertical: 12,
    marginHorizontal: -16,
    paddingHorizontal: 16,
  },
  chart: {
    borderRadius: 12,
  },
});
