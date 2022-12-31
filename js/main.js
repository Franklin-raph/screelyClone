const input = document.querySelector('input');
const navOpen = document.querySelector(".navOpen")
const navClose = document.querySelector(".navClose")
const navLink = document.querySelector("#hero .navLinks")

input.addEventListener('change', editImage);

function editImage(e) {
    const fr = new FileReader();
    fr.readAsDataURL(e.target.files[0])
    fr.addEventListener('load', ()=>{
        const url = fr.result;
        localStorage.setItem('image', url)
    })
    location.href = "/editor.html"
}

navOpen.addEventListener("click", () => {
    navLink.style.top = "25%"
    navOpen.style.display = "none"
    navClose.style.display = "block"
})

navClose.addEventListener("click", () => {
    navLink.style.top = "-30%"
    navOpen.style.display = "block"
    navClose.style.display = "none"
})