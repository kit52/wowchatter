console.log("f1");

document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-mobile')
    const body = document.querySelector('body')
    console.log("f");
    burger.addEventListener('click', () => {
        burger.classList.toggle('active')
        nav.classList.toggle('active')
        body.classList.toggle('lock')

    })
    nav.addEventListener('click', (e) => {
        if (e.target == nav) {
            burger.classList.toggle('active')
            nav.classList.toggle('active')
            body.classList.toggle('lock')
        }
    })
    console.log(document.querySelector('.video'));
    if (document.querySelector('.video')) {

        const videos = document.querySelectorAll('.video');
        videos.forEach((v) => {
            const videoId = v.getAttribute('data-video');
            v.style.backgroundImage = `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)`;
            v.addEventListener('click', () => {
                v.innerHTML = '<iframe src="//www.youtube.com/embed/' + videoId + '?autoplay=1&mute=1" scrolling="no" style="width: 100%; height: 100%;" allow="autoplay"></iframe>';
                v.classList.add("active");
            })
        })
    }
    const accordion = document.querySelector('.accordion-container')
    if (accordion) {
        (async function () {
            const module = await import('./modules/accordion.js')
            module.default()
        })()
    }
});