/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m=0,n=matrix[0].length-1
    while(m<matrix.length && n>=0){
        if(target==matrix[m][n]) return true
        else target>matrix[m][n]?m++:n--
    }
    return false
};