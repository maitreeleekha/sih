window.onload=init;
var propic;


class StorageObject{
    constructor(Id,profileSrc){
        this.Id=Id;
        this.profilePic = profileSrc;
    }

    set changeProfileSrc(propic){
        this.profilePic=propic;
    }
    
}



var profileDetailsList = localStorage.getItem('profileDetails');
var profileArray=[];
var number;
var profileSrc;
var storageObject;
var propic;
var emailId;

const newLocal = '#nameHeading';

function init(){

    fillUserDetails();
    fillForm();
    $("#profileHeaderForm").submit(function(e){
        e.preventDefault();
        window.alert('save changes?');
        saveProfileChanges();
    });
if(profileDetailsList==undefined){
number=0;
}

else{
    number = profileDetailsList.length;
    profileArray = JSON.parse(profileDetailsList);
}
var flag=false;
profileArray.forEach(function(i){
    if(i.Id===emailId){
        //window.alert('user already in list');
        storageObject=i;
        flag=true;
       // $('#imageProfile').attr('src',i.profilePic);
    }
}
);

if(!flag){
   //window.alert('new user!');
   storageObject = new StorageObject(emailId , "images/default_user.png");
   profileArray.push(storageObject);
   localStorage.setItem('profileDetails',JSON.stringify(profileArray));
}


$("#imageProfile").click(function(e) {
    $("#imageUpload").click();

    $("#imageUpload").change(function(){
        fasterPreview(this);
    });

});


var editProfile = document.querySelector('#editProfile');
editProfile.addEventListener('click',editProfilefunc);

var editProfileHeader = document.querySelector('#editProfileHeader');
editProfileHeader.addEventListener('click',displayHeaderForm);

document.querySelector('#addEducation').addEventListener('click',addEducation);

$('#cancel').click(cancelProfileChanges);
$('#done').click(doneChanges);
$('#cancelEducation').click(cancelAddEducation);
$('#saveEducation').click(saveEducation);
document.querySelector('#marksFormat').addEventListener('change',setMarksFormat);
}

function saveEducation(){
    
    var school_college;
    if(document.querySelector('#schoolLink').classList.contains('active')) {
        school_college='school';
    }
    else{
        school_college='college';
    }
    var ans=true;
    var form;
    if(school_college==='school'){
     form =document.querySelector('#schoolForm');
     ans=validateSchoolForm(form);



    }
    else{
        form=document.querySelector('#collegeForm');
        ans=validateCollegeForm(form);
        if(ans==true){
            var newDiv = document.createElement('div');
            var text='<b>'+form.course.value+',';
            if(form.specialization.value){
                text+=form.specialization.value;
            }
            text+='</b>';
            text+='<br>';
            text+=form.collegeName.value +','+form.university.value+'<br>';
            text+=(form.batchStart.value+'-'+form.batchEnd.value +' | '+ + form.marks.value);
            newDiv.innerHTML=text;

            document.querySelector('#school_collegeNav').style.display='none';
            document.querySelector('.buttonGroup').style.display='none';
            document.querySelector('#collegeForm').style.display='none';
            document.querySelector('#edu').appendChild(newDiv,)
        }

    }
    
    
}

function validateCollegeForm(form){

    var ans=true;
console.log('validating');
if(!form.collegeName.value)
{
    document.querySelector('#collegeName').classList.add('is-invalid');
    ans=false;
    console.log('0');
}

else{
    document.querySelector('#collegeName').classList.remove('is-invalid');

}

if(!form.university.value)
{
    document.querySelector('#university').classList.add('is-invalid');
    ans=false;
    console.log('1');
}
else{
    document.querySelector('#university').classList.remove('is-invalid');

}

if(!form.course.value)
{
    document.querySelector('#course').classList.add('is-invalid');
    ans=false;
    console.log('2');
}
else{
    document.querySelector('#course').classList.remove('is-invalid');

}

if(form.batchStart.value==='year')
{
    document.querySelector('#batchStart').classList.add('is-invalid');
    ans=false;
    console.log('3');
}
else{
    document.querySelector('#batchStart').classList.remove('is-invalid');

}

if(form.batchEnd.value==='year')
{
    document.querySelector('#batchEnd').classList.add('is-invalid');
    ans=false;
    console.log('4');
}
else{
    document.querySelector('#batchEnd').classList.remove('is-invalid');
}

if(form.marksFormat.value==='Select Format')
{
    document.querySelector('#marksFormat').classList.add('is-invalid');
    ans=false;console.log('5');

}
else{
    document.querySelector('#marksFormat').classList.remove('is-invalid');
}

if(!form.marks.value)
{
    document.querySelector('#marks').classList.add('is-invalid');
    ans=false;
    console.log('6');
}
else{
    document.querySelector('#marks').classList.remove('is-invalid');
}

return ans;
}

















function setMarksFormat(){
var form=document.querySelector('#collegeForm');
if(form.marksFormat.value==='Percent')
{
    window.alert('% selected');
    form.marks.value='';
    document.querySelector('#maxCGP').style.display='none';
    
}

else if(form.marksFormat.value==='CGP')
    {window.alert('cgpa selected');
    form.marks.value='';
    document.querySelector('#maxCGP').style.display='block';
}
}













function doneChanges(){

    var editButtons = document.querySelectorAll('.fa-pencil-square-o');
    var addButtons = document.querySelectorAll('.fa-plus-square-o');
    console.log('clickkkk');
    editButtons.forEach(function(i){
        i.style.display="none";
    });

    addButtons.forEach(function(i){
        i.style.display="none";
    });

    document.querySelector('#editProfile').style.display='block';
    document.querySelector('#done').style.display='none';

}

function cancelAddEducation(){

    document.querySelector('#school_collegeNav').style.display='none';
    document.querySelector('.buttonGroup').style.display='none';
    document.querySelector('#collegeForm').style.display='none';

}


function cancelProfileChanges(){
    window.alert('cancel?');
    
    var nameHeader = document.querySelector('#nameHeader');
    var picture = document.querySelector('#picture');
    var profileBlog = document.querySelector('#profile_blog');
    var form=  document.querySelector('#profileHeaderForm');
    nameHeader.style.display="block";
    picture.style.display="block";
    profileBlog.style.display="flex";
    form.style.display='none';
    
    var editButton = document.querySelectorAll('#editProfileHeader');
    console.log('clickkkk');
    editButtons.style.display="none";
    
}

function addEducation(){
    document.querySelector('#school_collegeNav').style.display='flex';
    document.querySelector('.buttonGroup').style.display='flex';
    document.querySelector('#collegeForm').style.display='block';
    var form=document.querySelector('#collegeForm');
    form.collegeName.value='';
    form.university.value='';
    form.course.value='';
    form.specialization.value='';
    form.batchStart.value='year';
    form.batchEnd.value='year';
    form.marksFormat.value='Select Format';
    form.marks.value='';
    form.achievements.value='';
}

function saveProfileChanges(){
    
    var form=  document.querySelector('#profileHeaderForm');
    document.querySelector('#nameHeading').innerHTML=form.name.value;
    document.querySelector('#cityContent').innerHTML=form.currentLocation.value;
    document.querySelector('#proffHeading').innerHTML=form.professionalHeadline.value;
    var cityName = form.currentLocation.value.split(',');
    var stateName = cityName[1];
    cityName=cityName[0];


    var userNameList = localStorage.getItem('usernames');
    var userEmailId= getEmailId();
    var userArray = JSON.parse(userNameList);
    userArray.forEach(function(u){

    if(u.email===userEmailId){
        u.name=form.name.value;
        u.city=cityName;
        u.state=stateName;
    }
    });
    localStorage.setItem('usernames',JSON.stringify(userArray));

    form.style.display="none";
    var nameHeader = document.querySelector('#nameHeader');
    var picture = document.querySelector('#picture');
    var profileBlog = document.querySelector('#profile_blog');
   nameHeader.style.display="block";
   picture.style.display="block";
   profileBlog.style.display="flex";
   var editButton = document.querySelectorAll('#editProfileHeader');
   console.log('clickkkk');
   editButtons.style.display="none";
}

function displayHeaderForm(){

    var form = document.querySelector('#profileHeaderForm');
    form.style.display="block";
    var nameHeader = document.querySelector('#nameHeader');
    var picture = document.querySelector('#picture');
    var profileBlog = document.querySelector('#profile_blog');
   nameHeader.style.display="none";
   picture.style.display="none";
   profileBlog.style.display="none";

}

function fillForm(){
    console.log('inside func');
    var form=  document.querySelector('#profileHeaderForm');
    form.name.value = document.querySelector('#nameHeading').innerHTML;
    form.currentLocation.value= document.querySelector('#cityContent').innerHTML;

}

function editProfilefunc(){

    var editButtons = document.querySelectorAll('.fa-pencil-square-o');
    var addButtons = document.querySelectorAll('.fa-plus-square-o');
    console.log('clickkkk');
    editButtons.forEach(function(i){
        i.style.display="block";
    });

    addButtons.forEach(function(i){
        i.style.display="block";
    });

    document.querySelector('#editProfile').style.display='none';
    document.querySelector('#done').style.display='block';
}

function fasterPreview( uploader ) {
    if ( uploader.files && uploader.files[0] ){
          $('#imageProfile').attr('src', 
             window.URL.createObjectURL(uploader.files[0]) );
    }

    propic= $('#imageProfile').attr('src');
    //changeProfilePicSrc();
    console.log(storageObject.profileSrc);
}

/*function changeProfilePicSrc(){

    profileArray.forEach(function(i){
        if(i.Id===emailId){
           i.profilePic=propic;
           console.log('changed '+i.profilePic);
        }
    }
    );

    localStorage.setItem('profileDetails',JSON.stringify(profileArray));
}
*/
function getEmailId(){
    var userDetails = location.search;
    var userEmail = (/^UserEmail=/);
    var Email =userDetails.split('&').filter(function(item){
        return userEmail.test(item);
    });
    Email = Email[0].replace("UserEmail=", "");
    return Email;

}

function fillUserDetails(){

    var userDetails = location.search;
    
    console.log(userDetails.substr(1));

    userDetails = userDetails.substr(1);
    var userName = (/^UserName=/);
    var Name =userDetails.split('&').filter(function(item){
        return userName.test(item);
    });

    Name = Name[0].replace("UserName=", "");

    var nameTemp=Name.split("%20");
    var uname=nameTemp[0]+' ';
    for(var i=1;i<nameTemp.length;i++){
    uname+=(nameTemp[i]+' ');
    }

    var n=document.querySelector('#nameHeading');
    n.innerHTML = uname;

    var userCity = (/^UserCity=/);
    var City = userDetails.split('&').filter(function(item){
        return userCity.test(item);
    });
    
    City = City[0].replace("UserCity=", "");


    var userState = (/^UserState=/);
    var State = userDetails.split('&').filter(function(item){
        return userState.test(item);
    });
    
    State = State[0].replace("UserState=", "");

    var state=State.split("%20");
    var ustate=state[0]+' ';
    for(var i=1;i<state.length;i++){
    ustate+=(state[i]+' ');
    }

    //userName=userName.substr(10);
    
    var city=City.split("%20");
    var ucity=city[0]+' ';
    for(var i=1;i<city.length;i++){
    ucity+=(city[i]+' ');
    }

    var cityState = document.querySelector('#cityContent');
    cityState.innerHTML+= ' '+ucity+', '+ustate;

}


function makeActive(ele){
var id= ele.id;
var sLink = document.getElementById('schoolLink');
var cLink = document.getElementById('collegeLink');
sLink.classList.remove('active');
cLink.classList.remove('active');
var link = document.getElementById(id);
link.classList.add('active');

if(sLink.classList.contains('active')){
    document.querySelector('#schoolForm').style.display='block';
    document.querySelector('#collegeForm').style.display='none';
    

}
else{
   
   document.querySelector('#schoolForm').style.display='none';
   document.querySelector('#collegeForm').style.display='block';
}



}