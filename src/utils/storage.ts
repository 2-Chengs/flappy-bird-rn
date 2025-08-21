import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from './constants';

/**
 * Save high score to storage
 */
export const saveHighScore = async (score: number): Promise<void> => {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.HIGH_SCORE, score.toString());
  } catch (error) {
    console.error('Failed to save high score:', error);
  }
};

/**
 * Get high score from storage
 */
export const getHighScore = async (): Promise<number> => {
  try {
    const score = await AsyncStorage.getItem(STORAGE_KEYS.HIGH_SCORE);
    return score ? parseInt(score, 10) : 0;
  } catch (error) {
    console.error('Failed to get high score:', error);
    return 0;
  }
};

/**
 * Save sound enabled preference
 */
export const saveSoundEnabled = async (enabled: boolean): Promise<void> => {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.SOUND_ENABLED, enabled.toString());
  } catch (error) {
    console.error('Failed to save sound preference:', error);
  }
};

/**
 * Get sound enabled preference
 */
export const getSoundEnabled = async (): Promise<boolean> => {
  try {
    const enabled = await AsyncStorage.getItem(STORAGE_KEYS.SOUND_ENABLED);
    return enabled !== null ? enabled === 'true' : true; // Default to true
  } catch (error) {
    console.error('Failed to get sound preference:', error);
    return true;
  }
};
