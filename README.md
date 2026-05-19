# Shark vs. Plane – Quick-Flick Arcade Game

## Play online

Play directly at [https://sharkgame4adam.itch.io](https://sharkgame4adam.itch.io).

**A tiny, single-file arcade game** where walls with shark or plane silhouettes rush toward you. Identify the cutout and fire the matching object before the wall passes. Pure JavaScript, no frameworks, no build step.

## How to play

- Open `index.html` in any modern browser.
- **Mobile**: Tap the left (shark) or right (plane) control zone, or swipe left/right.
- **Desktop**: Click the bottom controls, or press Arrow Left / A (shark) and Arrow Right / D (plane).
- A wall descends with a shark- or plane-shaped cutout — fire the matching type through the hole.
- Correct match = **+1 point**, wall clears.
- Wrong match = **-1 life**.
- Miss a wall entirely = **-1 life**.
- Game over at 0 lives. Wall speed increases every 5 points.

## Project structure

```
SharkGame4Adam/
├─ index.html          # Complete game — canvas, sprites, controls, particles
├─ game.js             # Original UI script (absorbed into index.html)
├─ logic.js            # Original game logic (absorbed into index.html)
├─ test/
│  └─ game.test.js     # Node tests for original logic.js
├─ package.json        # Only for running `npm test`
├─ SharkGame4Adam.zip  # itch.io deployment (contains index.html only)
├─ THE BRIDGE.md       # Collaboration pitch — coding meets visual design
└─ README.md
```

## Features

- **Sprite-drawn shapes** — shark and plane drawn with canvas paths, no image assets needed
- **Particle effects** — splat (wrong shark), boom (wrong plane), pass (correct match)
- **Touch + swipe + keyboard** — three input methods, mobile-first
- **Pause on blur** — game pauses when you switch tabs, resumes on focus
- **Progressive difficulty** — wall speed ramps up every 5 points

## Development & testing

```bash
npm install   # sets up node_modules for test runner
npm test      # runs logic tests against the original logic.js module
```

## Extending

- **Graphics** — swap canvas sprite functions for actual sprite sheets or SVGs
- **New creatures** — add more types (jellyfish, helicopter, etc.) to the `rng()` pool
- **Themed settings** — swap the grid background for ocean, sky, space, etc.
- **Power-ups** — slow-mo, shield, multi-shot

## License

Free for personal use, education, or as a starting point for a larger project.

---
*Built for Adam — a quick nostalgic arcade experience.*
