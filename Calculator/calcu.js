const time = new Date();
const time_hour = time.getHours();
const time_bun = time.getMinutes();
const time_cho = time.getSeconds();

const timer = document.querySelector(".timer");
timer.innerText = `${time_hour}:${time_bun}:${time_cho}`;


// 계산기 각 값 가져오기
// 
