/* Selection sort 
arr = [5,7,2,3,12]*/

function selectionSort(arr) {
    for (let i =0; i<arr.length; i++) {
        let min_num = i;
        for (j=i+1; j<arr.length; j++) {
            if(arr[j]<arr[min_num]) { // 7>2=>no j++
                min_num = j; //1
            } 
        }
                let temp = arr[i]; //7
                arr[i] = arr[min_num];
                arr[min_num] = temp;
    }
    console.log(arr);
}
selectionSort([5,7,2,3,12]);

    // function selectionSort(arr){
    //     var minIdx, temp, 
    //         len = arr.length;
    //     for(var i = 0; i < len; i++){
    //       minIdx = i; //0
    //       for(var j = i+1; j<len; j++){
    //          if(arr[j]<arr[minIdx]){ //(2<5)
    //             minIdx = j; 2
    //          }
    //       }
    //       temp = arr[i];
    //       arr[i] = arr[minIdx];
    //       arr[minIdx] = temp;
    //     }
    //     return arr;
    //   }

    //   console.log(selectionSort([5,7,2,3,12]));