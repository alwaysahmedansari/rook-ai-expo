import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function MessageBubble({ role, text }) {
  const isUser = role === 'user';
  return (
    <View style={[styles.container, isUser ? styles.user : styles.ai]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { maxWidth: '80%', padding: 12, borderRadius: 20, marginVertical: 6 },
  user: { backgroundColor: colors.primary, alignSelf: 'flex-end', borderTopRightRadius: 8 },
  ai: { backgroundColor: '#1f1f1f', alignSelf: 'flex-start', borderTopLeftRadius: 8 },
  text: { color: colors.text }
});
