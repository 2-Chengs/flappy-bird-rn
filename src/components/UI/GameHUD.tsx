import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { COLORS, FONT_SIZES } from '../../utils/constants';

interface GameHUDProps {
  score: number;
}

const GameHUD: React.FC<GameHUDProps> = ({ score }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scoreContainer}>
        <Text style={styles.score}>{score}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 20,
  },
  scoreContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  score: {
    fontSize: FONT_SIZES.xlarge * 1.5,
    fontWeight: 'bold',
    color: COLORS.text,
    textShadowColor: COLORS.shadow,
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 6,
  },
});

export default GameHUD;
