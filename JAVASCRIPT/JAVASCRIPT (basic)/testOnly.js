//setTimeOut
// const tes = setTimeout (function(){
//     for(var i = 0; i < 5; i++){
//        console.log('detik ke-' + i);
//     }
// }, 2000)


// const tombolTimeOut = document.getElementById('timeOut')
// tombolTimeOut.addEventListener('click', function(){
//     clearTimeout(tes)
//     console.log('selesai');
// })


//setInterval
// const tes = setInterval (function(){
//     for(var i = 0; i < 1; i++){
//        console.log('detik ke-' + i);
//     }
// }, 2000)

// const tombolInterval = document.getElementById('interval')
// tombolInterval.addEventListener('click', function(){
//     clearTimeout(tes)
//     console.log('selesai');
// })


//program hitung mundur 
// const tanggalTujuan = new Date('Oct 12, 2020 00:00:00').getTime()

// const hitungMundur = setInterval(function(){
//     const tanggalSekarang = new Date().getTime()

//     //cari selisih
//     const selisih  = tanggalTujuan - tanggalSekarang

//     const hari = Math.floor(selisih / (1000 * 60 * 60 * 24))
//     const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60 ))
//     const menit = Math.floor(selisih % (1000 * 60 * 60 ) / (1000 * 60  ))
//     const detik = Math.floor(selisih % (1000 * 60 ) / (1000  ))

//     const teks = document.querySelector('h1')
//     teks.innerHTML= 'waktu anda tinggal: ' + hari + 'hari ' + jam + 'jam ' + menit + 'menit ' + detik + 'detik lagi'

//     //ketika sudah 0, maka hentikan
//     if(selisih == 0){
//         clearInterval(hitungMundur)
//         teks.innerHTML = 'waktu habis!'
//     }
// }, 1000)

// 
function faktorial(n) {
    if (n === 0) {
        return 1
    }
    return n * faktorial(n - 1)
}
console.log(faktorial(5));