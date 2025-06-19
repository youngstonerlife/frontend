const button = document.getElementById("btn");
const message =document.getElementById("message")

button.addEventListener('click', function () {
    const name = document.getElementById("name").value;

    if (name.trim() === "") {
        message.textContent = 'Please enter name';
        message.style.color = 'red';

    } else {
        message.textContent = 'Hello, ' + name;
        message.style.color = 'green';
        button.textContent = 'U clicked me';
    }

});
