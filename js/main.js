
// const currentIndex = 0;
// const wrap = document.querySelector('.wrap');
// const page = document.querySelector('.page');
// const dot = document.querySelector('.dot');
// const lis = wrap.getElementsByTagName('div');

// // lis.map((_page)=>{
// //     let pageid= 0;
// //     _page.setAttribute('id', pageid);
// //     ++pageid;
// // });

// //pagination도 id 부여해줘야함


// window.onmousewheel = function(e){
//     // console.log(e);
//     let d = e.wheelDelta;

//     if(d>0){

//         //currentIndex = page.id

//         // if(currentIndex === 0){
//         //     return;}

//         //pagination 이랑 page id 같으면 
        
//         lis[currentIndex].animate([{top: '-100%'}],500);
//         currentIndex++
//         // currentIndex.animate([{top: '-100%'}],500,swing)
//         // console.log('이전' + currentIndex);
//         // currentIndex=--currentIndex;

//         // currentIndex.style.top= '-100%'
//         console.log('올라가유')
        
//     }
//     else{console.log('내려가유')}

    
// }


// function showSlides(n) {
//     let slides = document.getElementsByClassName("item");
//     console.log(slideIndex)
//     if (n > slides.length-1) {
//     slideIndex = 1;
//     // slideIndex = slides.length
//     // return;
//     }
//     // console.log(n)
//     if (n < 1) {
//         slideIndex = slides.length;
//         // return;
//     }

//     for (let slide of slides) {
//         slide.style.display = "none";
//     }   

//     slides[slideIndex].style.display = "block"; 

//     // console.log(slides[slideIndex - 1])

//     // console.log(slides.length)
//     // console.log(slideIndex)/
// }

/////


/////////////////////////////

const preArrow = document.querySelector('.previous');
const nextArrow = document.querySelector('.next');
const lis = Array.from(document.getElementsByClassName('page'));
const dotCon = document.querySelector('ul');
const dotlist = Array.from(document.getElementsByClassName('dot'));
let currentIndex = 0;
// let nextIndex = 0;


preArrow.addEventListener('click',()=>{
    if(currentIndex - 1 >= 0){
        showSlides(--currentIndex);
    }
    console.log(currentIndex)
}); 

nextArrow.addEventListener('click',()=>{
    
    if(currentIndex <= lis.length-1){
        showSlides(++currentIndex);
    }
    console.log(currentIndex)
});

dotCon.addEventListener('click',(e)=>{
    let dotNum = Number(e.target.outerText);

    currentIndex = dotNum;
    if(typeof(dotNum) == 'number'){
        showSlides(dotNum - 1);
        
        if(dotNum < currentIndex){
            lis[dotNum].style.top = '-100%';
        }
    }
    
})



//id 넣어주려고 했는디
// dotlist.map((list)=>{
//     let i=0;
//     list.setAttribute('id',i)
//     i++
// });

function showSlides(n){
    if( n >= 0){
        // console.log(n);
        lis[n].style.top = '0';
        lis[n+1].style.top='100%';
        // currentIndex--;
    }else if(n < lis.length ){
        console.log('n'+n)
        lis[n-1].style.top='-100%';
        lis[n].style.top = '0';
    }
};

// window.onwheel = function(e){
//     // console.log(e);
//     let d = e.wheelDelta;


//         // clearTimeout(timeout);  //이전 휠 이벤트 제거
//         // timeout = setTimeout(function(){ //다시 휠 이벤트 발생  0.1초후
//         //     // to do
//         // }, 1000);

//     if(d>0){
        
//         // lis[n].style.top = '0';
//         // lis[n+1].style.top='100%';
//         console.log('올라가유')
        
//     }
//     else{console.log('내려가유')}

    
// }
