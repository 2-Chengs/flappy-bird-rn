import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Rect } from 'react-native-svg';
import { COLORS } from '../utils/constants';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

interface GameCanvasProps {
  children?: React.ReactNode;
}

const GameCanvas: React.FC<GameCanvasProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      {/* Background with gradient */}
      <Svg style={StyleSheet.absoluteFillObject} width={SCREEN_WIDTH} height={SCREEN_HEIGHT}>
        <Defs>
          <LinearGradient id="backgroundGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0%" stopColor="#87CEEB" />
            <Stop offset="100%" stopColor="#98D8E8" />
          </LinearGradient>
        </Defs>
        <Rect width={SCREEN_WIDTH} height={SCREEN_HEIGHT} fill="url(#backgroundGradient)" />
      </Svg>
      
      {/* Game content */}
      <View style={styles.gameArea}>
        {children}
      </View>
      
      {/* Ground */}
      <View style={styles.ground} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  gameArea: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    position: 'relative',
  },
  ground: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: COLORS.ground,
  },
});

export default GameCanvas;