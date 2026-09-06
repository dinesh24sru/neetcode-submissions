class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let n = height.length
        let leftArray = new Array(n).fill(0)
        let rightArray = new Array(n).fill(0)
        let result = 0
        leftArray[0] = height[0];
        for(let leftPointer=1; leftPointer < n;leftPointer++){
           leftArray[leftPointer] = Math.max(leftArray[leftPointer-1], height[leftPointer])
        }

        rightArray[n - 1] = height[n-1]
        for(let rightPointer=n - 2; rightPointer >= 0;rightPointer--){
            rightArray[rightPointer] = Math.max(rightArray[rightPointer+1], height[rightPointer])
        }

        for(let res=0; res < n; res++) {
           result += Math.min(leftArray[res],rightArray[res]) - height[res]
        }
        return result
    }
}
