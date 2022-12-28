const imageFrame = document.querySelector(".imageFrame");
const imageDownloadButton = document.querySelector('.downloadImage')
const horizontalSlider = document.querySelector('.horizontalSlider')
const verticalSlider = document.querySelector('.verticalSlider')
const verticalSliderNum = document.querySelector('.verticalSliderNum')
const horizontalSliderNum = document.querySelector('.horizontalSliderNum')
const topBar = document.querySelector(".topBar")
const imgandbar = document.querySelector(".imgandbar")
const windowTypeAndStyleNav = document.querySelector('.windowTypeAndStyleNav')
const windowOverLay = document.querySelector('.windowOverLay')
const windowTypeBtns = document.querySelectorAll(".windowTypeBtns button")
const windowStyleBtns = document.querySelectorAll(".windowStyleBtns button")

document.querySelector('.noWindow').addEventListener('click', () => {topBar.style.display = "none"})

document.querySelector('.plainWindow').addEventListener('click', () => {
    topBar.style.display = "flex"
    document.querySelector('.browserBar').style.display = "none"
})

document.querySelector('.browserWindow').addEventListener('click', () => {
    topBar.style.display = "flex"
    document.querySelector('.browserBar').style.display = "block"
})

document.querySelector(".windowTypeBtn").addEventListener("click", ()=>{
    document.querySelector('.windowTypeBtns').classList.toggle('hide')
})

document.querySelector('.windowStylyeBtn').addEventListener("click", ()=>{
    document.querySelector('.windowStyleBtns').classList.toggle('hide')
})

windowTypeBtns.forEach((windontypeBtn, index) => {
    windontypeBtn.addEventListener('click', ()=>{
        windowTypeBtns.forEach(unselectedBtn => {
            unselectedBtn.classList.remove('activeWindowButton')
        })
        windowTypeBtns[index].classList.add("activeWindowButton")

        if(windowTypeBtns[0].classList.contains('activeWindowButton')){
            document.querySelector('.windowStyle').style.display = "none"
        }else{
            document.querySelector('.windowStyle').style.display = "block"
        }
    })
  })

  windowStyleBtns.forEach((windonstyleBtn, index) => {
    windonstyleBtn.addEventListener('click', ()=>{
        windowStyleBtns.forEach(unselectedBtn => {
            unselectedBtn.classList.remove('activeWindowButton')
        })
        windowStyleBtns[index].classList.add("activeWindowButton")
    })
  })


const solidBtn = document.querySelector('#solidBtn').addEventListener('click', ()=>{location.reload()})

document.addEventListener('DOMContentLoaded', (e) => {

    const imgUrl = localStorage.getItem('image')

    const img = new Image();
    img.src = imgUrl;
    imgandbar.appendChild(img)
});

function toggleShadow(){
    imgandbar.classList.toggle("box-shadow")
}

function clrStorage(){
    localStorage.removeItem('image')
    location.reload(true)
}

// Simple example, see optional options for more configuration.
const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'monolith', // or 'monolith', or 'nano' or 'classic'
    default: '#C90B34',

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: true,
            hsva: false,
            cmyk: false,
            input: true,
            clear: true,
            save: true
        }
    }
});

pickr.on('change', (...args) => {
    let color = args[0].toRGBA()
    imageFrame.style.backgroundColor = `rgba(${color[0]},${color[1]},${color[2]},${color[3]})`;
});


imageDownloadButton.addEventListener('click', ()=>{
    html2canvas(document.querySelector(".imageFrame"),
        {
            allowTaint: true,
            useCORS: true
        }).then(function (canvas) {
            let anchorTag = document.createElement("a");
            anchorTag.download = "filename.png";
            anchorTag.href = canvas.toDataURL();
            anchorTag.target = '_blank';
            anchorTag.click();
        });
})

horizontalSlider.oninput = function() {
    imageFrame.style.paddingRight = this.value + "px";
    imageFrame.style.paddingLeft = this.value + "px";
    horizontalSliderNum.textContent = this.value + "px"
}

verticalSlider.oninput = function() {
    imageFrame.style.paddingTop = this.value + "px";
    imageFrame.style.paddingBottom = this.value + "px";
    verticalSliderNum.textContent = this.value + "px"
}

function toggleMode(){
    topBar.classList.toggle("dark")
}

const tabButtons = document.querySelectorAll('.backgroundTab button');
const tabColors = document.querySelectorAll('.tabColor')

const gradientColorsDivs = document.querySelectorAll(".gradientColors div")
console.log(tabButtons)

gradientColorsDivs.forEach(gradientColor => {
    gradientColor.addEventListener('click', () => {
        imageFrame.style.background = window.getComputedStyle(gradientColor).background

    })
})

tabButtons.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabColors.forEach(tabColor => {
            tabColor.classList.remove('active')
        });
        tabButtons.forEach(unselectedTab => {
            unselectedTab.classList.remove('active')
        });
        tabButtons[index].classList.add('active')
        tabColors[index].classList.add('active')
    })
})

function openNav(){
    windowTypeAndStyleNav.style.right = "0"
    windowOverLay.style.display = 'block'
}

function closeNav(){
    windowTypeAndStyleNav.style.right = "-400px"
    windowOverLay.style.display = 'none'
}