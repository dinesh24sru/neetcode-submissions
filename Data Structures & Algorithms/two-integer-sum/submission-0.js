class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let result = new Map()
        for(let i=0; i<nums.length;i++){
            let complement = target - nums[i];
            if(result.has(complement)){
                return [result.get(complement), i ]
            } else {
                result.set(nums[i],i)
            }
        }
    }
}
