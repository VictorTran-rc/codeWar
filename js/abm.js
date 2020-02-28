Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b.
A is "close to" b if margin is higher than or equal to the difference between a and b.

When a is lower than b, return -1.

When a is higher than b, return 1.

When a is close to b, return 0.

If margin is not given, treat it as zero.

Assume: margin >= 0

Tip: Some languages have a way to make arguments optional.

PREP

PARAMETERS
Function
3 inputs
with a return to show where a is place

RESULT
Return (with a if condition to show that a is less than or equal or higher than b)
It need to be sorted into differenct buckets 1. which is less than 2. equal to 3. higher than b


EXAMPLE
Example: if a = 3, b = 5 and the margin = 3,
since a and b are no more than 3 apart,
close_compare should return 0. Otherwise,
if instead margin = 0,
a is lower than b and close_compare should return -1.

CODE
Create a function close_compare
that accepts 3 parameters: a, b, and an optional margin.
if margin is higher than or equal to the difference between a and b. (Must use abloste value)
The function should return whether a is lower than, close to, or higher than b.
A is "close to" b

When a is lower than b, return -1.

When a is higher than b, return 1.

When a is close to b, return 0.

If margin is not given, treat it as zero.
function close_compare(a,b,m){
  return Math.abs(a - b);
  let diff = (Math.abs(a -b))
  if ( m > diff ){
    
  } else if {
  return (a > b)

}
