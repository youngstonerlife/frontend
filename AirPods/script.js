gsap.registerPlugin(ScrollTrigger);

const mainPic = document.querySelector('.main-pic');
const colorDots = document.querySelectorAll('.color-dot');
let currentImage = 'pics/airpods.png';


gsap.from(".main-pic", {
  duration: 1.5,
  scale: 10,
  opacity: 0,
  ease: "power3.out"
});

gsap.set(".main-pic", {
  scale: 1,
  opacity: 1,
});

// ScrollTrigger анимация перемещения
gsap.to(mainPic, {
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: '+=70%',
    scrub: 0.7,
    pin: true,

  },
  y: () => window.innerHeight / 10,
  x: () => window.innerWidth / 4,
  scale: 0.5,
  ease: 'power2.inOut',
});

// Обработка кликов по цветовым точкам
colorDots.forEach(dot => {
  dot.addEventListener('click', () => {
    const color = dot.dataset.color;
    const newSrc = `pics/${color}.png`;
    mainPic.src = newSrc;
    currentImage = newSrc;

    colorDots.forEach(d => d.classList.remove('active'));
    dot.classList.add('active');
  });
});

gsap.from(".sec1", {
  opacity: 0,
  y: 50,
  duration: 1.2,
  delay: 0.8, // можно чуть позже, чтобы после .main-pic
  ease: "power2.out"
});


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.3,
});

observer.observe(document.querySelector('.product-info'));
observer.observe(document.querySelector('.color-picker'));
observer.observe(document.querySelector('.box2 h2'));
observer.observe(document.querySelector('.box2 p'));
observer.observe(document.querySelector('.box3-header')); 
observer.observe(document.querySelector('.sec1'));

gsap.to(".pfp", {
  y: 100, // или больше — для глубже "приземления"
  scrollTrigger: {
    trigger: ".box2",
    start: "top center",
    end: "bottom top",
    scrub: true, // плавное движение в зависимости от скролла
  }
});

const box3Texts = document.querySelectorAll('.box3-text');

const observerBox3 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Появление с задержкой
      box3Texts.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('visible');
        }, index * 300); // 300ms между каждым элементом
      });

      // Чтобы не повторялось снова
      observerBox3.disconnect();
    }
  });
}, {
  threshold: 0.3,
});

if (box3Texts.length) {
  observerBox3.observe(box3Texts[0]);
}



  const cards = document.querySelectorAll('.card');
  const popups = document.querySelectorAll('.popup-overlay');
  const closeBtns = document.querySelectorAll('.popup-close');

  // открыть попап
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const popupId = card.getAttribute('data-popup');
      const popup = document.getElementById(popupId);
      if (popup) popup.classList.add('active');
    });
  });

  // закрыть попап
  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.popup-overlay').classList.remove('active');
    });
  });

  // клик вне попапа — закрыть
  popups.forEach(popup => {
    popup.addEventListener('click', e => {
      if (e.target === popup) popup.classList.remove('active');
    });
  });


const cardsObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Чтобы появлялись только один раз
    }
  });
}, {
  threshold: 0.2,
});

cards.forEach(card => cardsObserver.observe(card));



