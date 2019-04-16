Function.prototype._call = function (context) {
  context = context || window
  context.fn = this

  let i = 1
  const length = arguments.length
  const args = []
  while (i < length) {
    args.push('arguments[' + (i++) + ']')
  }

  const result = eval('context.fn(' + args.join(',') + ')')
  delete context.fn
  return result
}

// test
global.a = 3
const obj = {
  a: 5
}
function add (b, c) {
  return this.a + b + c
}
console.log(add(2, 2))
console.log(add._call(obj, 2, 2))