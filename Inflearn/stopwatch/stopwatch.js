const start_btn = document.querySelector('.start');
const stop_btn = document.querySelector('.stop');
const reset_btn = document.querySelector('.reset');

let timerID; // timerID는 변경되기 때문에 따로 빼줘야함
let [msec,sec,min] = [0,0,0]; //구조분해 할당


const display = () =>{
    const timer = document.querySelector('.time');
    const fMin = min < 10 ? `0${min}` : min;
    const fSec = sec < 10 ? `0${sec}` : sec;
    const fMsec = msec < 10 ? `0${msec}` : msec;

    timer.innerText = `${fMin}:${fSec}:${fMsec}`;
}

const timer = () =>{
    msec++;

    if(msec === 100){
        msec = 0;
        sec++;

        if(sec === 60){
            sec = 0;
            min++;
        }
    } 
    display();
}

const start = () =>{
    timerID = setInterval(timer,10); // 0.01초마다 증가해야하기 때문이다.
}

const stop =() =>{
    clearInterval(timerID);
}

const reset =()=>{
    stop(); //스탑으로 일단 정지
    [msec,sec,min] = [0,0,0]; // 0으로 초기화
    display(); //보여주기
}

start_btn.addEventListener('click',start);
stop_btn.addEventListener('click',stop);
reset_btn.addEventListener('click',reset);