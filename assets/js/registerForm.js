
window.addEventListener("load", init);

// AIzaSyAqIIDbnReNsYsJz9T63RnbJyYMJ8CFZPY

function codeLatLng(lat, lng) {

    var latlng = new google.maps.LatLng(lat, lng);
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'latLng': latlng }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            console.log(results);
            if (results[1]) {
                //formatted address
                // alert(results[0].formatted_address);
                //find country name
                for (var i = 0; i < results[0].address_components.length; i++) {
                    for (var b = 0; b < results[0].address_components[i].types.length; b++) {

                        //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
                        if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
                            //this is the object you are looking for
                            stateName = results[0].address_components[i];
                            break;
                        }

                    }
                }

                for (var i = 0; i < results[0].address_components.length; i++) {
                    for (var b = 0; b < results[0].address_components[i].types.length; b++) {

                        //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate

                        if (results[0].address_components[i].types[b] == "administrative_area_level_2") {
                            //this is the object you are looking for
                            cityName = results[0].address_components[i];
                            break;
                        }
                    }
                }

                for (var i = 0; i < results[0].address_components.length; i++) {
                    for (var b = 0; b < results[0].address_components[i].types.length; b++) {

                        //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
                        if (results[0].address_components[i].types[b] == "postal_code") {
                            zipcode = results[0].address_components[i];
                        }

                    }
                }
                //city data
                // alert(stateName.long_name);//+ " " + city.long_name)
                // alert(cityName.long_name);
                // alert(zipcode.long_name);

                var form = document.querySelector('#myForm');
                form.city.value = cityName.long_name;
                form.state.value = stateName.long_name;
                form.zip.value = zipcode.long_name;

            } else {
                alert("No results found");
            }
        } else {
            alert("Geocoder failed due to: " + status);
        }
    });
}



function userLocation() {

    function success(position) {

        var infopos = "Got position : <br>";
        infopos += "Latitude : " + position.coords.latitude + "<br>";
        infopos += "Longitude: " + position.coords.longitude + "<br>";
        infopos += "Altitude : " + position.coords.altitude + "<br>";
        console.log(infopos);
        codeLatLng(position.coords.latitude, position.coords.longitude);

    }

    // callback function, called by getCurrentPosition() in case of error
    function error(error) {
        var info = "Error during geolocation : ";
        switch (error.code) {
            case error.TIMEOUT:
                info += "Timeout !";
                break;
            case error.PERMISSION_DENIED:
                info += "You did not access to the geolocation API";
                break;
            case error.POSITION_UNAVAILABLE:
                info += "Position could not be determined";
                break;
            case error.UNKNOWN_ERROR:
                info += "Unknown error";
                break;
        }
        console.log(info);
    }
    // Ask browser for the current position
    // success and error are callbacks functions
    navigator.geolocation.getCurrentPosition(success, error);
}




function checkSigninState() {
    FB.getLoginStatus(function (response) {
        // DO SOMETHING statusChangeCallback(response);
        if (response.status === 'connected') {
            console.log(response.authResponse.accessToken);
            //access token:
            var accessToken = response.authResponse.accessToken;

            FB.api('/me', { fields: 'email,name' }, function (response) {
                console.log(response);

                var nameField = document.querySelector('#inputName');
                if (nameField) {
                    //fill signUP form
                    console.log('signUP using FB');
                    var form = document.querySelector('#myForm');
                    form.name.value = response.name;
                    form.email.value = response.email;
                    userLocation();
                }

            });


        }

    });
}

function checkLoginState() {
    FB.getLoginStatus(function (response) {
        // DO SOMETHING statusChangeCallback(response);
        if (response.status === 'connected') {
            console.log(response.authResponse.accessToken);
            //access token:
            var accessToken = response.authResponse.accessToken;

            FB.api('/me', { fields: 'email,name' }, function (response) {
                console.log(response);

                var nameField = document.querySelector('#inputName');
                if (!nameField && response.email) {
                  var flag=false;
                  var userEmailId =  response.email;
                  var userNamesList = localStorage.getItem('usernames');
                  var userNamesArray = JSON.parse(userNamesList);
                  for(var i=0;i<userNamesArray.length;i++){
                      if(userNamesArray[i].email===userEmailId){
                          flag=true;
                          break;
                      }
                  }
                  if(flag===false){
                      window.alert("you don't seem to be registered! Please sign in first");
                  }

                  else{
                    window.alert('user found!');
                    location.assign("index.html?name=" + userNamesArray[i].name + "&city=" + userNamesArray[i].city + "&state=" + userNamesArray[i].state + "&email=" + userNamesArray[i].email);
                    console.log("index.html?name=" + userNamesArray[i].name + "&city=" + userNamesArray[i].city);
                  }

                }
            });
        }
    });
}

function init() {
                    // userLocation();

                    /*FACEBOOK*/
                    //  document.querySelector('#fbLogin').addEventListener('click')

                    var submit = document.querySelector('#submit');
                    var myForm = document.querySelector('#myForm');
                    var userNameList = localStorage.getItem('usernames');
                    var number;
                    var userArray = [];
                    if (userNameList == undefined) {
                        number = 0;
                    }
                    else {
                        number = userNameList.length;
                        userArray = JSON.parse(userNameList);
                    }

                    $('#loginForm').submit(function () {
                        var loginForm = document.querySelector('#loginForm');
                        var loginemail = document.querySelector('#loginEmail');
                        var loginpassword = document.querySelector('#loginPassword');

                        if (loginForm.email.value == '' || loginForm.password.value == '') {

                            var divText = document.querySelector('#invalidLogin');
                            divText.classList.remove('invisible');
                        }

                        else if (loginForm.email.value !== '' && loginForm.password.value !== '' && userArray.length != 0) {
                            var flag = false;
                            for (var i = 0; i < userArray.length; i++) {

                                if (userArray[i].email == loginForm.email.value && userArray[i].password == loginForm.password.value) {
                                    window.alert('user found!');
                                    location.assign("index.html?name=" + userArray[i].name + "&city=" + userArray[i].city + "&state=" + userArray[i].state + "&email=" + userArray[i].email);
                                    console.log("index.html?name=" + userArray[i].name + "&city=" + userArray[i].city);
                                    flag = true;
                                    var divText = document.querySelector('#invalidLogin');
                                    divText.classList.add('invisible');
                                    break;
                                }
                            }
                            if (i == userArray.length) {
                                var divText = document.querySelector('#invalidLogin');
                                divText.classList.remove('invisible');
                            }
                        }
                    });

                    /* var invalidDivList = document.querySelectorAll('.invalidDivText');
                     invalidDivList.forEach(function(d){
                      d.classList.add('invisible');
                     })*/
                    // submit.addEventListener('mousedown',validateForm(event));
                    $('#myForm').submit(function () {

                        var myForm = document.querySelector('#myForm');
                        var name = document.querySelector('#inputName');
                        var email = document.querySelector('#inputEmail');
                        var zip = document.querySelector('#inputZip');
                        var password = document.querySelector('#inputPassword');
                        var confirmPassword = document.querySelector('#inputPasswordCon');
                        var city = document.querySelector('#city');
                        var state = document.querySelector('#inputState');

                        var ans = true;
                        // var ans=false;

                        if (myForm.name.value == '') {
                            console.log('cannot submit name');
                            name.classList.add('is-invalid');
                            var divText = document.querySelector('#invalidNameDiv');
                            divText.classList.remove('invisible');
                            ans = false;
                        }
                        else {
                            name.classList.remove('is-invalid');
                            var divText = document.querySelector('#invalidNameDiv');
                            divText.classList.add('invisible');

                        }
                        if (myForm.email.value == '') {
                            console.log('cannot submit email');
                            email.classList.add('is-invalid');
                            var divText = document.querySelector('#invalidEmailDiv');
                            divText.classList.remove('invisible');
                            ans = false;
                        }
                        else {
                            email.classList.remove('is-invalid');
                            var divText = document.querySelector('#invalidEmailDiv');
                            divText.classList.add('invisible');
                        }

                        if (myForm.zip == '' || myForm.zip.value.length != 6) {
                            console.log('cannot submit zip');
                            zip.classList.add('is-invalid');
                            var divText = document.querySelector('#invalidZipDiv');
                            divText.classList.remove('invisible');
                            ans = false;
                        }
                        else {
                            zip.classList.remove('is-invalid');
                            var divText = document.querySelector('#invalidZipDiv');
                            divText.classList.add('invisible');
                        }

                        if (myForm.password.value == '') {
                            console.log('cannot submit password');
                            password.classList.add('is-invalid');
                            var divText = document.querySelector('#invalidPasswordDiv');
                            divText.classList.remove('invisible');
                            ans = false;
                        }

                        else {
                            password.classList.remove('is-invalid');
                            var divText = document.querySelector('#invalidPasswordDiv');
                            divText.classList.add('invisible');

                        }

                        if (myForm.confirmPassword.value == '') {
                            console.log('Confirm New Password');
                            confirmPassword.classList.add('is-invalid');
                            var divText = document.querySelector('#invalidConfirmPassDiv');
                            divText.classList.remove('invisible');
                            ans = false;
                        }
                        else {
                            confirmPassword.classList.remove('is-invalid');
                            var divText = document.querySelector('#invalidConfirmPassDiv');
                            divText.classList.add('invisible');
                        }

                        if (myForm.city.value == '') {
                            city.classList.add('is-invalid');
                            var divText = document.querySelector('#invalidCityDiv');
                            divText.classList.remove('invisible');
                            ans = false;
                        }
                        else {
                            city.classList.remove('is-invalid');
                            var divText = document.querySelector('#invalidCityDiv');
                            divText.classList.add('invisible');
                        }

                        if (myForm.state.value == 'State') {
                            state.classList.add('is-invalid');
                            var divText = document.querySelector('#invalidStateDiv');
                            divText.classList.remove('invisible');
                            ans = false;
                        }
                        else {
                            state.classList.remove('is-invalid');
                            var divText = document.querySelector('#invalidStateDiv');
                            divText.classList.add('invisible');
                        }

                        if (myForm.confirmPassword.value !== '' && myForm.password.value !== '' && myForm.password.value !== myForm.confirmPassword.value) {
                            confirmPassword.classList.add('is-invalid');
                            var divText = document.querySelector('#invalidConfirmPassDiv');
                            divText.classList.remove('invisible');
                            ans = false;
                        }
                        else if (myForm.confirmPassword.value !== '' && myForm.password.value !== '' && myForm.password.valu === myForm.confirmPassword.value) {
                            confirmPassword.classList.remove('is-invalid');
                            var divText = document.querySelector('#invalidConfirmPassDiv');
                            divText.classList.add('invisible');
                            password.classList.remove('is-invalid');
                            var divText2 = document.querySelector('#invalidPasswordDiv');
                            divText2.classList.add('invisible');
                        }

                        //ans=true;

                        if (ans === false) {
                            submit.classList.add('is-invalid');
                        }

                        else {
                            submit.classList.remove('is-invalid');
                            var userObject = {
                                name: name.value,
                                email: email.value,
                                password: password.value,
                                zip: zip.value,
                                city: city.value,
                                state: state.value,
                            }
                            userArray.push(userObject);
                            localStorage.setItem('usernames', JSON.stringify(userArray));
                            window.alert(userArray.length);
                            //window.open("index.html", "_self");
                            myForm.name.value = '';
                            myForm.email.value = '';
                            myForm.password.value = '';
                            myForm.confirmPassword.value = '';
                            myForm.city.value = '';
                            myForm.state.value = 'State';
                            myForm.zip.value = '';
                            location.assign('login.html');
                        }


                    }
                    );
                }




/*
function validateForm(){

//var form = document.querySelector();
if(z.value!='' && z.value.length!=6){
    window.alert('awww!!');
}
if(z.value!='')
{window.alert(z.value);
}
var zip = document.querySelector("#inputZip");
if(zip.value.length!=6){
    window.alert('awww');
}
}

function validateCity(){
    var city =document.querySelector('#inputCity');
    var div=document.querySelector('.invalid-feedback');
    if(city.val==''){
        var div=document.querySelector('.invalid-feedback');
        div.innerHTML='sad';
    }
    else{
        div.classList.add('invalid-feedback');

    }

}
*/