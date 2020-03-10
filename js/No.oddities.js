Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.

//   // Return all non-odd values
function noOdds( values ){
  var array = [];
  for(var i = 0; i<values.length; i++){
    if (values[i] % 2 === 0){
      array.push(values[i])
    }
  }
  return array;
}

noOdds([1, 2, 3, 4, 5, 6]);
