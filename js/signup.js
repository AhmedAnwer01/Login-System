const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const email = document.getElementById("email")
const password = document.getElementById("password")
const registerBtn = document.getElementById("registerBtn")
const modal = document.getElementById("ValidationModal")
const closeModal = document.getElementById("closeModal")
const modalCloseBtn = document.getElementById("modalCloseBtn")
const passInvisible = document.getElementById("passInvisible")
const passVisible = document.getElementById("passVisible")
const rememberMeCheck = document.getElementById("rememberMeCheck")
const navSignUpBtn = document.getElementById("navSignUpBtn")
const navLogInBtn = document.getElementById("navLogInBtn")


var validInputs = false

var users = []

if (localStorage.getItem("users")) {
    users = JSON.parse(localStorage.getItem("users"))
}

registerBtn.addEventListener("click", () => {
    if (validateInputs()) {
        setUser()
        clearInputs()
    } else {
        modal.classList.add("d-block")
    }
})

closeModal.addEventListener("click", (e) => {
    modal.classList.remove("d-block")
})
modalCloseBtn.addEventListener("click", (e) => {
    modal.classList.remove("d-block")
})

// Password visibility

passInvisible.addEventListener("click", (e) => {
    passInvisible.classList.add("d-none")
    passVisible.classList.remove("d-none")
    password.setAttribute("type", "password")
})
passVisible.addEventListener("click", (e) => {
    passVisible.classList.add("d-none")
    passInvisible.classList.remove("d-none")
    password.setAttribute("type", "text")
})


function setUser() {
    let user = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
        rememberMe: rememberMeCheck.checked
    }

    users.push(user)
    localStorage.setItem("users", JSON.stringify(users))
}


function clearInputs() {
    firstName.value = ""
    lastName.value = ""
    email.value = ""
    password.value = ""
    rememberMeCheck.checked = false
}


function validateInputs() {
    if (!firstName.value || !lastName.value || !validEmail() || !password.value) {
        validInputs = false
    } else {
        validInputs = true
    }
    return validInputs
}

function validEmail() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let emailreg = new RegExp(emailRegex, "gm")
    if (email)
        return emailreg.test(email.value)
}

