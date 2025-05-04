// Html'den Elemanları Js Kısmına Çek
var menuBtn = document.querySelector("#menu-btn");
var nav = document.querySelector("nav");

// ! menuBtn'e tıklanınca nav elemanına class ekle çıkar yapan fonksiyon
menuBtn.addEventListener("click", function () {
  nav.classList.toggle("open");
});

// Video'lara döngü veren fonksiyon

document.addEventListener("DOMContentLoaded", function () {
  var videos = document.querySelectorAll("video");
  var observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play();
        entry.target.addEventListener("ended", () => {
          entry.target.currentTime = 0;
          entry.target.play();
        });
      } else {
        entry.target.pause();
      }
    });
  });
  videos.forEach((video) => {
    observer.observe(video);
  });
});
