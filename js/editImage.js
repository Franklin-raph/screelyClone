const imageFrame = document.querySelector(".imageFrame");

document.addEventListener('DOMContentLoaded', (e) => {
const imgUrl = localStorage.getItem('image')

const img = new Image();
img.src = imgUrl;
imageFrame.appendChild(img)
});


function clrStorage(){
    localStorage.clear()
}


