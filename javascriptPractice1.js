// create a function that takes in two parameters: "word" and "character".
// The function should surround the word with the character, i.e.
//"apple", "*" ---> "*apple*"
//"beep", "_" ---> "_beep_"
//"basic", "Q" ---> "QbasicQ"

function addCharacter (word, character) {
	let added = ""
	added += character + word + character
	console.log(added)
}

addCharacter ("apple", "*")
addCharacter ("beep", "_")
addCharacter ("basic", "q")


// write a function that, given an array of both letters and numbers, returns a new array that contains only the letters from the first array.
var array1 = ['h', 'i', 9, 10, 's', 'd', 10]

function lettersOnly (array1) {
	let array2 = []
	for (var i = 0 ; i < array1.length; i++)
		if (array1[i] >= 'A' && array1[i] <= 'z') {
			array2.push (array1[i])
		}
	console.log(array2)
}

lettersOnly(array1)


// create a function that takes in two strings and prints out the first letter in each of them.
// examples:
// "happy", "face" ---> "hf"
// "abra", "cadabra" ---> "ac"

function firstLetter (string1, string2) {
	console.log(string1.charAt(0), string2.charAt(0))
}

firstLetter("hi there", "this is tasty")


