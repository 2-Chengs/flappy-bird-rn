import { useState, useEffect, useCallback } from 'react';
import { getHighScore, saveHighScore } from '../utils/storage';

export const useHighScore = () => {
  const [highScore, setHighScore] = useState<number>(0);
  const [isNewRecord, setIsNewRecord] = useState<boolean>(false);

  useEffect(() => {
    loadHighScore();
  }, []);

  const loadHighScore = async () => {
    try {
      const score = await getHighScore();
      setHighScore(score);
    } catch (error) {
      console.error('Failed to load high score:', error);
    }
  };

  const updateHighScore = useCallback(async (newScore: number) => {
    if (newScore > highScore) {
      setHighScore(newScore);
      setIsNewRecord(true);
      try {
        await saveHighScore(newScore);
      } catch (error) {
        console.error('Failed to save high score:', error);
      }
    } else {
      setIsNewRecord(false);
    }
  }, [highScore]);

  const resetNewRecord = useCallback(() => {
    setIsNewRecord(false);
  }, []);

  return {
    highScore,
    isNewRecord,
    updateHighScore,
    resetNewRecord,
  };
};
