import { useEffect, useCallback } from 'react';
import { SoundManager } from '../services/SoundManager';

export const useSound = () => {
  const soundManager = SoundManager.getInstance();

  useEffect(() => {
    soundManager.loadSounds();
    
    return () => {
      soundManager.cleanup();
    };
  }, [soundManager]);

  const playJump = useCallback(() => {
    soundManager.playJump();
  }, [soundManager]);

  const playScore = useCallback(() => {
    soundManager.playScore();
  }, [soundManager]);

  const playGameOver = useCallback(() => {
    soundManager.playGameOver();
  }, [soundManager]);

  return {
    playJump,
    playScore,
    playGameOver,
  };
};
