window.onload=init;
var UserName=null;
var UserCity;
var UserState;
var UserEmail;
function init(){

    
    var loginorout=document.querySelector('#loginorout');
    var check = isUserLoggedIn();
if(check.ans==false){
    
    document.querySelector('#login').innerHTML='Login';
}
    if(check.ans==true)
    {
        document.querySelector('#login').innerHTML='Logout';
        UserName=check.name[0]+'%20';
    for(var i=1;i<check.name.length;i++){

        if(i==check.name.length-1){
            UserName+=check.name[i];
        }
        else{
        UserName+=check.name[i]+'%20';}
    }

    UserCity=check.city[0]+'%20';
    for(var i=1;i<check.city.length;i++){
        
                if(i==check.city.length-1){
                    UserCity+=check.city[i];
                }
                else{
                UserCity+=check.city[i]+'%20';}
            }

    UserEmail=check.email;
    }

    UserState=check.state[0]+'%20';
    for(var i=1;i<check.state.length;i++){
        
                if(i==check.statae.length-1){
                    UserState+=check.state[i];
                }
                else{
                UserState+=check.state[i]+'%20';}
            }
    




    var toggleButton= document.querySelector('#toggleButton');
    if(UserName)
   {
       document.querySelector('#dashboard').style.display='block';
       $('#dashboard').attr('href', "profileDashboard.html"+"?UserName="+UserName+"&UserCity="+UserCity+"&UserState="+UserState+"&UserEmail="+UserEmail);
       //console.log()
    } 

   else{
    $('dashboard').attr('href','#');
    document.querySelector('#dashboard').style.display='none'
    
   }
    var dashboard = document.querySelector('#dashboard');
    dashboard.addEventListener('click',function(){
        if(UserName){

            window.alert('goto dashboard!');
           // location.assign("profileDashboard.html"+"?UserName="+UserName+"&UserCity="+UserCity+"&UserState="+UserState+"&UserEmail="+UserEmail);
        }
        else{
        window.alert('login first!');
    }
    });


    if(check.ans==true){
        var uname=check.name[0];
       
    }
    else{
     
    }
    
    $('.dropdown-menu > a:not(a[href="#"])').on('click', function() {
        self.location = $(this).attr('href');
    });

    document.querySelector('#toggleButton').addEventListener('click',function(){
        console.log('expand');
        var check = document.querySelector('#navbarSupportedContent').classList.contains('show');
        if(!check){
            console.log(check);
            document.querySelector('#banner').style.display='none';
        }
        else{
            document.querySelector('#banner').style.display='block';
        }

    })


}
   
function isUserLoggedIn(){
var userName = location.search;
if(!userName){
    return {
        name: '',
        city:'',
        state:'',
        email:'',
        ans:false
    };
}

userName = userName.substr(1);
var name = (/^name=/);
var city = (/^city=/);
var state = (/^state/);
var email = (/^email=/);
var Name =userName.split('&').filter(function(item){
    return name.test(item);
});

var City =userName.split('&').filter(function(item){
return city.test(item);
});

var State =userName.split('&').filter(function(item){
    return state.test(item);
    });

    var Email =userName.split('&').filter(function(item){
        return email.test(item);
        });

if(!Name.length){return {
    name: '',
    city:'',
    state:'',
    email:'',
    ans:false
};}

Name = Name[0].replace("name=", "");
City=City[0].replace("city=", "");
State=State[0].replace("state=", "");
Email=Email[0].replace("email=", "");

//userName = atob(userName);
//userName = JSON.parse(userName);
var returnObj ={
    name: Name.split('%20'),//JSON.stringify(userName),
    city: City.split('%20'),
    state: State.split('%20'),
    email:Email,
    ans:  true
};
return returnObj;

}

function openDashboard(){
    location.assign('profileDashboard.html');
}

function checkToggle(){

var navDiv=document.querySelector('navDiv');
if(navDiv.classList.contains('show')==true){
  var banner =  document.querySelector('#banner');
    banner.style.display='none';
}




}