// You should implement your task here.

module.exports = function towelSort(matrix) {
    const newArr = [];
    if (matrix.length <= 0 || matrix == "undefine") {
        return [];
    }
    const sort = matrix.map((item, index) =>
        index % 2 == 1 ? newArr.push(item.reverse()) : newArr.push(item)
    );
    return newArr.flat();
};