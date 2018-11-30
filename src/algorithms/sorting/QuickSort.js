function partition(arr, left, right) {
  let i = left
  let j = right
  let pivot = arr[left]
  while (i != j) {
    // right go
    while (i < j && arr[j] >= pivot) {
      j--
    }
    if (j > i) arr[i] = arr[j]
    // left go
    while (i < j && arr[i] <= pivot) {
      i++
    }
    if (i < j) arr[j] = arr[i]
  }
  arr[i] = pivot
  return i
}

// in-place
function _quickSort(arr, left, right) {
  if (left < right) {
    let p = partition(arr, left, right)
    _quickSort(arr,left,p-1)
    _quickSort(arr,p+1,right)
  }
}

export default function quickSort(arr) {
  _quickSort(arr, 0, arr.length - 1)
  return arr;
}
// let arr = [2, 342, 234, 11, 234, 533, 12, 3, 4, 63, 21]

// quickSort(arr)
// console.log(arr)
