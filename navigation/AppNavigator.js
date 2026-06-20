import React, { useState } from 'react';
import { View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import WritingStudioScreen from '../screens/WritingStudioScreen';
import SettingsScreen from '../screens/SettingsScreen';

export default function AppNavigator() {
  const [route, setRoute] = useState('Home');

  const navigate = (name) => setRoute(name);

  return (
    <View style={{ flex: 1 }}>
      {route === 'Home' && <HomeScreen navigate={navigate} />}
      {route === 'Chat' && <ChatScreen navigate={navigate} />}
      {route === 'Writing' && <WritingStudioScreen navigate={navigate} />}
      {route === 'Settings' && <SettingsScreen navigate={navigate} />}
    </View>
  );
}
