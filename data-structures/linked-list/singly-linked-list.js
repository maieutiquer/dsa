// const singlyLinkedListSample2 = { data: 42, next: null }
// const singlyLinkedListSample1 = { data: 422, next: singlyLinkedListSample2 }

export const createEmpty = () => ({ data: null, next: null }) // are empty lists needed?
export const createFromValue = (value) => ({ data: value, next: null })
export const peakFirst = ({ data }) => data // is this function redundant?

export const peakLast = ({ data, next }) =>
  next === null ? data : peakLast(next)
// const peakAtIndex = () => {}
// const findFirstIndexOf = () => {}
// const findLastIndexOf = () => {} // use reverse()
// const insertAfterIndex = () => {}
export const addFirst = (value, handle) => ({ data: value, next: handle })
export const addLast = (value, { data, next }) =>
  next === null ? { data, next: createFromValue(value) } : addLast(value, next)
export const removeFirst = ({ next }) => next
// const removeLast = ({data, next}) => next === null ?  ({data, next:null}) :
// const merge = () => {}
// const reverse = () => {}
export const toArray = ({ data, next }) =>
  next === null ? [data] : [data, ...toArray(next)]
export const fromArray = (array) =>
  array
    .toReversed()
    .slice(1)
    .reduce((acc, value) => addFirst(value, acc), createFromValue(array.at(-1)))
// const slice = () => {}
// const forEach = () => {}
// const reduce = () => {}
// const reverse = () => {}
// const sort = () => {}
// const checkIsSorted = () => {}
// const zip = () => {}
// const cartesianProduct = () => {}
// const adjacentDifference = () => {}
// const adjacentFind = () => {} // use predicate
export const count = ({ next }) => 1 + (next === null ? 0 : count(next))

export const map = (callbackFn, { data, next }) => ({
  data: callbackFn(data),
  next: next === null ? null : map(callbackFn, next),
})
