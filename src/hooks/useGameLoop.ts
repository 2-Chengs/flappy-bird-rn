import { useEffect, useRef, useState, useCallback } from 'react';
import { Dimensions } from 'react-native';
import { useSharedValue, useAnimatedStyle, runOnJS } from 'react-native-reanimated';
import { Bird, GameState, Pipe } from '../types/game';
import { GAME_CONFIG } from '../utils/constants';
import { checkCollision, checkBounds, generatePipeHeight } from '../utils/physics';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const GROUND_HEIGHT = 100;

export const useGameLoop = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.MENU);
  const [score, setScore] = useState(0);
  const [pipes, setPipes] = useState<Pipe[]>([]);
  
  // Bird state using shared values for smooth animations
  const birdY = useSharedValue(SCREEN_HEIGHT / 2);
  const birdVelocity = useSharedValue(0);
  const birdRotation = useSharedValue(0);
  
  const animationRef = useRef<number | null>(null);
  const lastPipeTime = useRef(0);
  const pipeIdCounter = useRef(0);

  // Bird object for rendering
  const bird: Bird = {
    position: { x: SCREEN_WIDTH * 0.2, y: birdY.value },
    velocity: { x: 0, y: birdVelocity.value },
    rotation: birdRotation.value,
    size: 40,
  };

  // Jump function
  const jump = useCallback(() => {
    if (gameState === GameState.PLAYING) {
      birdVelocity.value = GAME_CONFIG.jumpForce;
      birdRotation.value = -30; // Tilt up when jumping
    }
  }, [gameState, birdVelocity, birdRotation]);

  // Start game
  const startGame = useCallback(() => {
    setGameState(GameState.PLAYING);
    setScore(0);
    setPipes([]);
    birdY.value = SCREEN_HEIGHT / 2;
    birdVelocity.value = 0;
    birdRotation.value = 0;
    lastPipeTime.current = Date.now();
    pipeIdCounter.current = 0;
  }, [birdY, birdVelocity, birdRotation]);

  // Game over
  const gameOver = useCallback(() => {
    setGameState(GameState.GAME_OVER);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  }, []);

  // Generate new pipe
  const generatePipe = useCallback(() => {
    const now = Date.now();
    if (now - lastPipeTime.current > 2000) { // Generate pipe every 2 seconds
      const pipeHeight = generatePipeHeight(
        SCREEN_HEIGHT,
        GROUND_HEIGHT,
        GAME_CONFIG.pipeGap
      );
      
      const newPipe: Pipe = {
        id: `pipe_${pipeIdCounter.current++}`,
        position: { x: SCREEN_WIDTH, y: 0 },
        width: GAME_CONFIG.pipeWidth,
        height: pipeHeight,
        gapHeight: GAME_CONFIG.pipeGap,
        passed: false,
      };
      
      setPipes(prev => [...prev, newPipe]);
      lastPipeTime.current = now;
    }
  }, []);

  // Update game physics
  const updateGame = useCallback(() => {
    if (gameState !== GameState.PLAYING) return;

    // Update bird physics
    birdVelocity.value += GAME_CONFIG.gravity;
    birdY.value += birdVelocity.value;
    
    // Update bird rotation based on velocity
    birdRotation.value = Math.min(Math.max(birdVelocity.value * 3, -30), 90);

    // Check bounds collision
    const currentBird: Bird = {
      position: { x: SCREEN_WIDTH * 0.2, y: birdY.value },
      velocity: { x: 0, y: birdVelocity.value },
      rotation: birdRotation.value,
      size: 40,
    };

    if (checkBounds(currentBird, SCREEN_HEIGHT, GROUND_HEIGHT)) {
      runOnJS(gameOver)();
      return;
    }

    // Update pipes
    setPipes(prevPipes => {
      const updatedPipes = prevPipes.map(pipe => ({
        ...pipe,
        position: { ...pipe.position, x: pipe.position.x - GAME_CONFIG.pipeSpeed },
      }));

      // Check collisions
      for (const pipe of updatedPipes) {
        if (checkCollision(currentBird, pipe)) {
          runOnJS(gameOver)();
          return prevPipes;
        }

        // Check if bird passed pipe for scoring
        if (!pipe.passed && currentBird.position.x > pipe.position.x + pipe.width) {
          pipe.passed = true;
          runOnJS(() => setScore(prev => prev + 1))();
        }
      }

      // Remove pipes that are off screen
      return updatedPipes.filter(pipe => pipe.position.x > -pipe.width);
    });

    // Generate new pipes
    runOnJS(generatePipe)();
  }, [gameState, birdY, birdVelocity, birdRotation, gameOver, generatePipe]);

  // Animation loop
  useEffect(() => {
    if (gameState === GameState.PLAYING) {
      const animate = () => {
        updateGame();
        animationRef.current = requestAnimationFrame(animate);
      };
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [gameState, updateGame]);

  // Animated style for bird
  const birdAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: SCREEN_WIDTH * 0.2 - 20 },
      { translateY: birdY.value - 20 },
      { rotate: `${birdRotation.value}deg` },
    ],
  }));

  return {
    gameState,
    bird: {
      position: { x: SCREEN_WIDTH * 0.2, y: birdY.value },
      velocity: { x: 0, y: birdVelocity.value },
      rotation: birdRotation.value,
      size: 40,
    },
    pipes,
    score,
    jump,
    startGame,
    gameOver,
    birdAnimatedStyle,
  };
};
