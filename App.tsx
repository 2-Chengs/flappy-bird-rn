import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GameScreen } from './src/screens';
import { COLORS } from './src/utils/constants';

export default function App() {
  return (
    <View style={styles.container}>
      <GameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});
