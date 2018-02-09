window.onload=init;
function init(){

    //15 min test
    var testOver=Date.now()+901000;
    //console.log(testOver);
    var timer = setInterval(function(){
        var gap = testOver-Date.now();
        var mins=Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
        var sec = Math.floor((gap % (1000 * 60)) / 1000);
       // console.log(mins+':'+sec);
      document.querySelector('#timerInner').innerHTML=mins+':'+sec;

    },1000);
}

