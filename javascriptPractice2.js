
// * Implement an "equals with epsilon" function. The function should check if two numbers are
// * equal within a certain margin of error. The function should take in three parameters: the
// * two values to compare, and an "epsilon" value that determines the error margin. The function
// * should return true or false.
// * You are not allowed to use any "Math.*" functions.
// * examples:
// * 10, 11, epsilon 0.5 ---> false
// * 10, 10.2, epsilon 0.3 ---> true

var value1 = 10
var value2 = 10.5
var epsilon = 0.5

function marginError(value1, value2, epsilon) {
    var difference = value1 - value2
    if (difference < 0) {
        difference *= -1
    }
    if (difference > epsilon) {
        console.log(false)
    } else console.log(true)
}

marginError(value1, value2, epsilon)


// * Write a function that, given a string, return an object that contains each key as a letter
// * and the number of times it appears in the string as the value.
// * examples:
// * "start" --> { s: 1, t: 2, a: 1, r: 1 }
// * "fuzzlewuzzle" --> { f: 1, u: 2, z: 4, l: 2, e: 2, w: 1 }

var exampleString = "silkie";
var stringBase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '_'];
var countObject = {};

function characterCount(exampleString, currentChar) {
    var count = 0;
    for (var i = 0; i < exampleString.length; i++) {
        if (exampleString[i] === currentChar) {
            count++;
        }
    }
    return count
}

for (var i = 0; i < stringBase.length; i++) {
    var currentChar = stringBase[i];
    countObject[currentChar] = characterCount(exampleString, currentChar);
}
console.log(countObject) 


//  * Write a function that, given three numbers, determine return true if two of the numbers
//  * are “close” and one is “far”, otherwise return false.
//  * Numbers are "close" if they are within 0.1 of each other.
//  * examples:
//  * 1, 2, 3: false
//  * 1, 1.1, 3: true
//  * 1, 1.1, 1.2: false
//  * 9.5, 2, 9.6: true

var value1 = 10
var value2 = 10.1
var value3 = 10.8
var epsilon = 0.1

function marginError(value1, value2, value3, epsilon) {
    var total = 0
    var difference1 = Math.abs(value1 - value2) 
    var difference2 = Math.abs(value1 - value3)
    var difference3 = Math.abs(value2 - value3) 
    if (difference1 < epsilon) {
        total += 1
    }
    if (difference2 < epsilon) {
        total += 1
    }
    if (difference3 < epsilon) {
        total += 1
    }
    if (total === 1) {
        console.log(true)
    } else console.log(false)
}

marginError(value1, value2, value3, epsilon)


// given two arrays that contain integers with no duplicates, create a function that determines
// whether they contain the exact same elements.
// // examples:
// [1, 2, 3], [3, 2, 1] --> true
// [1, 2, 3], [2, 3, 4] --> false

var array1 = [1, 2, 4]
var array2 = [4, 2, 1]

function compareDuplicates(array1, array2) {
  if(array1.sort().join(',') === array2.sort().join(',')){
    console.log('same members');
}
  else console.log('not a match')

}

compareDuplicates(array1, array2)