var elList = document.querySelector('.list')
var arr = ['olma','anor','behi','shaftoli','uzum',]
for(var i =0; i < arr.length; i++){
  
if ( i % 2 == 0) {
    var newLi = document.createElement('li')
    var newb = document.createElement('b')
    newLi.classList = 'list__item'
    newLi.id = 2
    // newLi.classList.add('list__item')
    elList.appendChild(newb)
    newLi.textContent = arr[i]
    elList.appendChild(newLi)
    console.log(arr[i]);

}










}