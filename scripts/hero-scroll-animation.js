/* ============================================================
   HERO SCROLL ANIMATION — Scrub through frames on scroll (SMOOTH)
   ============================================================ */

(function initHeroAnimation() {
  'use strict';

  const TOTAL_FRAMES = 240;
  const FRAME_PATH = 'assets/images/hero_images/frame_';
  const heroVideo = document.querySelector('.hero-video-canvas');

  if (!heroVideo) return;

  let currentFrame = 0;
  let targetFrame = 0;
  let preloadedImages = {};
  let lastUpdateTime = 0;
  const UPDATE_THROTTLE = 16; // ~60fps (16ms)
  let animationFrameId = null;

  // ============================================================
  // PRELOAD CRITICAL FRAMES
  // ============================================================
  function preloadFrames() {
    const criticalFrames = [1, 60, 120, 180, 240];

    criticalFrames.forEach(frameNum => {
      const img = new Image();
      const frameStr = String(frameNum).padStart(5, '0');
      img.src = `${FRAME_PATH}${frameStr}.webp`;
      preloadedImages[frameNum] = img;
    });
  }

  // ============================================================
  // GET FRAME IMAGE (lazy load on demand)
  // ============================================================
  function getFrameImage(frameNum) {
    if (preloadedImages[frameNum]) {
      return preloadedImages[frameNum];
    }

    const img = new Image();
    const frameStr = String(frameNum).padStart(5, '0');
    img.src = `${FRAME_PATH}${frameStr}.webp`;
    preloadedImages[frameNum] = img;
    return img;
  }

  // ============================================================
  // UPDATE HERO BACKGROUND FRAME (WITH SMOOTH CROSSFADE)
  // ============================================================
  function updateHeroFrame(frameNum) {
    if (frameNum === currentFrame) return;

    currentFrame = frameNum;
    const frameStr = String(frameNum).padStart(5, '0');
    const frameUrl = `${FRAME_PATH}${frameStr}.webp`;

    // Smooth crossfade transition
    heroVideo.style.backgroundImage = `url('${frameUrl}')`;
  }

  // ============================================================
  // SMOOTH ANIMATION LOOP (requestAnimationFrame)
  // ============================================================
  function smoothFrameTransition() {
    if (targetFrame === currentFrame) {
      animationFrameId = null;
      return;
    }

    // Easing function: smooth deceleration
    const diff = targetFrame - currentFrame;
    const distance = Math.abs(diff);

    // Adaptive step: larger jumps for big distance, smoother for small distance
    let step = Math.sign(diff);
    if (distance > 5) {
      step *= Math.min(distance * 0.15, 5);
    }

    const newFrame = Math.round(currentFrame + step);
    const frame = Math.max(1, Math.min(TOTAL_FRAMES, newFrame));

    updateHeroFrame(frame);

    // Continue animation if not at target
    if (frame !== targetFrame) {
      animationFrameId = requestAnimationFrame(smoothFrameTransition);
    } else {
      animationFrameId = null;
    }
  }

  // ============================================================
  // CALCULATE FRAME BASED ON SCROLL POSITION (THROTTLED)
  // ============================================================
  function onScroll() {
    const now = performance.now();

    // Throttle updates (16ms = ~60fps)
    if (now - lastUpdateTime < UPDATE_THROTTLE) {
      return;
    }
    lastUpdateTime = now;

    // Get scroll progress (0 to 1) from hero section
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;

    const rect = heroSection.getBoundingClientRect();
    const heroHeight = heroSection.offsetHeight;

    // Calculate how far we've scrolled through the hero section
    // When hero is at top of viewport = frame 1
    // When hero scrolls past = frame 240
    let scrollProgress = 1 - (rect.bottom / (window.innerHeight + heroHeight));
    scrollProgress = Math.max(0, Math.min(1, scrollProgress));

    // Map scroll progress to frame number (1-240)
    const newTargetFrame = Math.ceil(scrollProgress * TOTAL_FRAMES);
    targetFrame = Math.max(1, Math.min(TOTAL_FRAMES, newTargetFrame));

    // Trigger smooth animation (only if not already animating)
    if (!animationFrameId) {
      smoothFrameTransition();
    }
  }

  // ============================================================
  // INITIALIZE
  // ============================================================
  function init() {
    preloadFrames();
    updateHeroFrame(1); // Start with frame 1

    // Scroll listener with passive flag for performance
    window.addEventListener('scroll', onScroll, { passive: true });

    // Initial call
    onScroll();
  }

  // Wait for DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Cleanup
  window.setupHeroAnimation = function() {
    init();
  };
})();
