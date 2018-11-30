function swap(arr,i,j){
    [arr[i],arr[j]] = [arr[j],arr[i]];
}

export default function bubbleSort(arr){
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if(arr[j]>arr[j+1]){
                swap(arr,j,j+1)
            }
        }
    }
    return arr;
}
// let a = [3,24,6,3,4,1,5,67,5,22]
// bubbleSort(a)
// console.log(a)
