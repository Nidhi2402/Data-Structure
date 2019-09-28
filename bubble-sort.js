/* 
    Bubble sort algorithm required two loops
    1 loop for value coparision ansecond loop is to go through all again to validate all values again

    Time Complexity of this algorithm is O(n^2);
*/
function bubbleSort(arr) {
    let temp;
    for (let i=0; i<arr.length; i++) {
        for(j=0; j<arr.length; j++) {
            if(arr[j]>arr[j+1]) {
                temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr);
}

bubbleSort([4,2,8,6,1,9,3]);