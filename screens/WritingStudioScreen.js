import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../theme/colors';

const Item = ({ title }) => (
  <TouchableOpacity style={styles.item}>
    <Text style={styles.itemText}>{title}</Text>
  </TouchableOpacity>
);

export default function WritingStudioScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Writing Studio</Text>
      <ScrollView contentContainerStyle={{ paddingVertical: 12 }}>
        <Item title="Article" />
        <Item title="Blog" />
        <Item title="Column" />
        <Item title="Caption" />
        <Item title="Script" />
        <Item title="Hashtags" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: colors.background },
  title: { color: colors.text, fontSize: 24, marginBottom: 12 },
  item: { backgroundColor: colors.surface, padding: 16, borderRadius: 20, marginBottom: 10 },
  itemText: { color: colors.text }
});
