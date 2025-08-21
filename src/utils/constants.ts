import { GameConfig } from '../types/game';

export const GAME_CONFIG: GameConfig = {
  gravity: 0.8,
  jumpForce: -12,
  pipeSpeed: 3,
  pipeGap: 150,
  pipeWidth: 60,
  groundHeight: 100,
};

export const COLORS = {
  background: '#87CEEB', // Sky blue
  bird: '#FFD700', // Gold
  pipe: '#228B22', // Forest green
  ground: '#8B4513', // Saddle brown
  text: '#FFFFFF', // White
  button: '#FF6347', // Tomato
  shadow: '#000000', // Black
};

export const STORAGE_KEYS = {
  HIGH_SCORE: 'flappy_bird_high_score',
  SOUND_ENABLED: 'flappy_bird_sound_enabled',
};

export const SCREEN_PADDING = 20;
export const BUTTON_HEIGHT = 60;
export const FONT_SIZES = {
  small: 16,
  medium: 24,
  large: 32,
  xlarge: 48,
};
