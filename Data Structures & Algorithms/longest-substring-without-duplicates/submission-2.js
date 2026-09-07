class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let resultSet = new Set();
        let left=0
        let result = 0;
        for(let right = 0; right < s.length ; right++){
            while(resultSet.has(s[right])){
                resultSet.delete(s[left]);
                left++;
            }
            resultSet.add(s[right]);
            result = Math.max(result, resultSet.size)
        }
        return result
    }
}
