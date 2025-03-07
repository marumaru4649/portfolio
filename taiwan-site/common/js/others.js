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