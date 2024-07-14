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
const logInBtn = document.getElementById("logInBtn")
const modalMessage = document.getElementById("modalMessage")

var users = []
var userName = ""

if (localStorage.getItem("users")) {
    users = JSON.parse(localStorage.getItem("users"))
}


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
// Nav buttons

navLogInBtn.addEventListener("click", () => {
    location.href = "../login.html";
})

navSignUpBtn.addEventListener("click", () => {
    location.href = "../index.html";
})

// Login button

logInBtn.addEventListener("click", () => {
    console.log("validation: ", validateInputs());
    console.log("authentication: ", authenticateUser());
    if (validateInputs() && authenticateUser()) {
        clearInputs()
        location.href = "../home.html"
    } else {
        modal.classList.add("d-block")
    }
})

// Modal

closeModal.addEventListener("click", (e) => {
    modal.classList.remove("d-block")
})
modalCloseBtn.addEventListener("click", (e) => {
    modal.classList.remove("d-block")
})

function validateInputs() {
    let message = "make sure you enter correct user data"
    if (email.value && validEmail() && password.value) {
        modalMessage.innerHTML = message
        return true
    }
    else if (!email.value || !password.value) {
        modalMessage.innerHTML = `${message}: Please fill all inputs`
        return false
    } else if (!validEmail()) {
        modalMessage.innerHTML = `${message}: Email is not valid`

        return false
    }
    modalMessage.innerHTML = message
    return false;
}

function authenticateUser() {
    let found = false
    users.some((user) => {
        if (user.email === email.value && user.password === password.value) {
            userName = user.firstName
            localStorage.setItem("userName", userName)
            found = true;
            return found;
        }
    })
    return found
}

function clearInputs() {
    email.value = ""
    password.value = ""
}

function validEmail() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let emailreg = new RegExp(emailRegex, "gm")
    if (email)
        return emailreg.test(email.value)
}

