import {
  // methods,
  // methods,
  originalArray,
  doubleArray,
  evensOnlyArray,
  arraySum,
  allNumbersGreaterThanZero,
  someNumbersAreOdd,
  evensOnlyAndDoubleArray,
  findItem,
} from '../app'

// hint of look in before_each before_all
describe('originalArray Test', ()=> {
  test('originalArray should return it self', ()=>{
    expect(originalArray([1,2,3,4])).toEqual([1,2,3,4])
  })
})

describe('doubleArray Test', ()=> {
  test('doubleArray, make sure it doubled the array', ()=>{
    expect(doubleArray([1,2,3,4])).toEqual([2,4,6,8])
  })
})

describe("return array with all even numbers", ()=> {
  test("evensOnlyArray",()=> {
    expect (evensOnlyArray([1,2,3,4,5,6,7,8])).toEqual([2,4,6,8])
  })
})

describe("return array with sum of numbers", ()=> {
  test("the sum of array",()=> {
    expect(arraySum([1,2,3,4])).toEqual([10])
  })
})

describe("return true if every item greater than 0", ()=> {
  test("all numbers greater than zero",()=> {
    expect(allNumbersGreaterThanZero([1,2,3])).toEqual(true)
  })
})

describe("return true if one or more items in array are odd",()=>{
  test("true when theirs odd numbers",() =>{
    expect(someNumbersAreOdd([2,3,4,5])).toEqual(true)
  })
})
describe("return array double and even", ()=>{
  test("doubles and evens only",()=>{
    expect(evensOnlyAndDoubleArray([1,2,3,4,5])).toEqual([4,8])
  })
})
describe("find an item method return 'not found' if not found", ()=>{
  test("find a method",()=>{
    expect(findItem([1,2,3,4,5])).toEqual(1)
  })
})