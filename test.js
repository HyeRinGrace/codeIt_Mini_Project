// 1. "안녕 내 이름은 제시카야"라는 문장을 프린트하는 함수 'greet’를 만드시오
// 2. 이름을 매개변수로 전달받아 다양한 이름을 프린트 할 수 있게 함수를 수정하시오 예) “안녕 내 이름은 에밀리야”, “안녕 내 이름은 할리야”
// 3. 매개변수로 전달받은 이름을 반환하게 함수를 수정하시오
// 4. meetAt 함수를 만들어주세요.(인자 3개)  ex_) meetAt(2022)  ; // 2022년 meetAt(1987,10,28) => 1987/10/28
// 5. findSmallestElement 함수를 구현해 주세요. findSmallestElement 의 arr 인자는 숫자 값으로만 이루어진 배열입니다. arr 의 값들 중 가장 작은 값을 리턴 해주세요. 
// 만일 arr 가 비어있으면 0을 리턴 해주세요. 예를 들어, 다음과 같은 배열이 인자(input)으로 들어왔다면 0이 리턴 되어야 합니다.
 // 이용되는 배열
 // [100,200,3,0,2,1]



 //1
// function greet(){
//     console.log('안녕 내 이름은 제시카야');

// }
// greet();

//2
// function name(name){
//     console.log(`안녕 내 이름은 ${name} 이야`);
// }

// name('에밀리');
// name('할리');

//3
// function name(name){
//     const result = `안녕 내 이름은 ${name} 이야`;
//     return result;
// }
// const real = name('혜린');
// console.log(real);

//4
// const meetAt = (year,month,day) =>{
//     if(month == null && day == null){
//         console.log(`${year}년`);
//     }else if(day == null){
//         console.log(`${year}년 ${month}월`);
//     }else{
//         console.log(`${year}/${month}/${day}`);
//     }
// }
// meetAt(1982);
// meetAt(1984,2);
// meetAt(1987,6,27);


//5
// function minFind(){
//     const ar = [100,200,3,0,2,1];
//     const sort = ar.sort((a,b)=>(a-b));
//     const min = sort[0];

//     return min;
// }

// const min = minFind();
// console.log(min);

//6 
// 돈을 매개변수로 받으면 몇개의 지폐와 동전이 필요한지 최소 개수를 계산해주는 함수를 만드시오
// 12300인 경우
//  50000 X 0
//  10000 X 1
//  5000  X 0
//  1000 X 2
//  500 X 0
//  100 X 3

function fiveMil(money){
    let fiveMillion = 50000;

    if(money >= fiveMillion){
        let mok = (money / fiveMillion).toFixed(0);
        let leaveCharge = money - (fiveMillion * mok);
        console.log(`50,000원 권 : ${mok}`);
        oneMil(leaveCharge);
    }else{
        oneMil(money);
    }
}


function oneMil(money){
    let oneMillion = 10000;
    if(money >= oneMillion){
        let mok = (money / oneMillion).toFixed(0);
        let leaveCharge = money - (oneMillion * mok);
        fiveTho(leaveCharge);
        console.log(`10,000원 권 : ${mok}`);

    }else{
        fiveTho(money);
    }

}

function fiveTho(money){
    let fiveThousand = 5000;

    if(money >= fiveThousand){
        let mok = (fiveThousand / money).toFixed(0);
        let leaveCharge = money - (fiveThousand * mok);
        oneTho(leaveCharge);
        console.log(`5,000원 권 : ${mok}`);
    }else{
        oneTho(money);
    }

}

function oneTho(money){
    let oneThousand = 1000;

    if(money >= oneThousand){
        let mok = (money / oneThousand).toFixed(0);
        let leaveCharge = money - (oneThousand * mok);
        fiveHun(leaveCharge);
        console.log(`1,000원 권 : ${mok}`);
    }else{
        fiveHun(money);
    }

}

function fiveHun(money){
    let fiveHundred = 500;

    if(money >= fiveHundred){
        let mok = (money / fiveHundred).toFixed(0);
        let leaveCharge = money - (fiveHundred * mok);
        oneHun(leaveCharge);
        console.log(`500원 권 : ${mok}`);
    }else{
        oneHun(money);
    }

}

function oneHun(money){
    let oneHundred = 100;

    if(money >= oneHundred){
        let mok = (money / oneHundred).toFixed(0);
        let leaveCharge = money - (oneHundred * mok);
        console.log(`100원 권 : ${mok}`);
        if(leaveCharge == 0){
            return;
        }
    }
}

fiveMil(12300);




// 강사님 풀이
// let unit = [50000,10000,5000,1000,500,100]
// function changeCalculate(money) {
//   for(let i=0;i<unit.length;i++){
    
//       let num = Math.floor(money / unit[i])
//       console.log(unit[i]+"X"+num)
//       money = money - (unit[i]*num)
    
//   }
// }

// changeCalculate(12300)
