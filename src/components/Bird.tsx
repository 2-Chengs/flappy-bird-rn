import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle, Ellipse } from 'react-native-svg';
import Animated, {
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import { Bird as BirdType } from '../types/game';
import { COLORS } from '../utils/constants';

interface BirdProps {
  bird: BirdType;
}

const Bird: React.FC<BirdProps> = ({ bird }) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: bird.position.x - bird.size / 2 },
        { translateY: bird.position.y - bird.size / 2 },
        { rotate: `${Math.min(Math.max(bird.rotation, -30), 90)}deg` },
      ],
    };
  }, [bird.position.x, bird.position.y, bird.rotation]);

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Svg width={bird.size} height={bird.size} viewBox="0 0 40 40">
        {/* Bird body */}
        <Circle
          cx="20"
          cy="20"
          r="15"
          fill={COLORS.bird}
          stroke="#FFA500"
          strokeWidth="2"
        />
        {/* Bird wing */}
        <Ellipse
          cx="25"
          cy="18"
          rx="8"
          ry="5"
          fill="#FF8C00"
          transform="rotate(20 25 18)"
        />
        {/* Bird eye */}
        <Circle cx="25" cy="15" r="3" fill="white" />
        <Circle cx="26" cy="14" r="1.5" fill="black" />
        {/* Bird beak */}
        <Ellipse
          cx="32"
          cy="18"
          rx="4"
          ry="2"
          fill="#FF4500"
          transform="rotate(10 32 18)"
        />
      </Svg>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 10,
  },
});

export default Bird;
