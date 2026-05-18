import assert from 'assert';
import { spawnWall, createProjectile, handleWallCollision, resetGame, STATE } from '../logic.js';

// Helper to set wall manually for deterministic tests
function setWallType(type) {
  // Ensure a wall exists
  if (!STATE.wall) spawnWall();
  STATE.wall.type = type;
}

// Reset before each test
resetGame();

// Test 1 – spawnWall creates a valid wall type
spawnWall();
assert.ok(STATE.wall, 'Wall should be created');
assert.ok(['shark', 'plane'].includes(STATE.wall.type), 'Wall type should be shark or plane');

// Test 2 – createProjectile adds projectile with correct type and X position
createProjectile('shark');
assert.strictEqual(STATE.projectiles.length, 1, 'One projectile should exist');
assert.strictEqual(STATE.projectiles[0].type, 'shark', 'Projectile type should be shark');

// Test 3 – correct hit increments score
resetGame();
spawnWall();
const currentType = STATE.wall.type;
createProjectile(currentType);
// Position projectile just at wall collision line
const proj = STATE.projectiles[0];
proj.y = STATE.wall.y + STATE.wall.height / 2;
handleWallCollision(proj);
assert.strictEqual(STATE.score, 1, 'Score should increase on correct hit');
assert.strictEqual(STATE.lives, 3, 'Lives unchanged on correct hit');

// Test 4 – incorrect hit decrements lives
resetGame();
spawnWall();
const wrongType = STATE.wall.type === 'shark' ? 'plane' : 'shark';
createProjectile(wrongType);
const wrongProj = STATE.projectiles[0];
wrongProj.y = STATE.wall.y + STATE.wall.height / 2;
handleWallCollision(wrongProj);
assert.strictEqual(STATE.score, 0, 'Score should not increase on wrong hit');
assert.strictEqual(STATE.lives, 2, 'Lives should decrement on wrong hit');

console.log('All tests passed');
