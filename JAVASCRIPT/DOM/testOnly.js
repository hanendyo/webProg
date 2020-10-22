const tes = function(){
    for(let i = 0; i< 100; i++){
        return i
    }
}

const timeOut = setTimeout(tes, 3000)

timeOut()