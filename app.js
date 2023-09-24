function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');
    const cont = document.querySelector('body');

    if(hrs>=12){
        session.innerHTML='PM';
        cont.style.backgroundColor='Green';
        cont.style.transition='10s';      
    }else{
        session.innerHTML="AM";
    }
    if(hrs>12){
        hrs = hrs-12;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min
    document.getElementById('seconds').innerHTML = sec;

}
setInterval(displayTime,10);