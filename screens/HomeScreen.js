import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

const Card = ({ title, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Text style={styles.cardText}>{title}</Text>
  </TouchableOpacity>
);

export default function HomeScreen({ navigate }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rook AI</Text>
      <View style={styles.grid}>
        <Card title="Chat" onPress={() => navigate('Chat')} />
        <Card title="Writing Studio" onPress={() => navigate('Writing')} />
        <Card title="Research" onPress={() => navigate('Writing')} />
        <Card title="Memory" onPress={() => navigate('Settings')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: colors.background },
  title: { color: colors.text, fontSize: 28, fontWeight: '600', marginBottom: 20 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  card: { width: '48%', backgroundColor: colors.surface, padding: 20, borderRadius: 20, marginBottom: 12 },
  cardText: { color: colors.text, fontSize: 16 }
});
