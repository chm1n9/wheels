function debounce(fn, delay = 300) {
  let timer = null;
  return function () {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}