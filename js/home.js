

const userName = document.getElementById("userName")
const navLogOutBtn = document.getElementById("navLogOutBtn")


if (localStorage.getItem("userName")) {
    userName.innerHTML = localStorage.getItem("userName")
}


navLogOutBtn.addEventListener("click", () => {
    localStorage.removeItem("userName")
    location.href = "../login.html"
})

