// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix.length <= 0) {
        return [];
    }
    const sort = matrix.flat().sort((a, b) => a - b);
    return sort;
};