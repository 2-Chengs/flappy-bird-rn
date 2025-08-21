import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GameCanvas } from './src/components';
import { COLORS, FONT_SIZES } from './src/utils/constants';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor={COLORS.background} />
      <GameCanvas>
        <View style={styles.welcomeContainer}>
          <Text style={styles.title}>🐦 Flappy Bird RN</Text>
          <Text style={styles.subtitle}>Project Setup Complete!</Text>
          <Text style={styles.description}>
            Ready to start building the game mechanics.
          </Text>
        </View>
      </GameCanvas>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: FONT_SIZES.xlarge,
    fontWeight: 'bold',
    color: COLORS.text,
    textAlign: 'center',
    marginBottom: 20,
    textShadowColor: COLORS.shadow,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: FONT_SIZES.large,
    color: COLORS.text,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: '600',
  },
  description: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.text,
    textAlign: 'center',
    opacity: 0.9,
  },
});
