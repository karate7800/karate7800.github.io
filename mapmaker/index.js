let form = document.getElementById("photo")
let but = document.getElementById("psub")
const h1 =document.getElementById('h1')
const canv = document.getElementById('canvas')
const ctx = canv.getContext('2d')

  const sub = function () {
    const data  = document.getElementById("shit")
    let rp = data.value
    h1.innerText = "dogshit"
    h1.innerText = (rp)
    ctx.drawImage(rp, 40, 40)
}





