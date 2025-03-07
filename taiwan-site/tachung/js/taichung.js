'use strict';

// const title = document.getElementById('modal_title');
// const image1 = document.getElementById('modal_img1');
// const image2 = document.getElementById('modal_img2');
// const text = document.getElementById('modal_text');

document.getElementById('submit1').onclick = function (event) {
  event.preventDefault();  // submitボタンがフォームを送信するのを防止

  const dialog1 = document.getElementById('taichung_dialog1');  // ダイアログ要素を取得
  dialog1.showModal();  // ダイアログを表示
  const ok = document.getElementById('button1');  // OKボタンを取得
  ok.addEventListener('click', () => {
      dialog1.close();  // ダイアログを閉じる
  });
}

document.getElementById('submit2').onclick = function (event) {
  event.preventDefault();  // submitボタンがフォームを送信するのを防止

  const dialog2 = document.getElementById('taichung_dialog2');  // ダイアログ要素を取得
  dialog2.showModal();  // ダイアログを表示
  const ok = document.getElementById('button2');  // OKボタンを取得
  ok.addEventListener('click', () => {
      dialog2.close();  // ダイアログを閉じる
  });
}

document.getElementById('submit3').onclick = function (event) {
  event.preventDefault();  // submitボタンがフォームを送信するのを防止

  const dialog3 = document.getElementById('taichung_dialog3');  // ダイアログ要素を取得
  dialog3.showModal();  // ダイアログを表示
  const ok = document.getElementById('button3');  // OKボタンを取得
  ok.addEventListener('click', () => {
      dialog3.close();  // ダイアログを閉じる
  });
}

document.getElementById('submit4').onclick = function (event) {
  event.preventDefault();  // submitボタンがフォームを送信するのを防止

  const dialog4 = document.getElementById('taichung_dialog4');  // ダイアログ要素を取得
  dialog4.showModal();  // ダイアログを表示
  const ok = document.getElementById('button4');  // OKボタンを取得
  ok.addEventListener('click', () => {
      dialog4.close();  // ダイアログを閉じる
  });
}

//////// topに戻るボタン ///////
window.addEventListener('scroll',function() {
  const top_btn = document.querySelector('.top_btn');
  const scroll = window.pageYOffset;
  if(scroll > 2000) {
      top_btn.style.opacity = '1';
      top_btn.style.zIndex = '1';
  } else {
      top_btn.style.opacity = '0';
      top_btn.style.zIndex = '-1';
  }
});
