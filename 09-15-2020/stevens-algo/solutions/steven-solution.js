//turn numbers into strings
//create hash table that counts frequency of 1 string by looping through
//loop through 2nd string, decrement the character count
//if a character appears that isnt in the hash table, or is already down to 0, return false
//esle return true

function sameFrequency(num1, num2){
    let hash = {}
    let str1 = "" + num1
    let str2 = "" + num2
    if (str1.length !== str2.length) return false
    for(let char = 0; char< str1.length; char++){
        hash[str1.charAt(char)] ? hash[str1.charAt(char)]++ : hash[str1.charAt(char)] = 1
    }
    for(let char = 0; char<str2.length; char++){
        if(hash[str2.charAt(char)] && hash[str2.charAt(char)] > 0){
            hash[str2.charAt(char)]--
        }else return false
    }
    return true
  }