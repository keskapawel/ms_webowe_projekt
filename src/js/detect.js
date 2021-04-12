function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= -500 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 500 &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}


const box = document.querySelector('.skills');
const meter = document.querySelectorAll('.meter');
console.log(meter);
console.log(box);
var i;

document.addEventListener('scroll', function () {
    if (isInViewport(box)) {
        for (i = 0; i < meter.length; i++) {
            meter[i].classList.add('true');
        }
    } else {
        for (i = 0; i < meter.length; i++) {
            meter[i].classList.remove('true');
        }
    }
}, {
    passive: true
});