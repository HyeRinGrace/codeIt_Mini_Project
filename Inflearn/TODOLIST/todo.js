const add = document.querySelector('button');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

/*
1. 삭제 버튼 추가
2. 저장 되게 (새로고침시에도 안날아가게)
3. 삭제 버튼 = > 저장된 데이터 업데이트
*/

const toDos = [];

const save = () =>{
    localStorage.setItem('toDos',JSON.stringify(toDos));
}

const deleteButton = (event)=>{
    const target = event.target.parentElement;
    target.remove();
}

const handler = (event) => {
    event.preventDefault();

    const todo = {
        id: Date.now(),
        text: input.value,
    };

    toDos.push(todo);
    addList(todo);
    save();
    input.value = "";
}


const addList = (todo) =>{
    if(todo.text!= ''){
        const li = document.createElement('li');
        const button = document.createElement('button');
        const span = document.createElement('span');

        span.innerText = todo.text;
        button.innerText = '삭제';
        
        button.addEventListener('click',deleteButton);

        li.appendChild(span);
        li.appendChild(button);
        ul.appendChild(li);
    }
}


add.addEventListener('click',handler);

// 로컬스토리지 저장: localStorage.setItem(첫번째는 키값, 두번째 인자 저장할 데이터);
// 로컬스토리지 값 가져오기 : localStorage.getItem(우리가 전달한 키값);