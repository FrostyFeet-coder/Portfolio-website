var tl = gsap.timeline()

tl.from(".logo", {
    y: -100,
    opacity: 0,
    duration: 1,
})
tl.from("li", {
  y: -30,
  opacity: 0,
  duration: 0.4,
  
});

tl.from("#profile", {
  x: -50,
  opacity: 0,
  duration: .5,
  stagger: 1,
});


const scroll = new LocomotiveScroll({
  el: document.querySelector("body"),
  smooth: true,
});



