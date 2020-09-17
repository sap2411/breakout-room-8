//Frequency Counter

// write a funtion that takes in 2 numbers.
//return true if the numbers have the same frequency of DOMStringList.


//freq(123, 321) => true
//freq(122, 123) => false
//freq(1, 3) => false
//freq(224875, 827254) => true
//freq(2,2) => true

//time complexity must be O(n)

function freq(num1,num2) {
    //are numbers equal? return true
    if (num1 === num2) {
        return true
    }
    //are numbers different lengths? return false
    if (num1.length !== num2.length) {
        return false
    }
    //create empty hash1
    let hash1 = {}
    //create empty hash2
    let hash2 = {}
    //iterate over first number
    for (let n of num1.toString()) {
        //  hash1[n] is either 1 or hash1[n] + 1
        hash1[n] = (hash1[n] || 0) + 1
    }
    //iterate over second number, same thing
    for (let n of num2.toString()) {
        //  hash2[n] is either 1 or hash2[n] + 1
        hash2[n] = (hash2[n] || 0) + 1
    }
    //compare hash1 and hash2
    for (let key in hash1) {
        if (hash1[key] !== hash2[key]) {
            return false
        }
    }
    return true
}
