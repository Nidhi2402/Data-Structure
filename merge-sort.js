/*
Merge sort algorithm
[4,7,2,3,8,1,5]
*/

 function mergeSort(arr) {
    let length = arr.length;
    if(length < 2) {
        return arr;
    }
    let mid = Math.floor(length/2);
    let leftArr = arr.slice(0, mid);//[4,7,2,3]
    let rightArr = arr.slice(mid); //[8,1,5]
    console.log(leftArr, rightArr)
    return merge(mergeSort(leftArr), mergeSort(rightArr));
 }

 function merge(left, right) {
     let result = [];
     let l =0, r=0;
     while(left.length > l && right.length > r) {
         if(left[l] < right[r]) {
             result.push(left[l]);
             l++;
         } else {
             result.push(right[r])
             r++;
         }
         console.log(result);
    }
    console.log("left Slice:" + left.slice(l))
    return result.concat(left.slice(l)).concat(right.slice(r));
}


 console.log(mergeSort([4,7,2,3,8,1,5]));