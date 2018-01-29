window.onload=init;
function init(){

var chatRoomList=document.querySelectorAll('.chatRoom');
chatRoomList.forEach(function(e){
    e.addEventListener('click',function(){
        gotoRoom(e);
    });
});

}

function gotoRoom(e){
    
    var s=location.search;
    s=s.substr(1);
    var username=(/^username/);
    var Username=s.split('&').filter(function(item){
        return username.test(item);
    });
    Username=Username[0].replace("username=","");
    var roomName=e.innerHTML;
    location.assign('chatBox.html'+'?roomName='+roomName+'&username='+Username);


}