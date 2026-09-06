class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        let sortedIntervals = intervals.sort((a,b)=> a[0] -b[0] );
        let result = [sortedIntervals[0]]
        for(let i=1; i < sortedIntervals.length;i++){
            if(sortedIntervals[i][0] <= result[result.length - 1][1]) /** then it is a overlapping interval */ 
            {
                result[result.length - 1][1] = result[result.length - 1][1] >  sortedIntervals[i][1]  ? result[result.length - 1][1] :   sortedIntervals[i][1];
            } else {
                result.push(sortedIntervals[i])
            }
        }
        return result
    }
}
