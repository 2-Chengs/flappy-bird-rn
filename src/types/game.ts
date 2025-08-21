export interface Position {
  x: number;
  y: number;
}

export interface Velocity {
  x: number;
  y: number;
}

export interface GameDimensions {
  width: number;
  height: number;
}

export interface Bird {
  position: Position;
  velocity: Velocity;
  rotation: number;
  size: number;
}

export interface Pipe {
  id: string;
  position: Position;
  width: number;
  height: number;
  gapHeight: number;
  passed: boolean;
}

export enum GameState {
  MENU = 'MENU',
  PLAYING = 'PLAYING',
  GAME_OVER = 'GAME_OVER',
  PAUSED = 'PAUSED',
}

export interface GameConfig {
  gravity: number;
  jumpForce: number;
  pipeSpeed: number;
  pipeGap: number;
  pipeWidth: number;
  groundHeight: number;
}

export interface Score {
  current: number;
  best: number;
}
