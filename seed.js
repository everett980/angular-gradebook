const results = {};
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
/* const masterAssignments = [{
   "name": "GIS Technical Architect",
   "tags": [
   "Health Education",
   "MPBN",
   "HUMINT"
   ],
   "type": "Quechua"
   }, {
   "name": "Structural Engineer",
   "tags": [
   "Ownership",
   "WAN",
   "BWA"
   ],
   "type": "Armenian"
   }, {
   "name": "Librarian",
   "tags": [
   "EOB",
   "Radio Host"
   ],
   "type": "Bosnian"
   }, {
   "name": "GIS Technical Architect",
   "tags": [
   "Cyber-security",
   "Performance Tuning",
   "CSS Sprites"
   ],
   "type": "Dari"
   }, {
   "name": "VP Accounting",
   "tags": [
   "Ukulele"
   ],
   "type": "Guaraní"
   }, {
   "name": "VP Product Management",
   "tags": [
   "Dump Truck"
   ],
   "type": "Malay"
   }, {
   "name": "Sales Associate",
   "tags": [
   "HMI Programming"
   ],
   "type": "Portuguese"
   }, {
   "name": "Librarian",
   "tags": [
   "Joint Military Operations",
   "User Research",
   "NAS"
   ],
   "type": "Bulgarian"
   }, {
   "name": "Tax Accountant",
   "tags": [
   "HTML"
   ],
   "type": "Guaraní"
   }, {
   "name": "Registered Nurse",
   "tags": [
   "PDMLink",
   "OLAP Cube Studio",
   "Mplus"
   ],
   "type": "Nepali"
}]
*/
const masterAssignments = [{
	"name": "Structural Engineer",
		"tags": [
			"multiple choice",
			"visual",
			"source criticism"
	],
		"type": "homework"
}, {
	"name": "Research Nurse",
		"tags": [
			"visual",
			"free response",
			"source criticism"
	],
		"type": "test"
}, {
	"name": "VP Accounting",
	"tags": [
		"source criticism"
	],
		"type": "essay"
}, {
	"name": "Research Assistant IV",
	"tags": [
		"free response",
		"visual"
	],
		"type": "essay"
}, {
	"name": "Teacher",
	"tags": [
		"visual",
		"free response",
		"source criticism"
	],
		"type": "quiz"
}, {
	"name": "VP Accounting",
	"tags": [
		"visual",
		"source criticism",
		"visual"
	],
		"type": "test"
}, {
	"name": "Programmer Analyst IV",
	"tags": [
		"free response",
		"source criticism",
		"visual"
	],
		"type": "homework"
}, {
	"name": "VP Accounting",
	"tags": [
		"multiple choice",
		"visual",
		"free response"
	],
		"type": "test"
}, {
	"name": "Junior Executive",
	"tags": [
		"free response",
		"multiple choice"
	],
		"type": "essay"
}, {
	"name": "Assistant Professor",
	"tags": [
		"free response",
		"visual"
	],
		"type": "homework"
}, {
	"name": "Marketing Manager",
	"tags": [
		"free response",
		"source criticism",
		"multiple choice"
	],
		"type": "quiz"
}, {
	"name": "Systems Administrator I",
	"tags": [
		"free response",
		"visual"
	],
		"type": "test"
}, {
	"name": "Product Engineer",
	"tags": [
		"multiple choice",
		"visual",
		"source criticism",
		"free response"
	],
		"type": "essay"
}, {
	"name": "Technical Writer",
	"tags": [
		"source criticism",
		"free response"
	],
		"type": "homework"
}, {
	"name": "Electrical Engineer",
	"tags": [
		"free response",
		"source criticism"
	],
		"type": "test"
}, {
	"name": "Executive Secretary",
	"tags": [
		"source criticism"
	],
		"type": "homework"
}, {
	"name": "Programmer Analyst III",
	"tags": [
		"free response",
		"multiple choice",
		"source criticism"
	],
		"type": "essay"
}, {
	"name": "Senior Financial Analyst",
	"tags": [
		"multiple choice",
		"source criticism"
	],
		"type": "quiz"
}, {
	"name": "Nuclear Power Engineer",
	"tags": [
		"multiple choice",
		"free response",
		"source criticism"
	],
		"type": "test"
}, {
	"name": "Budget/Accounting Analyst III",
	"tags": [
		"visual",
		"source criticism",
		"multiple choice"
	],
		"type": "homework"
}, {
	"name": "GIS Technical Architect",
	"tags": [
		"free response",
		"multiple choice"
	],
		"type": "homework"
}, {
	"name": "Staff Accountant III",
	"tags": [
		"free response"
	],
		"type": "quiz"
}, {
	"name": "Software Test Engineer III",
	"tags": [
		"multiple choice"
	],
		"type": "test"
}, {
	"name": "Senior Cost Accountant",
	"tags": [
		"visual",
		"free response"
	],
		"type": "quiz"
}, {
	"name": "Programmer Analyst III",
	"tags": [
		"multiple choice"
	],
		"type": "test"
}, {
	"name": "Engineer I",
	"tags": [
		"free response",
		"multiple choice",
		"source criticism"
	],
		"type": "homework"
}, {
	"name": "Chief Design Engineer",
	"tags": [
		"multiple choice",
		"source criticism",
		"visual"
	],
		"type": "homework"
}, {
	"name": "Environmental Specialist",
	"tags": [
		"visual",
		"free response"
	],
		"type": "essay"
}, {
	"name": "Safety Technician I",
	"tags": [
		"free response",
		"multiple choice"
	],
		"type": "homework"
}, {
	"name": "Recruiting Manager",
	"tags": [
		"visual",
		"free response",
		"source criticism"
	],
		"type": "test"
}, {
	"name": "Assistant Professor",
	"tags": [
		"visual"
	],
		"type": "homework"
}, {
	"name": "Software Test Engineer IV",
	"tags": [
		"visual",
		"free response"
	],
		"type": "essay"
}, {
	"name": "Help Desk Technician",
	"tags": [
		"visual",
		"multiple choice"
	],
		"type": "quiz"
}, {
	"name": "Information Systems Manager",
	"tags": [
		"visual"
	],
		"type": "essay"
}, {
	"name": "Business Systems Development Analyst",
	"tags": [
		"multiple choice",
		"visual"
	],
		"type": "test"
}, {
	"name": "Account Executive",
	"tags": [
		"free response",
		"multiple choice"
	],
		"type": "quiz"
}, {
	"name": "Software Test Engineer III",
	"tags": [
		"visual"
	],
		"type": "test"
}, {
	"name": "Account Coordinator",
	"tags": [
		"visual",
		"source criticism"
	],
		"type": "homework"
}, {
	"name": "Help Desk Operator",
	"tags": [
		"multiple choice",
		"visual"
	],
		"type": "quiz"
}, {
	"name": "Registered Nurse",
	"tags": [
		"source criticism",
		"free response"
	],
		"type": "quiz"
}]
var assignments = [];

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

// make students, then master assignments, then assignments, then classes (groups), then courses, then teachers
var mongoose = require('mongoose');
var Promise = require('bluebird');
var chalk = require('chalk');
var stochasm = require('stochasm')
var connectToDb = require('./server/db');
var Student = mongoose.model('Student');
var MasterAssignment = mongoose.model('MasterAssignment');
var Assignment = mongoose.model('Assignment');
var Group = mongoose.model('Group');
var Course = mongoose.model('Course');
var Teacher = mongoose.model('Teacher');

var wipeCollections = function () {
	var removeStudents = Student.remove({});
	var removeMasters = MasterAssignment.remove({});
	var removeAssignments = Assignment.remove({});
	var removeGroups = Group.remove({});
	var removeCourses = Course.remove({});
	var removeTeachers = Teacher.remove({});
	return Promise.all([
			removeStudents,
			removeMasters,
			removeAssignments,
			removeGroups,
			removeCourses,
			removeTeachers
			]);
};

var seedStudents = function () {
	return Student.create(students);
};
var seedMasterAssignments = function() {
	return MasterAssignment.create(masterAssignments);
}
var seedAssignments = function() {
	var testScores = stochasm({mean: 85, stdev: 9, min: 70, max: 100})
		assignments = results["masters"].map(function(master) {
			return {
				masterAssignment: master._id,
					date: new Date(new Date().getTime() - Math.floor(Math.random() * 600000000)),
					studentScores: results["students"].map(function(student) {
						const returnMe = {
							studentRef: student._id,
					score: testScores.next()
						}
						if(master.tags.indexOf('spatial') > -1) {
							returnMe.score = returnMe.score + 10;
							if(returnMe.score > 100) returnMe.score = 100;
						}
						return returnMe;
					})
			}
		});
	console.log(assignments);
	return Assignment.create(assignments);
}
var seedGroups = function() {
	var group = {
		groupName: "9AM Class",
		students: results["students"].map(function(student) {
			return student._id;
		}), 
		assignments: results["assignments"]
	}
	return Group.create([group]);
}
var seedCourses = function() {
	var course = {
		name: "Intro to Web Development",
		groups: results["groups"],
		masterAssignments: results["masters"]
	}
	return Course.create([course]);
}
var seedTeachers = function() {
	var teacher = {
		name: "Joe Alves",
		email: "JoeAlves@gmail.com",
		uid: "da9b8166-a511-44cd-9864-285d4ccc569d",
		courses: results["courses"]
	}
	return Teacher.create([teacher]);
}



connectToDb
.then(function () {
	return wipeCollections();
})
.then(function () {
	return seedStudents();
})
.then(function (studentSeedResult) {
	results["students"] = studentSeedResult;
	return seedMasterAssignments();
})
.then(function (masterSeedResult) {
	results["masters"] = masterSeedResult;
	return seedAssignments();
})
.then(function (assignmentSeedResult) {
	results["assignments"] = assignmentSeedResult;
	return seedGroups();
})
.then(function (groupSeedResult) {
	results["groups"] = groupSeedResult;
	return seedCourses();
})
.then(function (courseSeedResult) {
	results["courses"] = courseSeedResult;
	return seedTeachers();
})
.then(function (teacherSeedResult) {
	results["teachers"] = teacherSeedResult;
	console.log(results);
	console.log(chalk.green('Seed successful!'));
	process.kill(0);
})
.catch(function (err) {
	console.error(err);
	process.kill(1);
});
