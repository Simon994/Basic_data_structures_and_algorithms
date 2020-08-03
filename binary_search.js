

//An iterative binary search solution. The function returns the index of the target value from a sorted list. 
//If the target value is not found, the function returns null.

function binarySearch(arr, target){
    left = 0;
    right = arr.length;
    
    while(right>left){
        
        middleIndexToCheck = Math.floor((right+left)/2);
        
        if(arr[middleIndexToCheck] === target){
            return middleIndexToCheck;
        } else if(arr[middleIndexToCheck]>target) {
           right = middleIndexToCheck;
        } else {
            left = middleIndexToCheck+1;
        }
    }
    return null;

}

const searchable = [1, 2, 7, 8, 22, 28, 41, 58, 67, 71, 94];
const target = 6;

const targetIndex = binarySearch(searchable, target);

console.log(`The target index is ${targetIndex}.`);