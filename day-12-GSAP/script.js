gsap.registerPlugin(ScrollTrigger);

// Анимация появления блоков
gsap.utils.toArray('.grid-item').forEach((item, i) => {
  gsap.to(item, {
    scrollTrigger: {
      trigger: item,
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    opacity: 1,
    y: 0,
    duration: 0.6,
    delay: i * 0.1,
    ease: "power2.out"
  });
});

// Залипание блока
gsap.to(".pin-section", {
  scrollTrigger: {
    trigger: ".pin-section",
    start: "top top",
    end: "+=100%",
    pin: true,
    scrub: true
  }
});
