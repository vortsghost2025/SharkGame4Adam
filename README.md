# Shark vs. Plane — Arcade Flick Game

**Play now:** [sharkgame4adam.itch.io/sharkgame4adam](https://sharkgame4adam.itch.io/sharkgame4adam)

A single-file arcade game where shooting-range target panels with shark or plane cutouts rush toward you. Identify the silhouette and fling the matching object through the hole before the wall reaches you. Pure JavaScript, no frameworks, no build step.

## How to play

- Open `index.html` in any modern browser.
- **Mobile**: Drag from the shark bin (bottom-left) or plane bin (bottom-right) and fling toward the incoming wall.
- **Desktop**: Click and drag from the bins, or press Arrow Left / A (shark) and Arrow Right / D (plane).
- A target panel approaches with a shark- or plane-shaped cutout — fling the matching type through the hole.
- Correct match = **+1 point** (more with combos). Wall clears with a satisfying pass effect.
- Wrong match = **shark SPLATs** or **plane BOOMs** against the wall, one life pip turns red.
- Miss a wall entirely = one life pip turns red.
- When all 10 life pips are red, game over. Red pips slowly regenerate to white over time — space out your errors to survive.

## Features

### Core gameplay
- **Depth-based wall movement** — walls start far away (small) and rush toward you (growing larger), like shooting range targets being pulled in
- **Shooting range panels** — square-ish target boards with border frames, corner bolts, and metallic rivet lines
- **Recognizable silhouettes** — shark cutouts have dorsal fin, forked tail, pointed snout, pectoral fin; plane cutouts have swept wings, cockpit, vertical stabilizer, tail fins
- **Ballistic fling aiming** — drag from a bin and release; a dotted arc trajectory + crosshair shows where your throw will land
- **Forgiving collision detection** — large hit window around the cutout so near-misses still count

### Combo creatures (Level 3+)
- **Shames** — sharks with tiny plane wings and a tail fin. Throw a *plane* through them!
- **Plarks** — planes with a shark dorsal fin, forked tail, and teeth. Throw a *shark* through them!
- Combo walls show a ghost silhouette of the hybrid creature and a hint label

### Lives system
- **10 life pips** at the bottom of the screen (white = healthy, red = damaged)
- Wrong throws and missed walls turn pips red
- **Regeneration** — red pips slowly fade back to white over ~12 seconds each
- All 10 red = game over. Space out your mistakes to stay alive!

### Atmosphere & feedback
- **4 themed levels** — Ocean (bubbles, caustics), Desert (sand, sun, dunes), Arctic (snow, aurora), Volcano (embers, lava, mountains)
- **Jaws drone** — when 6+ pips are red, an alternating E/F bass note starts playing, getting faster as danger grows
- **Red danger vignette** — pulsing red screen-edge glow when health is critical
- **Combo hype** — golden edge glow at 3+ combo, escalating text ("NICE STREAK!" → "ON FIRE!" → "UNSTOPPABLE!") at higher combos
- **Fling speed lines** — white motion streaks trail behind every thrown object
- **Sound effects** — 8 synthesized sounds (fling, pass, splat, boom, level up, game over, miss, Jaws drone) via Web Audio API, no audio files needed
- **Screen shake** on wrong throws and misses
- **Environmental particles** — bubbles, sand, snow, and embers per theme

### Persistence
- **High score** saved to localStorage, shown on start and game over screens

## Project structure

```
SharkGame4Adam/
├─ index.html          # Complete game — canvas, sprites, controls, particles, audio
├─ dist/
│  └─ index.html       # Deployment copy for itch.io butler push
├─ context-buffer/     # Design notes and feedback transcripts
└─ README.md
```

## Deployment

```bash
# Push to itch.io (requires butler CLI + auth)
cp index.html dist/index.html
butler push dist sharkgame4adam/sharkgame4adam:html

# Push to GitHub
git add index.html && git commit -m "message" && git push
```

## Extending

- **New creatures** — add types to the wall pool and draw new silhouette paths
- **New themes** — add entries to the `THEMES` array with colors, particles, and sky draw mode
- **Power-ups** — slow-mo, shield, multi-shot
- **Audio** — swap synthesized tones for real sound effects or music tracks

## License

Free for personal use, education, or as a starting point for a larger project.

---
*Built for Adam — a quick nostalgic arcade experience.*
