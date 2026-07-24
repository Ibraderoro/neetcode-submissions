class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {};
        for (let i = 0; i < strs.length; i++) {
            let count = new Array(26).fill(0);
            for (let char of strs[i]) {
                count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }
            let key = count.join(',');
            if (!res[key]) res[key] = [];
            res[key].push(strs[i]);
        }
        return Object.values(res);
    }
}