import React, { useState, useRef } from 'react';
import { View, TextInput, TouchableOpacity, Text, FlatList, StyleSheet, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native';
import { colors } from '../theme/colors';
import MessageBubble from '../components/MessageBubble';
import rookEngine from '../services/rookEngine';

export default function ChatScreen({ navigate }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const flatRef = useRef(null);

  const send = async () => {
    if (!text.trim()) return;
    const userMsg = { id: Date.now().toString(), role: 'user', content: text.trim() };
    setMessages(prev => [userMsg, ...prev]);
    setText('');
    setLoading(true);
    try {
      const reply = await rookEngine.sendMessage(userMsg.content);
      const aiMsg = { id: (Date.now()+1).toString(), role: 'assistant', content: reply };
      setMessages(prev => [aiMsg, ...prev]);
    } catch (e) {
      const errMsg = { id: (Date.now()+2).toString(), role: 'assistant', content: 'An error occurred.' };
      setMessages(prev => [errMsg, ...prev]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: colors.background }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={{ flex: 1, padding: 12 }}>
        <FlatList
          ref={flatRef}
          data={messages}
          inverted
          keyExtractor={item => item.id}
          renderItem={({ item }) => <MessageBubble role={item.role} text={item.content} />}
          contentContainerStyle={{ paddingTop: 12 }}
        />

        {loading && (
          <View style={{ padding: 8, alignItems: 'center' }}>
            <ActivityIndicator color={colors.primary} />
          </View>
        )}

        <View style={styles.inputBar}>
          <TextInput
            style={styles.input}
            placeholder="Type a message"
            placeholderTextColor={colors.muted}
            value={text}
            onChangeText={setText}
            onSubmitEditing={send}
            returnKeyType="send"
          />
          <TouchableOpacity style={styles.sendBtn} onPress={send}>
            <Text style={{ color: colors.text }}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  inputBar: { flexDirection: 'row', padding: 10, backgroundColor: 'transparent', alignItems: 'center' },
  input: { flex: 1, backgroundColor: '#0b0b0b', color: colors.text, padding: 12, borderRadius: 24, marginRight: 8 },
  sendBtn: { backgroundColor: colors.primary, paddingVertical: 10, paddingHorizontal: 16, borderRadius: 24 }
});
