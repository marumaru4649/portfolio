'use strict'
 //////// ハンバーガーメニュー ///////

  document.getElementById('m_about').onclick= function(){
   document.getElementById('menu-btn').checked = false;
  }
  document.getElementById('m_ability').onclick= function(){
   document.getElementById('menu-btn').checked = false;
  }
  document.getElementById('m_programming').onclick= function(){
   document.getElementById('menu-btn').checked = false;
  }
  document.getElementById('m_accessories').onclick= function(){
   document.getElementById('menu-btn').checked = false;
  }
  document.getElementById('m_design').onclick= function(){
   document.getElementById('menu-btn').checked = false;
  }

////////  上に戻るボタン  ////////

const top_btn = document.querySelector('.top_arrow');

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

//////// 各セクションタイトルアニメーション  /////////

// Intersection Observerを使って「.about_inner」要素が画面に入ったタイミングでアニメーションを追加
const title1 = document.querySelector('.about_title');
const fadeInElements = document.querySelectorAll('.about_inner, .about_text');
const observerOptionsAbout = {
  root: null, // ビューポートを基準に
  threshold: 0.1 // 画面に10%表示されたらアニメーション開始
};

const observerAbout = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 画面に入ったらvisibleクラスを追加
      title1.classList.add('left');
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // 1回だけ発動させる
    }
  });
}, observerOptionsAbout);
// 各要素を監視
fadeInElements.forEach(element => {
  observerAbout.observe(element);
});


// Intersection Observerを使って「.skill_list」要素が画面に入ったタイミングでアニメーションを追加
const title2 = document.querySelector('.ability_title');
const fadeInElements1 = document.querySelectorAll('.skill_list, .ability_title');
const observerOptionsSkill = {
  root: null, // ビューポートを基準に
  threshold: 0.2 // 画面に20%表示されたらアニメーション開始
};
const observerSkill = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 画面に入ったらvisibleクラスを追加
      title2.classList.add('right');
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // 1回だけ発動させる
    }
  });
}, observerOptionsSkill);
// 各要素を監視
fadeInElements1.forEach(element => {
  observerSkill.observe(element);
});

// Intersection Observerを使って「.programming_title」要素が画面に入ったタイミングでアニメーションを追加
const title3 = document.querySelector('.programming_title');
const fadeInElements2 = document.querySelectorAll('.grid1, .programming_title');
const observerOptionsSkill2 = {
  root: null, // ビューポートを基準に
  threshold: 0.3 // 画面に30%表示されたらアニメーション開始
};
const observerSkill2 = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 画面に入ったらvisibleクラスを追加
      title3.classList.add('left');
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // 1回だけ発動させる
    }
  });
}, observerOptionsSkill2);
// 各要素を監視
fadeInElements2.forEach(element => {
  observerSkill2.observe(element);
});

// Intersection Observerを使って「.accessories_title」要素が画面に入ったタイミングでアニメーションを追加
const title4 = document.querySelector('.accessories_title');
const fadeInElements3 = document.querySelectorAll('.flex, .accessories_title');
const observerOptionsSkill3 = {
  root: null, // ビューポートを基準に
  threshold: 0.5 // 画面に50%表示されたらアニメーション開始
};
const observerSkill3 = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 画面に入ったらvisibleクラスを追加
      title4.classList.add('right');
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // 1回だけ発動させる
    }
  });
}, observerOptionsSkill);
// 各要素を監視
fadeInElements3.forEach(element => {
  observerSkill3.observe(element);
});

// Intersection Observerを使って「.design_title」要素が画面に入ったタイミングでアニメーションを追加
const title5 = document.querySelector('.design_title');
const fadeInElements4 = document.querySelectorAll('.grid2,.design_title');
const observerOptionsSkill4 = {
  root: null, // ビューポートを基準に
  threshold: 0.5 // 画面に50%表示されたらアニメーション開始
};
const observerSkill4 = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 画面に入ったらvisibleクラスを追加
      title5.classList.add('left');
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // 1回だけ発動させる
    }
  });
}, observerOptionsSkill);
// 各要素を監視
fadeInElements4.forEach(element => {
  observerSkill4.observe(element);
});



//////////  モーダル /////////////////////
if (window.matchMedia('(max-width: 767px)').matches) {

document.getElementById('dialog_btn').onclick = function (event) {
  event.preventDefault();  // submitボタンがフォームを送信するのを防止

  const dialog1 = document.getElementById('dialog1');  // ダイアログ要素を取得
  dialog1.showModal();  // ダイアログを表示
  // モーダルを開いたときにスクロール無効
  document.body.style.overflowY = 'hidden';
  const ok = document.querySelector('.close1');  // OKボタンを取得
  ok.addEventListener('click', () => {
      dialog1.close();  // ダイアログを閉じる
  // モーダルを閉じたときにスクロールを有効に戻す
  document.body.style.overflowY = 'auto';
  });
}


/////////   スライドショー  //////////////
document.addEventListener("DOMContentLoaded", function() {
  const points = document.querySelectorAll('.point');
  const sliderItems = document.querySelectorAll('.icon_slider li');

  // 最初の画像は最初からクラスをつけておいて可視化
  sliderItems[0].classList.add('active');
  points[0].classList.add('black');

  // クリックイベント
  points.forEach((point, index) => {
    point.addEventListener('click', () => {
      // すべてのスライドアイテムのactiveクラスを削除
      sliderItems.forEach(item => item.classList.remove('active'));
      points.forEach(item => item.classList.remove('black'));

      // クリックされたボタンに対応するli要素にactiveクラスを追加
      sliderItems[index].classList.add('active');
      points[index].classList.add('black');
    });
  });

  // 4秒ごとに自動で切り替える処理
  let currentIndex = 0;
  const totalItems = sliderItems.length;

  setInterval(() => {
    // すべてのスライドアイテムとポイントボタンのactiveクラスを削除
    sliderItems.forEach(item => item.classList.remove('active'));
    points.forEach(item => item.classList.remove('black'));

    // 次のスライドのインデックスを計算
    currentIndex = (currentIndex + 1) % totalItems;

    // 次のスライドにactiveクラスを追加
    sliderItems[currentIndex].classList.add('active');
    points[currentIndex].classList.add('black');
  }, 4000); // 4秒ごとにスライドを切り替える
});
} else {
  document.getElementById('dialog_btn').onclick = function (event) {
    event.preventDefault();  // submitボタンがフォームを送信するのを防止
  
    const dialog1 = document.getElementById('dialog1');  // ダイアログ要素を取得
    dialog1.showModal();  // ダイアログを表示
    // モーダルを開いたときにスクロール無効
    document.body.style.overflowY = 'hidden';
    const ok = document.querySelector('.close1');  // OKボタンを取得
    ok.addEventListener('click', () => {
        dialog1.close();  // ダイアログを閉じる
    // モーダルを閉じたときにスクロールを有効に戻す
    document.body.style.overflowY = 'auto';
    });
  }
}

////// モーダル2 ////////
document.getElementById('dialog_btn1').onclick = function (event) {
  event.preventDefault();  // submitボタンがフォームを送信するのを防止

  const dialog2 = document.getElementById('dialog2');  // ダイアログ要素を取得
  dialog2.showModal();  // ダイアログを表示
  // モーダルを開いたときにスクロール無効
  document.body.style.overflowY = 'hidden';
  const ok = document.querySelector('.close2');  // OKボタンを取得
  ok.addEventListener('click', () => {
      dialog2.close();  // ダイアログを閉じる
  // モーダルを閉じたときにスクロールを有効に戻す
  document.body.style.overflowY = 'auto';
  });
}
/////モーダル3////////

document.getElementById('dialog_btn2').onclick = function (event) {
  event.preventDefault();  // submitボタンがフォームを送信するのを防止

  const dialog3 = document.getElementById('dialog3');  // ダイアログ要素を取得
  dialog3.showModal();  // ダイアログを表示
  // モーダルを開いたときにスクロール無効
  document.body.style.overflowY = 'hidden';
  const ok = document.querySelector('.close3');  // OKボタンを取得
  ok.addEventListener('click', () => {
      dialog3.close();  // ダイアログを閉じる
  // モーダルを閉じたときにスクロールを有効に戻す
  document.body.style.overflowY = 'auto';
  });
}

/////スライド///////
let currentIndex = 0;

const images = [
  'image/btn_sp.jpg',
  'image/position_sp.jpg',
  'image/dialog_sp.jpg',
  'image/loading_sp.jpg'
];

const urls = [
  'button/index.html',
  'position/index.html',
  'challenge-dialog-original/index.html',
  'animation/index.html'
];

const gits = [
  'https://github.com/marumaru4649/portfolio/tree/main/button/css',
  'https://github.com/marumaru4649/portfolio/blob/main/position/css/style.css',
  'https://github.com/marumaru4649/portfolio/blob/main/challenge-dialog-original/js/main.js',
  'https://github.com/marumaru4649/portfolio/blob/main/animation/css/style.css'
];

const texts = [
  'ボタンのホバーデザインの課題にて制作。レスポンシブ対応の為グリッド配置に修正。<br>制作時間：3時間',
  'positionやFlexなど配置の課題。h1などタグの使い方も考慮して取り組む。<br>制作時間：4時間',
  'Javascriptを勉強し始めた頃の課題。自作イラストのオリジナルダイアログ。<br>制作時間：3時間',
  'アニメーションの勉強に自主制作したローディングアニメーション。<br>制作時間：3時間'
];

const imagesElements = document.querySelectorAll('.main_images1');
const prevButton = document.querySelector('.button-prev');
const nextButton = document.querySelector('.button-next');
const links = document.querySelectorAll('.dialog3_inner a');
const textElements  = document.querySelectorAll('.dialog3_text');
const git_btn = document.querySelectorAll('.githab1');

// 画像、リンク、テキストを更新する関数
function updateImagesLinksAndTexts() {
  for (let i = 0; i < imagesElements.length; i++) {
    let index = (currentIndex + i) % images.length;
    imagesElements[i].src = images[index]; // 画像を更新
    links[i].href = urls[index]; // リンクを更新
    textElements[i].innerHTML = texts[index]; // テキストを更新
    git_btn[i].href = gits[index]; // リンクを更新
  }
}

// スライドショーを開始または停止する関数
function handleSlideshow() {
  if (window.innerWidth <= 767) {
    // 767px以下のときにスライドショーを有効にする
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateImagesLinksAndTexts();
    });

    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateImagesLinksAndTexts();
    });

    updateImagesLinksAndTexts(); // 最初に画像を更新
  } else {
    // 767pxより大きい画面ではスライドショーを無効にする
    nextButton.removeEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateImagesLinksAndTexts();
    });
    prevButton.removeEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateImagesLinksAndTexts();
    });
  }
}

// 初期ロード時にスライドショーをセットアップ
handleSlideshow();

// リサイズ時にもスライドショーを切り替える
window.addEventListener('resize', handleSlideshow);



/////モーダル4////////
document.getElementById('dialog_btn3').onclick = function (event) {
  event.preventDefault();  // submitボタンがフォームを送信するのを防止

  const dialog4 = document.querySelector('.wrapper');  // ダイアログ要素を取得
  dialog4.showModal();  // ダイアログを表示
  // モーダルを開いたときにスクロール無効
  document.body.style.overflowY = 'hidden';
  const ok = document.querySelector('.close4');  // OKボタンを取得
  ok.addEventListener('click', () => {
      dialog4.close();  // ダイアログを閉じる
  // モーダルを閉じたときにスクロールを有効に戻す
  document.body.style.overflowY = 'auto';
  });
}


const swiper = new Swiper(".swiper-container", {
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto", // スライド幅を自動調整
  loopAdditionalSlides: 1,
  effect: "coverflow",
  coverflowEffect: {
    rotate:10,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

