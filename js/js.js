var btn_back = document.querySelector('.gallery .container .buttons .back');
var btn_next = document.querySelector('.gallery .container .buttons .next');
var images = document.querySelectorAll ('.gallery .container .photos img');
var i = 0;

btn_back.onclick = function () {
    images[i].className = '';
    i--;
    if (i < 0){
        i = images.length -1;
    }
    images[i].className = 'showed';
}

btn_next.onclick = function () {
    images[i].className = '';
    i++;
    if (i >= images.length){
        i = 0;
    }
    images[i].className = 'showed';
}
