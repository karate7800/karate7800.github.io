let form = document.getElementById("photo")
let but = document.getElementById("psub")
const canv = document.getElementById('canvas')
const ctx = canv.getContext('2d')

  const sub = function () {
    let fDate = new FormData(form)
    let rp = fDate['imgpro']
    ctx.drawImage(rp, 40, 40)
}





