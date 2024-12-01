const newNode =
  (value, next) =>
  (shouldReturnNext = false) =>
    shouldReturnNext ? next : value

const node1 = newNode(43, null)
const node2 = newNode(86, node1)

const map = (callback, node) =>
  newNode(
    callback(node()),
    node(true) == null ? null : map(callback, node(true)),
  )
map(console.log, node2)

const filter = (callbackFn, node) =>
  callbackFn(node())
    ? newNode(
        node(),
        node(true) === null ? null : filter(callbackFn, node(true)),
      )
    : node(true) === null
      ? null
      : filter(callbackFn, node(true))

const filtered = filter((x) => x % 2 !== 0, node2)

map(console.log, filtered)
