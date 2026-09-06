class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let result = new Set();
        for(let number of nums){
            if(result.has(number)) return true
            result.add(number)
        }
        return false
    }
}
