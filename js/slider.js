var elInner = document.querySelector('.inner')














var count = 0

function fnNext() {
    if (count < 3 ) {
    count = count + 1
        
    }else{
        count = 0
    }
    console.log(count);
    elInner.style.transform = `translateX(-${800 * count}px)`
}

function fnPrive() {
    
    if (count > 0 ) {
        count = count - 1
            
        }else{
            count = 3
        }
    elInner.style.transform = `translateX(-${800 * count}px)`

    
}









































