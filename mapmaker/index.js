
alert('js ran')
let form = document.getElementById("photo")
let but = document.getElementById("psub")
const h1 =document.getElementById('h1')
const canv = document.getElementById('canvas')
const ctx = canv.getContext('2d')

  const sub = function () {
    const data  = document.getElementById("shit")
    let rp = data.value
    let img = new Image()
    img.src = URL.createObjectURL(rp)
    h1.innerText = "dogshit"
    
    ctx.drawImage(rp, 40, 40)
    alert('drew image')
}





