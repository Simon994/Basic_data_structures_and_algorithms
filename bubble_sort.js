
// a bubble sort algorithm, which takes an array of elements and reorders the elements of the input from smallest to largest.

function bubbleSort(array){
    let sorted = false;
    while(!sorted){
        sorted = true;
        for(let i=0; i<array.length-1; i++){
            if(array[i]>array[i+1]){
                swap(array,i,i+1);
                sorted = false;
            }
        }
    }
    return array;
}

function swap(arr, a, b){
    [arr[a], arr[b]] = [arr[b], arr[a]];
}


