import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../utils/constants';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface GameCanvasProps {
  children?: React.ReactNode;
}

const GameCanvas: React.FC<GameCanvasProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.gameArea}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameArea: {
    width: screenWidth,
    height: screenHeight,
    position: 'relative',
  },
});

export default GameCanvas;
