var createCounter = function (init) {
  let initial = init;
  function increment() {
    return ++init;
  }
  function decrement() {
    return --init;
  }
  function reset() {
    init = initial;
    return init;
  }
  return {
    increment: increment,
    decrement: decrement,
    reset: reset,
  };
};