function compose (...fns) {
  if (fns.length === 0) {
    return arg => arg
  }
  if (fns.length === 1) {
    return fns[0]
  }
  return fns.reduce(
    (a, b) => (...args) => a(b(...args)),
    value => value
  )
}

// test
function ta (x) {
  return x * 10
}

function tb (x) {
  return x + 3
}

function tc (x) {
  return x - 5
}

const composed = compose(tc, ta, tb)
console.log(composed)
console.log(composed(1))