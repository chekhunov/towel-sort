// You should implement your task here.

module.exports = function towelSort(matrix) {
    matrix.flat().sort((a, b) => a - b);
    return matrix;
};