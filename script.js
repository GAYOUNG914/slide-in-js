const slideWrap = document.querySelector('.container');
const slideContainer = document.querySelector('.slider-container');
const slide = document.querySelectorAll('.slide');
const navPrev = document.getElementById('prev');
const navNext = document.getElementById('next');

let slideCount = slide.length;
let currentIndex = 0;
let start_x, end_x;
// ///////
slideContainer.addEventListener('pointerdown', function(e) {
    const currentT = e.currentTarget;
    start_x = e.pageX;
    console.log(start_x)
    currentT.addEventListener("pointermove", doslider);
    // currentT.setPointerCapture(e.pointerId);
});

slideContainer.addEventListener('pointerup', function(e) {
    const currentT = e.currentTarget;
    end_x = e.pageX;
    console.log(end_x)
    currentT.removeEventListener("pointermove", doslider);
    // currentT.releasePointerCapteur(e.pointerId);
});

function doslider(e) {
    //마우스 처음 좌표, 뗄 때 좌표 구하기
    //슬라이드 translate 앞에 마이너스 붙이면 되겠다
    e.currentTarget.style.transform = `translate(${-(start_x - end_x)}px)`;
}
//////

// elTarget.addEventListener('pointerdown', pointerDown);
// elTarget.addEventListener('pointerup', pointerUp);

// function prev(){

// }

// function next(){

// }

// function pointerDown(e){
//     start_x = e.pageX
// }

// function pointerUp(e){
//     end_x = e.pageX
//     if(start_x > end_x){
//         next();
//         }else{
//         prev();
//     }
// }

//슬라이드 있으면 가로로 배열
for(let i = 0; i < slideCount; i++){
    slide[i].style.left = i * 100 + '%';
}

//prev 버튼
navPrev.addEventListener('click',()=>{
    goToSlide(currentIndex - 1);
    if(currentIndex == -1){
        goToSlide(slideCount - 1);
    }else{
        goToSlide(currentIndex);
    }
});

//next 버튼
navNext.addEventListener('click',()=>{
    goToSlide(currentIndex + 1);
    if(currentIndex == slideCount){
        // navNext.classList.add('disabled');
        goToSlide(0);
    }else{
        // navNext.classList.remove('disabled');
        goToSlide(currentIndex);
    }
});

//touch start, move 
//땔 때는 슬라이드가 움직이면 안됨



function goToSlide(idx){
    slideContainer.classList.add('animated');
    slideContainer.style.left = -100 * idx + '%';
    currentIndex = idx;
}



//자동 슬라이드
// setInterval(()=>{
//     let nextIdx = (currentIndex + 1) % slideCount;
//     goToSlide(nextIdx);
// },2500);