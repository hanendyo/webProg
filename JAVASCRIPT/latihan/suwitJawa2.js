function getPilihanKomputer() {
    var enemy = Math.random()
    if (enemy < 0.33) return 'gajah'
    if (enemy < 0.66 && enemy >= 0.33) return 'orang'

    return 'semut'
}

function getHasil(enemy, player) {
    if (player == enemy)
        return 'SERI!'
    if (player == 'gajah')
        return (enemy == 'orang') ? 'MENANG!' : 'KALAH!' //operator ternary
    if (player == 'orang')
        return (enemy == 'semut') ? 'MENANG!' : 'KALAH!'
    if (player == 'semut')
        return (enemy == 'gajah') ? 'MENANG!' : 'KALAH!'

    return "anda belum memasukkan atau salah input"
}

function putar() {
    const imgComputer = document.querySelector('.img-komputer')
    const gambarComputer = ['gajah', 'orang', 'semut']
    let i = 0
    const waktuMulai = new Date().getTime()
    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval
            return
        }
        imgComputer.setAttribute('src', 'img/' + gambarComputer[i++] + '.png')
        if (i == gambarComputer.length) i = 0;
    }, 100)
}


//MENGGUNAKAN FOREACH
const pilihan = document.querySelectorAll('.area-player ul li img')
pilihan.forEach(function (_pilihan) {
    _pilihan.addEventListener('click', function () {
        const pilihanKomputer = getPilihanKomputer()
        const pilihanPlayer = _pilihan.className
        const hasil = getHasil(pilihanKomputer, pilihanPlayer)

        putar()

        //mengganti gambar komputer dengan pilihan komputer
        setTimeout(function () {
            const gambarKomputer = document.querySelector('.img-komputer')
            gambarKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png')

            const hasilAkhir = document.querySelector('.info')
            hasilAkhir.innerHTML = hasil
        }, 1000)

    })
})


// //get pilihan player
// const playerGajah = document.querySelector('.gajah')
// const playerOrang = document.querySelector('.orang')
// const playerSemut = document.querySelector('.semut')

// //pick gajah
// playerGajah.addEventListener('click', function () {
//     const pilihanKomputer = getPilihanKomputer()
//     const pilihanPlayer = playerGajah.className
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer)

//     //mengganti gambar komputer dengan pilihan komputer
//     const gambarKomputer = document.querySelector('.img-komputer')
//     gambarKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png')


//     const hasilAkhir = document.querySelector('.info')
//     hasilAkhir.innerHTML = hasil
// })

// //pick orang
// playerOrang.addEventListener('click', function () {
//     const pilihanKomputer = getPilihanKomputer()
//     const pilihanPlayer = playerOrang.className
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer)

//     //mengganti gambar komputer dengan pilihan komputer
//     const gambarKomputer = document.querySelector('.img-komputer')
//     gambarKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png')


//     const hasilAkhir = document.querySelector('.info')
//     hasilAkhir.innerHTML = hasil
// })

// // pick semut
// playerSemut.addEventListener('click', function () {
//     const pilihanKomputer = getPilihanKomputer()
//     const pilihanPlayer = playerSemut.className
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer)

//     //mengganti gambar komputer dengan pilihan komputer
//     const gambarKomputer = document.querySelector('.img-komputer')
//     gambarKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png')


//     const hasilAkhir = document.querySelector('.info')
//     hasilAkhir.innerHTML = hasil
// })