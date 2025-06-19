const button = document.getElementById("btn");

button.addEventListener('click', function () {
    const name = document.getElementById("name").value;

    if (name.trim() === "") {
        alert("Please enter name");
    } else {
        alert('hello, ' + name);
        button.textContent = 'U clicked me';
    }

});