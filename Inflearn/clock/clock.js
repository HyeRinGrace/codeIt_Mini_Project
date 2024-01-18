const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');


//setInterval(반복해서 실행할 함수, 딜레이 시간)
function clock(){
    const date = new Date();
    hour.innerText = date.getHours();
    minute.innerText = date.getMinutes();
    second.innerText = date.getSeconds();
}

setInterval(clock,1000);//1초