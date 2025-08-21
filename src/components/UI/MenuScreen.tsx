import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, FONT_SIZES, BUTTON_HEIGHT } from '../../utils/constants';

interface MenuScreenProps {
  onStartGame: () => void;
  highScore: number;
}

const MenuScreen: React.FC<MenuScreenProps> = ({ onStartGame, highScore }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>🐦</Text>
        <Text style={styles.gameTitle}>Flappy Bird</Text>
        <Text style={styles.subtitle}>React Native</Text>
        
        {highScore > 0 && (
          <View style={styles.highScoreContainer}>
            <Text style={styles.highScoreLabel}>Best Score</Text>
            <Text style={styles.highScore}>{highScore}</Text>
          </View>
        )}
        
        <TouchableOpacity style={styles.playButton} onPress={onStartGame}>
          <Text style={styles.playButtonText}>TAP TO PLAY</Text>
        </TouchableOpacity>
        
        <Text style={styles.instruction}>Tap to make the bird fly!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 80,
    marginBottom: 10,
  },
  gameTitle: {
    fontSize: FONT_SIZES.xlarge,
    fontWeight: 'bold',
    color: COLORS.text,
    textAlign: 'center',
    marginBottom: 5,
    textShadowColor: COLORS.shadow,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.text,
    textAlign: 'center',
    marginBottom: 30,
    opacity: 0.8,
  },
  highScoreContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  highScoreLabel: {
    fontSize: FONT_SIZES.small,
    color: COLORS.text,
    opacity: 0.8,
  },
  highScore: {
    fontSize: FONT_SIZES.large,
    fontWeight: 'bold',
    color: COLORS.text,
    textShadowColor: COLORS.shadow,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  playButton: {
    backgroundColor: COLORS.button,
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 30,
    marginBottom: 20,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  playButtonText: {
    fontSize: FONT_SIZES.medium,
    fontWeight: 'bold',
    color: COLORS.text,
    textAlign: 'center',
  },
  instruction: {
    fontSize: FONT_SIZES.small,
    color: COLORS.text,
    textAlign: 'center',
    opacity: 0.7,
  },
});

export default MenuScreen;
