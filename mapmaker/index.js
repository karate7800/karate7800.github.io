
let form = document.getElementById("photo")
let but = document.getElementById("psub")
const inp = document.getElementById('shit')
const h1 =document.getElementById('h1')
const mvbut = document.getElementById('mvbut')
const plbut = document.getElementById('plbut')
const pList = document.getElementById('plist')

const canv = document.getElementById('canvas')
const ctx = canv.getContext('2d')
let mStatus = null


let canvleft = canv.offsetLeft + canv.clientLeft
let canvtop = canv.offsetTop + canv.clientTop

let points = []
canv.addEventListener('click', function(e) {
  let x = e.pageX - canvleft,
  y = e.pageY - canvtop

  let name = prompt('What is this location\'s name?')
  let loc = new Location(name, x, y)
  points.push(loc)
  updatePointList(loc)

}, false)
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

function updatePointList(loc) {
    let el = document.createElement('p')
    el.innerText = loc.toString()
    pList.appendChild(el)
}

class Location {
  constructor(name, x, y) {
    this.name = name
    this.x = x
    this.y = y
  }
}