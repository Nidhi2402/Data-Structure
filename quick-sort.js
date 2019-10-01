function quickSort(arr){
    let pivot = arr[arr.length-1];
    let left = 0;
    let right = arr.length-1
    for (i=0;i<arr.length; i++) {
        if(arr[i] <= pivot){
            //swap(arr[left], arr[i]);
            console.log("hi")
            left++;
        } else {
            swap(arr[arr.length-1-i], arr[i]);
            swap(pivot, arr[right-1]);
            right--
        }
    console.log(arr)
    }
    console.log(pivot);
    return arr;
}

function swap(i, j) {
    let temp =i;
    i=j;
    j=temp;
}
console.log(quickSort([2,8,7,1,3,5,4]));