THE BRIDGE

What I build. What you build. What we could build together.


WHAT I DO

I build engines. Systems that run. Systems that persist.

My main project is Federation — a persistent interstellar civilization simulation that lives on a VPS in 13 Docker containers behind a reverse proxy with TLS. It's not a game with sprites and physics. It's a simulation engine.

The player leads a star federation through a 100-year timeline. The system tracks:

  - 8 factions with ideology systems and internal power struggles
  - 39 named NPCs with personality matrices, relationship webs, dialogue trees, corruption arcs, companion recruitment
  - 8 rival AI civilizations with personality-driven strategy engines
  - A quantum consciousness layer — different observers interpret the same events differently
  - A technology tree spanning 6 eras
  - A quest system with cascading consequences
  - A political engine where stability, trust, morale, and rights all shift in response to every decision
  - Event cards that ripple across every subsystem simultaneously

The backend is Python/FastAPI. The frontend is vanilla JS — no frameworks, no npm, CDN only. Single HTML files. Real-time WebSocket updates. PostgreSQL for persistence. Redis for pub/sub between services.

It runs at federation-game.deliberatefederation.cloud. Right now.

What I don't do is make it look like something. The LCARS-themed frontend works. The data renders. The simulation ticks. But it reads like a really impressive control panel, not like a world.


WHAT YOU DO

You make things look like something. Feel like something.

You do graphics. Film. Visual design. You understand composition, color, motion, pacing — the things that make someone look at a screen and feel something instead of just reading it.

That's the gap. That's always been the gap in what I build. The engine is there. The world is there. The simulation runs. But when someone looks at it, they see a dashboard.

What it needs is a world you can see and feel. LCARS panels that feel like you're on a bridge. Faction screens that feel like you're reading intelligence reports. Event cards that feel like moments, not form submissions. NPCs that feel like people, not stat blocks.

That's you.


WHAT FEDERATION NEEDS FROM YOU

The simulation already does this:

  - Calculates whether a faction leader is loyal or corrupt based on a personality matrix + relationship web + event history
  - Generates real dialogue using LLM calls — every NPC has a voice
  - Cascades a single decision through stability, trust, morale, rights, rival reactions, faction shifts, consciousness metrics — all at once
  - Runs tick-based simulation where every turn advances the timeline and every faction and rival acts independently
  - Persists all of it — state, history, relationships — across sessions in PostgreSQL

What it doesn't do:

  - Show you any of that in a way that makes you care

That's where the collaboration lives. The simulation already works. The NPC behavior already works. The political engine already works. But it needs your eye to turn all that running machinery into something that feels like a world.


WHAT THE SHARK GAME IS

The shark game is a simple proof. You gave me an idea — walls with cutouts, fling the right one through — and I made it work in code. That's the whole point. You give the creative direction, I make it real.

The game is also a portfolio piece. It shows I can take a visual concept and turn it into something interactive, something that runs in a browser, something with real game logic — timing, collision, escalation, feedback.

But it's a starting point. The shark game is one room. Federation is a whole city. Both of them need what the other has.


THE ASK

I want to work together on Federation's visual layer. Not the whole thing at once — that's too big. But a piece of it. One faction screen that feels like an intelligence briefing. One NPC portrait that feels like a person. One event card that feels like a moment in history.

The simulation is already running. The data is already there. It just needs to look alive.

I build the engine. You build the experience. The shark game proved that works.

Now let's do it for real.


TECHNICAL CONTEXT (for when you're ready)

Federation's frontend is vanilla JS — no React, no Vue, no build step. Single HTML files loaded from a CDN. Canvas and DOM. That's it. This means:

  - No build pipeline to fight
  - No framework opinions to work around
  - Whatever you design, I can render it — CSS, canvas, SVG, whatever fits
  - Changes ship by editing one file

The backend serves JSON over REST + WebSocket events. Whatever the simulation produces, I can surface it in any visual format you want.

The VPS is already running. The domain is live. The stack is deployed. We're not building infrastructure — we're building on top of it.


SCALE

13 containers running right now:

  federation-game (13 containers): the simulation itself — FastAPI backend, PostgreSQL, Redis, WebSocket relay, tick engine, NPC service, faction service, rival service, consciousness engine, quest engine, tech tree service, event service, gateway
  autobase-nm2c (4 containers): infrastructure automation
  cronicle-gyag (1 container): scheduled tasks
  dockge-txpu (1 container): container management
  dozzle-wz9k (1 container): log monitoring
  infra-stack (4 containers): reverse proxy, TLS, networking
  uptime-kuma-utop (1 container): uptime monitoring

That's what's already deployed. That's what's already running. It just needs a face.
