
let form = document.getElementById("photo")
let but = document.getElementById("psub")

const h1 =document.getElementById('h1')
const canv = document.getElementById('canvas')
const ctx = canv.getContext('2d')
 
h1.innerText = 'nope'
   function sub() {
    const data  = document.getElementById("shit")
    let rp = data.value
    let img = new Image()
    img.src = URL.createObjectURL(rp)
    h1.innerText = "dogshit"
    
    ctx.drawImage(img, 40, 40)


    alert('drew image')
}





