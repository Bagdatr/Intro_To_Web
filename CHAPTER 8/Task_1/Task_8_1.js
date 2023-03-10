let users = [
    { login: "Nursultan", password: "qwerty123" },
    { login: "Madina", password: "qwerty321" },
    { login: "Serik", password: "qwerty987" },
    { login: "Bagdat", password: "qwerty654" }
];

button.addEventListener('click', userCheck);

function userCheck() {
    let name = login.value;
    let pass = password.value;
    for (let u of users) {
        if (name == u.login && pass == u.password) {
            document.getElementById("authorizationForm").innerHTML = "You are authenticated!";
            break;
        } else {
            let div1 = document.getElementById("login");
            div1.style.borderColor = "red";
            let div2 = document.getElementById("password");
            div2.style.borderColor = "red";
        }
    }
}