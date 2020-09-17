var dominantIndex = function(nums) {
    let maxIndex = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[maxIndex]) {
            let maxIndex = i
        }
    }
    for (let j = 0; j < nums.length; j++) {
        if ((nums[j] != nums[maxIndex]) && (nums[maxIndex] <= (nums[j] * 2))) {
            return -1
        }
    }
    return maxIndex
};