// file path: /polyfills/array-flat.js

// здесь никакие экспорты не нужны

console.log('polyfill for flat');

window.Array.prototype.flat =
  Array.prototype.flat ||
  function flat() {
    // ... implementation for older browsers
  };
