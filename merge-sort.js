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
    let leftArr = arr.slice(0, mid);//[2,3,4,7]
    let rightArr = arr.slice(mid); //[1,5,8]
    console.log(leftArr, rightArr)
    return merge(mergeSort(leftArr), mergeSort(rightArr));
 }

 function merge(left, right) { //([4,7], [2,3])
     let result = [];
     let l =0, r=0;
     while(left.length > l && right.length > r) { //2>0 & 2>2
         if(left[l] < right[r]) {// 4<3
             result.push(left[l]);
             l++;
         } else {
             result.push(right[r]) //[2,3]
             r++;
         }
         console.log(result);
    }
    return result.concat(left.slice(l)).concat(right.slice(r));
}


 console.log(mergeSort([4,7,2]));