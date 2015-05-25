var bio = {
    'name': 'Matt Richards',
    'role': 'Software Manager',
    'contacts': {
        'mobile': '719-555-1212',
        'email': 'yo -at- this domain',
        'github': 'mattrichards777',
        'twitter': '/dev/null',
        'location': 'Colorado Springs'
    },
    'welcomeMessage': 'Ultimate customer value is created at the point-of-sale, not the point-of-plan. --Jim Highsmith',
    'skills': [
        'Certified ScrumMaster',
        'Software Engineer',
        'Entrepreneur',
        'Manager'
    ],
    'biopic': 'images/pagosa.jpg',
    display: function () {
        var formattedName = HTMLheaderName.replace('%data%', inName());
        var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
        $('#header').prepend(formattedRole).prepend(formattedName);

        $('#topContacts').append(HTMLmobile.replace('%data%', bio.contacts['mobile']));
        $('#topContacts').append(HTMLemail.replace('%data%', bio.contacts['email']));
        $('#topContacts').append(HTMLgithub.replace('%data%', bio.contacts['github']));
        $('#topContacts').append(HTMLtwitter.replace('%data%', bio.contacts['twitter']));
        $('#topContacts').append(HTMLlocation.replace('%data%', bio.contacts['location']));

        $('#footerContacts').append(HTMLmobile.replace('%data%', bio.contacts['mobile']));
        $('#footerContacts').append(HTMLemail.replace('%data%', bio.contacts['email']));
        $('#footerContacts').append(HTMLgithub.replace('%data%', bio.contacts['github']));
        $('#footerContacts').append(HTMLtwitter.replace('%data%', bio.contacts['twitter']));
        $('#footerContacts').append(HTMLlocation.replace('%data%', bio.contacts['location']));

        $('#header').append(HTMLbioPic.replace('%data%', bio.biopic));
        $('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));

        if (bio.skills.length > 0) {
            $('#header').append(HTMLskillsStart);
            for (skill in bio.skills) {
                $('#header').append(HTMLskills.replace('%data%', bio.skills[skill]));
            }
        }
    }
};


var education = {
    'schools': [
        {
            'name': 'University of Colorado at Colorado Springs',
            'location': 'Colorado Springs',
            'degree': 'MBA',
            'majors': [
                'Organization Management'
            ],
            'dates': 1994,
            'url': 'http://www.uccs.edu/'
        },
        {
            'name': 'University of Illinois at Urbana-Champaign',
            'location': 'Urbana, IL',
            'degree': 'Bachelor of Science',
            'majors': [
                'Chemical Engineering'
            ],
            'dates': 1986,
            'url': 'http://illinois.edu/'
        }
    ],
    'onlineCourses': [
        {
            'title': 'Computer Networking',
            'school': 'Udacity',
            'date': 2015,
            'url': 'https://www.udacity.com/course/computer-networking--ud436'
        },
        {
            'title': 'Front-End Web Developer Nanodegree',
            'school': 'Udacity',
            'date': 2015,
            'url': 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
        }
    ],
    display: function(){
        if (education.schools.length > 0) {
            for (var school in education.schools) {
                $('#education').append(HTMLschoolStart);
                var schoolEntry = HTMLschoolName.replace('%data%', education.schools[school].name);
                schoolEntry += HTMLschoolDegree.replace('%data%', education.schools[school].degree);
                schoolEntry += HTMLschoolDates.replace('%data%', education.schools[school].dates);
                schoolEntry += HTMLschoolLocation.replace('%data%', education.schools[school].location);
                schoolEntry += HTMLschoolMajor.replace('%data%', education.schools[school].majors);
                $('.education-entry:last').append(schoolEntry);
            }
        }
        if (education.onlineCourses.length > 0) {
            $('#education').append(HTMLonlineClasses);
            for (var course in education.onlineCourses) {
                $('#education').append(HTMLschoolStart);
                var courseEntry = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title);
                courseEntry += HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
                courseEntry += HTMLonlineDates.replace('%data%', education.onlineCourses[course].date);
                courseEntry += HTMLonlineURL.replace('%data%', education.onlineCourses[course].url);
                $('.education-entry:last').append(courseEntry);
            }
        }
    }
};

var work = {
    'jobs': [
        {
            'employer': 'Fluke Networks',
            'title': 'Senior Software Engineer',
            'location': 'Colorado Springs',
            'dates': '2015 - Present',
            'description': 'Developing software for for monitoring, diagnostics, analysis, reporting, & application performance management across LANs, WANs, & wireless networks'
        },
        {
            'employer': 'RT Logic',
            'title': 'Software Engineer',
            'location': 'Colorado Springs',
            'dates': '2011 - 2015',
            'description': 'Developing software for the satellite communications industry (modems, front-end processors, geolocation of satellite interference, web-based situational awareness displays)'
        },
        {
            'employer': 'Constant Wave',
            'title': 'Co-Founder',
            'location': 'Colorado Springs',
            'dates': '2008 - 2013',
            'description': 'RF signal analysis software'
        },
        {
            'employer': 'LTX-Credence',
            'title': 'RF Software Development Manager',
            'location': 'Colorado Springs',
            'dates': '2000 - 2009',
            'description': "Responsible for all aspects of software development for Credence's RF test solution"
        },
        {
            'employer': 'World2One',
            'title': 'Software Engineer',
            'location': 'Norcross, GA',
            'dates': '2000 - 2000',
            'description': 'Developed contact synchronization software using C++ on Windows'
        },
        {
            'employer': 'BCSi',
            'title': 'Software Engineer',
            'location': 'Colorado Springs',
            'dates': '1996 - 2000',
            'description': 'Developed high fidelity multi-threaded, multiprocessor simulation of the Iridium satellite network'
        },
        {
            'employer': 'SAIC',
            'title': 'Functional Analyst',
            'location': 'Colorado Springs',
            'dates': '1995 - 1996',
            'description': 'Developed and documented requirements for the Missouri Office of the Secretary of State'
        },
        {
            'employer': 'United States Air Force',
            'title': 'Space Operations Officer',
            'location': 'Colorado Springs',
            'dates': '1990 - 1995',
            'description': 'Performed various roles in satellite operations including Executive Officer, Crew Commander, Planning and Analysis Officer, Engineer, Launch Readiness Officer, and Quality Air Force Instructor'
        },
        {
            'employer': 'University of Illinois at Urbana-Champaign',
            'title': 'Space Operations Officer',
            'location': 'Urbana, IL',
            'dates': '1987 - 1990',
            'description': 'Responsible for all aspects of personal computer and mini-computer acquisition and maintenance for the College of Communications'
        },
        {
            'employer': 'United States Army Corps of Engineers',
            'title': 'Space Operations Officer',
            'location': 'Colorado Springs',
            'dates': '1985 - 1987',
            'description': 'Developed simulations of combat engineering operations using FORTRAN on a Vax 11/780 running VMS'
        }
    ],
    display: function(){
        if (work.jobs.length > 0) {
            for (var job in work.jobs) {
                $('#workExperience').append(HTMLworkStart);
                var workEntry = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
                workEntry += HTMLworkTitle.replace('%data%', work.jobs[job].title);
                workEntry += HTMLworkLocation.replace('%data%', work.jobs[job].location);
                workEntry += HTMLworkDates.replace('%data%', work.jobs[job].dates);
                workEntry += HTMLworkDescription.replace('%data%', work.jobs[job].description);
                $('.work-entry:last').append(workEntry);
            }
        }
    }
};

var projects = {
    'projects': [
        {
            'title': 'Constant Wave',
            'dates': '2008 - 2013',
            'description': 'Co-founded RF Signal Analysis Startup',
            'images': [
                'images/constantwave.jpg',
                'images/scope_screen_capture_small.jpg',
                'images/constantwave2.jpg'
            ]
        },
        {
            'title': 'Kids',
            'dates': '1990 - Present',
            'description': 'Three Great Kids',
            'images': [
                'images/andrew.jpg',
                'images/hoofbeats.jpg',
                'images/david.jpg'
            ]
        }
    ],
    display: function(){
        if (projects.projects.length > 0) {
            for (var proj in projects.projects) {
                $('#projects').append(HTMLprojectStart);
                var projectEntry = HTMLprojectTitle.replace('%data%', projects.projects[proj].title);
                projectEntry += HTMLprojectDates.replace('%data%', projects.projects[proj].dates);
                projectEntry += HTMLprojectDescription.replace('%data%', projects.projects[proj].description);
                if (projects.projects[proj].images.length > 0) {
                    for (var image in projects.projects[proj].images) {
                        projectEntry += HTMLprojectImage.replace('%data%', projects.projects[proj].images[image]);
                    }
                }
                $('.project-entry:last').append(projectEntry);
            }
        }
    }
};

bio.display();
education.display();
work.display();
projects.display();

// log the x and y coordinates of any clicks
$(document).click(function(loc){
    logClicks(loc.pageX,loc.pageY);
});

$('#mapDiv').append(googleMap);

function inName() {
    var name = bio.name.split(' ');
    return name[0]+' '+name[1].toUpperCase();
}

