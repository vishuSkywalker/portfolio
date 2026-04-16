# Performance Optimization: Caching Bounding Rects

## Issue: Layout Thrashing in Mouse Move Events

The current implementation of mouse-tracking effects (spotlight in `Contact.tsx` and 3D tilt in `Projects.tsx`) calls `currentTarget.getBoundingClientRect()` inside the `handleMouseMove` event handler.

### Why it's a problem:
1. **Synchronous Layout (Reflow):** Calling `getBoundingClientRect()` forces the browser to synchronously calculate the layout of the element and its ancestors to return accurate dimensions and position.
2. **High Frequency:** `mousemove` events can fire up to 60-120 times per second (depending on the user's monitor refresh rate). Executing a layout-triggering operation at this frequency can lead to "layout thrashing," where the browser spends significant time recalculating the layout instead of rendering frames, resulting in dropped frames and a "janky" user experience.
3. **CPU Overhead:** Even if it doesn't cause visible jank, it's an unnecessary CPU-intensive task to perform repeatedly for values that often remain constant during a single hover interaction.

## Optimization: Caching on Mouse Enter

The optimization involves:
1. **Caching:** Storing the `DOMRect` in a `useRef` when the mouse enters the element (`onMouseEnter`).
2. **Re-using:** Using the cached `DOMRect` in the `onMouseMove` handler for coordinate calculations.
3. **Fallback:** Providing a fallback to `getBoundingClientRect()` if the cache is empty (though it should be populated by `onMouseEnter`).

This change ensures that for most of the duration of a hover, the expensive layout calculation is performed only once, significantly reducing the overhead of the mouse-tracking effects.

## Edge Case: Handling Scroll and Resize

Since `getBoundingClientRect()` returns coordinates relative to the viewport, the cached values can become stale if the user scrolls or resizes the window while hovering.

To address this, we:
1. **Event Listeners:** Add `scroll` and `resize` event listeners that clear the cache (`boundsRef.current = null`) when these events occur.
2. **Re-validation:** In `handleMouseMove`, we check if the cache is empty and re-populate it if necessary. This ensures the effect remains accurate even during layout changes or scrolling.
