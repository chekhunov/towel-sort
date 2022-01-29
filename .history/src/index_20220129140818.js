// You should implement your task here.

module.exports = function towelSort(matrix) {
    const sort = matrix.flat().sort((a, b) => a - b);
    return sort;
};