var vid = document.querySelector("#video_iframe");
var btn = document.querySelector("#video_iframe_button");
var vidContainer = document.querySelector(".iframe_button");

vidContainer.onclick = () => {
  vid = vid.src += "?autoplay=1";
  setTimeout(function () {
    btn.style.display = "none";
    vidContainer.style.display = "none";
  }, 700);
};