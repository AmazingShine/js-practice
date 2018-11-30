function putInBucket(arr, radixIdx) {
    let bucket = new Array(10)
    for (let i = 0; i < bucket.length; i++) {
        bucket[i] = []
    }
    for (let i = 0; i < arr.length; i++) {
        let radix = Math.floor(arr[i] % (10 ** radixIdx) / 10 ** (radixIdx - 1))
        bucket[radix].push(arr[i])
    }
    return bucket
}

function takeOutBucket(bucket) {
    return bucket.reduce((a, b) => a.concat(b))
}

export default function radixSort(arr) {
    let radixIdx = 1;
    let max = (Math.max(...arr)+"").length;
    while (radixIdx <= max) {
        let bucket = putInBucket(arr, radixIdx)
        arr = takeOutBucket(bucket)
        radixIdx++;
    }
    return arr;
}

// let arr = [3, 2, 1445, 512, 3, 2, 1, 23, 67, 213,10000001,777777777777777]

// console.log(RadixSort(arr))