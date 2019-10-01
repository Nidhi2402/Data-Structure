
//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
function displayNum(n) {
    while(n>0) {
        console.log(n);
        n--;
    }
}
displayNum(4);

// Write a function that loops through the numbers n down to 0 using recursion
function recursiveNum(n) {
    while (n>0) {
        console.log(n)
        return recursiveNum(--n);
    }
}
recursiveNum(2);

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
function exponent(base, expo) {
    let value = base;
    while (expo > 1) {
        value *= base;
        expo --;
    }
    console.log(value);
}
exponent(2,3);

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
var recursiveExponent = function(base, expo) {
    if (expo === 1) {
      return base;
    }
  
    return base * recursiveExponent(base, --expo)
  }
recursiveExponent(3,3);

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.
function recursiveMultiplier(arr, num) {
    let finalArr = [];
    for (let i=0; i<arr.length; i++) {
        finalArr.push(arr[i]*num);
    }
    console.log(finalArr);
}
console.log(recursiveMultiplier([2,3,4,7],2));
