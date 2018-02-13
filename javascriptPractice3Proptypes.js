// - Create a class(prototype) called PlaneInfo that will contain information about commercial aircraft.
// - The constructor function should take in three parameters: pilot, copilot, and fuelLevel, and add these three fields to an instance.
// - Add a function to PlaneInfo's prototype called "isReady". This function should check the following:
//    - Both pilot and copilot have a non-zero length Strings assigned.
//    - pilot and copilot are different Strings.
//    - fuelLevel is between 95 and 100.
// - If all these criteria are met, it should return true, otherwise it should return false.
// - Create three new PlaneInfos:
//    - One with pilot and copilot "Red Baron" and "Snoopy" and fuelLevel 97.
//    - One with both pilot and copilot "Alfred" and fuelLevel 98.
//    - One with pilot "A" and copilot "B" and fuelLevel 50.
// - Call isReady() on each of them and ensure that only the first two PlaneInfo returns true, and the last one return false.

function PlaneInfo(pilot, copilot, fuellevel) {
    this.pilot = pilot;
    this.copilot = copilot;
    this.fuellevel = fuellevel;
    this.isReady = function() {
        if (this.pilot.length > 0 && this.copilot.length > 0 && this.fuellevel >= 95 && this.fuellevel <= 100 && this.pilot !== this.copilot) {
            console.log(true)
        } else console.log(false)
    }
}

let PlaneInfo1 = new PlaneInfo("Red Baron", "Snoopy", 97)
let PlaneInfo2 = new PlaneInfo("Alfred", "Alfred", 98)
let PlaneInfo3 = new PlaneInfo("A", "B", 50)

PlaneInfo1.isReady()
PlaneInfo2.isReady()
PlaneInfo3.isReady()


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
