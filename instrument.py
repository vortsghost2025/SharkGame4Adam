#!/usr/bin/env python3
import re

with open('index.html', 'r') as f:
    content = f.read()

# Instrument the game
replacements = [
    (
        "  if (!G.ptrDown || e.pointerId !== G.ptrId) return;\n  G.ptrDown = false;",
        "  console.log('pointerup: ptrDown=' + G.ptrDown + ' ptrId=' + G.ptrId + ' e.pointerId=' + e.pointerId);\n  if (!G.ptrDown || e.pointerId !== G.ptrId) return;\n  G.ptrDown = false;\n  console.log('pointerup: dragType=' + G.dragType + ' start=' + G.dragStartX + ',' + G.dragStartY + ' cur=' + G.dragCurX + ',' + G.dragCurY);"
    ),
    (
        "    console.log('found wall', aw && aw.cx);",
        "    // placeholder used in replaceAll"
    ),
    (
        "    if (dist > MIN_FLING_DIST) {",
        "    console.log('dist=' + dist + ' > MIN_FLING_DIST=' + MIN_FLING_DIST + ' ->', dist > MIN_FLING_DIST); if (dist > MIN_FLING_DIST) {"
    ),
    (
        "  if (!G.running || G.projs.length > 0) return;\n  sfxFling();",
        "  console.log('fireProjectile: running=' + G.running + ' projs=' + G.projs.length); if (!G.running || G.projs.length > 0) { console.log('fireProjectile BLOCKED!'); return; }\n  sfxFling();"
    ),
    (
        "  if (!G.running) return;\n  const dt = Math.min((ts - lt) / 1000, 0.05);",
        "  console.log('loop: running=' + G.running + ' ts=' + ts + ' lt=' + lt + ' projs=' + G.projs.length + ' walls=' + G.walls.length); if (!G.running) return;\n  const dt = Math.min((ts - lt) / 1000, 0.05);"
    ),
]

for old, new in replacements:
    if old in content:
        content = content.replace(old, new, 1)
        print(f"Replaced: {old[:50]}...")
    else:
        print(f"NOT FOUND: {old[:50]}...")

with open('index.html', 'w') as f:
    f.write(content)

print("Instrumentation complete")
