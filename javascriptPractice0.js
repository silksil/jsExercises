// Given a string, create a function that returns the last character in that string.
// example:

function giveLastCharacter(string) {
	var character  = string[string.length -1]
	console.log(character)
}

giveLastCharacter("Sup sistah")


// Write a function that takes in one parameter "length" and prints out that many stars.
// example:
// 3 --> ***
// 5 --> *****

 function findStars(number) {
 	star = ""
	for (var i = 0 ; i < number; i++) {
		star += "*"
	}
	console.log(star)

}
findStars(4)

// Now, write a function that takes in one parameter "length" and prints out a square of stars.

function findStarsSquare(number) {
    starA = ""
    for (var i = 0; i < number; i++) {
        starA += "*"
    }
    starB = starA
    for (var i = 0; i < number; i++) {
        console.log(starB)
    }
}
findStarsSquare(8)

// Given an array of integers, write a function that finds the average and returns it.

function findAverage(grades) {
	var total = 0;
	for(var i = 0; i < grades.length; i++) {
    total += grades[i];
	}
	var avg = total / grades.length;
	console.log(avg)
}

findAverage([1, 3, 1, 5, 8])


// Write a function that takes in two arrays of integers and returns the largest common integer. 
// If there are no common integers, return 'undefined'.

var a = [-1, 9, 1, 1]
var b = [9, 7, 6, 8]

function highestIntegers(array1, array2) {
    var largest = Number.NEGATIVE_INFINITY
    for (var i = 0; i < array1.length; i++) {
        for (var j = 0; j < array2.length; j++) {
            if (array1[i] == array2[j]) {
                if (array1[i] > largest) {
                    largest = array1[i];
                }
            }
        }
    }
    if (largest == Number.NEGATIVE_INFINITY) {
        console.log(undefined)
    } else console.log(largest)
}

highestIntegers(a, b)

