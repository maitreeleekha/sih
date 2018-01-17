window.addEventListener('load', init2);

function init2() {
    console.log('init2');
    var done = document.querySelector('#done1');
    done.addEventListener('click', function () {
        $('#basicInfoForm').submit();
        $('#summaryForm').submit();
        $('#skillsForm').submit();
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
        'skills':skills
    };

    console.log(object);
    localStorage.setItem('cvFormInfo', JSON.stringify(object));
    //location.assign('cv.html');
}