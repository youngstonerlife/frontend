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


