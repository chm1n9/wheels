// 根据 id 查询 dom
function getElementById (root, id) {
  let node = root
  while (node) {
    if (node.id === id) {
      return node
    }
    node = nextNode(node, root)
  }
}

function nextNode (node, root) {
  if (node.children.length) {
    return node.children[0]
  }
  if (node.nextElementSibling) {
    return node.nextElementSibling
  }
  while (node.parentNode && root !== node.parentNode) {
    if (node.parentNode.nextElementSibling) {
      return node.parentNode.nextElementSibling
    }
    node = node.parentNode
  }
  return null
}