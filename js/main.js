const input = document.querySelector('input');

input.addEventListener('change', editImage);

function editImage(e) {
  location.href = "/editor.html"
}