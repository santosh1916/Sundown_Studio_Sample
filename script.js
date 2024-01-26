const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function page3anim() {
  var fixedImg = document.querySelector("#fixed-image");
  var cntnr = document.querySelector("#page3-cntnr");
  cntnr.addEventListener("mouseenter", function () {
    fixedImg.style.display = "block";
  });
  cntnr.addEventListener("mouseleave", function () {
    fixedImg.style.display = "none";
  });

  var elems = document.querySelectorAll(".page3-elem");
  elems.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      var imageUrl = elem.getAttribute("data-image");
      fixedImg.style.backgroundImage = `url(${imageUrl})`;
    });
  });
}

function swyperAnim() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
  });
}

swyperAnim();
page3anim();
