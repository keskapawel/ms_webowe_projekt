fadeOutEffect = () => {
    var bodyFade = document.getElementById("fade");
    var fadeTarget = document.getElementById("loader");
    disableScroll()
    window.addEventListener('scroll', window.scrollTo(0, 0));
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
            bodyFade.style.opacity = 1;
            enableScroll();
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 1;
            setTimeout(() => {
                fadeTarget.style.display = "none";
                enableScroll();
            }, 200);
            bodyFade.style.opacity = 1;
            enableScroll();
        } else {
            enableScroll();
            clearInterval(fadeEffect);
        }
        window.scrollto(0, 0);
    }, 2000);
}

function disableScroll() {
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);
}

function enableScroll() {
    document.body.style.overflow = null;
}