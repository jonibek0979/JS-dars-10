var elForm = document.querySelector('.form')
var elInp = document.querySelector('.inp')
var elList = document.querySelector('.list')


var arr = []

elForm.addEventListener('submit', (e)=> {
    e.preventDefault()
    arr.push(elInp.value)
    fnfor(arr)



})


function fnfor(arr) {
    elList.innerHTML = ''
   for (let i = 0; i < arr.length; i++) {
    var newb = document.createElement('b')
    var newButton = document.createElement('button')
    var newli = document.createElement('li')
//    newli.textContent = elInp.value
   newButton.textContent = 'del'
   newb.textContent = arr[i]
    newli.appendChild(newb)
    newli.appendChild(newButton)
    elList.appendChild(newli)
    
   } 
}





















































// var elTezlik = document.querySelector('.tezlik')
// var arr = ['olma', 'bexi', 'shaftoli', 'uzum', 'maluna']
// for (var i = 0; i < arr.length; i++) {
//     var newli = document.createElement('li')
//     var neImg = document.createElement('img')
//     // newli.classList = 'list__item'
//     newli.setAttribute('class','list__item')
//     neImg.setAttribute('src','https://preview.redd.it/4k-wallpaper-sports-cars-on-track-v0-3kgox8x929sa1.jpg?width=3840&format=pjpg&auto=webp&s=3431552ecce4b0d74959656baee479e6b89eb4a9')
//     // newli.id = 'appan'
//     newli.textContent = arr[i]
//     newli.setAttribute('id','test')
//     newli.appendChild(neImg)
//     elList.appendChild(newli)


// }

// // function fn(distanse,speed) {
// //     var distanse = 100
// //     var speed = 800
// //  var hour = Math.floor(distanse / speed);
// //  var minutes = Math.floor((distanse / speed - hour)*60);
// //  var second = Math.floor(((distanse / speed - hour)*60 - minutes )*60); 
// //  return hour + 'soat' + minutes +  'minut' + second + 'secund';
// // }

// // console.log(fn(100,800));

// function addfn(masofa,tezlik) {
//     var soat = Math.floor(masofa / tezlik)//0//
//     var minut = Math.floor((masofa / tezlik - soat) *60) //7//
//     var second = Math.floor(((masofa / tezlik - soat) * 60 - minut)*60)
//     return soat + 'soat' + minut + 'minut' + second + 'second'
    
// }
//  function fnn() {
//  document.querySelector('h1').innerHTML = addfn(elKm.value, elTezlik.value)

    
//  }