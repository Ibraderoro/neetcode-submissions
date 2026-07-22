class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }
        let s_sorted = s.split("").sort().join("");
        let t_sorted = t.split("").sort().join("");
        if (s_sorted === t_sorted) {
            return true;
        }
        else return false;
    }
}
