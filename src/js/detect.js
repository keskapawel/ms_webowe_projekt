function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= -500 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) + 200 &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const box = document.querySelector(".skills_container");
const meter = document.querySelectorAll(".meter");
const randomNumber = Math.floor(Math.random() * 20) + 1;
const numbersBox = document.querySelector("#summary");
const firstBox = document.querySelector(".first_number");
const firstBoxNumber = 548;
var numberBoxes = [548, 1465, 612, 735];
var i;

document.addEventListener(
  "scroll",
  function () {
    if (isInViewport(box)) {
      for (i = 0; i < meter.length; i++) {
        meter[i].classList.add("true");
      }
    } else {
      for (i = 0; i < meter.length; i++) {
        meter[i].classList.remove("true");
      }
    }
    if (isInViewport(numbersBox)) {
      //   setTimeout(function () {
      //     for (i = 1; i <= firstBoxNumber; i++) {
      //         firstBox.innerHTML = i;
      //         console.log(i, "i");
      //     }
      //   }, 1000);
      //   for (let i = 1; i < numberBoxes[0]; i+=randomNumber) {
      //     setTimeout(function timer() {
      //       // console.log("hello world");
      //       firstBox.innerHTML = i;
      //       console.log(i, "i");
      //     }, i * 10);
      //   }
    }
  },
  {
    passive: true,
  }
);