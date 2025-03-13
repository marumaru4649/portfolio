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

// 必要な要素を取得
const prevButton = document.querySelector('.button-prev');
const nextButton = document.querySelector('.button-next');
const items = document.querySelectorAll('.dialog3_inner li');
let currentIndex = 0; // 初期の表示インデックス

// 最初のli要素を表示
items[currentIndex].classList.add('active');

// 前に戻るボタンのクリックイベント
prevButton.addEventListener('click', () => {
  // 現在のliを非表示にする
  items[currentIndex].classList.remove('active');

  // インデックスを減らして、最初の要素に戻る場合は最後の要素に移動
  currentIndex = (currentIndex - 1 + items.length) % items.length;

  // 新しいインデックスのli要素を表示
  items[currentIndex].classList.add('active');
});

// 次に進むボタンのクリックイベント
nextButton.addEventListener('click', () => {
  // 現在のliを非表示にする
  items[currentIndex].classList.remove('active');

  // インデックスを増やして、最後の要素に行った場合は最初の要素に戻る
  currentIndex = (currentIndex + 1) % items.length;

  // 新しいインデックスのli要素を表示
  items[currentIndex].classList.add('active');
});

// スワイプ操作のための変数
let touchStartX = 0; // スワイプ開始時のX座標
let touchEndX = 0;   // スワイプ終了時のX座標

// スワイプ開始時の処理
document.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX; // スワイプ開始位置を保存
});

// スワイプ終了時の処理
document.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].clientX; // スワイプ終了位置を保存

  // スワイプの方向を判定
  if (touchStartX > touchEndX) {
    // 右から左へのスワイプ（次へ）
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % items.length;
  } else if (touchStartX < touchEndX) {
    // 左から右へのスワイプ（前へ）
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + items.length) % items.length;
  }

  // 新しいインデックスのli要素を表示
  items[currentIndex].classList.add('active');
});





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

