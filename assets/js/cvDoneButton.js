window.addEventListener('load', init2);

function init2() {
    console.log('init2');
    var done = document.querySelectorAll('#done1');
    done.forEach(function(e){
        e.addEventListener('click', function () {
        $('#basicInfoForm').submit();
        $('#summaryForm').submit();
        $('#skillsForm').submit();
        experienceFormArray.forEach(function(e){
        $('#'+e).submit();    
        });
        certificatesFormArray.forEach(function(c){
        $('#'+c).submit();
        });

        educationFormArray.forEach(function(e){
            $('#'+e).submit();
        });
       publicationsFormArray.forEach(function(e){
            $('#'+e).submit();
        });

        projectsFormArray.forEach(function(e){
            $('#'+e).submit();
        });

        recommendationFormArray.forEach(function(e){
            $('#'+e).submit();
        });
        volunteeringFormArray.forEach(function(e){
            $('#'+e).submit();
        });
        langFormArray.forEach(function(e){
            $('#'+e).submit();
        });
    });
    });
}



function submitAllForms() {
    console.log(educationFormArray);

    event.preventDefault();
    console.log('basic form submit');
    var basicInfoform = document.querySelector('#basicInfoForm');
    var firstName = basicInfoform.firstName.value;
    var lastName = basicInfoform.lastName.value;
    var email = basicInfoform.email.value;
    var phone = basicInfoform.phoneNumber.value;
    var address = basicInfoform.address.value;

    var summaryForm = document.querySelector('#summaryForm');
    var summHeading = summaryForm.headline.value;
    var summary = summaryForm.professionalSummary.value;

    var skillForm = document.querySelector('#skillsForm');
    var skills = skillForm.skills.value;

    var expreienceArray=[];
    experienceFormArray.forEach(function(e){
    var tempExpForm = document.querySelector('#'+e);
    var company = tempExpForm.company.value;
    var designation = tempExpForm.designation.value;
    var date = tempExpForm.date.value;
    var details = tempExpForm.details.value;
    var expObject={
        'company':company,
        'designation':designation,
        'date':date,
        'details':details
    };
    expreienceArray.push(expObject);
    });

    var certificatesArray=[];
    certificatesFormArray.forEach(function(c){
     var tempExpForm = document.querySelector('#'+c);
     var nameOfCertificate = tempExpForm.nameOfCertificate.value;
     var certifyingAuthority= tempExpForm.certifyingAuthority.value;
     var dateOfCertification = tempExpForm.dateOfCertification.value;
     var certificateDetails = tempExpForm.certificateDetails.value;
      
     var certiObject = {
         'nameOfCertificate':nameOfCertificate,
         'certifyingAuthority':certifyingAuthority,
         'dateOfCertification':dateOfCertification,
         'certificateDetails':certificateDetails
     }
     certificatesArray.push(certiObject);
    });

    var publicationsArray=[];
    publicationsFormArray.forEach(function(p){
        var tempPubForm = document.querySelector('#'+p);
        var pubTitle = tempPubForm.publicationTitle.value;
        var publisher=tempPubForm.publisher.value;
        var pubDate = tempPubForm.publishDate.value;
        var publicationDetails=tempPubForm.publicationDetails.value;

        var pubObject = {
            'publicationTitle':pubTitle,
            'publisher':publisher,
            'publishDate':pubDate,
            'publicationDetails':publicationDetails
        };
        publicationsArray.push(pubObject);

    });
    var recommenationArray=[];
    recommendationFormArray.forEach(function(r){
        var tempRecForm= document.querySelector('#'+r);
        var recommenderName=tempRecForm.recommenderName.value;
        var recommenderDesignation=tempRecForm.recommenderDesignation.value;
        var recommendationDates=tempRecForm.recommendationDates.value;
        var recommendationDetails=tempRecForm.recommendationDetails.value;

        var recObject={
            'recommenderName':recommenderName,
            'recommenderDesignation':recommenderDesignation,
            'recommendationDates':recommendationDates,
            'recommendationDetails':recommendationDetails
        };
        recommenationArray.push(recObject);

    });
    var projectsArray=[];
    projectsFormArray.forEach(function(p){

        var tempProjectForm = document.querySelector('#'+p);
        var projectTitle=tempProjectForm.projectTitle.value;
        var projectURL=tempProjectForm.projectURL.value;
        var projectDate=tempProjectForm.projectDate.value;
        var projectDetails=tempProjectForm.projectDetails.value;
    
        var proObject={
            'projectTitle':projectTitle,
            'projectURL':projectURL,
            'projectDate':projectDate,
            'projectDetails':projectDetails
        }
        projectsArray.push(proObject);

    });

    var langArray=[];
    langFormArray.forEach(function(l){

        var tempLangForm= document.querySelector('#'+l);
        var lang=tempLangForm.lang.value;
        var langProficiency=tempLangForm.langProficiency.value;
        var langObject = {
            'lang':lang,
            'langProficiency':langProficiency
        }
        langArray.push(langObject);

    });

    var volunteeringArray=[];
    volunteeringFormArray.forEach(function(v){
        var tempVolForm=document.querySelector('#'+v);
        var volunteeringOrganization=tempVolForm.volunteeringOrganization.value;
        var volunteeringCause=tempVolForm.volunteeringCause.value;
        var volunteeringDates=tempVolForm.volunteeringDates.value;
        var volunteeringDetails=tempVolForm.volunteeringDetails.value;

        var volObject={
            'volunteeringOrganization':volunteeringOrganization,
            'volunteeringCause':volunteeringCause,
            'volunteeringDates':volunteeringDates,
            'volunteeringDetails':volunteeringDetails
        }

        volunteeringArray.push(volObject);
    });
    var educationArray=[];
    educationArray=fillEducationArray(educationArray);

    var object = {
        'basicInfo': {
            'firstName': firstName,
            'lastName': lastName,
            'email': email,
            'address': address,
            'phone': phone
        },

        'professionalSummary':{
            'headline':summHeading,
            'summary':summary
        },
        'skills':skills,
        'experiences':expreienceArray,
        'certificates':certificatesArray,
        'publications':publicationsArray,
        'recommendations':recommenationArray,
        'projects':projectsArray,
        'langs':langArray,
        'volunteering':volunteeringArray,
        'education':educationArray
    };

    console.log(object);
    localStorage.setItem('cvFormInfo', JSON.stringify(object));
    //location.assign('cv.html');
}

function fillEducationArray(educationArray){
    educationFormArray.forEach(function(e){

        var educationObject;
        if(document.querySelector('#'+e).querySelector('#school_collegeNav').querySelector('#college').querySelector('#collegeLink').classList.contains('active')){
            //collegeForm;
            
            var tempEducationForm = document.querySelector('#'+e).querySelector('#collegeForm');
            educationObject={
 
                'toggle':'college',
                'collegeName': tempEducationForm.collegeName.value,
                'university':tempEducationForm.university.value,
                'course':tempEducationForm.course.value,
                'specialization':tempEducationForm.specialization.value,
                'batchStart':tempEducationForm.batchStart.value,
                'batchEnd':tempEducationForm.batchEnd.value,
                'isCurrentEducation':tempEducationForm.isCurrentEducation.checked,
                'marksFormat':tempEducationForm.marksFormat.value,
                'marks':tempEducationForm.marks.value,
                'maxCGP':tempEducationForm.maxCGP.value,
                'achievements':tempEducationForm.achievements.value,
                'details':tempEducationForm.details.value
            }
        }
        else {
            var tempEducationForm = document.querySelector('#'+e).querySelector('#schoolForm');            

            educationObject={
                'toggle':'school',
                'schoolName':tempEducationForm.schoolName.value,
                'class':tempEducationForm.class.value,
                'stream':tempEducationForm.stream.value,
                'year':tempEducationForm.year.value,
                'endYear':tempEducationForm.endyear.value,
                'board':tempEducationForm.board.value,
                'marksFormat':tempEducationForm.marksFormat.value,
                'marks':tempEducationForm.marks.value,
                'maxCGP':tempEducationForm.maxCGP.value,
                'details':tempEducationForm.details.value
            }
        }
        educationArray.push(educationObject);
    });
    return educationArray;
}