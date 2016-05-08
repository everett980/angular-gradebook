/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

*/

// make students, then master assignments, then assignments, then classes, then courses, then teachers
var mongoose = require('mongoose');
var Promise = require('bluebird');
var chalk = require('chalk');
var connectToDb = require('./server/db');
var Student = mongoose.model('Student');

var wipeCollections = function () {
    var removeStudents = Student.remove({});
    return Promise.all([
        removeStudents
    ]);
};

var seedStudents = function () {
	
const students = [{
	  "name": "Gregory Roberts",
		    "phoneNumber": "63-(934)169-1493"
}, {
	  "name": "Anna Berry",
		    "phoneNumber": "352-(983)461-2615"
}, {
	  "name": "Debra Martin",
		    "phoneNumber": "48-(380)254-2058"
}, {
	  "name": "Barbara Williamson",
		    "phoneNumber": "7-(620)719-0792"
}, {
	  "name": "Ronald Coleman",
		    "phoneNumber": "86-(890)124-4153"
}, {
	  "name": "Roger Butler",
		    "phoneNumber": "383-(685)432-0897"
}, {
	  "name": "Sarah King",
	    "phoneNumber": "86-(783)449-3558"
}, {
	  "name": "Sarah Morales",
	    "phoneNumber": "86-(422)998-3389"
}, {
	  "name": "Frances Hill",
	    "phoneNumber": "7-(739)513-6304"
}, {
	  "name": "Sarah Jones",
	    "phoneNumber": "84-(436)694-5476"
}, {
	  "name": "Ruth Mason",
	    "phoneNumber": "52-(290)833-4232"
}, {
	  "name": "Katherine Patterson",
	    "phoneNumber": "60-(208)860-5907"
}, {
	  "name": "Henry Wallace",
	    "phoneNumber": "46-(949)760-8489"
}, {
	  "name": "Jennifer Foster",
	    "phoneNumber": "81-(295)563-4353"
}, {
	  "name": "Sarah Murphy",
	    "phoneNumber": "1-(398)233-6801"
}, {
	  "name": "Elizabeth Henderson",
	    "phoneNumber": "48-(883)779-8664"
}, {
	  "name": "Brandon Richardson",
	    "phoneNumber": "81-(107)420-0801"
}, {
	  "name": "Russell Hall",
	    "phoneNumber": "51-(111)209-3969"
}, {
	  "name": "Ann Collins",
	    "phoneNumber": "375-(455)298-2677"
}, {
	  "name": "Phyllis Hall",
	    "phoneNumber": "351-(171)153-1777"
}, {
	  "name": "Emily Gardner",
	    "phoneNumber": "86-(136)148-0648"
}, {
	  "name": "Peter Perkins",
	    "phoneNumber": "62-(656)180-0963"
}, {
	  "name": "Sharon Carter",
	    "phoneNumber": "62-(199)717-6501"
}, {
	  "name": "Carolyn Vasquez",
	    "phoneNumber": "86-(277)895-7286"
}, {
	  "name": "Terry Williamson",
	    "phoneNumber": "7-(526)294-2639"
}, {
	  "name": "James Murray",
	    "phoneNumber": "7-(357)973-7228"
}, {
	  "name": "Jean Garcia",
	    "phoneNumber": "34-(903)927-7577"
}, {
	  "name": "Paula Carroll",
	    "phoneNumber": "1-(886)438-2280"
}, {
	  "name": "Kevin Simpson",
	    "phoneNumber": "7-(583)636-8308"
}, {
	  "name": "Ronald Gray",
	    "phoneNumber": "380-(630)273-5815"
}, {
	  "name": "Ronald Hayes",
	    "phoneNumber": "1-(214)482-2333"
}, {
	  "name": "Marie Hawkins",
	    "phoneNumber": "383-(236)296-6220"
}, {
	  "name": "Wayne Harrison",
	    "phoneNumber": "1-(432)297-5745"
}, {
	  "name": "Billy Green",
	    "phoneNumber": "267-(131)594-5821"
}, {
	  "name": "Victor Ray",
	    "phoneNumber": "7-(482)546-0911"
}, {
	  "name": "Elizabeth Ramos",
	    "phoneNumber": "46-(542)218-0269"
}, {
	  "name": "Larry Anderson",
	    "phoneNumber": "86-(207)292-5823"
}, {
	  "name": "Jessica Cox",
	    "phoneNumber": "86-(376)602-0847"
}, {
	  "name": "Shawn Perkins",
	    "phoneNumber": "86-(456)153-0340"
}, {
	  "name": "David Young",
	    "phoneNumber": "255-(436)636-1825"
}, {
	  "name": "Antonio Johnston",
	    "phoneNumber": "63-(117)181-3510"
}, {
	  "name": "Michelle Garrett",
	    "phoneNumber": "62-(821)833-1202"
}, {
	  "name": "Judith Sanchez",
	    "phoneNumber": "27-(861)705-9539"
}, {
	  "name": "Bruce Ellis",
	    "phoneNumber": "7-(377)448-7075"
}, {
	  "name": "Cynthia Gonzalez",
	    "phoneNumber": "55-(708)127-9072"
}, {
	  "name": "Donna Morris",
	    "phoneNumber": "60-(814)653-2789"
}, {
	  "name": "Albert Medina",
	    "phoneNumber": "86-(430)236-9215"
}, {
	  "name": "Tina Edwards",
	    "phoneNumber": "370-(773)964-9492"
}, {
	  "name": "Carlos Thompson",
	    "phoneNumber": "55-(120)121-7351"
}, {
	  "name": "Martha Gardner",
	    "phoneNumber": "84-(981)434-5493"
}]; 
    return Student.create(students);

};

connectToDb
    .then(function () {
        return wipeCollections();
    })
    .then(function () {
        return seedStudents();
    })
    .then(function (studentSeedResult) {
		console.log(studentSeedResult);
        console.log(chalk.green('Seed successful!'));
        process.kill(0);
    })
    .catch(function (err) {
        console.error(err);
        process.kill(1);
    });
