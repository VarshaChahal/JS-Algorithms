/*
Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
The function should calculate the maximum sum of n consecutive elements in the array.
*/

function maxSubArraySum(arr,num){
    if(num>arr.length) return null;
    let maxSum = -Infinity;

    for(let i=0;i<arr.length-num+1;i++){
        let tempSum=0;
        for( let element of arr.slice(i,i+num)){
            tempSum+=element;
        }
        maxSum = Math.max(maxSum,tempSum);
    }
    return maxSum;
}

console.log(maxSubArraySum([1,2,5,2,8,1,5],4));

//Recursive method for maxSubArraySum
/*
function recMaxSubArraySum(arr,num){
    
}

function recHelper(arr,n){
    if(arr.length<n){
        return;
    }
    for(let i=0;i<arr.length;i++){
    }
}
*/