  const pets = [
  {
    name: "Dog",
    desc: "Best friend of human being",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU5TpUbrLGRFVFrspmtJ29Sk-di6tXEVYyeg&s"
  },
  {
    name: "Cat",
    desc: "A good option for keeping in an apartment",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK5CqiQQDLVEVd_mEtfKpqF8MTZj0SqiEEWg&s"
  },
  {
    name: "Parrot",
    desc: "Exotic choice",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZj4UItnJJ3LefABdbO0o5QM-Pt2oYekxCrw&s"
  }
];

const cardsContainer = document.getElementById('cards');
  
  function submitForm(event) {
    event.preventDefault();
    alert("Thank you! We’ll contact you soon.");
  }

document.querySelectorAll('button[data-target]').forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    document.getElementById(targetId).classList.add('active');
  });
});

document.querySelectorAll('.popup').forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.popup_content')) {
      modal.classList.remove('active');
    }
  });
});

document.querySelectorAll('.close-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.popup').classList.remove('active');
  });
});


pets.forEach(pet => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <img src="${pet.img}" alt="${pet.name}">
    <div class="info">
      <h2>${pet.name}</h2>
      <p>${pet.desc}</p>
      <button>Buy</button>
    </div>
  `;
  cardsContainer.appendChild(card);
});

setTimeout(() => {
  document.querySelectorAll('.card').forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, i * 200);
  });
}, 100);

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
    else {
  entry.target.classList.remove('visible');
}
  });
}, {
  threshold: 0.3 
});

document.querySelectorAll('.cardopen').forEach(card => {
  observer.observe(card);
});