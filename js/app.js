
VanillaTilt.init(document.querySelectorAll(".box"), {
    max: 9,
    speed: 200
});

// for menu icon
let menu_icon = document.querySelector('.menu-icon');

menu_icon.onclick = function () {
    menu_icon.classList.toggle('active');
}

// for playing video and video close icon
let box = document.querySelectorAll('.box');
let video_main_wrap = document.querySelector('.video-main-wrap');
let close_icon = document.querySelector('.close-icon');
let video = document.querySelector('.video');

for(let i = 0; i < box.length; i++) {
    box[i].onclick = function () {
        video_main_wrap.classList.add('active');
    }
}

close_icon.onclick = function () {
    video_main_wrap.classList.remove('active');
    video.src = '';
}
