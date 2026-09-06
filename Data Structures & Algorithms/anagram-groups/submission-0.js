class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let result = {}
        for(let str of strs){
        let code = Array(26).fill(0);
            for(let letter of str){
                code[letter.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }
            let hashedKey= code.join(',')
            if(hashedKey in result) {
               result[hashedKey] = [...result[hashedKey], str]
            } else {
                result[hashedKey] = [str]
            }
        }
        return Object.values(result)
    }
}
