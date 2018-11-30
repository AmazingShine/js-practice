function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

export default function shellSort(arr) {
    if (arr.length <= 1)
        return arr
    let N = arr.length;
    let gap = 1;
    while (gap < N / 3) {
        gap = 3 * gap + 1; // set interval
    }
    while (gap >= 1) {
        for (let i = gap; i < N; i++) {
            for (let j = i; j >= gap && arr[j] < arr[j - gap]; j -= gap) {
                swap(arr, j, j - gap);
            }
        }
        gap = (gap - 1) / 3
    }
    return arr;

}

// let arr = [3, 4, 2, 1, 0, 0, 4, 3, 4, 2]
// console.log(shellSort(arr))