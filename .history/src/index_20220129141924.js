// You should implement your task here.

module.exports = function towelSort(matrix) {
    const newArr = [];
    if (matrix.length <= 0) {
        return [];
    }
    const sort = matrix.map((item, index) =>
        index != 0 && index % 2 == 0 ? newArr.push(item.reverse()) : item
    );
    return sort.flat();
};