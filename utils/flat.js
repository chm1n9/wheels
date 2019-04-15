function flat (arr) {
  return arr.reduce((acc, item) => item instanceof Array ? acc.concat(flat(item)) : acc.concat(item), [])
}

function flatten (arr) {
  const stack = [...arr]
  const res = []
  while (stack.length) {
    const item = stack.pop()
    if (Array.isArray(item)) {
      stack.push(...item)
    } else {
      res.push(item)
    }
  }
  return res.reverse()
}


// test
const arr = [1, 2, [3, [4, 7]]]
console.log(flat(arr))
console.log(flatten(arr))