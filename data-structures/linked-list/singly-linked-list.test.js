import {
  createFromValue,
  peakFirst,
  peakLast,
  addFirst,
  addLast,
} from "./singly-linked-list.js"

describe("singly linked list", () => {
  test("create from value and peak first", () => {
    const initialValue = 42
    const createdList = createFromValue(initialValue)
    const peakedValue = peakFirst(createdList)
    expect(peakedValue).toBe(initialValue)
  })
  test("create from value, add first and peak first", () => {
    const initialValue = 42
    const createdList = createFromValue(initialValue)
    const valueToAdd = 422
    const listWithAddedValue = addFirst(valueToAdd, createdList)
    const peakedValue = peakFirst(listWithAddedValue)
    expect(peakedValue).toBe(valueToAdd)
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
})
