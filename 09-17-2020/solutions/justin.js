// given an Object, return the sum of all EVEN integers
//some integers may be nested

var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
}
  
//   var obj2 = {
//     a: 2,
//     b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//     c: {c: {c: 2}, cc: 'ball', ccc: 5},
//     d: 1,
//     e: {e: {e: 2}, ee: 'car'}
//   };
  
//   nestedEvenSum(obj1); // 6
//   nestedEvenSum(obj2); // 10

function nestedEvenSum(obj) {
    // create solution array
    let solution = []
    // iterate through keys
    for (let key in obj) {
        // for each key that is another object, recursively check keys
        if (typeof key === "object") {
            nestedEvenSum(key)
        }
        // is this an integer?
        if (typeof key === "integer") {
            // if yes, is it divisible by 2?
            if (key % 2 === 0) {
                // if yes, push to solution array
                solution.push(key)
            }
        }
    }
    let sum = 0
    // sum solution array and return 
    for (let n of solution) {
        sum = sum + n
    }
    return sum
}