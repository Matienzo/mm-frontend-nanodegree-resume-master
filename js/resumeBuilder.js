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
            "degree" : "Licenciatura en Sistemas",
            "majors" : ["Analista de sistemas"],
            "dates" : "01-03-2010",
            "url" : "http://www.untdf.edu.ar/"
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

//Work
var work = {
    "jobs" : [
        {
            "employer" : "Poder Judicial de Tierra del fuego",
            "url" : "http://www.justierradelfuego.gov.ar",
            "title" : "Web developer",
            "location" : "Ushuaia, Tierra del Fuego",
            "dates" : "september 2014 - current",
            "description" : "Web developer. Html, Laravel PHP, Javascript ",
        },
        {
            "employer" : "Newsan S.A.",
            "url" : "http://www.newsan.com.ar",
            "title" : "IT technician, Developer",
            "location" : "Ushuaia, Tierra del Fuego",
            "dates" : "april 2012 - august 2014",
            "description" : "IT support, C# developer. ",
        }
    ],
    display : function(){
        for (jobs in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobs].employer);
            formattedEmployer = formattedEmployer.replace("%url%", work.jobs[jobs].url);
            $(".work-entry:last").append(formattedEmployer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[jobs].title);
            $(".work-entry:last").append(formattedTitle);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[jobs].dates);
            $(".work-entry:last").append(formattedDates);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[jobs].location);
            $(".work-entry:last").append(formattedLocation);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[jobs].description);
            $(".work-entry:last").append(formattedDescription);
            $(".work-entry:last").append("<div><hr class='section-hr'></div>");
		};
    }
};
work.display();


//Projects
var projects = {
    projects : [
        {
            title : "Udacity Frontend Nanodegree",
            dates : "2016",
            description : "web page for the Udacity Frontend Nanodegree",
            images : [
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAjVBMVEXw208yMzDx3Vjw21Hw203w207x3FX34VD85lEmKC7KukmPhT/03lD541ArLS8wMTDjz00oKi6sn0Q6OjE/PzJTUDXZx0vSwUojJi2nmkNKSDQgIy1gXDehlULp1U66q0ZZVTZxazrFtUh4cTuAeDybj0FpYzlNSzRDQjNWUzY1NjC0pkXey0yLgT6GfT7pVaKmAAAB4ElEQVRIie2U25KiMBCGk2GzHaCTEDlFBlDR8cDovP/jbRrWmq3FUty7rbKLCxLy0enD3+ztaWM/nrWAPWvi5wt5IS/kP0GQTFwXoBTgA0S0ibdxMKBqo9UqShTcReRHn2VZRIegvVRca3PcntVd5OKMMYRAcXDacM6Nyzp1D4lDf8oj2J7oTRNlsxJnIGrpvANzOvWaa7tUMxDYW274AjGq3vMOZlwMg1xzW0sUsrsE98O/IswjOkekXI+VmXUxrr+YvFbyMSIbHz63eZNImIlgW1lKcni8FKOnhwhTXUoMN2EaszkZ86+qXId6gFydwCyEKbbM7eDJ1QHOQhhK9rk35Mk1ahYiqCbQrT1j1yhuIEPFvhExikvIttLcZAlOEFCrM1Lzh761qC1huWkHZ3Lruy0tJogqNuFWKiVrTd9BdLV1GyEBJHXbDS/QpKHRu6iMvTz0IYBz7yiCRVmuaoqlnsSi4ndqj+HhLlYMYuoXbfteU8bCxSRjKPZuqBqBVYJ+0OzcoOJRyhs/dP6OBduttdrLXrtDSfJAaLLQGtoJzY7dEjLCalOlabb+aAdB+SSfm/rod/JdNOR/WhehVFsUCX4LBCXQDpO//3Gr+n8OyvHUMDuvi3+aycGTxt5+AYaYJSKNzKyZAAAAAElFTkSuQmCC",
            ]
        }
    ],
    display : function(){
        for (project in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("%url%", projects.projects[project].url);
            $(".project-entry:last").append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formattedDates);

            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedDescription);

            if (projects.projects[project].images.length > 0) {
                for (image in projects.projects[project].images) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    }
};
projects.display();



$("#mapDiv").append(googleMap);
