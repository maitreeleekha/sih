window.onload=init;
function init(){

 var takeTest=   document.querySelector('#takeTest');
 takeTest.addEventListener('mouseover',function(){
     document.querySelector('#image').classList.add('growBig');
 });
 takeTest.addEventListener('mouseout',function(){
    document.querySelector('#image').classList.remove('growBig');
 })
takeTest.addEventListener('click',function(){
    location.assign('psychTestQuestions.html')
})
}