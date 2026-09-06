class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let productArray = []
        let prodOfNums = 1
        let zeroCount = 0
        for(let n of nums){
            if(n !== 0) prodOfNums *= n;
            else zeroCount++;
        }
        if(zeroCount > 1) return (new Array(nums.length)).fill(0);
        for(let i = 0; i < nums.length ; i++){
            if(zeroCount > 0){
                if(nums[i] === 0) productArray[i] = prodOfNums
                else productArray[i] = 0 
            } else productArray.push(prodOfNums/nums[i])
        }
        return productArray;
    }
}
