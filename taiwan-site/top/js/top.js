'use strict'

//////クリックしたら画像が切り替わる /////////

const btn1 = document.getElementById('point1');
const btn2 = document.getElementById('point2');
const btn3 = document.getElementById('point3');
const btn4 = document.getElementById('point4');
const btn5 = document.getElementById('point5');

let img = document.getElementById('background1')

function setActiveButton(activeButton) {
    // すべてのボタンから 'show' クラスを削除
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove('show');
    }
    activeButton.classList.add('show');
}

btn1.addEventListener('click',function(){
    changeImage('top/image/sp/image1.jpg');
    setActiveButton('btn1');
})

btn2.addEventListener('click',function(){
    changeImage('top/image/sp/image2.jpg');
    setActiveButton('btn2');
})

btn3.addEventListener('click',function(){
    changeImage('top/image/sp/image3.jpg');
    setActiveButton('btn3');
})

btn4.addEventListener('click',function(){
    changeImage('top/image/sp/image4.jpg');
    setActiveButton('btn4');
})

btn5.addEventListener('click',function(){
    changeImage('top/image/sp/image5.jpg');
    setActiveButton('btn5');
})

// 画像を変える関数 ////
function changeImage(path) {
    img.src = path;
}

//// クリックしたら色を変える ////

const btn_all = document.querySelectorAll('.point')

for(let i = 0; i < btn_all.length; i++) {
    btn_all[i].addEventListener("click", () => {
    for(let j = 0; j < btn_all.length; j++) {
      if(btn_all[i] == btn_all[j]) {
        btn_all[j].classList.add("black");
      } else {
        btn_all[j].classList.remove("black");
      }
    }
  });
}

    const images = [
        "top/image/sp/image1.jpg", // 画像1
        "top/image/sp/image2.jpg", // 画像2
        "top/image/sp/image3.jpg", // 画像3
        "top/image/sp/image4.jpg", // 画像4
        "top/image/sp/image5.jpg"  // 画像5
    ];
    
    const bt1 = document.getElementById('point1');
    const bt2 = document.getElementById('point2');
    const bt3 = document.getElementById('point3');
    const bt4 = document.getElementById('point4');
    const bt5 = document.getElementById('point5');
    const points = [
        bt1,bt2,bt3,bt4,bt5
    ]
    
    let currentIndex = 0;
    
    const imagesElements = document.querySelectorAll('.g_photo');
    const pointsElements = document.querySelectorAll('.point')
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    
    // // 画像を更新する関数
    // function updateImages() {
    //     // 新しい画像のインデックスを計算
    //     for (let i = 0; i < imagesElements.length; i++) {
    //         let index = (currentIndex + i) % images.length;
    //         imagesElements[i].src = images[index];
    //         pointsElements[i].classList.remove('black');
    //         pointsElements[i].classList.add('black');
    //     }
    // }


    function updateImages() {
        // 新しい画像のインデックスを計算
        // 数字１ずつ増えていく
        for (let i = 0; i < imagesElements.length; i++) {
            let index = (currentIndex + i) % images.length;
            imagesElements[i].src = images[index];
        }

        // `pointsElements` のすべての点から `black` クラスを削除
        // forEach配列すべてに中の処理をする
        pointsElements.forEach(point => {
            point.classList.remove('black');
        });

        // 現在のインデックスに対応する点にだけ `black` クラスを追加
        // currentIndex=0
        pointsElements[currentIndex].classList.add('black');
    }

        // 次の画像に進む
        nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length; // 最後の画像まで行ったら最初に戻る
        updateImages();
         });
        // 前の画像に戻る
         prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // 最初の画像まで行ったら最後に戻る
        updateImages();
         });
        // 最初の画像を表示
        updateImages();

/////// スライドショー ///////////

    function slideshow_timer(){
        currentIndex = (currentIndex + 1) % images.length;
        updateImages();
    }
        setInterval(slideshow_timer, 4000);

//////// topに戻るボタン ///////

const top_btn = document.querySelector('.top_btn');

window.addEventListener('scroll',function() {

    const scroll = window.pageYOffset;
    if(scroll > 2000) {
        top_btn.style.opacity = '1';
        top_btn.style.zIndex = '1';
    } else {
        top_btn.style.opacity = '0';
        top_btn.style.zIndex = '-1';
    }
});
// //一番上からボタンを含めた高さ//
// const upper = document.querySelector('main_box');
// //一番上からボタンまでの高さ//
// const upper_height = main_box[0].clientHeight - top_btn[0].clientHeight;

window.addEventListener('scroll',() => {
    const footer = document.querySelector('footer');
    const footerTop = footer.getBoundingClientRect().top + window.scrollY;

    if(scrollY + window.innerHeight - 20 > footerTop) {
        top_btn.style.bottom = `${scrollY + window.innerHeight - footerTop}px`;
    } else {
        top_btn.style.bottom = '';
    }
})



/////// スライドショー ///////

// const photo_src =
// [
// "top/image/sp/image1.jpg",
// "top/image/sp/image2.jpg",
// "top/image/sp/image3.jpg",
// "top/image/sp/image4.jpg",
// "top/image/sp/image5.jpg"
// ]

// const btn1 = document.getElementById('point1');
// const btn2 = document.getElementById('point2');
// const btn3 = document.getElementById('point3');
// const btn4 = document.getElementById('point4');
// const btn5 = document.getElementById('point5');

// const btn_all = [btn1,btn2,btn3,btn4,btn5]
// const btn_all = document.querySelectorAll('.point')

// let num = -1;

// function slideshow_timer(){
//     if (num === 4){
//       num = 0;
//     }
//     else {
//       num ++;
//     //   btn_all[num].classList.remove("black");
//     }
// }

//   setInterval(slideshow_timer, 2000);