// logic.js – core game logic separated for unit testing
// No DOM dependencies

export const STATE = {
  score: 0,
  lives: 3,
  wall: null,
  projectiles: [],
};

const WALL_HEIGHT = 30;
const PROJECTILE_SPEED = 400; // pixels per second (used by UI, not needed for logic tests)
const BASE_WALL_SPEED = 100;

function randomWallType() {
  return Math.random() < 0.5 ? 'shark' : 'plane';
}

export function resetGame() {
  STATE.score = 0;
  STATE.lives = 3;
  STATE.wall = null;
  STATE.projectiles = [];
  spawnWall();
}

export function spawnWall() {
  const type = randomWallType();
  STATE.wall = {
    y: -WALL_HEIGHT,
    type,
    cutoutX: 0, // UI will set based on canvas width
    cutoutWidth: 80,
    height: WALL_HEIGHT,
  };
}

export function createProjectile(type, canvasWidth) {
  const x = type === 'shark' ? 80 : canvasWidth - 80; // default positions, UI can adjust
  STATE.projectiles.push({
    x,
    y: 0, // UI will set start y
    type,
    radius: 10,
  });
}

/**
 * Handles a collision between a projectile and the current wall.
 * Returns an object {correct: boolean, livesChanged: number, scoreChanged: number}
 */
export function handleWallCollision(projectile) {
  if (!STATE.wall) return { correct: false, livesChanged: 0, scoreChanged: 0 };
  const correct = projectile.type === STATE.wall.type;
  if (correct) {
    STATE.score += 1;
  } else {
    STATE.lives -= 1;
  }
  // Remove current wall and all projectiles after a hit
  STATE.wall = null;
  STATE.projectiles = [];
  return { correct, livesChanged: correct ? 0 : -1, scoreChanged: correct ? 1 : 0 };
}

export function getState() {
  return STATE;
}
