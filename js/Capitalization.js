Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

function capitalize(s){
  let evenArray = [];
  let oddArray = [];
  let otherArray =[];
  for (let i in s){
    if(i % 2 ===0){
      evenArray.push(s[i].toUpperCase())
      } else {
      evenArray.push(s[i].toLowerCase());
      }
      otherEven = evenArray.join('')
    };
    for (let i in s){
      if(i % 2 !=0){
        oddArray.push(s[i].toUpperCase())
      } else {
        oddArray.push(s[i].toLowerCase())
      }
      otherOdd = oddArray.join('');
    };
  otherArray.push(otherEven, otherOdd);
  return otherArray;
