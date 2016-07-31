//Bio info
 var bio = {
 	"name": "Matias Mancilla",
 	"role": "Web Developer",
 	"contacts": {
 		"mobile": "15-1546822",
 		"email": "matiassnm.1@gmail.com",
 		"github": "@Matienzo",
 		"twitter": "@udacity",
 		"location": "Ushuaia"
 	},
 	"welcomeMessage": "Welcome message.",
 	"skills": [
 		"HTML", "CSS", "Javascript", "PHP"
 	],
 	"bioPic": "images/fry.jpg",
 	display: function () {
 		var formattedName = HTMLheaderName.replace("%data%", bio.name);
 		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
 		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
 		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
 		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
 		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
 		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
 		var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
 		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

 		$("#header").prepend(formattedName + formattedRole);
 		$("#topContacts").append(formattedMobile + formattedEmail + formattedTwitter + formattedGithub + formattedLocation);
 		$("#footerContacts").append(formattedMobile + formattedEmail + formattedTwitter + formattedGithub + formattedLocation);
 		$("#header").append(formattedBioPic);
 		$("#header").append(formattedWelcomeMsg);
 		$("#header").append(HTMLskillsStart);
 		for (skill in bio.skills) {
 			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
 			$("#skills").append(formattedSkill);
 		}
 	}
 };
 //show bio
 bio.display();


//Education
var education = {
    //schools
    "schools": [
        {
            "name" : "Universidad Nacional de Tierra del Fuego",
            "location" : "Ushuaia, Tierra del Fuego",
            "degree" : "Licenciado en Sistemas",
            "majors" : ["Calidad de Software"],
            "dates" : "24-10-2014",
            "url" : "www.untdf.edu.ar"
        }
    ],
    //online courses
    "onlineCourses": [
        {
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": "Jul 2016",
			"url": "http://udacity.com/ud804"
        },
    ],
    display : function(){
        for (school in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
			formattedName = formattedName.replace("#", education.schools[school].url);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(formattedName + formattedDegree);
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedDates);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedLocation);
			var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			$(".education-entry:last").append(formattedMajors);
			$(".education-entry:last").append("<br><div><hr class='section-hr'></div>");
		};
        if (education.onlineCourses.length > 0 ) {
			$("#education").append(HTMLonlineClasses);
			for (course in education.onlineCourses) {
				$("#education").append(HTMLschoolStart);
				var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
				formattedTitle = formattedTitle.replace("#", education.onlineCourses[course].url);
				var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
				$(".education-entry:last").append(formattedTitle + formattedSchool);
				var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
				$(".education-entry:last").append(formattedDates);
				// var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
				// formattedURL = formattedURL.replace("#", education.onlineCourses[course].url);
				// $(".education-entry:last").append(formattedURL);
				$(".education-entry:last").append("<br><div><hr class='section-hr'></div>");
			}
		}

    }
};

education.display();
