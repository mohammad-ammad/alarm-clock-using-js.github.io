console.log('alarm clock');

//set up alarm

const mybtn = document.getElementById('mybtn');
mybtn.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log('set alarm');
    let myalarm = document.getElementById('myalarm');
    let alarmvalue = myalarm.value;
    let date = new Date(alarmvalue);
    console.log(date);
    let now = new Date();
    // console.log(now);
    let total = date - now;
    // console.log(total);
    if(total >= 0){
        setTimeout(() => {
            ringtone();
        }, total);
    }
       
})

//ringtone
const audio = new Audio('https://www.fesliyanstudios.com/play-mp3/4389');
let success = document.getElementById('success');
const ringtone = () =>{
    console.log('ringtone is working');
    success.classList.add('show');
    audio.play();
}
// https://www.fesliyanstudios.com/play-mp3/4389