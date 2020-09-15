//99.4% best runtime
//24.65% best memory

//create 2 objects to store a max and 2nd max value as well as their index from the input array
//initialize them with values that are sure to be overwritten
//loop through input array

//if an input array value is greater thatn max['value'] 
//   assign max data to secondMax
//   then assign that input array value and index to our max hash

//if an input array value is less than our max but more than our second max
//   update our seondMax hash data

//at the end of our loop, our max is storing the Max array value and its original index
//and the secondMax is storing the second max value and index

//if our max['value'] is at least twice as much as our second max, then we can return our max['index']
//if not, we return -1

var dominantIndex = function(nums) {
    let max = {'value': -1, 'index': -1}
    let secondMax = {'value': -1, 'index': -1}
    for(let num in nums){
        if(nums[num] > max['value']){
            secondMax['value'] = max['value']
            secondMax['index'] = max['index']
            max['value'] = nums[num]
            max['index'] = num
        }else if(nums[num] > secondMax['value']){
            secondMax['value'] = nums[num]
            secondMax['index'] = num
        }
    }
    return secondMax['value'] * 2 > max['value'] ? -1 : max['index']
};