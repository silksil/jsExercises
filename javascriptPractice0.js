// Create a new class called EmailList. The constructor function should take in one parameter, "name", and return an instance which contains the following:
// name, the name of the email list
// list, an array of all the emails in that list. Note that initially, the array will be empty.
// Add a function to the EmailList's prototype. This function should be called "addEmail", and it should take one parameter, the email address, and add it to the "list" array of the instance.
// Add another function to the prototype, called "sendEmailToAll". 
// This function should take in one parameter: the text of the email, and then "send an email to each address".

function newEmailList (name) {
	this.name = name
	this.list = []
	this.addEmail = function (email){
		for (var i = 0; i < email.length; i++) 
		this.list.push(email[i])
	}
	this.sendEmailToAll = function(emailText) {
		console.log("Send an email to each address:" + this.list + "\nEmail content:", emailText)
		}	
}

var emailListRoomies = new newEmailList ('roomies')
emailListRoomies.addEmail(["silkreulen@gmail.com", "daveknipmeijer@gmail.com"])
emailListRoomies.sendEmailToAll("Hi Bruh. Hope you are good. Luv")


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

