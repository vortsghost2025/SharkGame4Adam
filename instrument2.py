#!/usr/bin/env python3

with open('index.html', 'r') as f:
    content = f.read()

# Add logging to handleHit
target = "function handleHit(proj, wall) {\n  const req = requiredThrow(wall.type);\n  const correct = proj.type === req;"

replacement = """function handleHit(proj, wall) {
  console.log('handleHit: proj.type=' + proj.type + ' wall.type=' + wall.type + ' req=' + requiredThrow(wall.type) + ' correct=' + (proj.type === requiredThrow(wall.type)));
  const req = requiredThrow(wall.type);
  const correct = proj.type === req;"""

if target in content:
    content = content.replace(target, replacement, 1)
    print("Replaced handleHit")
else:
    print("NOT FOUND: handleHit target")

with open('index.html', 'w') as f:
    f.write(content)

print("Done")
