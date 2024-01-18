// 필요한 쿼리 셀렉터 가져오기
const input = document.querySelector('.input_todo');
const btn = document.querySelector('.btn_todo');
const list = document.querySelector('.todolist');
const listContainer = document.querySelector('.todolist_container')
const delete_btn = document.createElement('btn_delete');

// 메모장 리스트 추가하기 
function add(){
    const li = document.createElement('li');
    const btn = document.createElement('button');

    if(!input.value){
        alert('please write context');
    }else{
        li.innerText = input.value;
        li.classList.add('item');
        btn.innerText = "x";
        btn.classList.add('btn_delete');

        listContainer.append(btn); //버튼을 list에다 추가하게 되면, 가운데 줄긋기가 동시반영이 되어버린다.
        list.append(li);
        input.value = "";
    }
}
btn.addEventListener('click', add);

// 메모장 입력 후 엔터키 눌렀을 경우 추가해주기
function enter(e){
    if(e.key === 'Enter' && !e.Shftkey){
        add();
        e.preventDefault();
    }
}
input.addEventListener('keypress',enter);


// 메모장 리스트 누른경우 누른 리스트에만 줄긋기
list.addEventListener('click',function(e){
    if(list){
        e.target.classList.toggle('done');
    }
})

//삭제하기 기능
delete_btn.addEventListener('click',function(e){
    removeChild(e.currentTarget.parentNode);
})
