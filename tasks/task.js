// let result = [6, 2, 4, 3, 7, 1]

// result.reverse();
// console.log(result)


// let sumEven = 5 + 5 + 5 + 5 + 5 + 5 + 5 + 5
// console.log(sumEven)
// let sumOdd = 3 + 3 + 3 + 3 + 3 + 3 + 3 + 3
// console.log(sumOdd)
// let sum = sumEven + sumOdd
// console.log(sum)

function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;
    
    if(myArray % 2 == 0){
        return 10;
    }

    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }
    return arr;
   

    
}


let myArray = [1, 2, 3, 4, 5];
console.log(reverseArray(myArray)); // Output: [5, 4, 3, 2, 1]
