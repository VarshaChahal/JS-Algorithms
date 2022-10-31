/*Check if an integer is even or odd
 use n & 1 
 */

function oddOrEven(n){
    if((n&1) == 0) return "even";
    else return "odd";
}

console.log("check even of odd ",oddOrEven(10));

/* Detect if two integers have opposite signs or not
  The expression output x ^ y is negative if x and y have opposite signs.  
*/

function oppositeSigns(x,y){
    if((x^y) <0) return "opposite";
    else return "same";
}

console.log("checking the sign of two integers, ",oppositeSigns(5,10));

/* Add 1 to an integer
    The expression -~x will add 1 to an integer x.
    ~x, inverts the bits of an x
    ~x+1, gives negative of an x
    -x = ~x + 1;
    -~x = x + 1 
*/

function addOne(x){
    return (-~x);
}

console.log("adding one to the number bitwise, ",addOne(5));


/* Swap two numbers without using any third variable
    swapping two number without using a third variable(not bitwise)
    x=x+y;
    y=x-y;
    x=x-y;

    bitwise: 
    x=x^y;
    y=x^y;
    x=x^y;
*/
function swapNumbers(x,y){
    x = x^y;
    y = x^y;
    x = x^y;
    return [x,y];
}
console.log("swapping two numbers, bitwise, ",swapNumbers(5,11));

