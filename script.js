const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});
function firstpageanimationn() {
  var tl = gsap.timeline();
  tl.from(".nav", {
    y: -10,
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 1.5,
      delay: -1,
      // for delay in each line we uses stagger
      stagger: 0.2,
    })
    .from(".hero-footer", {
      y: -10,
      opacity: 0,
      ease: Expo.easeInOut,
      duration: 1.5,
      delay: -1,
    });
}
var timeout;
// jab mouse move ho to mouse skew ho
function mousewidth() {
  // define default
  var xscale = 1;
  var yscale = 1;
  var xprev = 0;
  var yprev = 0;
  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);
    var xdiff = dets.clientX - xprev;
    xprev = dets.clientX;
    var ydiff = dets.clientY - yprev;
    yprev = dets.clientY;
    xscale = gsap.utils.clamp(0.8, 1.2, xdiff);
    yscale = gsap.utils.clamp(0.8, 1.2, ydiff);
    circlemouseFollower(xscale, yscale);
    timeout = setTimeout(function () {
      document.querySelector(
        ".minicircle"
      ).style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`;
    }, 100);
  });
}

function circlemouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (details) {
    document.querySelector(
      ".minicircle"
    ).style.transform = `translate(${details.clientX}px,${details.clientY}px) scale(${xscale}, ${yscale})`;
  });
}
mousewidth();
circlemouseFollower();
firstpageanimationn();

document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate=0;
    var diffrot=0;
    elem.addEventListener("mouseleave",function(dets){
       gsap.to(elem.querySelector("img"),{
              opacity: 0,
              });
      });
    elem.addEventListener("mousemove",function(dets){
      var diff=dets.clientY-elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
        gsap.to(elem.querySelector("img"),{
            opacity: 1,
            // ease:power1,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20,20,diffrot)
        });
    });
});