import React, { useCallback, useEffect } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { 
  GameCanvas, 
  Bird, 
  Pipe, 
  MenuScreen, 
  GameOverScreen, 
  GameHUD 
} from '../components';
import { GameState } from '../types/game';
import { COLORS } from '../utils/constants';
import { useGameLoop } from '../hooks/useGameLoop';
import { useSound } from '../hooks/useSound';
import { useHighScore } from '../hooks/useHighScore';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export interface GameScreenProps {
  onGameStateChange?: (state: GameState) => void;
}

const GameScreen: React.FC<GameScreenProps> = ({ onGameStateChange }) => {
  const { 
    gameState, 
    bird, 
    pipes, 
    score, 
    jump, 
    startGame, 
    gameOver 
  } = useGameLoop();
  
  const { playJump, playScore, playGameOver } = useSound();
  const { highScore, isNewRecord, updateHighScore, resetNewRecord } = useHighScore();

  // Handle game state changes
  useEffect(() => {
    onGameStateChange?.(gameState);
  }, [gameState, onGameStateChange]);

  // Handle score updates and sound effects
  useEffect(() => {
    if (score > 0) {
      playScore();
    }
  }, [score, playScore]);

  // Handle game over
  useEffect(() => {
    if (gameState === GameState.GAME_OVER) {
      playGameOver();
      updateHighScore(score);
    }
  }, [gameState, score, playGameOver, updateHighScore]);

  const handleScreenPress = useCallback(() => {
    if (gameState === GameState.MENU) {
      resetNewRecord();
      startGame();
    } else if (gameState === GameState.PLAYING) {
      jump();
      playJump();
    } else if (gameState === GameState.GAME_OVER) {
      resetNewRecord();
      startGame();
    }
  }, [gameState, startGame, jump, playJump, resetNewRecord]);

  const handleRestartGame = useCallback(() => {
    resetNewRecord();
    startGame();
  }, [startGame, resetNewRecord]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor={COLORS.background} />
      <TouchableOpacity 
        style={styles.touchArea} 
        onPress={handleScreenPress}
        activeOpacity={1}
      >
        <GameCanvas>
          {/* Render pipes */}
          {pipes.map((pipe) => (
            <Pipe 
              key={pipe.id} 
              pipe={pipe} 
              screenHeight={SCREEN_HEIGHT} 
            />
          ))}
          
          {/* Render bird */}
          <Bird bird={bird} />
          
          {/* Game HUD - show score during gameplay */}
          {gameState === GameState.PLAYING && (
            <GameHUD score={score} />
          )}
          
          {/* Menu Screen */}
          {gameState === GameState.MENU && (
            <MenuScreen 
              onStartGame={handleRestartGame}
              highScore={highScore}
            />
          )}
          
          {/* Game Over Screen */}
          {gameState === GameState.GAME_OVER && (
            <GameOverScreen
              score={score}
              highScore={highScore}
              isNewRecord={isNewRecord}
              onRestart={handleRestartGame}
            />
          )}
        </GameCanvas>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  touchArea: {
    flex: 1,
  },
});

export default GameScreen;