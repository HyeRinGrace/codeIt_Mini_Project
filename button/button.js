const btn = document.querySelector('.click');
const container = document.querySelector('.container');

btn.addEventListener('click',()=>{
    alert('안뇽');
    container.style.display = "flex";
})