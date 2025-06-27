setTimeout(() => {
  document.querySelectorAll('.line').forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, i * 200);
  });
}, 100);

setTimeout(() => {
  document.querySelector('.img').classList.add('visible');
}, 300);

const bikeImg = document.querySelector('.bike-img');
const blocks = document.querySelectorAll('.zoom-block');

const zoomMap = {
  wheel: 'scale(1.75) translateY(-150px) translateX(-210px)',
  handle: 'scale(2.5) translateY(250px) translateX(-120px)',
  seat: 'scale(3) translateY(250px) translateX(300px)',
  def: 'scale(1) translateY(0px) translateX(0px)',
  contact: 'scale(0.8) translateX(1250px)'
};

const zoomObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      blocks.forEach(b => b.classList.remove('active'));
      entry.target.classList.add('active');

      const part = entry.target.dataset.part;
      bikeImg.style.transform = zoomMap[part] || 'scale(1) translateX(0)';
    }
  });
}, { threshold: 0.5 });

blocks.forEach(block => zoomObserver.observe(block));

  function submitForm(event) {
    event.preventDefault();
    alert("Thank you! We’ll contact you soon.");
  }

const openBtn = document.querySelector('.buy-now-button');
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close-popup');

openBtn.addEventListener('click', () => {
  popup.classList.add('active');
});

window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.classList.remove('active');
  }
});