import { Position, Bird, Pipe } from '../types/game';

/**
 * Check collision between bird and pipe
 */
export const checkCollision = (bird: Bird, pipe: Pipe): boolean => {
  const birdLeft = bird.position.x - bird.size / 2;
  const birdRight = bird.position.x + bird.size / 2;
  const birdTop = bird.position.y - bird.size / 2;
  const birdBottom = bird.position.y + bird.size / 2;

  const pipeLeft = pipe.position.x;
  const pipeRight = pipe.position.x + pipe.width;
  const topPipeBottom = pipe.position.y;
  const bottomPipeTop = pipe.position.y + pipe.gapHeight;

  // Check if bird is within pipe's horizontal bounds
  if (birdRight > pipeLeft && birdLeft < pipeRight) {
    // Check collision with top pipe or bottom pipe
    if (birdTop < topPipeBottom || birdBottom > bottomPipeTop) {
      return true;
    }
  }

  return false;
};

/**
 * Check if bird is out of bounds (ground or ceiling)
 */
export const checkBounds = (
  bird: Bird,
  screenHeight: number,
  groundHeight: number
): boolean => {
  const birdBottom = bird.position.y + bird.size / 2;
  const birdTop = bird.position.y - bird.size / 2;

  return birdBottom > screenHeight - groundHeight || birdTop < 0;
};

/**
 * Check if bird has passed through a pipe (for scoring)
 */
export const checkPipePass = (bird: Bird, pipe: Pipe): boolean => {
  return !pipe.passed && bird.position.x > pipe.position.x + pipe.width;
};

/**
 * Generate random pipe height
 */
export const generatePipeHeight = (
  screenHeight: number,
  groundHeight: number,
  gapHeight: number,
  minHeight: number = 50
): number => {
  const maxHeight = screenHeight - groundHeight - gapHeight - minHeight;
  return Math.random() * (maxHeight - minHeight) + minHeight;
};

/**
 * Clamp a value between min and max
 */
export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};
