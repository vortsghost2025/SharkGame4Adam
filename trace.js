// Trace requireAnimationFrame calls and clock injection for debugging
const fs = require('fs');
const code = fs.readFileSync('index.html', 'utf8');

// Add URL parameter `?trace=1` to enable
const traceInsert = `
  // Enable trace with ?trace=1
  const _trace = typeof URLSearchParams !== 'undefined' ? new URLSearchParams(window.location.search).has('trace') : false;
  if (_trace) {
    const _origRAF = window.requestAnimationFrame;
    let _frameCount = 0;
    window.requestAnimationFrame = function(cb) {
      const ts = arguments[0] === undefined ? () => { 
        console.error('rAF called without timestamp!'); 
        return performance.now(); 
      } : (arguments.length > 0 ? arguments[0] : (void 0));
      console.error('rAF #' + _frameCount + ' cb=' + (cb && cb.name) + ' tsProvided=' + (arguments[0] !== undefined));
      _frameCount++;
      return _origRAF(function(t) { 
        try { cb(t); } catch(e) { console.error('EXCEPTION in cb:', e); throw e; }
      });
    };
    window.addEventListener('unhandledrejection', e => console.error('Unhandled rejection:', e.reason));
    window.addEventListener('error', e => console.error('Runtime error:', e.message, 'at', e.filename + ':' + e.lineno));
  }
`;
const scriptMatch = code.match(/<script>([\s\S]*?)<\/script>/);
const script = scriptMatch[1];
const newScript = traceInsert + '\n' + script;
const newCode = code.replace(scriptMatch[0], '<script>\n' + traceInsert + '\n' + script + '\n</script>');

fs.writeFileSync('index.html', newCode);
console.log('Trace instrumentation added');
