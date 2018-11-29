function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

function InsertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let tem = arr[i]
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > tem) {
                swap(arr, j, j + 1)
            }

        }
    }
}

let arr = [2, 342, 234, 11, 234, 533, 12, 3, 4, 63, 21]
InsertionSort(arr)
console.log(arr)