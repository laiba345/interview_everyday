function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    // 其实是找到一个基准数;
    // const pivot = arr[Math.floor(arr.length / 2)];
    const pivot = arr[0]
    const left = [];
    const right = [];

    for (const element of arr) {
        if (element < pivot) {
            left.push(element);
        } else if (element > pivot) {
            right.push(element);
        }
    }
    // 使用递归的形式来处理; 
    // 因为每次最后拿到的就是数组的形式;可以进行递归处理
    return [...quickSort(left), pivot, ...quickSort(right)];
}

const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray);
