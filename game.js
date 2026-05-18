// UI script for Shark vs Plane game – imports core logic from logic.js
import { STATE, resetGame, spawnWall, createProjectile, handleWallCollision } from './logic.js';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

let lastTime = 0;

// UI elements
const scoreEl = document.getElementById('score');
const livesEl = document.getElementById('lives');
const sharkBin = document.getElementById('sharkBin');
const planeBin = document.getElementById('planeBin');

// Game constants (UI only)
const WALL_HEIGHT = 30;
const PROJECTILE_SPEED = 400; // pixels per second
const BASE_WALL_SPEED = 100; // will increase with score

function updateScore() {
  scoreEl.textContent = `Score: ${STATE.score}`;
}
function updateLives() {
  livesEl.textContent = `Lives: ${STATE.lives}`;
}

// Override spawnWall to add UI‑specific properties (position, cutout)
function uiSpawnWall() {
  spawnWall();
  // Add UI positioning for cutout (centered)
  if (STATE.wall) {
    STATE.wall.y = -WALL_HEIGHT;
    STATE.wall.cutoutX = (width - 80) / 2;
    STATE.wall.cutoutWidth = 80;
    STATE.wall.height = WALL_HEIGHT;
  }
}

function uiCreateProjectile(type) {
  // x positions for bins: left (80) and right (width-80)
  const x = type === 'shark' ? 80 : width - 80;
  // Use the logic creator then override start y
  createProjectile(type, width);
  // The logic module pushes projectile with y = 0; set to bottom now
  const proj = STATE.projectiles[STATE.projectiles.length - 1];
  proj.x = x;
  proj.y = height;
}

function drawWall() {
  const wall = STATE.wall;
  if (!wall) return;
  ctx.fillStyle = '#555';
  ctx.fillRect(0, wall.y, width, wall.height);
  // Cutout
  ctx.clearRect(wall.cutoutX, wall.y, wall.cutoutWidth, wall.height);
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 2;
  ctx.strokeRect(wall.cutoutX, wall.y, wall.cutoutWidth, wall.height);
  // Label
  ctx.fillStyle = '#fff';
  ctx.font = '16px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(wall.type.toUpperCase(), wall.cutoutX + wall.cutoutWidth / 2, wall.y + wall.height / 2);
}

function drawProjectiles() {
  ctx.fillStyle = '#0f0';
  STATE.projectiles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#000';
    ctx.font = '10px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(p.type.charAt(0).toUpperCase(), p.x, p.y);
    ctx.fillStyle = '#0f0';
  });
}

function gameLoop(timestamp) {
  const delta = (timestamp - lastTime) / 1000;
  lastTime = timestamp;
  ctx.clearRect(0, 0, width, height);

  // Move wall
  if (STATE.wall) {
    const wallSpeed = BASE_WALL_SPEED + Math.floor(STATE.score / 5) * 30;
    STATE.wall.y += wallSpeed * delta;
    if (STATE.wall.y > height) {
      STATE.lives -= 1;
      updateLives();
      if (STATE.lives <= 0) {
        alert('Game Over! Final score: ' + STATE.score);
        resetGame();
        requestAnimationFrame(gameLoop);
        return;
      }
      STATE.wall = null;
    }
  } else {
    uiSpawnWall();
  }

  // Move projectiles
  STATE.projectiles.forEach(p => {
    p.y -= PROJECTILE_SPEED * delta;
  });

  // Collision detection
  if (STATE.wall) {
    STATE.projectiles.forEach(p => {
      if (p.y - p.radius <= STATE.wall.y + STATE.wall.height && p.y + p.radius >= STATE.wall.y) {
        handleWallCollision(p);
        updateScore();
        updateLives();
      }
    });
  }

  // Remove off‑screen projectiles
  STATE.projectiles = STATE.projectiles.filter(p => p.y + p.radius > 0);

  drawWall();
  drawProjectiles();

  requestAnimationFrame(gameLoop);
}

// Bind UI events
sharkBin.addEventListener('click', () => uiCreateProjectile('shark'));
planeBin.addEventListener('click', () => uiCreateProjectile('plane'));

// Initialisation
resetGame();
updateScore();
updateLives();
requestAnimationFrame(gameLoop);


        return;
      }
      wall = null;
    }
  } else {
    // No wall – spawn a new one after a short delay
    spawnWall();
  }

  // Move projectiles upwards
  projectiles.forEach(p => {
    p.y -= PROJECTILE_SPEED * delta;
  });

  // Check collisions
  if (wall) {
    projectiles.forEach(p => {
      // Simple collision: when projectile y <= wall.y + wall.height
      if (p.y - p.radius <= wall.y + wall.height && p.y + p.radius >= wall.y) {
        handleWallCollision(p);
      }
    });
  }

  // Remove off‑screen projectiles
  projectiles = projectiles.filter(p => p.y + p.radius > 0);

  // Draw everything
  drawWall();
  drawProjectiles();

  requestAnimationFrame(gameLoop);
}

// Event listeners – bind bins
sharkBin.addEventListener('click', () => createProjectile('shark'));
planeBin.addEventListener('click', () => createProjectile('plane'));

// Init
resetGame();
requestAnimationFrame(gameLoop);
