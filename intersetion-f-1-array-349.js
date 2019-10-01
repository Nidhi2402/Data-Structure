/*
Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Note:

Each element in the result must be unique.
The result can be in any order.
*/

var intersection = function(nums1, nums2) {
    let num1Length = nums1.length;
    let num2Length = nums2.length;
    let interSection = [];
    if(num1Length === 0 || num2Length === 0) {
        return null;
    }
    for (let i=0; i<num1Length; i++) {
        if (nums2.includes(nums1[i]) && !interSection.includes(nums1[i])) {
            interSection.push(nums1[i])
        }
    }
    return interSection;

};
console.log(intersection([1,2,2,1], [2,2]));