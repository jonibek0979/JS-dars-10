var elForm = document.querySelector('.form')
var elInp = document.querySelector('.inp')
var elInp__1 = document.querySelector('.inp__1')
var elList = document.querySelector('.list')


var arr = []

elForm.addEventListener('submit', (e)=> {
    e.preventDefault()
    arr.push(elInp.value)
    // arr.push(elInp__1.value)
    fnfor(arr)



})


function fnfor(arr) {
    elList.innerHTML = ''
   for (let i = 0; i < arr.length; i++) {
    var newb = document.createElement('b')
    var neImg = document.createElement('img')
    var newButton = document.createElement('button')
    var newli = document.createElement('li')
    neImg.setAttribute('src','https://cutewallpaper.org/23/4k-resolution-cars-wallpaper/438011157.jpg')
//    newli.textContent = elInp.value
   newButton.textContent = 'del'
   newb.textContent = arr[i]
    newli.appendChild(newb)
    newli.appendChild(neImg)
    newli.appendChild(newButton)
    elList.appendChild(newli)
    
   } 
}