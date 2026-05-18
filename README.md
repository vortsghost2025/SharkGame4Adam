# Shark vs. Plane – Quick‑Flick Arcade Game

## Play online

You can play the game directly at [https://sharkgame4adam.itch.io](https://sharkgame4adam.itch.io).


**A tiny, pure‑JavaScript arcade prototype** where walls with shark or plane silhouettes rush toward the player.  The player must quickly flick the matching object (shark or plane) from the bottom corners into the moving cut‑out.  Simple graphics, no external assets, and a complete test suite.

## How to play
- Open `index.html` in any modern browser.
- Two bins are shown at the bottom:
  - **Shark Bin** (left) – click to launch a shark.
  - **Plane Bin** (right) – click to launch a plane.
- When a wall appears, identify the silhouette and fling the matching object.
- Correct matches give **+1 point** and the wall disappears.
- Wrong matches cost a life; the game ends after 3 lives.
- Wall speed increases every 5 points, adding pressure.

## Project structure
```
SharkGame4Adam/
├─ index.html          # Canvas UI & basic layout
├─ game.js            # UI script (imports core logic)
├─ logic.js           # Pure game logic – easy to unit‑test
├─ test/
│   └─ game.test.js   # Node tests for logic
├─ package.json        # Only for running `npm test`
└─ README.md           # You are here
```

## Development & testing
```bash
# Install Node (no additional packages required)
npm install           # just creates node_modules for npm scripts
npm test             # runs the Jest‑style test suite (all pass)
```
Running `npm test` executes `node test/game.test.js`, which verifies:
- Wall creation with a valid type.
- Projectile creation and correct positioning.
- Score increase on a correct hit.
- Life decrement on a wrong hit.

## Building / extending
- **Graphics** – replace the simple color fills with sprite images.
- **Touch support** – add touch event listeners for mobile.
- **Levels** – introduce themed backgrounds, more creature types, or power‑ups.

## License
Free for personal use, education, or as a starting point for a larger project. Feel free to fork and modify.

---
*Created for Adam – a quick nostalgic arcade experience.*
