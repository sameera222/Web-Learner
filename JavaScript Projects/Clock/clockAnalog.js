setInterval(() => {
    d =new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    hrotation = 30*htime + mtime/2;
    mrotation =6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
    
}, 1000);

setInterval(showTime, 1000);
function showTime(){
let date = new Date()  //defines current time and date
let hour = date.getHours() //These methods return the values when date is passed
let minute = date.getMinutes()
let second = date.getSeconds()
let session = "AM";

if(hour > 12){
 hour -= 12
  session = "PM"
}

if(hour == 0){
  hour = 12
  session = "AM"
}

hour = hour< 10? "0" + hour : hour;
minute = minute < 10? '0' + minute : minute;
second = second < 10? "0" + second: second;

let currentTime = hour + ":" + minute + ":" + second + session
document.getElementById('clock').innerHTML = currentTime;
}

showTime();








