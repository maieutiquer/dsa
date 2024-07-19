import {
  fromArray,
  toArray,
  createFromValue,
  peakFirst,
  peakLast,
  addFirst,
  removeFirst,
  addLast,
  map,
} from "./singly-linked-list.js"

describe("singly linked list", () => {
  test("from array and to array", () => {
    const initialArray = [3, 6, 10, 11, 7]
    const linkedListFromArray = fromArray(initialArray)
    const arrayFromLinkedList = toArray(linkedListFromArray)

    expect(arrayFromLinkedList).toStrictEqual(initialArray)
    expect(count).toBe(5)
  })
  test("create from value and peak first", () => {
    const initialValue = 42
    const createdList = createFromValue(initialValue)
    const peakedValue = peakFirst(createdList)
    expect(peakedValue).toBe(initialValue)
    expect(count).toBe(1)
  })
  test("create from value, add first and peak first", () => {
    const initialValue = 42
    const createdList = createFromValue(initialValue)
    const valueToAdd = 422
    const listWithAddedValue = addFirst(valueToAdd, createdList)
    const peakedValue = peakFirst(listWithAddedValue)
    expect(peakedValue).toBe(valueToAdd)

    expect(count).toBe(2)
  })
  test("create from value, add last once and peak last", () => {
    const initialValue = 42
    const createdList = createFromValue(initialValue)
    const valueToAdd = 422
    const listWithAddedValue = addLast(valueToAdd, createdList)
    const peakedValue = peakLast(listWithAddedValue)
    expect(peakedValue).toBe(valueToAdd)
  })
  test("create from value, add last twice and peak last", () => {
    const initialValue = 42
    const createdList = createFromValue(initialValue)
    const listWithAddedValueIntermediate = addLast(111, createdList)
    const valueToAdd = 422
    const listWithAddedValueFinal = addLast(
      valueToAdd,
      listWithAddedValueIntermediate,
    )
    const peakedValue = peakLast(listWithAddedValueFinal)
    expect(peakedValue).toBe(valueToAdd)
  })
  test("create from value, add first and remove first", () => {
    const initialValue = 42
    const createdList = createFromValue(initialValue)
    const listWithAddedValueIntermediate = addFirst(111, createdList)
    const listWithAddedValueFinal = removeFirst(listWithAddedValueIntermediate)
    const peakedValue = peakLast(listWithAddedValueFinal)
    expect(peakedValue).toBe(initialValue)
  })
  test("create from value, add last and remove first", () => {
    const createdList = createFromValue(111)
    const valueToAdd = 42
    const listWithAddedValueIntermediate = addLast(valueToAdd, createdList)
    const listWithAddedValueFinal = removeFirst(listWithAddedValueIntermediate)
    const peakedValue = peakLast(listWithAddedValueFinal)
    expect(peakedValue).toBe(valueToAdd)
  })
})

describe("map", () => {
  // test.skip("compare with js array map", () => {})
  test("create from value, map", () => {
    const initialValue = 2
    const createdList = createFromValue(initialValue)
    const valueToAdd = 3
    const listWithAddedValue = addLast(valueToAdd, createdList)
    // console.log(toArray(listWithAddedValue))
    const mappedList = map((x) => x * 3, listWithAddedValue)
    const peakedFirstValue = peakFirst(mappedList)
    const peakedLastValue = peakLast(mappedList)
    expect(peakedFirstValue).toBe(6)
    expect(peakedLastValue).toBe(9)
  })
})
