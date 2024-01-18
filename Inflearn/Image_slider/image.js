const images = document.querySelectorAll('.item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let index = 0; // 사진을 index 값으로 가져올거임
let lastIndex = images.length - 1; // 0, 1, 2

const updateImage = () =>{
    images.forEach((img) => {
        img.classList.remove('show');
    })

    images[index].classList.add('show');
}
const moveToPrev = () => {
    if(index === 0){
        index = lastIndex;
    }else{
        index--;
    }
    updateImage();
};

const nextToNext = () =>{
    if(index === lastIndex){
        index = 0;
    }else{
        index++;
    }
    updateImage();
};

prevButton.addEventListener('click',moveToPrev);
nextButton.addEventListener('click',nextToNext);
