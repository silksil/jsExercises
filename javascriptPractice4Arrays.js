
//.given this array print out all names. The output should be:

var myPets = ['Mittens', 'Doge', 'Mickey', 'Chip', 'Dale']

function functie1 (valuepets){
	for (var i =0; i < valuepets.length; i++) {
		console.log (myPets[i])
	}
}

function1(myPets)


// print out only the even names. The output should be:

var myPets = ['Mittens', 'Doge', 'Mickey', 'Chip', 'Dale']

function functie2 (valuepets){
	for (var i =0; i < valuepets.length; i+= 2) {
		console.log (myPets[i])
	}
}

functie2(myPets)


// print out all the musical instruments of myCollections

var myPets = ['Mittens', 'Doge', 'Mickey', 'Chip', 'Dale']
var myCollections = [['ball', 'tennis racket', 'boxing glove'], ['pants', 't-shirt', 'shoes'], ['guitar', 'piano', 'mandolin']];

function functie3 (arrayCalled){
	console.log (arrayCalled)
}

functie3(myCollections[2])


// print out the following musical instruments one at a time. The output should be:
// guitar
// piano
// mandolin


var myCollections = [['ball', 'tennis racket', 'boxing glove'], ['pants', 't-shirt', 'shoes'], ['guitar', 'piano', 'mandolin']];

function functie4 (arrayCalled){
	for (var i =0; i < arrayCalled.length; i ++) {
		console.log (arrayCalled[i])
	}
}

functie4(myCollections[2])


// print out all the odd elements. The output should be:
/*
ball
boxing glove
pants
shoes
guitar
mandolin
*/

var myCollections = [['ball', 'tennis racket', 'boxing glove'], ['pants', 't-shirt', 'shoes'], ['guitar', 'piano', 'mandolin']];

function functie5 (arrayCalled){
	for (var i =0; i < arrayCalled.length; i+=2) {
		console.log (arrayCalled[i])
		}
}

function motherLoop (motherArray){
	for (var i =0; i < motherArray.length; i++) {
		functie5(motherArray[i])
	}
}

motherLoop(myCollections)
