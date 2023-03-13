//1. setItem(key, value) – сохранить пару ключ/значение.
// 2. getItem(key) – получить данные по ключу key.
// 3. removeItem(key) – удалить данные с ключом key.
// 4. clear() – удалить все.
// 5. length – количество элементов в хранилище.
// let jsonUsers = null;
// let usersArray = [
//     { email: "bagdat.rakhimov@gmail.com", password: "qwerty123", fullName: "Bagdat Rakhimov", country: "KZ", birthdate: "1987-01-09" },
//     { email: "sidor777@gmail.com", password: "qwerty321", fullName: "Sidor Sidorov", country: "RU", birthdate: "1989-01-01" }
// ]
// let jsonUsers = JSON.stringify(usersArray);
// localStorage.setItem('users', jsonUsers);

let usersArray;
if(localStorage.getItem('users_data') == null){
    usersArray = []
}else {
    let json_data = localStorage.getItem('users_data');
    usersArray = JSON.parse(json_data);
}

function Register() {
    let newUser = {};
    newUser.email = emailInput.value;
    newUser.password = passwordInput.value;
    newUser.fullName = fullNameInput.value;
    newUser.country = countrySelect.value;
    newUser.birthdate = birthdateSelect.value;
    usersArray.push(newUser);
    let jsonUsers = JSON.stringify(usersArray);
    localStorage.setItem('users', jsonUsers);
    window.location.href = "login.html";
}
function SignIn() {
    let json_data = localStorage.getItem('users')
    let data = JSON.parse(json_data)
    let auth = true
    for(let obj of data){
        if(emailInputCheck.value == obj.email && passwordInputCheck.value == obj.password   ){
            document.location.href = "person.html"
            auth = false
            localStorage.setItem("welcome",JSON.stringify(obj))
            break
        }
    }
    if(auth){
        alert("WHO ARE YOU?")
    }
}
    


//     let gambawucha = localStorage.getItem('users')
//     let usersFromJson = JSON.parse(gambawucha)
//     for (let u of usersFromJson) {
//         if (emailInputCheck.value == u.email && passwordInputCheck.value == u.password) {
//             let correctUser = {}
//             correctUser.email = u.email
//             correctUser.fullName = u.fullName
//             correctUser.country = u.country
//             correctUser.birthdate = u.birthdate
//             let jsonCorrectUser = JSON.stringify(correctUser)
//             localStorage.setItem('correctUsers', jsonCorrectUser)
//             window.location.href = "person.html"
//         }
//     }
//     let qwer = localStorage.getItem('correctUsers')
//     let correctUserFromJson = JSON.parse(qwer)
//     userPersonalEmail.innerText = correctUserFromJson.fullName
// }
