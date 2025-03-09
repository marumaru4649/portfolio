'use strict';
document.getElementById('form').onsubmit = function (event) {
  event.preventDefault();
  const search = document.getElementById('form').word.value;
  if (search >= 1 && search <= 10) {
    // window.alert (`成功: あなたが入力した値は${search}`);
    document.getElementById('success').textContent = '成功!';
    document.getElementById('success1').textContent = `あなたが入力した値は${search}`;
    const dialog = document.getElementById('myDialog');
    dialog.style.backgroundImage = 'url(photo/bear1.PNG)';
    dialog.showModal();
    const ok = document.querySelector('.button');
    ok.addEventListener('click', () => {
      dialog.close();
    })
  } else {
    document.getElementById('success').textContent = '入力エラー!';
    document.getElementById('success1').textContent = '1-10の範囲で数値を入力してください。';
    const dialog = document.getElementById('myDialog');
    dialog.style.backgroundImage = 'url(photo/bear3.PNG)';
    dialog.showModal();
    const ok = document.querySelector('.button');
    ok.addEventListener('click', () => {
      dialog.close();
    })
  }
}

