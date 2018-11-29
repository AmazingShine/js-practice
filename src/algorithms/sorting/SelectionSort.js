function SelectionSort(arr) {
    let i = 0
    while (i < arr.length){
        let minIndex = i;
        for (let j = i; j < arr.length; j++) {
            if(arr[j]<arr[minIndex]){
                minIndex = j
            }
        }
        [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
        i++;
    }
}
arr = [2,4,5,1,2,55,3,123,56,7]
SelectionSort(arr)
console.log(arr)