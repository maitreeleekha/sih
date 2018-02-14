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


function removeIfEmpty(){
    console.log(document.querySelector('#pinfo').innerHTML);
    if(document.querySelector('#pinfo').innerHTML==""){
        document.getElementById('personalInfo').style.display='none';
    }
    if($('#aboutMe div').length==0){
        document.getElementById('aboutMain').style.display='none';
    }
    if($('#edu div').length==0){
        document.getElementById('education').style.display='none';
    }
    if($('#exp div').length==0){
        document.getElementById('experience').style.display='none';
    }
    if($('#pro div').length==0){
        document.getElementById('projects').style.display='none';
    }
    
    if($('#skills div').length==0){
        document.getElementById('skillsMain').style.display='none';
    }
    if($('#activities div').length==0){
        document.getElementById('extraCurr').style.display='none';
    }
}
function init(){

document.querySelector('#profile');

removeIfEmpty();
    
console.log(document.querySelector('#aboutMe').childNodes['0'].childNodes.length);
    
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
document.querySelector('#addExperience').addEventListener('click',addExperience);
document.querySelector('#addProject').addEventListener('click',addProject);
document.querySelector('#addSkills').addEventListener('click',addSkills);
document.querySelector('#addActs').addEventListener('click',addActs);
document.querySelector('#addAbout').addEventListener('click',addAbout);
document.querySelector('#addInfo').addEventListener('click',addInfo);
$('#cancel').click(cancelProfileChanges);
$('#done').click(doneChanges);


$('#saveAbout').click(saveAbout);
$('#cancelAbout').click(cancelAbout);
$('#cancelEducation').click(cancelAddEducation);
$('#saveEducation').click(saveEducation);
$('#saveExperience').click(saveExperience);
$('#cancelExperience').click(cancelAddExperience);
$('#saveProject').click(saveProject);
$('#cancelProject').click(cancelAddProject);
$('#saveSkills').click(saveSkills);
$('#cancelSkills').click(cancelAddSkills);
$('#saveActs').click(saveActs);
$('#cancelActs').click(cancelAddActs);
$('#saveInfo').click(saveInfo);
$('#cancelInfo').click(cancelInfo);
//document.getElementById('#educationForm').querySelector('#marksFormat').addEventListener('change',setMarksFormat);
}

function cancelInfo(){
    document.querySelector('#personalInfoForm').style.display='none';
    document.querySelector('#personalInfo').querySelector('.buttonGroup').style.display='none';
}
function saveInfo(){
    var form=document.querySelector('#personalInfoForm');
    var sec=document.querySelector('#pinfo');
    sec.innerHTML="";
    if(form.email.value!=""){
        sec.innerHTML+='Email:     '+form.email.value;
    }
    else{
        sec.innerHTML+='Email:     '+'---';
    }
    sec.innerHTML+='<br>';

    if(form.emailAlt.value!=""){
        sec.innerHTML+='Alternate Email:     '+form.emailAlt.value;
    }
    else{
        sec.innerHTML+='Alternate Email:     '+'---';
    }
    sec.innerHTML+='<br>';

    if(form.contact.value!=""){
        sec.innerHTML+='Contact:     '+form.contact.value;
    }
    else{
        sec.innerHTML+='Contact:     '+'---';
    }
    sec.innerHTML+='<br>';

    if(form.contactAlt.value!=""){
        sec.innerHTML+='Alternate Contact:     '+form.contactAlt.value;
    }
    else{
        sec.innerHTML+='Alternate Contact:     '+'---';
    }
    sec.innerHTML+='<br>';

    if(form.dob.value!=""){
        sec.innerHTML+='Birth Day:     '+form.dob.value;
    }
    else{
        sec.innerHTML+='Birth Day:     '+'---';
    }
    sec.innerHTML+='<br>';

    if(form.gender.value!=""){
        sec.innerHTML+='Gender:     '+form.gender.value;
    }
    else{
        sec.innerHTML+='Gender:     '+'---';
    }
    sec.innerHTML+='<br>';

    if(form.address.value!=""){
        sec.innerHTML+='Address:     '+form.address.value;
    }
    else{
        sec.innerHTML+='Address:     '+'---';
    }
    sec.innerHTML+='<br>';
    if(form.pin.value!=""){
        sec.innerHTML+='Pin Code:     '+form.pin.value;
    }
    else{
        sec.innerHTML+='Pin Code:     '+'---';
    }
    sec.innerHTML+='<br>';

    if(form.aadhar.value!=""){
        sec.innerHTML+='Aadhar Number:     '+form.aadhar.value;
    }
    else{
        sec.innerHTML+='Aadhar Number:     '+'---';
    }
    sec.innerHTML+='<br>';
    document.querySelector('#personalInfoForm').style.display='none';
    document.querySelector('#personalInfo').querySelector('.buttonGroup').style.display='none';
}
function addInfo(){
    document.querySelector('#personalInfoForm').style.display='block';
    document.querySelector('#personalInfo').querySelector('.buttonGroup').style.display='flex';
}

function cancelAbout(){
    document.querySelector('#aboutForm').style.display='none';
    document.querySelector('#aboutMain').querySelector('.buttonGroup').style.display='none';
}
function saveAbout(){
    var count = $('#aboutMe div').length;
    var div;
    if(count==0){
        div=document.createElement('div');
        var text;
        var form=document.querySelector('#aboutForm');
        text=form.aboutArea.value;
        div.innerHTML=text;
        document.querySelector('#aboutMe').appendChild(div);
    }
    else{
        div=document.querySelector('#aboutMe').querySelector('div');
        var text;
        var form=document.querySelector('#aboutForm');
        text=form.aboutArea.value;
        div.innerHTML=text;
    }
    document.querySelector('#aboutForm').style.display='none';
    document.querySelector('#aboutMain').querySelector('.buttonGroup').style.display='none';
    console.log($('#aboutMe div').length);
}

function addAbout(){
    document.querySelector('#aboutForm').style.display='block';
    document.querySelector('#aboutMain').querySelector('.buttonGroup').style.display='flex';
}

function cancelAddActs(){
    document.querySelector('#extraCurr').querySelector('.buttonGroup').style.display='none';
    document.querySelector('#extraCurrForm').style.display='none';
}

function addActs(){
    document.querySelector('#extraCurrForm').style.display='block';
    document.querySelector('#extraCurr').querySelector('.buttonGroup').style.display='flex';
}

function saveActs(){
    var count=$('#activities div').length;
    var div;
    if(count==0){
        div=document.createElement('div');
        var text;
        var form=document.querySelector('#extraCurrForm');
        text=form.actArea.value;
        var arr=text.split(',');
        ul=document.createElement('ul');
        console.log(arr);
        arr.forEach(function(e){
            
            if(e!=""){    
            var tempLi=document.createElement('li');
            tempLi.innerHTML=e;
            ul.appendChild(tempLi);
            }
        });
        div.appendChild(ul);
        document.querySelector('#activities').appendChild(div);
    }
    else{
        div=document.querySelector('#activities').querySelector('div');
        var text;
        var form=document.querySelector('#extraCurrForm');
        text=form.actArea.value;
        var arr=text.split(',');
        ul=div.querySelector('ul');
        var count=ul.childNodes.length;
        for(var i=0 ; i<count ; i++){
            ul.removeChild(ul.childNodes[0]);
        }
        
        console.log(arr);
        arr.forEach(function(e){
            if(e!=""){
            var tempLi=document.createElement('li');
            tempLi.innerHTML=e;
            ul.appendChild(tempLi);}
        });
        
    }
    document.querySelector('#extraCurrForm').style.display='none';
    document.querySelector('#extraCurr').querySelector('.buttonGroup').style.display='none';

}



function cancelAddSkills(){
    document.querySelector('#skillsMain').querySelector('.buttonGroup').style.display='none';
    document.querySelector('#skillsForm').style.display='none';
}
function saveSkills(){
    var count = $("#skills div").length;
    var div;
    if(count==0){
        div=document.createElement('div');
        var text;
        var form = document.querySelector('#skillsForm');
        text=form.skillsArea.value;
        var arr = text.split(',');
        ul=document.createElement('ul');
        console.log(arr);
        arr.forEach(function(e){
            
            if(e!=""){    
            var tempLi=document.createElement('li');
            tempLi.innerHTML=e;
            ul.appendChild(tempLi);
            }
        });
        div.appendChild(ul);
        document.querySelector('#skills').appendChild(div);
    }
    else{
        div=document.querySelector('#skills').querySelector('div');
        var text;
        var form = document.querySelector('#skillsForm');
        text=form.skillsArea.value;
        var arr = text.split(',');
        ul=div.querySelector('ul');
        var count=ul.childNodes.length;
        for(var i=0 ; i<count ; i++){
            ul.removeChild(ul.childNodes[0]);
        }
        
        console.log(arr);
        arr.forEach(function(e){
            if(e!=""){
            var tempLi=document.createElement('li');
            tempLi.innerHTML=e;
            ul.appendChild(tempLi);}
        });
        
    }
   
    document.querySelector('#skillsForm').style.display='none';
    document.querySelector('#skillsMain').querySelector('.buttonGroup').style.display='none';


}


function addSkills(){
    document.querySelector('#skillsForm').style.display='block';
    document.querySelector('#skillsMain').querySelector('.buttonGroup').style.display='flex';

}
function saveProject(){
    var form=document.querySelector('#projectForm');
    var newDiv = document.createElement('div');
    var text;
    text='<strong>'+form.title.value+'</strong>'+'<i class="fa fa-minus-square delSection" aria-hidden="true" style="float:right; display:block"></i>'+'<br>';
    text+=form.startMonth.value+','+form.startYear.value+' - '+form.endMonth.value+','+form.endYear.value+'<br>';
    if(form.url.value!=""){
        text+='URL: '+form.url.value+'<br>';
    }
    if(form.description.value!=""){
        text+='Description: '+form.description.value;
    }
    newDiv.innerHTML=text;

    document.querySelector('#projectForm').style.display='none';
    document.querySelector('#projects').querySelector('.buttonGroup').style.display='none';
    document.querySelector('#pro').appendChild(newDiv);

    document.querySelector('#pro').querySelectorAll('.delSection').forEach(function(e){
        
                    e.addEventListener('click',function(){
                        e.parentNode.parentNode.remove();
                    });
                });
}

function cancelAddProject(){
    document.querySelector('#projects').querySelector('.buttonGroup').style.display='none';
    document.querySelector('#projectForm').style.display='none';
}

function addProject(){
    document.querySelector('#projectForm').style.display="block";
    document.querySelector('#projects').querySelector('.buttonGroup').style.display='flex';
    var form = document.querySelector('#projectForm');
    form.title.value="";
    form.url.value="";
    form.description.value="";
}


function saveExperience(){
    var form = document.querySelector('#experienceForm');
    var newDiv = document.createElement('div');
    var text;
    text='<strong>'+form.company.value+'</strong>'+'<i class="fa fa-minus-square delSection" aria-hidden="true" style="float:right; display:block"></i>'+'<br>';
    text+=form.type.value+' | ';
    text+=form.startMonth.value+','+form.startYear.value+' - '+form.endMonth.value+','+form.endYear.value+'<br>';;
    if(form.responsibilities.value!=""){
        text+='Responsibilities: '+form.responsibilities.value+'<br>';
    }
    if(form.achievements.value!=""){
        text+='Achievements: '+form.achievements.value;
    }
    newDiv.innerHTML=text;
    document.querySelector('#experienceForm').style.display='none';
    document.querySelector('#experience').querySelector('.buttonGroup').style.display='none';
    document.querySelector('#exp').appendChild(newDiv);

    document.querySelector('#exp').querySelectorAll('.delSection').forEach(function(e){
        
                    e.addEventListener('click',function(){
                        e.parentNode.parentNode.remove();
                    });
                });


}


function addExperience(){
    document.querySelector('#experienceForm').style.display='block';
    document.querySelector('#experience').querySelector('.buttonGroup').style.display='flex';
    var form = document.querySelector('#experienceForm');
    form.company.value='';
    form.responsibilities.value='';
    form.achievements.value='';
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
     ans=true;//validateSchoolForm(form);
     if(ans==true){
        var newDiv = document.createElement('div');
        var text;
        if(form.class.value=='10th'){
            text='<b>'+'All India Senior SecondaryExamination: Class 10'+'|'+'</b>'+form.year.value;
        }
        else if(form.class.value=='12th'){
            text='<b>'+'All India Senior School Certificate Examination: '+form.board.value+ ' Class 12'+'|'+'</b>'+form.year.value;
        }
        text+='<i class="fa fa-minus-square delSection" aria-hidden="true" style="float:right; display:block"></i>'
        text+='<br>';
        text+=form.schoolName.value+'<br>';
        if(form.stream.value!='Stream')
        text+=form.stream.value+'|';
        }
 
        text+=form.marks.value;
        newDiv.innerHTML=text;
        document.querySelector('#school_collegeNav').style.display='none';
        document.querySelector('#education').querySelector('.buttonGroup').style.display='none';
        document.querySelector('#schoolForm').style.display='none';
        document.querySelector('#edu').appendChild(newDiv)


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
            text+='<i class="fa fa-minus-square delSection" aria-hidden="true" style="float:right;  display:block"></i>'
            text+='</b>';
            text+='<br>';
            text+=form.collegeName.value +','+form.university.value+'<br>';
            text+=(form.batchStart.value+'-'+form.batchEnd.value +' | '+ + form.marks.value+'%');
            newDiv.innerHTML=text;

            document.querySelector('#school_collegeNav').style.display='none';
            document.querySelector('.buttonGroup').style.display='none';
            document.querySelector('#collegeForm').style.display='none';
            document.querySelector('#edu').appendChild(newDiv,)
        }
        document.querySelector('#edu').querySelectorAll('.delSection').forEach(function(e){

            e.addEventListener('click',function(){
                e.parentNode.parentNode.remove();
            });
        });

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


function makeActive(ele){
    var id= ele.id;
    var sLink = document.querySelector('#education').querySelector('#schoolLink');
    var cLink = document.querySelector('#education').querySelector('#collegeLink');
    sLink.classList.remove('active');
    cLink.classList.remove('active');
    var link = document.getElementById(id);
    link.classList.add('active');
    
    if(sLink.classList.contains('active')){
        document.querySelector('#education').querySelector('#schoolForm').style.display='block';
        document.querySelector('#education').querySelector('#collegeForm').style.display='none';
    }
    else{
        document.querySelector('#education').querySelector('#schoolForm').style.display='none';
        document.querySelector('#education').querySelector('#collegeForm').style.display='block';
    }
    }


function doneChanges(){

    removeIfEmpty();
    var editButtons = document.querySelectorAll('.fa-pencil-square-o');
    var addButtons = document.querySelectorAll('.fa-plus-square-o');
    console.log('clickkkk');
    editButtons.forEach(function(i){
        i.style.display="none";
    });

    addButtons.forEach(function(i){
        i.style.display="none";
    });

    var delSectionButtons = document.querySelectorAll('.delSection');
    delSectionButtons.forEach(function(e){
        e.style.display="none";
    });

    document.querySelector('#editProfile').style.display='block';
    document.querySelector('#done').style.display='none';
    cancelAddEducation();
    cancelAddExperience();
    cancelAddProject();
    cancelAddSkills();
    cancelAddActs();
    cancelAbout();
    cancelInfo();


}
function cancelAddExperience(){
    document.querySelector('#experience').querySelector('.buttonGroup').style.display='none';
    document.querySelector('#experienceForm').style.display='none';
}

function cancelAddEducation(){

    document.querySelector('#school_collegeNav').style.display='none';
    document.querySelector('#education').querySelector('.buttonGroup').style.display='none';
    document.querySelector('#collegeForm').style.display='none';
    document.querySelector('#schoolForm').style.display='none';

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
    document.querySelector('#education').querySelector('.buttonGroup').style.display='flex';
    document.querySelector('#collegeForm').style.display='block';
    var form=document.querySelector('#collegeForm');
    form.collegeName.value='';
    form.university.value='';
    form.course.value='';
    form.specialization.value='';
    form.batchStart.value='year';
    form.batchEnd.value='year';
   // form.marksFormat.value='Select Format';
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
    document.getElementById('personalInfo').style.display='block';
    document.getElementById('experience').style.display='block';
    document.getElementById('aboutMain').style.display='block';
    document.getElementById('education').style.display='block';
    document.getElementById('projects').style.display='block';
     document.getElementById('skillsMain').style.display='block';
     document.getElementById('extraCurr').style.display='block';
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

    
    var delSectionButtons = document.querySelectorAll('.delSection');
    delSectionButtons.forEach(function(e){
        e.style.display="block";
    })
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


