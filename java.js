gsap.registerPlugin(ScrollTrigger);

gsap.to("#about", {
  scrollTrigger: {
    trigger: "#about",
    start: "top top",
    end: "bottom top",
    markers: true,
    pin: true,
    scroller: "#main"
  }
});

