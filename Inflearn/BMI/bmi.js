const form = document.querySelector('.container');

const display = (bmi) =>{
    const result = document.querySelector('.result');
    let group;

    if(bmi >= 30){
        group = '중등도비만';
    }else if(bmi >= 25){
        group = '고도비만';
    }else if(bmi >= 23){
        group = '과체중';
    }else if(bmi >= 18.5){
        group = '정상';
    }else{
        group = '저체중';
    };

    result.innerText = `${bmi.toFixed(0)} => ${group}`;
}


const Calculator = (weight,height) =>{

    return weight / (height * height).toFixed(1);
}

const formHandler = (event) => {

    event.preventDefault();

    const height_Input = document.querySelector('.height');
    const weight_Input = document.querySelector('.weight');

    if(height_Input.Value !== '' && weight_Input.Value !== ''){
        const height = height_Input.value / 100;
        const weight = weight_Input.value; 
        const bmi = Calculator(weight,height);
        display(bmi);
        height_Input.value = '';
        weight_Input.value = '';
    };

}

form.addEventListener('submit',formHandler);