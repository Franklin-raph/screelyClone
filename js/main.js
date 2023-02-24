const input = document.querySelector('input');
const navOpen = document.querySelector("#navOpen")
const navClose = document.querySelector(".ph-x-circle")
const navLink = document.querySelector("#hero .navLinks")

input.addEventListener('change', editImage);

function editImage(e) {
    const fr = new FileReader();
    fr.readAsDataURL(e.target.files[0])
    fr.addEventListener('load', ()=>{
        const url = fr.result;
        localStorage.setItem('image', url)
        setTimeout(function(){
            location.href = "/editor.html"
        }, 50);
        // waits for 0.005secs before the next page loads in order for the image to be set to the local storage to prevent broken images
    })
}

navOpen.addEventListener("click", () => {
    navLink.style.maxHeight = "100%"
    navLink.style.padding = "4rem 0"
    navOpen.style.display = "none"
    navClose.style.display = "block"
})

navClose.addEventListener("click", () => {
    navLink.style.maxHeight = "0"
    navLink.style.padding = "0"
    navOpen.style.display = "block"
    navClose.style.display = "none"
})











// Code for gettin the number of missing numbers in an array
let myArray = [5,10,15]

function getNuberOfConsecutiveElement(array){
    let maxElement = array[0];
    let minElement = array[0]

    for(let i = 0; i <=array.length; i++){
        if (array[i] > maxElement) {
            maxElement = array[i];
        }

        if (array[i] < minElement) {
            minElement = array[i];
        }
    }

    return ((maxElement - minElement) + 1) - (array.length)
}

    console.log("Number of missing numbers is =>", getNuberOfConsecutiveElement(myArray))