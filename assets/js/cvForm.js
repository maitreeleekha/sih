/* off-canvas sidebar toggle */
$('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
    $('span.collapse').toggleClass('in');
});

$('[data-toggle=offcanvas-in]').click(function() {
    $('.row-offcanvas').addClass('active');
    $('span.collapse').addClass('in');
});

var nofEducationForms=1;
var educationFormArray=[]; //ids of current education forms. 
var nofExperienceForms=1;
var experienceFormArray=[];
var nofPublicationForms=1;
var publicationsFormArray=[];
var nofProjectForms=1;
var projectsFormArray=[];
var nofCertificateForms=1;
var certificatesFormArray=[];
var nofVolunteeringForms=1;
var volunteeringFormArray=[];
var nofLanguageForms=1;
var langFormArray=[];
var nofRecommendationForms=1;
var recommendationFormArray=[];

var linkMap = new Map();
linkMap.set('basicInfoFormLink',1);
linkMap.set('summaryFormLink',2);
linkMap.set('educationFormLink',3);
linkMap.set('experienceFormLink',4);
linkMap.set('skillsFormLink',5);
linkMap.set('certificatesFormLink',6);
linkMap.set('publicationsFormLink',7);
linkMap.set('projectsFormLink',8);
linkMap.set('volunteeringFormLink',9);
linkMap.set('languagesFormLink',10);
linkMap.set('recommendationFormLink',11);


window.onload=init;
function fasterPreview( uploader ) {
    if ( uploader.files && uploader.files[0] ){
          $('#imageProfile').attr('src', 
             window.URL.createObjectURL(uploader.files[0]) );
    }

    propic= $('#imageProfile').attr('src');
    //changeProfilePicSrc();
    console.log(storageObject.profileSrc);
}
function init(){
  
    var addButton = document.querySelector('#addSection');
    addButton.style.display='none';
    addButton.addEventListener('click',function(){

        /*var certificates = document.querySelector('#certificatesForm');
        var duplicate = certificates.cloneNode(true);
        var formDiv = document.querySelector('#certificatesFormDiv');
        formDiv.appendChild(duplicate);*/
        addAnotherForm();
    });

    $("#uploadImage").click(function(e) {
        $("#imageUpload").click();
    
        $("#imageUpload").change(function(){
            fasterPreview(this);
        });
    
    });

   var educationFormLink= document.querySelector('#educationFormLink');
    educationFormLink.addEventListener('click',function(){
        showForm('educationFormDiv','educationFormLink');
    });

    var basicInfoFormLink = document.querySelector('#basicInfoFormLink');
    basicInfoFormLink.addEventListener('click',function(){
        showForm('basicInfoFormDiv','basicInfoFormLink');
    });

    var summaryFormLink = document.querySelector('#summaryFormLink');
    summaryFormLink.addEventListener('click',function(){
        showForm('summaryFormDiv','summaryFormLink');
    });

    var experienceFormLink = document.querySelector('#experienceFormLink');
    experienceFormLink.addEventListener('click',function(){
        showForm('experienceFormDiv','experienceFormLink');
    });
    var skillsFormLink = document.querySelector('#skillsFormLink');
    
  skillsFormLink.addEventListener('click',function(){
        showForm('skillsFormDiv','skillsFormLink');
    });

    var certificatesFormLink = document.querySelector('#certificatesFormLink');
    certificatesFormLink.addEventListener('click',function(){
        showForm('certificatesFormDiv','certificatesFormLink');
    });

    var publicationsFormLink = document.querySelector('#publicationsFormLink');
    publicationsFormLink.addEventListener('click', function(){
        showForm('publicationsFormDiv','publicationsFormLink');
    });

    var projectsFormLink = document.querySelector('#projectsFormLink');
    projectsFormLink.addEventListener('click' , function(){
        showForm('projectsFormDiv','projectsFormLink');
    } );

    var volunteeringFormLink = document.querySelector('#volunteeringFormLink');
    volunteeringFormLink.addEventListener('click', function(){
        showForm('volunteeringFormDiv','volunteeringFormLink');
    });

    var recommendationFormLink = document.querySelector('#recommendationFormLink');
    recommendationFormLink.addEventListener('click', function(){
        showForm('recommendationFormDiv','recommendationFormLink');
    } );

    var languageFormLink = document.querySelector('#languagesFormLink');
    languageFormLink.addEventListener('click', function(){
        showForm('langFormDiv','languagesFormLink');
    });

    var nextFormButton = document.querySelector('#next');
    nextFormButton.addEventListener('click', function(){

        nextForm();
    });

    var prevFormButton = document.querySelector('#prev');
    prevFormButton.addEventListener('click', function(){
        prevForm();
    })
}


function showForm(formName,formLink){

    setFormNameandOthers(formName);
    var toggleButton = document.querySelector('#toggleButton2');
    var verticalNavBar = document.querySelector('#collapseExample');

    if(verticalNavBar.classList.contains('show'))
    {
        toggleButton.click();
    }
    var formList = document.querySelectorAll('.cvForm');
    var cvListItems = document.querySelectorAll('.cvListItem');
    formList.forEach(function(i){
    
    if(i.id===formName && i.id==='basicInfoFormDiv'){
        i.style.display='grid';
        //document.querySelector('#basicInfoForm').classList.add('container');
    }
     else if(i.id===formName){
         i.style.display='block';
     }
     else{
         i.style.display='none';
     }
    });

    cvListItems.forEach(function(i){
        if(i.id===formLink){
            i.classList.add('activeButton');
        }
        else{
            i.classList.remove('activeButton');
        }
    });

}


function setFormNameandOthers(formName){

    var formHeading = document.querySelector('#formHeading');
    var addSectionButton = document.querySelector('#addSection');

    switch(formName){

case 'basicInfoFormDiv': formHeading.innerHTML='Basic Information';
addSectionButton.style.display='none';
break;
case 'summaryFormDiv': formHeading.innerHTML='Summary';
addSectionButton.style.display='none';
break;
case 'educationFormDiv': formHeading.innerHTML='Education';
educationFormArray.push('educationForm');
addSectionButton.style.display='block';
addSectionButton.innerHTML='<i class="fa fa-plus-square" aria-hidden="true"></i> ADD ANOTHER EDUCATION';
document.querySelector('#educationForm').querySelector('#collegeForm').querySelector('#marksFormat').addEventListener('change',function(){
setMarksFormat(document.querySelector('#educationForm'));
});

document.querySelector('#educationForm').querySelector('#schoolForm').querySelector('#marksFormat').addEventListener('change',function(){
    setMarksFormat(document.querySelector('#educationForm'));
    });
document.querySelector('#educationForm').querySelector('#schoolLink').addEventListener('click',function(){
    makeActive(document.querySelector('#educationForm').querySelector('#schoolLink'),document.querySelector('#educationForm'));
  });

document.querySelector('#educationForm').querySelector('#collegeLink').addEventListener('click',function(){
makeActive(document.querySelector('#educationForm').querySelector('#collegeLink'),document.querySelector('#educationForm'));
  });

  //move section
    document.querySelector('#educationForm').querySelector('#moveSectionButton').addEventListener('click',function(){
    document.querySelector('#educationForm').classList.add('dragging');
    document.querySelector('#educationForm').addEventListener('dragstart',function(event){
    event.dataTransfer.setData('Text',event.target.id);
    console.log('dragging');

});

educationFormArray.forEach(function(i){
   document.querySelector('#educationFormDiv').querySelector('#'+i).addEventListener('dragover',function(event){
   event.preventDefault();
   document.querySelector('#educationForm').classList.remove('dragging');
   document.querySelector('#educationFormDiv').querySelector('#'+i).classList.add('dragging');
  });

      document.querySelector('#educationFormDiv').querySelector('#'+i).addEventListener('drop',function(event){
      event.preventDefault();
      var data = event.dataTransfer.getData("Text");
      console.log(data);
      console.log(event.target);
     var parentNode = document.querySelector('#educationFormDiv');
     parentNode.insertBefore(document.querySelector('#'+data),event.target);
      console.log('dropped');

      educationFormArray.forEach(function(i){document.querySelector('#educationFormDiv').querySelector('#'+i).classList.remove('dragging');});


  });
  });
  //delete button

  var delButton = document.querySelector('#educationForm').querySelector('#deleteSectionButton');
  if(educationFormArray.length==1){
    document.querySelector('#educationFormDiv').querySelector('#'+ educationFormArray[0]).querySelector('#deleteSectionButton').disabled=true;
    

   }
    else{
  educationFormArray.forEach(function(i){
  document.querySelector('#educationFormDiv').querySelector('#'+i).querySelector('#deleteSectionButton').disabled=false;});}
  delButton.addEventListener('click',function(){
  educationFormArray.splice(educationFormArray.indexOf(document.querySelector('#educationForm').id),1);
  document.querySelector('#educationForm').remove();
  console.log(educationFormArray);

  if(educationFormArray.length==1){
  document.querySelector('#educationFormDiv').querySelector('#'+ educationFormArray[0]).querySelector('#deleteSectionButton').disabled=true;
  }
});
});   

break;
case 'experienceFormDiv':formHeading.innerHTML='Experience';
addSectionButton.style.display='block';
addSectionButton.innerHTML='<i class="fa fa-plus-square" aria-hidden="true"></i> ADD ANOTHER EXPERIENCE';
experienceFormArray.push('experienceForm');

//delete button

var delButton = document.querySelector('#experienceForm').querySelector('#deleteSectionButton');
if(experienceFormArray.length==1){
  document.querySelector('#experienceFormDiv').querySelector('#'+ experienceFormArray[0]).querySelector('#deleteSectionButton').disabled=true;
  

 }
  else{
experienceFormArray.forEach(function(i){
document.querySelector('#experienceFormDiv').querySelector('#'+i).querySelector('#deleteSectionButton').disabled=false;});}
delButton.addEventListener('click',function(){
experienceFormArray.splice(experienceFormArray.indexOf(document.querySelector('#experienceForm').id),1);
document.querySelector('#experienceForm').remove();
console.log(experienceFormArray);

if(experienceFormArray.length==1){
document.querySelector('#experienceFormDiv').querySelector('#'+ experienceFormArray[0]).querySelector('#deleteSectionButton').disabled=true;
}
});


//move section button.

document.querySelector('#experienceForm').querySelector('#moveSectionButton').addEventListener('click',function(){
    document.querySelector('#experienceForm').classList.add('dragging');
    document.querySelector('#experienceForm').addEventListener('dragstart',function(event){
    event.dataTransfer.setData('Text',event.target.id);
    console.log('dragging');

});


experienceFormArray.forEach(function(i){
   document.querySelector('#experienceFormDiv').querySelector('#'+i).addEventListener('dragover',function(event){
   event.preventDefault();
   document.querySelector('#experienceForm').classList.remove('dragging');
   document.querySelector('#experienceFormDiv').querySelector('#'+i).classList.add('dragging');
  });

      document.querySelector('#experienceFormDiv').querySelector('#'+i).addEventListener('drop',function(event){
      event.preventDefault();
      var data = event.dataTransfer.getData("Text");
      console.log(data);
      console.log(event.target);
     var parentNode = document.querySelector('#experienceFormDiv');
     parentNode.insertBefore(document.querySelector('#'+data),event.target);
      console.log('dropped');
      experienceFormArray.forEach(function(i){document.querySelector('#experienceFormDiv').querySelector('#'+i).classList.remove('dragging');});


  });
  });
});

break;
case 'skillsFormDiv':formHeading.innerHTML='Skills';
addSectionButton.style.display='none';
break;
case 'certificatesFormDiv': formHeading.innerHTML='Certificates';
addSectionButton.style.display='block';
addSectionButton.innerHTML='<i class="fa fa-plus-square" aria-hidden="true"></i> ADD ANOTHER CERTIFICATE';
certificatesFormArray.push('certificatesForm');

//del button

var delButton = document.querySelector('#certificatesForm').querySelector('#deleteSectionButton');
if(certificatesFormArray.length==1){
  document.querySelector('#certificatesFormDiv').querySelector('#'+ certificatesFormArray[0]).querySelector('#deleteSectionButton').disabled=true;
  

 }
  else{
certificatesFormArray.forEach(function(i){
document.querySelector('#certificatesFormDiv').querySelector('#'+i).querySelector('#deleteSectionButton').disabled=false;});}
delButton.addEventListener('click',function(){
certificatesFormArray.splice(certificatesFormArray.indexOf(document.querySelector('#certificatesForm').id),1);
document.querySelector('#certificatesForm').remove();
console.log(certificatesFormArray);

if(certificatesFormArray.length==1){
document.querySelector('#certificatesFormDiv').querySelector('#'+ certificatesFormArray[0]).querySelector('#deleteSectionButton').disabled=true;
}
});


//move section


document.querySelector('#certificatesForm').querySelector('#moveSectionButton').addEventListener('click',function(){
    document.querySelector('#certificatesForm').classList.add('dragging');
    document.querySelector('#certificatesForm').addEventListener('dragstart',function(event){
    event.dataTransfer.setData('Text',event.target.id);
    console.log('dragging');

});


certificatesFormArray.forEach(function(i){
   document.querySelector('#certificatesFormDiv').querySelector('#'+i).addEventListener('dragover',function(event){
   event.preventDefault();
   document.querySelector('#certificatesForm').classList.remove('dragging');
   document.querySelector('#certificatesFormDiv').querySelector('#'+i).classList.add('dragging');
  });

      document.querySelector('#certificatesFormDiv').querySelector('#'+i).addEventListener('drop',function(event){
      event.preventDefault();
      var data = event.dataTransfer.getData("Text");
      console.log(data);
      console.log(event.target);
     var parentNode = document.querySelector('#certificatesFormDiv');
     parentNode.insertBefore(document.querySelector('#'+data),event.target);
      console.log('dropped');
      certificatesFormArray.forEach(function(i){document.querySelector('#certificatesFormDiv').querySelector('#'+i).classList.remove('dragging');});


  });
  });
});


break;
case 'publicationsFormDiv': formHeading.innerHTML='Publications';
addSectionButton.style.display='block';
addSectionButton.innerHTML='<i class="fa fa-plus-square" aria-hidden="true"></i> ADD ANOTHER PUBLICATION';
publicationsFormArray.push('publicationsForm');

//delete button

var delButton = document.querySelector('#publicationsForm').querySelector('#deleteSectionButton');
if(publicationsFormArray.length==1){
  document.querySelector('#publicationsFormDiv').querySelector('#'+ publicationsFormArray[0]).querySelector('#deleteSectionButton').disabled=true;
  

 }
  else{
publicationsFormArray.forEach(function(i){
document.querySelector('#publicationsFormDiv').querySelector('#'+i).querySelector('#deleteSectionButton').disabled=false;});}
delButton.addEventListener('click',function(){
publicationsFormArray.splice(publicationsFormArray.indexOf(document.querySelector('#publicationsForm').id),1);
document.querySelector('#publicationsForm').remove();
console.log(publicationsFormArray);

if(publicationsFormArray.length==1){
document.querySelector('#publicationsFormDiv').querySelector('#'+ publicationsFormArray[0]).querySelector('#deleteSectionButton').disabled=true;
}
});



//move section button.

document.querySelector('#publicationsForm').querySelector('#moveSectionButton').addEventListener('click',function(){
    document.querySelector('#publicationsForm').classList.add('dragging');
    document.querySelector('#publicationsForm').addEventListener('dragstart',function(event){
    event.dataTransfer.setData('Text',event.target.id);
    console.log('dragging');

});


publicationsFormArray.forEach(function(i){
   document.querySelector('#publicationsFormDiv').querySelector('#'+i).addEventListener('dragover',function(event){
   event.preventDefault();
   document.querySelector('#publicationsForm').classList.remove('dragging');
   document.querySelector('#publicationsFormDiv').querySelector('#'+i).classList.add('dragging');
  });

      document.querySelector('#publicationsFormDiv').querySelector('#'+i).addEventListener('drop',function(event){
      event.preventDefault();
      var data = event.dataTransfer.getData("Text");
      console.log(data);
      console.log(event.target);
     var parentNode = document.querySelector('#publicationsFormDiv');
     parentNode.insertBefore(document.querySelector('#'+data),event.target);
      console.log('dropped');
      publicationsFormArray.forEach(function(i){document.querySelector('#publicationsFormDiv').querySelector('#'+i).classList.remove('dragging');});


  });
  });
});





break;
case 'projectsFormDiv': formHeading.innerHTML='Projects';
addSectionButton.style.display='block';
addSectionButton.innerHTML='<i class="fa fa-plus-square" aria-hidden="true"></i> ADD ANOTHER PROJECT';
projectsFormArray.push('projectsForm');

//del button

var delButton = document.querySelector('#projectsForm').querySelector('#deleteSectionButton');
if(projectsFormArray.length==1){
  document.querySelector('#projectsFormDiv').querySelector('#'+ projectsFormArray[0]).querySelector('#deleteSectionButton').disabled=true;
 }
  else{
projectsFormArray.forEach(function(i){
document.querySelector('#projectsFormDiv').querySelector('#'+i).querySelector('#deleteSectionButton').disabled=false;});}
delButton.addEventListener('click',function(){
projectsFormArray.splice(educationFormArray.indexOf(document.querySelector('#projectsForm').id),1);
document.querySelector('#projectsForm').remove();
console.log(projectsFormArray);

if(projectsFormArray.length==1){
document.querySelector('#projectsFormDiv').querySelector('#'+ projectsFormArray[0]).querySelector('#deleteSectionButton').disabled=true;
}
});


//move section button.
document.querySelector('#projectsForm').querySelector('#moveSectionButton').addEventListener('click',function(){
    document.querySelector('#projectsForm').classList.add('dragging');
    document.querySelector('#projectsForm').addEventListener('dragstart',function(event){
    event.dataTransfer.setData('Text',event.target.id);
    console.log('dragging');

});


projectsFormArray.forEach(function(i){
   document.querySelector('#projectsFormDiv').querySelector('#'+i).addEventListener('dragover',function(event){
   event.preventDefault();
   document.querySelector('#projectsForm').classList.remove('dragging');
   document.querySelector('#projectsFormDiv').querySelector('#'+i).classList.add('dragging');
  });

      document.querySelector('#projectsFormDiv').querySelector('#'+i).addEventListener('drop',function(event){
      event.preventDefault();
      var data = event.dataTransfer.getData("Text");
      console.log(data);
      console.log(event.target);
     var parentNode = document.querySelector('#projectsFormDiv');
     parentNode.insertBefore(document.querySelector('#'+data),event.target);
      console.log('dropped');
     projectsFormArray.forEach(function(i){document.querySelector('#projectsFormDiv').querySelector('#'+i).classList.remove('dragging');});


  });
  });
});



break;
case 'volunteeringFormDiv': formHeading.innerHTML='Volunteering';
addSectionButton.style.display='block';
addSectionButton.innerHTML='<i class="fa fa-plus-square" aria-hidden="true"></i> ADD ANOTHER VOLUNTEERING POSITION';
volunteeringFormArray.push('volunteeringForm');

//del button
var delButton = document.querySelector('#volunteeringForm').querySelector('#deleteSectionButton');
if(volunteeringFormArray.length==1){
  document.querySelector('#volunteeringFormDiv').querySelector('#'+ volunteeringFormArray[0]).querySelector('#deleteSectionButton').disabled=true;
  

 }
  else{
volunteeringFormArray.forEach(function(i){
document.querySelector('#volunteeringFormDiv').querySelector('#'+i).querySelector('#deleteSectionButton').disabled=false;});}
delButton.addEventListener('click',function(){
volunteeringFormArray.splice(volunteeringFormArray.indexOf(document.querySelector('#volunteeringForm').id),1);
document.querySelector('#volunteeringForm').remove();
console.log(volunteeringFormArray);

if(volunteeringFormArray.length==1){
document.querySelector('#volunteeringFormDiv').querySelector('#'+ volunteeringFormArray[0]).querySelector('#deleteSectionButton').disabled=true;
}
});


//move section button.

document.querySelector('#volunteeringForm').querySelector('#moveSectionButton').addEventListener('click',function(){
    document.querySelector('#volunteeringForm').classList.add('dragging');
    document.querySelector('#volunteeringForm').addEventListener('dragstart',function(event){
    event.dataTransfer.setData('Text',event.target.id);
    console.log('dragging');

});


volunteeringFormArray.forEach(function(i){
   document.querySelector('#volunteeringFormDiv').querySelector('#'+i).addEventListener('dragover',function(event){
   event.preventDefault();
   document.querySelector('#volunteeringForm').classList.remove('dragging');
   document.querySelector('#volunteeringFormDiv').querySelector('#'+i).classList.add('dragging');
  });

      document.querySelector('#volunteeringFormDiv').querySelector('#'+i).addEventListener('drop',function(event){
      event.preventDefault();
      var data = event.dataTransfer.getData("Text");
      console.log(data);
      console.log(event.target);
     var parentNode = document.querySelector('#volunteeringFormDiv');
     parentNode.insertBefore(document.querySelector('#'+data),event.target);
      console.log('dropped');
     volunteeringFormArray.forEach(function(i){document.querySelector('#volunteeringFormDiv').querySelector('#'+i).classList.remove('dragging');});


  });
  });
});



break;
case 'langFormDiv': formHeading.innerHTML='Languages';
addSectionButton.style.display='block';
addSectionButton.innerHTML='<i class="fa fa-plus-square" aria-hidden="true"></i> ADD ANOTHER LANGUAGE';
langFormArray.push('langForm');


//delete button

var delButton = document.querySelector('#langForm').querySelector('#deleteSectionButton');
if(langFormArray.length==1){
  document.querySelector('#langFormDiv').querySelector('#'+ langFormArray[0]).querySelector('#deleteSectionButton').disabled=true;
 }
  else{
langFormArray.forEach(function(i){
document.querySelector('#langFormDiv').querySelector('#'+i).querySelector('#deleteSectionButton').disabled=false;});}
delButton.addEventListener('click',function(){
langFormArray.splice(langFormArray.indexOf(document.querySelector('#langForm').id),1);
document.querySelector('#langForm').remove();
console.log(langFormArray);

if(langFormArray.length==1){
document.querySelector('#langFormDiv').querySelector('#'+ langFormArray[0]).querySelector('#deleteSectionButton').disabled=true;
}
});

//move section button.

document.querySelector('#langForm').querySelector('#moveSectionButton').addEventListener('click',function(){
    document.querySelector('#langForm').classList.add('dragging');
    document.querySelector('#langForm').addEventListener('dragstart',function(event){
    event.dataTransfer.setData('Text',event.target.id);
    console.log('dragging');

});


langFormArray.forEach(function(i){
   document.querySelector('#langFormDiv').querySelector('#'+i).addEventListener('dragover',function(event){
   event.preventDefault();
   document.querySelector('#langForm').classList.remove('dragging');
   document.querySelector('#langFormDiv').querySelector('#'+i).classList.add('dragging');
  });

      document.querySelector('#langFormDiv').querySelector('#'+i).addEventListener('drop',function(event){
      event.preventDefault();
      var data = event.dataTransfer.getData("Text");
      console.log(data);
      console.log(event.target);
     var parentNode = document.querySelector('#langFormDiv');
     parentNode.insertBefore(document.querySelector('#'+data),event.target);
      console.log('dropped');
    langFormArray.forEach(function(i){document.querySelector('#langFormDiv').querySelector('#'+i).classList.remove('dragging');});


  });
  });
});



break;
case 'recommendationFormDiv':formHeading.innerHTML='Recommendations';
addSectionButton.style.display='block';
addSectionButton.innerHTML='<i class="fa fa-plus-square" aria-hidden="true"></i> ADD ANOTHER RECCOMMENDATION';
recommendationFormArray.push('recommendationForm');

//delete button

var delButton = document.querySelector('#recommendationForm').querySelector('#deleteSectionButton');
if(recommendationFormArray.length==1){
  document.querySelector('#recommendationFormDiv').querySelector('#'+ recommendationFormArray[0]).querySelector('#deleteSectionButton').disabled=true;
 }
  else{
recommendationFormArray.forEach(function(i){
document.querySelector('#recommendationFormDiv').querySelector('#'+i).querySelector('#deleteSectionButton').disabled=false;});}
delButton.addEventListener('click',function(){
recommendationFormArray.splice(recommendationFormArray.indexOf(document.querySelector('#recommendationForm').id),1);
document.querySelector('#recommendationForm').remove();
console.log(recommendationFormArray);

if(recommendationFormArray.length==1){
document.querySelector('#recommendationFormDiv').querySelector('#'+ recommendationFormArray[0]).querySelector('#deleteSectionButton').disabled=true;
}
});

//move section button.

document.querySelector('#recommendationForm').querySelector('#moveSectionButton').addEventListener('click',function(){
    document.querySelector('#recommendationForm').classList.add('dragging');
    document.querySelector('#recommendationForm').addEventListener('dragstart',function(event){
    event.dataTransfer.setData('Text',event.target.id);
    console.log('dragging');

});


recommendationFormArray.forEach(function(i){
   document.querySelector('#recommendationFormDiv').querySelector('#'+i).addEventListener('dragover',function(event){
   event.preventDefault();
   document.querySelector('#recommendationForm').classList.remove('dragging');
   document.querySelector('#recommendationFormDiv').querySelector('#'+i).classList.add('dragging');
  });

      document.querySelector('#recommendationFormDiv').querySelector('#'+i).addEventListener('drop',function(event){
      event.preventDefault();
      var data = event.dataTransfer.getData("Text");
      console.log(data);
      console.log(event.target);
     var parentNode = document.querySelector('#recommendationFormDiv');
     parentNode.insertBefore(document.querySelector('#'+data),event.target);
      console.log('dropped');
    recommendationFormArray.forEach(function(i){document.querySelector('#recommendationFormDiv').querySelector('#'+i).classList.remove('dragging');});


  });
  });
});



break;



    }
}

function makeActive(ele){
    var id= ele.id;
    var sLink = document.querySelector('#educationForm').getElementById('schoolLink');
    var cLink = document.querySelector('#educationForm').getElementById('collegeLink');
    sLink.classList.remove('active');
    cLink.classList.remove('active');
    var link = document.getElementById(id);
    link.classList.add('active');
    
    if(sLink.classList.contains('active')){
        document.querySelector('#educationForm').querySelector('#schoolForm').style.display='block';
        document.querySelector('#educationForm').querySelector('#collegeForm').style.display='none';
    }
    else{
        document.querySelector('#educationForm').querySelector('#schoolForm').style.display='none';
        document.querySelector('#educationForm').querySelector('#collegeForm').style.display='block';
    }
    }





    function nextForm(){

    var currentForm;
    var cvLinkList= document.querySelectorAll('.cvListItem');
    cvLinkList.forEach(function(i){
        if(i.classList.contains('activeButton')){
        currentFormLink=i.id;
        }
    });

    console.log(currentFormLink);
    var formNumber = linkMap.get(currentFormLink);
    console.log(formNumber);
    var nextFormNumber = formNumber+1;
    console.log(nextFormNumber);
    var nextFormLink;

    for (var [key, value] of linkMap) {
        if(value===nextFormNumber){
            nextFormLink=key;
        }
      }
      var rqdLink = document.getElementById(nextFormLink);
      rqdLink.click();

      console.log(rqdLink.id);
}


function makeActive(ele,obj){
    var id= ele.id;
    var sLink = obj.querySelector('#schoolLink');
    var cLink = obj.querySelector('#collegeLink');
    sLink.classList.remove('active');
    cLink.classList.remove('active');
    var link = obj.querySelector('#'+ele.id);
    link.classList.add('active');
    
    if(sLink.classList.contains('active')){
        obj.querySelector('#schoolForm').style.display='block';
        obj.querySelector('#collegeForm').style.display='none';
    }
    else{
       
        obj.querySelector('#schoolForm').style.display='none';
        obj.querySelector('#collegeForm').style.display='block';
    }
    }

function prevForm(){
    var currentForm;
    var cvLinkList= document.querySelectorAll('.cvListItem');
    cvLinkList.forEach(function(i){
        if(i.classList.contains('activeButton')){
        currentFormLink=i.id;
        }
    });

    console.log(currentFormLink);
    var formNumber = linkMap.get(currentFormLink);
    console.log(formNumber);

    var prevFormNumber = formNumber-1;
    var prevFormLink;

    for (var [key, value] of linkMap) {
        if(value===prevFormNumber){
            prevFormLink=key;
        }
      }

      var rqdLink = document.getElementById(prevFormLink);
      rqdLink.click();

   /* var itm = document.getElementById('certificatesFormDiv');
    var cln = itm.cloneNode(true);
    var formDiv = document.querySelector('#formName');
    formDiv.appendChild(cln);*/

}

function addAnotherForm(){

    var currentFormLink;
    var cvLinkList= document.querySelectorAll('.cvListItem');
    cvLinkList.forEach(function(i){
        if(i.classList.contains('activeButton')){
        currentFormLink=i.id;
        }
    });


    var currentFormDiv;
    var cloneObject;
    switch(currentFormLink){

       // case 'basicInfoFormLink': currentFormDiv=document.querySelector('#basicInfoFormDiv');
        
        
       // break;
       /* case 'summaryFormLink': currentFormDiv=document.querySelector('#summaryFormDiv');
              var currentForm = document.querySelector('#summaryForm') ;
              cloneObject = currentForm.cloneNode(true);
              currentFormDiv.appendChild(cloneObject);
        break;*/
        case 'educationFormLink': currentFormDiv=document.querySelector('#educationFormDiv');
        var currentForm = document.querySelector('#'+educationFormArray[0]) ;
        cloneObject = currentForm.cloneNode(true);
        nofEducationForms++;
        cloneObject.id="educationForm"+nofEducationForms;
        educationFormArray.push(cloneObject.id);
        cloneObject.classList.add('newEducationForm');
        
        //clear all values:
        if(cloneObject.querySelector('#collegeLink').classList.contains('active')){
           var cf= cloneObject.querySelector('#collegeForm');
           cf.collegeName.value='';
           cf.university.value='';
           cf.course.value='';
           cf.specialization.value='';
           cf.batchStart.value='year';
           cf.batchEnd.value='year';
           cf.marksFormat.value='Select Format';
           cf.marks.value='';
           cf.achievements.value='';
        }
        else if(cloneObject.querySelector('#schoolLink').classList.contains('active')){
            var sf= cloneObject.querySelector('#schoolForm');
             sf.schoolName.value='';
             sf.class.value='class';
             sf.stream.value='stream';
             sf.year.value='year';
             sf.board.value='CBSE';
             sf.marks.value='';
        }


        currentFormDiv.appendChild(cloneObject);
        cloneObject.querySelector('#marksFormat').addEventListener('change',function(){
            setMarksFormat(cloneObject);
        });
        cloneObject.querySelector('#schoolLink').addEventListener('click',function(){
             makeActive(cloneObject.querySelector('#schoolLink'),cloneObject);
           }) ;
        
        cloneObject.querySelector('#collegeLink').addEventListener('click',function(){
             makeActive(cloneObject.querySelector('#collegeLink'),cloneObject);
           }); 
         console.log(educationFormArray);
            
         //delete button code
            var delButton = cloneObject.querySelector('#deleteSectionButton');
            if(educationFormArray.length==1){
                document.querySelector('#educationFormDiv').querySelector('#'+ educationFormArray[0]).querySelector('#deleteSectionButton').disabled=true;
                }
                else{
             educationFormArray.forEach(function(i){
              var mainForm=  document.getElementById('educationFormDiv');
              var subForm=mainForm.querySelector( '#'+i);
              var deleteButton=subForm.querySelector('#deleteSectionButton');
              deleteButton.disabled=false;
             });
             delButton.addEventListener('click',function(){
             educationFormArray.splice(educationFormArray.indexOf(cloneObject.id),1);
             cloneObject.remove();
             console.log(educationFormArray);
             if(educationFormArray.length==1){
                document.querySelector('#educationFormDiv').querySelector('#'+ educationFormArray[0]).querySelector('#deleteSectionButton').disabled=true;
                }
         });
        }

//move section code

         var moveSectionButton = cloneObject.querySelector('#moveSectionButton');
          moveSectionButton.addEventListener('click',function(){
            educationFormArray.forEach(function(i){document.querySelector('#educationFormDiv').querySelector('#'+i).setAttribute('draggable',true);});
            
                       
              console.log('drag click');
              cloneObject.classList.add('dragging');
              cloneObject.addEventListener('dragstart',function(event){
              event.dataTransfer.setData('Text',event.target.id);
              console.log('dragging');

          });
       

          educationFormArray.forEach(function(i){
             document.querySelector('#educationFormDiv').querySelector('#'+i).addEventListener('dragover',function(event){
             event.preventDefault();
             cloneObject.classList.remove('dragging');
             document.querySelector('#educationFormDiv').querySelector('#'+i).classList.add('dragging');
             educationFormArray.forEach(function(i){document.querySelector('#educationFormDiv').querySelector('#'+i).setAttribute('draggable',false);});

            });

                document.querySelector('#educationFormDiv').querySelector('#'+i).addEventListener('drop',function(event){
                event.preventDefault();
                var data = event.dataTransfer.getData("Text");
                console.log(data);
                console.log(event.target);
               var parentNode = document.querySelector('#educationFormDiv');
               parentNode.insertBefore(document.querySelector('#'+data),event.target);
                 //   data,event.target);
            console.log('dropped');

            educationFormArray.forEach(function(i){document.querySelector('#educationFormDiv').querySelector('#'+i).classList.remove('dragging');});

            });
            });
        });
        break;


        case 'experienceFormLink':currentFormDiv=document.querySelector('#experienceFormDiv');;
        var currentForm = document.querySelector('#'+experienceFormArray[0]) ;
        cloneObject = currentForm.cloneNode(true);
        nofExperienceForms++;
        cloneObject.id="experienceForm"+nofExperienceForms;
        experienceFormArray.push(cloneObject.id);
        cloneObject.classList.add('newFormAdded');
        
        cloneObject.company.value='';
        cloneObject.designation.value='';
        cloneObject.date.value='';
        cloneObject.details.value='';




        currentFormDiv.appendChild(cloneObject);
   //delete button code.
        var delButton = cloneObject.querySelector('#deleteSectionButton');
        if(experienceFormArray.length==1){
            document.querySelector('#experienceFormDiv').querySelector('#'+ experienceFormArray[0]).querySelector('#deleteSectionButton').disabled=true;
            }
            else{
         experienceFormArray.forEach(function(i){
          var mainForm=  document.getElementById('experienceFormDiv');
          var subForm=mainForm.querySelector( '#'+i);
          var deleteButton=subForm.querySelector('#deleteSectionButton');
          deleteButton.disabled=false;
         });
         delButton.addEventListener('click',function(){
         experienceFormArray.splice(experienceFormArray.indexOf(cloneObject.id),1);
         cloneObject.remove();
         console.log(experienceFormArray);
         if(experienceFormArray.length==1){
            document.querySelector('#experienceFormDiv').querySelector('#'+ experienceFormArray[0]).querySelector('#deleteSectionButton').disabled=true;
            }
     });
    }

   //move section button.

   var moveSectionButton = cloneObject.querySelector('#moveSectionButton');
   moveSectionButton.addEventListener('click',function(){
       console.log('drag click');
       cloneObject.classList.add('dragging');
       cloneObject.addEventListener('dragstart',function(event){
           console.log('inside dragstart listener');
       event.dataTransfer.setData('Text',event.target.id);
       console.log('dragging');

   });


   experienceFormArray.forEach(function(i){
      document.querySelector('#experienceFormDiv').querySelector('#'+i).addEventListener('dragover',function(event){
      event.preventDefault();
      cloneObject.classList.remove('dragging');
      document.querySelector('#experienceFormDiv').querySelector('#'+i).classList.add('dragging');
     });

         document.querySelector('#experienceFormDiv').querySelector('#'+i).addEventListener('drop',function(event){
         event.preventDefault();
         var data = event.dataTransfer.getData("Text");
         console.log(data);
         console.log(event.target);
        var parentNode = document.querySelector('#experienceFormDiv');
        parentNode.insertBefore(document.querySelector('#'+data),event.target);
          //   data,event.target);
         console.log('dropped');

         experienceFormArray.forEach(function(i){document.querySelector('#experienceFormDiv').querySelector('#'+i).classList.remove('dragging');});


     });
     });
 });

        break;

     /*   case 'skillsFormLink':currentFormDiv=document.querySelector('#skillsFormDiv');
        var currentForm = document.querySelector('#skillsForm') ;
        cloneObject = currentForm.cloneNode(true);
        currentFormDiv.appendChild(cloneObject);;break;*/

        case 'certificatesFormLink': currentFormDiv=document.querySelector('#certificatesFormDiv');
        var currentForm = document.querySelector('#'+certificatesFormArray[0]) ;
        cloneObject = currentForm.cloneNode(true);
        nofCertificateForms++;
        cloneObject.id="certificatesForm"+nofCertificateForms;
        certificatesFormArray.push(cloneObject.id);
        cloneObject.classList.add('newFormAdded');

        cloneObject.nameOfCertificate.value='';
        cloneObject.certifyingAuthority.value='';
        cloneObject.dateOfCertification.value='';
        cloneObject.certificateDetails.value='';

        currentFormDiv.appendChild(cloneObject);
        
        
//delete button;        

        var delButton = cloneObject.querySelector('#deleteSectionButton');
        if(certificatesFormArray.length==1){
            document.querySelector('#certificatesFormDiv').querySelector('#'+certificatesFormArray[0]).querySelector('#deleteSectionButton').disabled=true;
            }
            else{
         certificatesFormArray.forEach(function(i){
          var mainForm=  document.getElementById('certificatesFormDiv');
          var subForm=mainForm.querySelector( '#'+i);
          var deleteButton=subForm.querySelector('#deleteSectionButton');
          deleteButton.disabled=false;
         });
         delButton.addEventListener('click',function(){
         certificatesFormArray.splice(certificatesFormArray.indexOf(cloneObject.id),1);
         cloneObject.remove();
         console.log(certificatesFormArray);
         if(certificatesFormArray.length==1){
            document.querySelector('#certificatesFormDiv').querySelector('#'+ certificatesFormArray[0]).querySelector('#deleteSectionButton').disabled=true;
            }
     });
    }
        
        //move section


        var moveSectionButton = cloneObject.querySelector('#moveSectionButton');
        moveSectionButton.addEventListener('click',function(){
            console.log('drag click');
            cloneObject.classList.add('dragging');
            cloneObject.addEventListener('dragstart',function(event){
                console.log('inside dragstart listener');
            event.dataTransfer.setData('Text',event.target.id);
            console.log('dragging');
     
        });
     
     
       certificatesFormArray.forEach(function(i){
           document.querySelector('#certificatesFormDiv').querySelector('#'+i).addEventListener('dragover',function(event){
           event.preventDefault();
           cloneObject.classList.remove('dragging');
           document.querySelector('#certificatesFormDiv').querySelector('#'+i).classList.add('dragging');
          });
     
              document.querySelector('#certificatesFormDiv').querySelector('#'+i).addEventListener('drop',function(event){
              event.preventDefault();
              var data = event.dataTransfer.getData("Text");
              console.log(data);
              console.log(event.target);
             var parentNode = document.querySelector('#certificatesFormDiv');
             parentNode.insertBefore(document.querySelector('#'+data),event.target);
               //   data,event.target);
              console.log('dropped');
     
              certificatesFormArray.forEach(function(i){document.querySelector('#certificatesFormDiv').querySelector('#'+i).classList.remove('dragging');});
     
     
          });
          });
      });
     


        
        break;


        case 'publicationsFormLink': currentFormDiv=document.querySelector('#publicationsFormDiv');
        var currentForm = document.querySelector('#'+publicationsFormArray[0]) ;
        cloneObject = currentForm.cloneNode(true);
        nofPublicationForms++;
        cloneObject.id="publicationsForm"+nofPublicationForms;
        publicationsFormArray.push(cloneObject.id);
        cloneObject.classList.add('newFormAdded');

       cloneObject.publicationTitle.value='';
       cloneObject.publisher.value='';
       cloneObject.publishDate.value='';
       cloneObject.publicationDetails.value='';

        currentFormDiv.appendChild(cloneObject);
        
        //delete button

        var delButton = cloneObject.querySelector('#deleteSectionButton');
        if(publicationsFormArray.length==1){
            document.querySelector('#publicationsFormDiv').querySelector('#'+publicationsFormArray[0]).querySelector('#deleteSectionButton').disabled=true;
            }
            else{
         publicationsFormArray.forEach(function(i){
          var mainForm=  document.getElementById('publicationsFormDiv');
          var subForm=mainForm.querySelector( '#'+i);
          var deleteButton=subForm.querySelector('#deleteSectionButton');
          deleteButton.disabled=false;
         });
         delButton.addEventListener('click',function(){
         publicationsFormArray.splice(publicationsFormArray.indexOf(cloneObject.id),1);
         cloneObject.remove();
         console.log(publicationsFormArray);
         if(publicationsFormArray.length==1){
            document.querySelector('#publicationsFormDiv').querySelector('#'+ publicationsFormArray[0]).querySelector('#deleteSectionButton').disabled=true;
            }
     });
    }
        
        //move section

        var moveSectionButton = cloneObject.querySelector('#moveSectionButton');
        moveSectionButton.addEventListener('click',function(){
            console.log('drag click');
            cloneObject.classList.add('dragging');
            cloneObject.addEventListener('dragstart',function(event){
                console.log('inside dragstart listener');
            event.dataTransfer.setData('Text',event.target.id);
            console.log('dragging');
     
        });
     
     
        publicationsFormArray.forEach(function(i){
           document.querySelector('#publicationsFormDiv').querySelector('#'+i).addEventListener('dragover',function(event){
           event.preventDefault();
           cloneObject.classList.remove('dragging');
           document.querySelector('#publicationsFormDiv').querySelector('#'+i).classList.add('dragging');
          });
     
              document.querySelector('#publicationsFormDiv').querySelector('#'+i).addEventListener('drop',function(event){
              event.preventDefault();
              var data = event.dataTransfer.getData("Text");
              console.log(data);
              console.log(event.target);
             var parentNode = document.querySelector('#publicationsFormDiv');
             parentNode.insertBefore(document.querySelector('#'+data),event.target);
               //   data,event.target);
              console.log('dropped');
     
              publicationsFormArray.forEach(function(i){document.querySelector('#publicationsFormDiv').querySelector('#'+i).classList.remove('dragging');});
     
     
          });
          });
      });
        
        break;


        case 'projectsFormLink': currentFormDiv=document.querySelector('#projectsFormDiv');
        var currentForm = document.querySelector('#'+projectsFormArray[0]) ;
        cloneObject = currentForm.cloneNode(true);
        nofProjectForms++;
        cloneObject.id="projectsForm"+nofProjectForms;
        projectsFormArray.push(cloneObject.id);
        cloneObject.classList.add('newFormAdded');

        cloneObject.projectTitle.value='';
        cloneObject.projectURL.value='';
        cloneObject.projectDate.value='';
        cloneObject.projectDetails.value='';

        currentFormDiv.appendChild(cloneObject);
        
        //delete Button
        
        
        var delButton = cloneObject.querySelector('#deleteSectionButton');
        if(projectsFormArray.length==1){
            document.querySelector('#projectsFormDiv').querySelector('#'+projectsFormArray[0]).querySelector('#deleteSectionButton').disabled=true;
            }
            else{
          projectsFormArray.forEach(function(i){
          var mainForm=  document.getElementById('projectsFormDiv');
          var subForm=mainForm.querySelector( '#'+i);
          var deleteButton=subForm.querySelector('#deleteSectionButton');
          deleteButton.disabled=false;
         });
         delButton.addEventListener('click',function(){
        projectsFormArray.splice(projectsFormArray.indexOf(cloneObject.id),1);
         cloneObject.remove();
         console.log(projectsFormArray);
         if(projectsFormArray.length==1){
            document.querySelector('#projectsFormDiv').querySelector('#'+ projectsFormArray[0]).querySelector('#deleteSectionButton').disabled=true;
            }
     });
    }
        
      
 //move section
//todo
var moveSectionButton = cloneObject.querySelector('#moveSectionButton');
moveSectionButton.addEventListener('click',function(){
    console.log('drag click');
    cloneObject.classList.add('dragging');
    cloneObject.addEventListener('dragstart',function(event){
        console.log('inside dragstart listener');
    event.dataTransfer.setData('Text',event.target.id);
    console.log('dragging');

});


projectsFormArray.forEach(function(i){
   document.querySelector('#projectsFormDiv').querySelector('#'+i).addEventListener('dragover',function(event){
   event.preventDefault();
   cloneObject.classList.remove('dragging');
   document.querySelector('#projectsFormDiv').querySelector('#'+i).classList.add('dragging');
  });

      document.querySelector('#projectsFormDiv').querySelector('#'+i).addEventListener('drop',function(event){
      event.preventDefault();
      var data = event.dataTransfer.getData("Text");
      console.log(data);
      console.log(event.target);
     var parentNode = document.querySelector('#projectsFormDiv');
     parentNode.insertBefore(document.querySelector('#'+data),event.target);
       //   data,event.target);
      console.log('dropped');

      projectsFormArray.forEach(function(i){document.querySelector('#projectsFormDiv').querySelector('#'+i).classList.remove('dragging');});


  });
  });
});
 
        
        break;


        case 'volunteeringFormLink': currentFormDiv=document.querySelector('#volunteeringFormDiv');
        var currentForm = document.querySelector('#'+volunteeringFormArray[0]) ;
        cloneObject = currentForm.cloneNode(true);
        nofVolunteeringForms++;
        cloneObject.id="volunteeringForm"+nofVolunteeringForms;
        cloneObject.classList.add('newFormAdded');
        volunteeringFormArray.push(cloneObject.id);

        cloneObject.volunteeringOrganization.value='';
        cloneObject.volunteeringCause.value='';
        cloneObject.volunteeringDates.value='';
        cloneObject.volunteeringDetails.value='';

        currentFormDiv.appendChild(cloneObject);
        
        //del Button
        var delButton = cloneObject.querySelector('#deleteSectionButton');
        if(volunteeringFormArray.length==1){
            document.querySelector('#volunteeringFormDiv').querySelector('#'+volunteeringFormArray[0]).querySelector('#deleteSectionButton').disabled=true;
            }
            else{
          volunteeringFormArray.forEach(function(i){
          var mainForm=  document.getElementById('volunteeringFormDiv');
          var subForm=mainForm.querySelector( '#'+i);
          var deleteButton=subForm.querySelector('#deleteSectionButton');
          deleteButton.disabled=false;
         });
         delButton.addEventListener('click',function(){
        volunteeringFormArray.splice(volunteeringFormArray.indexOf(cloneObject.id),1);
         cloneObject.remove();
         console.log(volunteeringFormArray);
         if(volunteeringFormArray.length==1){
            document.querySelector('#volunteeringFormDiv').querySelector('#'+ volunteeringFormArray[0]).querySelector('#deleteSectionButton').disabled=true;
            }
     });
    }
        
         //move section

         var moveSectionButton = cloneObject.querySelector('#moveSectionButton');
         moveSectionButton.addEventListener('click',function(){
             console.log('drag click');
             cloneObject.classList.add('dragging');
             cloneObject.addEventListener('dragstart',function(event){
                 console.log('inside dragstart listener');
             event.dataTransfer.setData('Text',event.target.id);
             console.log('dragging');
      
         });
      
      
         volunteeringFormArray.forEach(function(i){
            document.querySelector('#volunteeringFormDiv').querySelector('#'+i).addEventListener('dragover',function(event){
            event.preventDefault();
            cloneObject.classList.remove('dragging');
            document.querySelector('#volunteeringFormDiv').querySelector('#'+i).classList.add('dragging');
           });
      
               document.querySelector('#volunteeringFormDiv').querySelector('#'+i).addEventListener('drop',function(event){
               event.preventDefault();
               var data = event.dataTransfer.getData("Text");
               console.log(data);
               console.log(event.target);
              var parentNode = document.querySelector('#volunteeringFormDiv');
              parentNode.insertBefore(document.querySelector('#'+data),event.target);
                //   data,event.target);
               console.log('dropped');
      
               volunteeringFormArray.forEach(function(i){document.querySelector('#volunteeringFormDiv').querySelector('#'+i).classList.remove('dragging');});
      
      
           });
           });
       });
         
        
        ;break;



        case 'languagesFormLink': currentFormDiv=document.querySelector('#langFormDiv');
        var currentForm = document.querySelector('#'+langFormArray[0]) ;
        cloneObject = currentForm.cloneNode(true);
        nofLanguageForms++;
        cloneObject.id="langForm"+nofLanguageForms;
        cloneObject.classList.add('newFormAdded');
        langFormArray.push(cloneObject.id);

        cloneObject.lang.value='';
        cloneObject.langProficiency.value='';

        currentFormDiv.appendChild(cloneObject);
        
        
        
         //del Button
         var delButton = cloneObject.querySelector('#deleteSectionButton');
         if(langFormArray.length==1){
             document.querySelector('#langFormDiv').querySelector('#'+langFormArray[0]).querySelector('#deleteSectionButton').disabled=true;
             }
             else{
           langFormArray.forEach(function(i){
           var mainForm=  document.getElementById('langFormDiv');
           var subForm=mainForm.querySelector( '#'+i);
           var deleteButton=subForm.querySelector('#deleteSectionButton');
           deleteButton.disabled=false;
          });
          delButton.addEventListener('click',function(){
         langFormArray.splice(langFormArray.indexOf(cloneObject.id),1);
          cloneObject.remove();
          console.log(langFormArray);
          if(langFormArray.length==1){
             document.querySelector('#langFormDiv').querySelector('#'+ langFormArray[0]).querySelector('#deleteSectionButton').disabled=true;
             }
      });
     }
        
        
        
         //move section

         var moveSectionButton = cloneObject.querySelector('#moveSectionButton');
         moveSectionButton.addEventListener('click',function(){
             console.log('drag click');
             cloneObject.classList.add('dragging');
             cloneObject.addEventListener('dragstart',function(event){
                 console.log('inside dragstart listener');
             event.dataTransfer.setData('Text',event.target.id);
             console.log('dragging');
      
         });
      
      
        langFormArray.forEach(function(i){
            document.querySelector('#langFormDiv').querySelector('#'+i).addEventListener('dragover',function(event){
            event.preventDefault();
            cloneObject.classList.remove('dragging');
            document.querySelector('#langFormDiv').querySelector('#'+i).classList.add('dragging');
           });
      
               document.querySelector('#langFormDiv').querySelector('#'+i).addEventListener('drop',function(event){
               event.preventDefault();
               var data = event.dataTransfer.getData("Text");
               console.log(data);
               console.log(event.target);
              var parentNode = document.querySelector('#langFormDiv');
              parentNode.insertBefore(document.querySelector('#'+data),event.target);
                //   data,event.target);
               console.log('dropped');
      
               langFormArray.forEach(function(i){document.querySelector('#langFormDiv').querySelector('#'+i).classList.remove('dragging');});
      
      
           });
           });
       });
         
        
        break;


        case 'recommendationFormLink':currentFormDiv=document.querySelector('#recommendationFormDiv');
        var currentForm = document.querySelector('#'+recommendationFormArray[0]) ;
        cloneObject = currentForm.cloneNode(true);
        nofRecommendationForms++;
        cloneObject.id="recommendationForm"+nofRecommendationForms;
        recommendationFormArray.push(cloneObject.id);
        cloneObject.classList.add('newFormAdded');

        cloneObject.recommenderName.value='';
        cloneObject.recommenderDesignation.value='';
        cloneObject.recommendationDates.value='';
        cloneObject.recommendationDetails.value='';

        currentFormDiv.appendChild(cloneObject);
        
        //del Button
        var delButton = cloneObject.querySelector('#deleteSectionButton');
        if(recommendationFormArray.length==1){
            document.querySelector('#recommendationFormDiv').querySelector('#'+recommendationFormArray[0]).querySelector('#deleteSectionButton').disabled=true;
            }
            else{
          recommendationFormArray.forEach(function(i){
          var mainForm=  document.getElementById('recommendationFormDiv');
          var subForm=mainForm.querySelector( '#'+i);
          var deleteButton=subForm.querySelector('#deleteSectionButton');
          deleteButton.disabled=false;
         });
         delButton.addEventListener('click',function(){
        recommendationFormArray.splice(recommendationFormArray.indexOf(cloneObject.id),1);
         cloneObject.remove();
         console.log(recommendationFormArray);
         if(recommendationFormArray.length==1){
            document.querySelector('#recommendationFormDiv').querySelector('#'+ recommendationFormArray[0]).querySelector('#deleteSectionButton').disabled=true;
            }
     });
    }
       
       
       
        //move section

        var moveSectionButton = cloneObject.querySelector('#moveSectionButton');
        moveSectionButton.addEventListener('click',function(){
            console.log('drag click');
            cloneObject.classList.add('dragging');
            cloneObject.addEventListener('dragstart',function(event){
                console.log('inside dragstart listener');
            event.dataTransfer.setData('Text',event.target.id);
            console.log('dragging');
     
        });
     
     
       recommendationFormArray.forEach(function(i){
           document.querySelector('#recommendationFormDiv').querySelector('#'+i).addEventListener('dragover',function(event){
           event.preventDefault();
           cloneObject.classList.remove('dragging');
           document.querySelector('#recommendationFormDiv').querySelector('#'+i).classList.add('dragging');
          });
     
              document.querySelector('#recommendationFormDiv').querySelector('#'+i).addEventListener('drop',function(event){
              event.preventDefault();
              var data = event.dataTransfer.getData("Text");
              console.log(data);
              console.log(event.target);
             var parentNode = document.querySelector('#recommendationFormDiv');
             parentNode.insertBefore(document.querySelector('#'+data),event.target);
               //   data,event.target);
              console.log('dropped');
     
              recommendationFormArray.forEach(function(i){document.querySelector('#recommendationFormDiv').querySelector('#'+i).classList.remove('dragging');});
     
     
          });
          });
      });
        
       
        
        break;
    }

   // console.log(currentFormDiv.id);

}

function setMarksFormat(obj){
    var form;
    if(document.querySelector('#collegeLink').classList.contains('active')){
    form=obj.querySelector('#collegeForm');}
    else{
        form=obj.querySelector('#schoolForm');
    }
    if(form.marksFormat.value==='Percent')
    {
        window.alert('% selected');
        form.marks.value='';
        form.querySelector('#maxCGP').style.display='none';
        
    }
    
    else if(form.marksFormat.value==='CGP')
        {window.alert('cgpa selected');
        form.marks.value='';
        form.querySelector('#maxCGP').style.display='block';
    }
    }