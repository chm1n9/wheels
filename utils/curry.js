function curry (fn) {
  const length = fn.length
  const slice = Array.prototype.slice
  let args = slice.call(arguments, 1)

  const currying = function () {
    args = args.concat(slice.call(arguments))
    if (args.length >= length) {
      return fn.apply(this, args)
    } else {
      return currying
    }
  }
  return currying
}

function curry2 (fn, ...args) {
  return function () {
    const rest = [...args, ...arguments]
    if (fn.length > rest.length) {
      return curry2.call(this, fn, ...rest)
    } else {
      fn.apply(this, rest)
    }
  }
}

// test
function add (a, b, c) {
  return a + b + c
}

const a = curry(add)
console.log(a(1)(2)(4))