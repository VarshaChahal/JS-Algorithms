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

/* Turn off the k'th bit in a number
    n&(~(1<<(k-1)))
    ~(1<<(k-1)) expression will move bit in 1 bit representation to the k'th position. Then it is negated, making only the k'th bit 0.
    if you do & of this result with n, only the k'th bit will be turned off.
    Ex: turn off 3rd bit of 20
        20 => 00010100
        ~(1<<(3-1)) => ~(00000001<<2) => ~(00000100) => 11111011
        20 & ~(1<<(3-1)) => 00010100 & 11111011 => 00010000  
*/
/* Turn on the k'th bit in a number
    n | (1<<(k-1))
    Ex: turn on 4th bit of 20
        20 => 00010100
        1<<(3-1) => 00000001<<3 => 00001000
        20 |  1<<(3-1) => 00010100 | 00001000 => 00011100
*/

/* Check if the k'th bit for a number is set
    idea: get a binary transformation on 1 where only the k'th bit is set to 1. If we do & of this number with the given number,
    we get a non-zero result if the k'th bit is set.
    Ex: check if the 3rd bit of 20 is set.
        20=> 00010100
        getting binary representation of 1 where only k'th bit is set:
            1<<(k-1)=> 00000001 << 2 => 00000100
            20 & (1<<(3-1)) => 00010100 & 00000100 => 00000100
            since the result above is non zero, 20 has the 3rd bit set. 
*/

/* Toggle the k'th bit of a number
    idea: get the binary transformation on 1 where only k'th bit is set to 1. IF we do ^ of this with the given number,
    we get that k'th bit in the result is toggled as 
        0^1=>1
        1^1=>0
    Ex: toggle 3rd bit of 20.
        20=> 00010100
        getting binary representation of 1 where only k'th bit is set to 1:
            1<<(k-1)=> 00000001 << 2 => 00000100
            20 ^ (1<<(3-1)) => 00010100 ^ 00000100  ===>  00010100
                                                        ^ 00000100
                                                        =>00010000
*/