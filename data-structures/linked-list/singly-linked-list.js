const singlyLinkedListSample2 = { data: 42, next: null }
const singlyLinkedListSample1 = { data: 422, next: singlyLinkedListSample2 }

// const createEmpty = () => ({ data: null, next: null }) // are empty lists needed?
export const createFromValue = (value) => ({ data: value, next: null })
export const peakFirst = ({ data }) => data // is this function redundant?

export const peakLast = ({ data, next }) =>
  next === null ? data : peakLast(next)
// const peakAtIndex = () => {}
// const findFirstIndexOf = () => {}
// const findLastIndexOf = () => {}
// const insertAfterIndex = () => {}
export const addFirst = (value, handle) => ({ data: value, next: handle })
export const addLast = (value, { data, next }) =>
  next === null ? { data, next: createFromValue(value) } : addLast(value, next)
// const removeFirst = () => {}
// const removeLast = () => {}
// const merge = () => {}
// const reverse = () => {}
