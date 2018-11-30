export default function countingSort(arr) {
    // step 1 - count
    if (arr.length == 0) return arr;
    let max = Math.max(...arr);
    let countArr = new Array(max + 1).fill(0);
    for (let i = 0; i < arr.length; i++) {
        countArr[arr[i]]++;
    }
    // step 2 - accumulate
    for (let i = 0; i < countArr.length; i++) {
        if (i == 0) continue;
        countArr[i] = countArr[i - 1] + countArr[i]
    }
    // step3 - sort in new array
    let newArr = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        newArr[countArr[arr[i]] - 1] = arr[i]
        countArr[arr[i]]--;

    }
    return newArr
}

// let a = [2, 8, 4, 5, 4, 1, 7, 0]
// let b = countingSort(a)
// console.log(b)