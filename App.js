import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import { colors } from './theme/colors';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <AppNavigator />
    </SafeAreaView>
  );
}
