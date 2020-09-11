// // EXPORT ALL AS FUNCTIONS AND KEEP THE NAMES THE SAME

// // ways to export

// // export const methodName = (param) => {
// // }

// // ----or---------

// // export methodName function(param){
// // }


// // ARRAY ITERATOR METHODS
let numberArray = [1,2,3,4]
export const originalArray = (arr) =>{
  return arr
}


// // return array with double values in array
// doubleArray(numberArray) // => [2,4,6,8];  hint use map 
export const doubleArray = (arr) =>{
  return arr.map((num)=>{
    return num*2;
  });
}
// return array with all even numbers
// evensOnlyArray(numberArray) // => [2,4];  hint use filter 
export const evensOnlyArray = (arr) =>{
  return arr.filter(n => n % 2 === 0)
}


// // return array with sum of numbers
// arraySum(numberArray) // => 10;  hint use reduce
export const arraySum = (arr) =>{
  return [arr.reduce((a,b) => a + b , 0)]
}

// // return true if every item greater than 0
// allNumbersGreaterThanZero(numberArray) // => true; use every
    export const allNumbersGreaterThanZero = (arr) =>{
      return arr.every((a)=>{
        return a > 0
      })
    }
// // // return true if one or more items in array are odd
// someNumbersAreOdd(numberArray) // => true; use some
export const someNumbersAreOdd = (arr) => {
   return arr.some (n => n % 2 !== 0 )
}
// // return array double and even
// evensOnlyAndDoubleArray(numberArray) // => [4,8]; // use map and filter
export const evensOnlyAndDoubleArray = (arr) => {
  const even = arr.filter(n => n % 2 === 0);
    const double = even.map((num)=> num*2 );
    return double;
}
//TA's return arr.filter(n => n % 2 === 0).map((num)=> num*2 );


// // find an item method return 'not found' if not found
// findItem(numberArray, 1) //=> 1
export const findItem = (arr) => {
  arr.find(n => n === 1)
  if(){
   
}
else{
  console.log("not found");
}
}
// // sort array desc order
// sortArray(numberArray) //=> [4,3,2,1] *desc*


// // -----BONUS------
// // ARRAY ITERATOR METHODS ON Objects with name age 

// artists = [
//   {name: 'a', likes:100},
//   {name: 'b', likes:99},
//   {name: 'c', likes:101}, 
// ]
// // doubles likes of artist
// doubleLikes(artists)
// // => [
// //   {name: 'a', likes:200},
// //   {name: 'b', likes:198},
// //   {name: 'c', likes:202},  
// // ]; 
// moreThan100Likes(artists)// =>[ {name: 'c', likes:101} ]; // use filter

// //  return an array of strings of artist name
// justArtistMoreThan100Likes(artists) //=> ['c']; // use filter

// // get total number of likes fo all artists
// numberOfLikes(artists) //=> 300; // get all likes

// // find an item method. Returns 'not found' if not found
// findObjByName(artists, 'a') // => {name: 'a', likes:200}

// // returns array of artist sorted by likes
// sortArtistByName(artists)
