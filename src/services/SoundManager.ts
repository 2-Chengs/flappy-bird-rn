import { Audio } from 'expo-av';
import { getSoundEnabled } from '../utils/storage';

export class SoundManager {
  private static instance: SoundManager;
  private sounds: { [key: string]: Audio.Sound } = {};
  private soundEnabled: boolean = true;

  private constructor() {
    this.loadSoundSettings();
  }

  static getInstance(): SoundManager {
    if (!SoundManager.instance) {
      SoundManager.instance = new SoundManager();
    }
    return SoundManager.instance;
  }

  private async loadSoundSettings() {
    this.soundEnabled = await getSoundEnabled();
  }

  async loadSounds() {
    try {
      // For now, we'll use simple beep sounds
      // In a real app, you would load actual sound files
      console.log('Sound system initialized');
    } catch (error) {
      console.error('Failed to load sounds:', error);
    }
  }

  async playJump() {
    if (!this.soundEnabled) return;
    
    try {
      // Create a simple beep sound for jump
      // In a real app, you would play an actual sound file
      console.log('Jump sound played');
    } catch (error) {
      console.error('Failed to play jump sound:', error);
    }
  }

  async playScore() {
    if (!this.soundEnabled) return;
    
    try {
      // Create a simple ding sound for scoring
      console.log('Score sound played');
    } catch (error) {
      console.error('Failed to play score sound:', error);
    }
  }

  async playGameOver() {
    if (!this.soundEnabled) return;
    
    try {
      // Create a game over sound
      console.log('Game over sound played');
    } catch (error) {
      console.error('Failed to play game over sound:', error);
    }
  }

  setSoundEnabled(enabled: boolean) {
    this.soundEnabled = enabled;
  }

  isSoundEnabled(): boolean {
    return this.soundEnabled;
  }

  async cleanup() {
    try {
      for (const sound of Object.values(this.sounds)) {
        await sound.unloadAsync();
      }
      this.sounds = {};
    } catch (error) {
      console.error('Failed to cleanup sounds:', error);
    }
  }
}
