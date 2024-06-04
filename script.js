var tl = gsap.timeline();

tl.from(".line h1", {
  y: 150,
  stagger: 0.25,
  duration: 0.5,
  delay: 0.1,
});
tl.from("#line1-part1 h5", {
  opacity: 0,
  onStart: function () {
    var h5Timer = document.querySelector("#line1-part1 h5");
    var grow = 0;
    setInterval(function () {
      if (grow < 100) {
        h5Timer.innerHTML = grow++;
      } else {
        grow = 100;
        h5Timer.innerHTML = grow;
      }
    }, 20);
  },
});
tl.to(".line h2", {
  opacity: 1,
  animationName: "anime",
});
tl.to("#loader", {
  opacity: 0,
  duration: 0.5,
  delay: 3.2,
});
tl.from("#page1", {
  delay: 0.5,
  y: 1600,
  opacity: 0,
  duration: 0.5,
  ease: Power4,
});
tl.to("#loader", {
  display: "none",
});
