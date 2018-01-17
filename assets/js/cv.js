var pages=['page1'];

window.onload=init;
function init(){

   // checkFit();
  
   var object = localStorage.getItem('cvFormInfo');
   var array = JSON.parse(object)
   console.log('cvFormInfo: ', array);
   setBasicInfo(array.basicInfo);
   setSummary(array.professionalSummary);
   setSkills(array.skills);
  //console.log(array.basicInfo.firstName);
}

function setBasicInfo(basicInfo){


    var name = document.querySelector('#personalDetails').querySelector('#name');
    name.innerHTML=basicInfo.firstName;
    if(basicInfo.lastName!=""){
        name.innerHTML+=" "+basicInfo.lastName;
    }
    
    if(basicInfo.address!=""){
    var address = document.querySelector('#personalDetails').querySelector('#addressInfo').querySelector('.info');
    address.innerHTML=basicInfo.address;
    }
    else{
        var address = document.querySelector('#personalDetails').querySelector('#addressInfo').style.display="none";
    }

    if(basicInfo.email!=""){var email=document.querySelector('#personalDetails').querySelector('#emailInfo').querySelector('.info');
        email.innerHTML=basicInfo.email;
    }
    else{
        var email=document.querySelector('#personalDetails').querySelector('#emailInfo').style.display="none";
    }

    if(basicInfo.phone!=""){
        var mobile = document.querySelector('#personalDetails').querySelector('#mobileInfo').querySelector('.info');
        mobile.innerHTML = basicInfo.phone;
    }
    else{
        var mobile = document.querySelector('#personalDetails').querySelector('#mobileInfo').style.display="none";
    }
}

function setSummary(summary){
if(summary.headline!="" && summary.summary==""){
    var profileSnapshot = document.querySelector('#summary').querySelector('.info');
    profileSnapshot.innerHTML='<br>'+summary.headline;
}
else if(summary.headline=="" && summary.summary!=""){
    var profileSnapshot = document.querySelector('#summary').querySelector('.info');
    profileSnapshot.innerHTML='<br>'+summary.summary;
}
else if(summary.headline!="" && summary.summary!=""){
var profileSnapshot = document.querySelector('#summary').querySelector('.info');
profileSnapshot.innerHTML='<br>'+summary.headline+'<br>'+summary.summary;
}
else{
    document.querySelector('#summary').style.display="none";
}

}
function setSkills(skills){

    //TODO
if(skills!=""){
    var skillArray = skills.split(',');
    var skillInfo = document.querySelector("#skills");
   // console.log(skillArray);
    var skillList = document.createElement('ul type="none"');
    for(var i=0;i<skillArray.length;i++){
        skillList.innerHTML+='<li>'+skillArray[i]+'</li>';
    }
    skillInfo.appendChild(skillList);
}


}