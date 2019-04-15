// get(object, path, [defaultValue])

/**
 * 

_.get(object, 'a[0].b.c');

_.get(object, ['a', '0', 'b', 'c']);

_.get(object, 'a.b.c', 'default');


 */

function get (object, path, defaultValue) {
  if (typeof path === 'string') {
    path = path.split(/\.\[\]/)
  }
  let index = 0
  const length = path.length
  while (object != null && index < length) {
    object = object[path[index++]]
  }
  return (index && index === length) ? object : defaultValue
}