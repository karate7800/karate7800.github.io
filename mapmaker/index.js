
let form = document.getElementById("photo")
let but = document.getElementById("psub")
const inp = document.getElementById('shit')
const h1 =document.getElementById('h1')
const canv = document.getElementById('canvas')
const ctx = canv.getContext('2d')
 
inp.addEventListener('change', handleFiles)
h1.innerText = 'nope'
function handleFiles(e) {
    const data = e.target.files[0]
    let img = new Image()
    img.onload = function() {
        ctx.drawImage(img,20,20)
        alert('image drawn')
    }
    img.src = URL.createObjectURL(data)
}





