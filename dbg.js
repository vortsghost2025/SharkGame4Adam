// Runtime debugging for shark throw freeze
(function() {
  if (typeof URLSearchParams === 'undefined') return;
  if (!new URLSearchParams(window.location.search).has('dbg')) return;
  
  console.log('[DBG] game start');
  
  // Hook rAF to track loop calls
  const origRAF = window.requestAnimationFrame;
  let frameCount = 0;
  window.requestAnimationFrame = function(cb) {
    frameCount++;
    console.log('[DBG] rAF #' + frameCount + ' cbArg=' + (cb && cb.name || 'anon'));
    return origRAF(function(ts) {
      try {
        cb(ts);
      } catch(e) {
        console.error('[DBG] EXCEPTION in cb:', e);
        throw e;
      }
    });
  };
  
  // Catch uncaught errors
  window.addEventListener('error', function(e) {
    console.error('[DBG] uncaught error:', e.message, 'at', e.filename + ':' + e.lineno);
  });
  window.addEventListener('unhandledrejection', function(e) {
    console.error('[DBG] unhandled rejection:', e.reason);
  });
  
  // Hook fireProjectile
  const origFP = window.fireProjectile;
  if (origFP) {
    window.fireProjectile = function() {
      console.log('[DBG] fireProjectile args:', JSON.stringify(arguments));
      return origFP.apply(this, arguments);
    };
  }
  
  // Hook loop
  const origLoop = window.loop;
  if (origLoop) {
    window.loop = function(ts) {
      console.log('[DBG] loop called: ts=', ts, 'G.running=', window.G && window.G.running);
      if (!window.G || !window.G.running) { console.log('[DBG] loop RETURNING early'); return; }
      return origLoop(ts);
    };
  } else {
    console.log('[DBG] no window.loop found at hook time');
  }
  
  console.log('[DBG] init done');
})();
