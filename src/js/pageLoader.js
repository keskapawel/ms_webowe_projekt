fadeOutEffect = () => {
    var bodyFade = document.getElementById("fade");
    var fadeTarget = document.getElementById("loader");
    disableScroll()
    window.addEventListener('scroll', window.scrollTo(0, 0));
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
                bodyFade.style.opacity = 1;
                fadeTarget.style.opacity = 1;
                enableScroll();
        }
        if (fadeTarget.style.opacity > 0) {
            bodyFade.style.opacity = 1;
            fadeTarget.style.opacity -= 1;
            setTimeout(() => {
                fadeTarget.style.display = "none";
            }, 500);
            enableScroll();
        } else {
            enableScroll();
            clearInterval(fadeEffect);
        }
        window.scrollTo(0, 0);
    }, 2000);
}

function disableScroll() {
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);
}

function enableScroll() {
    document.body.style.overflow = null;
}