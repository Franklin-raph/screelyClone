const input = document.querySelector('input');

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