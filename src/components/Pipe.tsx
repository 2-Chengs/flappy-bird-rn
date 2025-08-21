import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Rect, Defs, LinearGradient, Stop } from 'react-native-svg';
import { Pipe as PipeType } from '../types/game';
import { COLORS } from '../utils/constants';

interface PipeProps {
  pipe: PipeType;
  screenHeight: number;
}

const Pipe: React.FC<PipeProps> = ({ pipe, screenHeight }) => {
  const topPipeHeight = pipe.height;
  const bottomPipeY = pipe.height + pipe.gapHeight;
  const bottomPipeHeight = screenHeight - bottomPipeY - 100; // 100 is ground height

  return (
    <View
      style={[
        styles.container,
        {
          left: pipe.position.x,
          width: pipe.width,
        },
      ]}
    >
      <Svg width={pipe.width} height={screenHeight} viewBox={`0 0 ${pipe.width} ${screenHeight}`}>
        <Defs>
          <LinearGradient id="pipeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="0%" stopColor="#228B22" />
            <Stop offset="50%" stopColor="#32CD32" />
            <Stop offset="100%" stopColor="#228B22" />
          </LinearGradient>
        </Defs>
        
        {/* Top Pipe */}
        <Rect
          x="0"
          y="0"
          width={pipe.width}
          height={topPipeHeight}
          fill="url(#pipeGradient)"
          stroke="#1F5F1F"
          strokeWidth="2"
        />
        
        {/* Top Pipe Cap */}
        <Rect
          x="-5"
          y={Math.max(0, topPipeHeight - 30)}
          width={pipe.width + 10}
          height="30"
          fill="url(#pipeGradient)"
          stroke="#1F5F1F"
          strokeWidth="2"
        />
        
        {/* Bottom Pipe */}
        <Rect
          x="0"
          y={bottomPipeY}
          width={pipe.width}
          height={bottomPipeHeight}
          fill="url(#pipeGradient)"
          stroke="#1F5F1F"
          strokeWidth="2"
        />
        
        {/* Bottom Pipe Cap */}
        <Rect
          x="-5"
          y={bottomPipeY}
          width={pipe.width + 10}
          height="30"
          fill="url(#pipeGradient)"
          stroke="#1F5F1F"
          strokeWidth="2"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    zIndex: 5,
  },
});

export default Pipe;
