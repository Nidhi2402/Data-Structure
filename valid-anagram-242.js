/* 
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/

var isAnagram = function(s, t) {
    if( s.length != t.length) {
        return false;
    }
    let sWord = s.split("");
    let tWord = t.split("");
    let sWordLength = sWord.length
    let spot = [];

    for(let i =0; i<tWord.length; i++) {
        if(sWord.includes(tWord[i])) {
            spot.push(tWord[i]);
            let index = sWord.indexOf(tWord[i]);
            sWord.splice(index,1);
            console.log(sWord)
            console.log(tWord[i])
        }
    }
    if(sWordLength === spot.length) {
        return true;
    } else { return false;}
};
console.log(isAnagram('aacc', 'ccac'));
"anagram"
"nagaram"