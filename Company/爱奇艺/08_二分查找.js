/* 
    二分查找；要求数组是有序的，否则无法正确地进行查找
    参数：有序数组、目标值
*/
function binarySearch(arr, target) {
    let left = 0
    let right = arr.length - 1

    while(left <= right) {
        let mid = Math.floor((left + right) / 2) 
        if(arr[mid] === target) {
            return mid
        }else if(arr[mid] < target) { // 往右边找
            left = mid + 1
        }else {
            right = mid - 1
        }
    }
    return -1
}