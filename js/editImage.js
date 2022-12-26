// import { toJpeg } from 'html-to-image.js';
const imageFrame = document.querySelector(".imageFrame");
const imageDownloadButton = document.querySelector('.downloadImage')


document.addEventListener('DOMContentLoaded', (e) => {
const imgUrl = localStorage.getItem('image')

const img = new Image();
img.src = imgUrl;
imageFrame.appendChild(img)
});


function clrStorage(){
    localStorage.removeItem('image')
}


// Simple example, see optional options for more configuration.
const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'monolith', // or 'monolith', or 'nano'
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