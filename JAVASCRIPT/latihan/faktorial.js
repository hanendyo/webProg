// faktorial 5
// 5! = 5 x 4 x 3 x 2 x 1


// looping
function facto(n) {
    var hasil = 1
    for (i = n; i > 0; i--) {
        hasil *= i
    }
    return hasil
}
console.log(facto(5));

//rekursif
function faktorial(n) {
    if (n === 0) {
        return 1
    }
    return n * faktorial(n - 1)
}
console.log(faktorial(5));