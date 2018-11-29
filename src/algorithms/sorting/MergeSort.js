function merge(left, right) {
    let tem = []
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            tem.push(left.shift());
        } else {
            tem.push(right.shift());
        }
    }
    return tem.concat(left,right);  // 一边先结束需要加入另一边的值
}

function MergeSort(arr) {
    if (arr.length == 1)    // 递归结束条件
        return arr;
    let mid = parseInt(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    return merge(MergeSort(left), MergeSort(right))
}

let arr = [2, 342, 234, 11, 234, 533, 12, 3, 4, 63, 21]

console.log(MergeSort(arr))