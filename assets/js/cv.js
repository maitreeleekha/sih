var pages=['page1'];

window.onload=init;
function init(){

   // checkFit();
  
   var object = localStorage.getItem('cvFormInfo');
   var array = JSON.parse(object)
   console.log('cvFormInfo: ', array);
   setBasicInfo(array.basicInfo);
   setSummary(array.professionalSummary);
   setEducation(array.education);
   setSkills(array.skills);
   setExperience(array.experiences);
   setCertificates(array.certificates);
   setPublications(array.publications);
   setRecommendations(array.recommendations);
   setProjects(array.projects);
   setLang(array.langs);
   setVolunteering(array.volunteering);
  //console.log(array.basicInfo.firstName);
}

function setBasicInfo(basicInfo){


    var name = document.querySelector('#personalDetails').querySelector('#name');
    name.innerHTML=basicInfo.firstName;
    if(basicInfo.lastName!=""){
        name.innerHTML+=" "+basicInfo.lastName;
    }
    
    //TODO
    var dataImage = localStorage.getItem('imgData');
    bannerImg = document.getElementById('profile');
    bannerImg.src = "data:image/png;base64," + dataImage;


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
    //profileSnapshot.innerHTML='<br>'+summary.summary;
}
else if(summary.headline!="" && summary.summary!=""){
var profileSnapshot = document.querySelector('#summary').querySelector('.info');
profileSnapshot.innerHTML='<strong>'+summary.headline+'<br>';
profileSnapshot.innerHTML+=summary.summary;
}
else{
    document.querySelector('#summary').style.display="none";
}

}
function setSkills(skills){
if(skills!=""){
    var skillArray = skills.split(';');
    var skillInfo = document.querySelector("#skills").querySelector('.info');
    skillInfo.innerHTML+='<br>';
    skillArray.forEach(function(e) {
        skillInfo.innerHTML+=e+'<br>';
    });
    //skillInfo.innerHTML = skills;
}
else{
    document.querySelector("#skills").style.display="none";
}
}

function setExperience(experienceArray){
if(experienceArray.length==0){
    document.querySelector('#experience').style.display="none";
}
var experienceInfo = document.querySelector('#experience').querySelector('.info');
//experienceInfo.innerHTML+='<br>';
experienceArray.forEach(function(exp){
experienceInfo.innerHTML+='<strong>'+exp.designation +', '+exp.company;
if(exp.date!=''){
    experienceInfo.innerHTML+=' ('+exp.date+')';
}
experienceInfo.innerHTML+='<br>';
if(exp.details!=""){
    experienceInfo.innerHTML+=exp.details+'<br>';
}
experienceInfo.innerHTML+='<br>';
});
}

function setCertificates(certificatesArray){
if(certificatesArray.length==0){
    document.querySelector('#certifications').style.display="none";
}

var certificatesInfo = document.querySelector('#certifications').querySelector('.info');
//certificatesInfo.innerHTML+="<br>";
certificatesArray.forEach(function(c){
    certificatesInfo.innerHTML+='<strong>'+c.nameOfCertificate+", "+c.certifyingAuthority;
    if(c.dateOfCertification!=""){
        certificatesInfo.innerHTML+=" ("+c.dateOfCertification+")";
    }
    
    certificatesInfo.innerHTML+='<br>';
    if(c.certificateDetails!=""){
        certificatesInfo.innerHTML+=c.certificateDetails;
    }
    certificatesInfo.innerHTML+='<br>';
});


}

function setPublications(publicationsArray){

    if(publicationsArray.length==0){
        document.querySelector('#publications').style.display='none';
    }
    var pubInfo = document.querySelector('#publications').querySelector('.info');
    //pubInfo.innerHTML+='<br>';
    publicationsArray.forEach(function(p){
        pubInfo.innerHTML+='<strong>'+p.publicationTitle+'</strong>';
        if(p.publisher!=""){
            pubInfo.innerHTML+=', '+p.publisher;
        }
        if(p.publishDate!=""){
            pubInfo.innerHTML+='('+p.publishDate+')';
        }
        pubInfo.innerHTML+='<br>';
        if(p.publicationDetails!=""){
            pubInfo.innerHTML+=p.publicationDetails;
            pubInfo.innerHTML+='<br>';
        }
    })
}
function setRecommendations(recommendations){
    if(recommendations.length==0){
        document.querySelector('#recommendations').style.display="none";
    }
    var recInfo = document.querySelector('#recommendations').querySelector('.info');
  //  recInfo.innerHTML+='<br>';
    recommendations.forEach(function(r){

        recInfo.innerHTML+='<strong>'+r.recommenderName+', '+r.recommenderDesignation+'</strong>';
        if(r.recommendationDates!=""){
            recInfo.innerHTML+=' ('+r.recommendationDates+')';
        }
        recInfo.innerHTML+='<br>';
        if(r.recommendationDetails!=""){
            recInfo.innerHTML+=r.recommendationDetails;
            recInfo.innerHTML+='<br>';
        }
    });
}

function allEmpty(projects){
    var ans=true;
    projects.forEach(function(e){
    if( e.projectTitle=="" && e.projectDate=="" && e.projectUR=="" && e.projectDetails=="")
    {return ans*=true;}
    });
    return ans;
}

function setProjects(projects){
    if(projects.length==0 || allEmpty(projects)){
        document.querySelector('#projects').style.display='none';
        return;
    }
    var proInfo= document.querySelector('#projects').querySelector('.info');
  //  proInfo.innerHTML+='<br>';
    projects.forEach(function(p){
        proInfo.innerHTML+='<strong>'+p.projectTitle+'</strong>';
        if(p.projectDate!=""){
            proInfo.innerHTML+=' ('+p.projectDate+')';
        }
        proInfo.innerHTML+='<br>';
        if(p.projectDetails!=""){
            proInfo.innerHTML+=projectDetails;
            proInfo.innerHTML+='<br>';
        }
        if(p.projectURL!=""){
            proInfo.innerHTML+=p.projectURL;
            proInfo.innerHTML+='<br>';
        }
    });
}

function setVolunteering(vol){
    if(vol.length==0){
        document.querySelector('#volunteering').style.display="none";
    }
    var volInfo = document.querySelector('#volunteering').querySelector('.info');
  //  volInfo.innerHTML+='<br>';
    vol.forEach(function(v){
        volInfo.innerHTML+='<strong>'+v.volunteeringOrganization+'</strong>';
        if(v.volunteeringDates!=""){
            volInfo.innerHTML+=' ('+v.volunteeringDates+')';
        }
        volInfo.innerHTML+='<br>';

        if(v.volunteeringCause!=""){
            volInfo.innerHTML+=c.volunteeringOrganization;
        }

        if(v.volunteeringDetails!=""){
            volInfo.innerHTML+='- '+v.volunteeringDetails;
            volInfo.innerHTML+='<br>';
        }
        
    })
}



function setLang(langs){
    if(langs.length==0){
        document.querySelector('#langs').style.display="none";
    }
    var langInfo= document.querySelector('#langs').querySelector('.info');
   // langInfo.innerHTML+='<br>';
    langs.forEach(function(l){
        langInfo.innerHTML+='<strong>'+l.lang+': </strong> ';
        langInfo.innerHTML+=l.langProficiency;
        langInfo.innerHTML+='<br>';
    });
}

function setEducation(educationArray){
    if(educationArray.length==0){
        document.querySelector('#education').style.display="none";
    }
    var eduInfo= document.querySelector('#education').querySelector('.info');
  //  eduInfo.innerHTML+='<br>';
    educationArray.forEach(function(e){

        if(e.toggle=='college'){

            eduInfo.innerHTML+='<strong>'+e.course;
            if(e.specialization!=""){
                eduInfo.innerHTML+='-<strong> ' +e.specialization;
            }
            eduInfo.innerHTML+='</strong><br>';
            eduInfo.innerHTML+=e.collegeName;
            if(e.university!=''){
                eduInfo.innerHTML+=',' + e.university;
            }
            eduInfo.innerHTML+='<br>';
            if(e.isCurrentEducation){
               eduInfo.innerHTML+= e.batchStart+'-'+'till date';
            }
            else{
                eduInfo.innerHTML+=e.batchStart+'-'+e.batchEnd;
            }
            eduInfo.innerHTML+='<br>';
            if(e.details!=''){
                eduInfo.innerHTML+=e.details+'; ';
               // eduInfo.innerHTML+='<br>';
            }
            if(e.achievements!=''){
                eduInfo.innerHTML+=e.achievements;
            }
            eduInfo.innerHTML+='<br>';
            if(e.marksFormat!='Select Format'){
                if(e.marksFormat=='Percent' && e.marks!=''){

                    eduInfo.innerHTML+='Percent Marks Obtained: '+e.marks+'%';
                }
                else if(e.marksFormat=='CGP' && e.marks!=''){
                    eduInfo.innerHTML+='Yearly CGPA: '+e.marks+'/'+e.maxCGP;
                }
            }
        }
        else if(e.toggle=='school'){
            eduInfo.innerHTML+='<br>';
           if(e.class=='10th'){
               eduInfo.innerHTML+='<strong> All India Senior Secondary Examination ('+e.board+'): ';
           }
           else if(e.class=='12th'){
               eduInfo.innerHTML+='<strong> All India Senior School Certificate Examination ('+e.board+'): ';
           }
           eduInfo.innerHTML+='<strong>'+e.year+'-'+e.endYear;
           eduInfo.innerHTML+='<br>';
           eduInfo.innerHTML+=e.schoolName;
           eduInfo.innerHTML+='<br>';
           if(e.stream!=''){
               eduInfo.innerHTML+=e.stream+' Stream; '
           }
           if(e.details!=""){
               
               eduInfo.innerHTML+=e.details;
               eduInfo.innerHTML+='<br>';
           }
           if(e.marksFormat!='Select Format'){
               if(e.marksFormat=='Percent'){
                   eduInfo.innerHTML+='Marks Secured: '+e.marks+'%';
               }
               else if(e.marksFormat=='CGP'){
                eduInfo.innerHTML+='Marks Secured: '+e.marks+'/10';
               }
           }
           // eduInfo.innerHTML+='<strong>'+e.schoolName;
        }
    });

}