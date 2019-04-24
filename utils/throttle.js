function throttle (fn, delay = 30) {
  let timer = null
  return function () {
    if (timer || timer === 0) {
      return
    }
    timer = setTimeout(() => {
      timer = null
      fn.apply(this, arguments)
    }, delay)
  }
}
