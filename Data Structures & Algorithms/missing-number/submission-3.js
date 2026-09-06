class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let res = nums.sort((a, b) => a - b);

        for(let i=0;i<res.length;i++){
            
            console.log("nums[i]",res[i])
            console.log("i",i)
            if(res[i] !== i){
                return i
            }
            
        }
        return res.length
    }
}
