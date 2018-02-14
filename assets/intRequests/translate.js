window.onload=init;
function init(){

    //TODO
    //placeholder
   //get inner html
  var text="hello world";
  var transText;
  var transButton = document.querySelector('#translate');
  transButton.addEventListener('click',function(){
     transText =  sendTranslateRequest(text);
  });

  //set back transText
}

function sendTranslateRequest(text){

    var form = document.querySelector('#languageSelect');
    var transFrom = form.transFrom.value;
    var transTo = form.transTo.value;

    var xhttp = new XMLHttpRequest();

    var formData = new FormData();
    formData.append('from',transFrom);
    formData.append('to',transTo);
    formData.append('text',text);

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 'success') {
           return xhttp.text;
        }
    };
    xhttp.open("POST", "/trans/", true);
    xhttp.send(formData);

}