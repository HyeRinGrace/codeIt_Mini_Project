const buttons = document.querySelectorAll('buttons');
const result = ['가위','바위','보']; //컴퓨터가 랜덤으로 값을 뽑기위해 사용
const computer = document.querySelector('.computer');
const user = document.querySelector('.user');
const winner = document.querySelector('.result');


//값을 보여주는 함수
const show = (user,computer,winner) => {
    user.innerText = user;
    computer.innerText = computer;
    winner.innerText = winner;
}


const play = (event) =>{
    const user = event.target.innerText;
    const randomIndex = Math.floor(Math.random() * 3);
    // Math.random < 3; 이라고 생각하면됨 Math.random() 함수는 1미만의 부동 소수를 나타냄
    //floor은 가장 큰 값을 반환시켜준다.
    //const random = Math.random() *3;
    //const random_result = random.toFixed(0); 도 같은 결과값이다.
    const computer = result[randomIndex];

    game(user,computer);
}

//forEach 문을 통해 배열을 순회(button은 해당요소를 의미함)
buttons.forEach((button) => {
    button.addEventListener('click',play);
})


//게임을 판별하는 부분
const game = (user,computer) =>{
    let message;
    if(user === computer){
        message = '무승부';
    }else{
        switch(user + computer){
            case '가위바위':
            case '보가위':
            case '주먹보':
                message = "컴퓨터 승리";
                break;
            
            case '바위가위':
            case '가위보':
            case '보주먹':
                message = "유저 승리";
                break;
        }
    }
    show(computer,user,message);


}