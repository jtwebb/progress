const progress = require('./index.js');

(() => {
  const times = 10;
  let current = 0;
  const currentProgress = progress(times);

  let timer = setTimeout(onTimeChange, 1000);

  function onTimeChange() {
    currentProgress(current++);

    if (current !== times) {
      timer = setTimeout(onTimeChange, 1000);
    } else {
      clearTimeout(timer);
    }
  }
})();
