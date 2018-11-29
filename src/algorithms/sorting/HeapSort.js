function adjust(arr, p_idx, length) {
    let temp = arr[p_idx];
    let c_idx = p_idx * 2 + 1 //left_child
    while (c_idx < length) {
        // compare left_child and right_child
        if (c_idx + 1 < length && arr[c_idx] < arr[c_idx + 1]) {
            c_idx++
        }
        // compare parent and child
        if (temp >= arr[c_idx]) break;

        arr[p_idx] = arr[c_idx];
        p_idx = c_idx;
        c_idx = 2 * c_idx + 1;
    }
    arr[p_idx] = temp;
}

function buildHeap(arr) {
    for (i = parseInt(arr.length / 2) - 1; i >= 0; i--) {
        adjust(arr, i, arr.length)
    }
}

function HeapSort(arr) {
    buildHeap(arr)
    for (let i = arr.length - 1; i > 0; i--) {
        [arr[i], arr[0]] = [arr[0], arr[i]];
        adjust(arr, 0, i)

    }
}

arr = [6, 7, 2, 5, 1, 8, 9, 11, 55, 22, 3, 1, 98, 33]
HeapSort(arr)
console.log(arr)