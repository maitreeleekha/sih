window.onload=init;
function init(){

var room=getRoomName();    
var grpNameDivs=document.querySelectorAll('.grpName');
console.log(grpNameDivs);
grpNameDivs.forEach(function(e){
    e.innerHTML=room;
});

document.querySelector('#send').addEventListener('click',function(){
    sendMessage();
});
}
 var i=0;
function sendMessage(){
    var message=document.querySelector('#message').value;
    console.log(message);
    document.querySelector('#message').value="";
    var messageDiv=document.createElement('div');
    messageDiv.innerHTML=message;
    if(i%2==0){
        messageDiv.classList.add('messageLeft');
    }
   else{
    messageDiv.classList.add('messageRight');
    
   }
   i++;
   
    document.querySelector('#mainChatArea').appendChild(messageDiv);



}
function getRoomName(){
    var info=location.search;
    info=info.substr(1);
    var roomName=(/^roomName=/);
    var Room=info.split('&').filter(function(item){
        return roomName.test(item);
    });
    Room=Room[0].replace("roomName=","");

    console.log(Room);
    return Room;
    
}