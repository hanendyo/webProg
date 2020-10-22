
//menggunakan perulangan while untuk mengulang game
var tanya = true
while (tanya) {


    //menangkap pilihan player
    var pilihan = prompt('pilih: gajah, manusia, atau semut')
    var player = pilihan.toLowerCase()


    //membangkitkan bilangan random
    var enemy = Math.random()

    if (enemy < 0.33) {
        enemy = 'gajah'
    } else if (enemy < 0.66 && enemy >= 0.33) {
        enemy = 'manusia'
    } else {
        enemy = 'semut'
    }
    // console.log(rand);


    //menentukan rules
    var hasil = ''
    if (player == enemy) {
        hasil = 'SERI!'
    } else if (player == 'gajah') {
        hasil = (enemy == 'orang') ? 'ANDA MENANG!' : 'ANDA KALAH!' //operator ternary

    } else if (player == 'manusia') {
        hasil = (enemy == 'semut') ? 'ANDA MENANG!' : 'ANDA KALAH!'

    } else if (player == 'semut') {
        hasil = (enemy == 'gajah') ? 'ANDA MENANG!' : 'ANDA KALAH!'

    } else {
        hasil = "anda belum memasukkan atau salah input"
    }
    // console.log(hasil);

    alert('pilihan anda adalah: ' + player + ', ' + 'pilihan musuh adalah: ' + enemy + '. ' + '\n' + player + ' vs ' + enemy + '\n' + 'Hasilnya adalah: ' + hasil)

    tanya = confirm('main lagi?')

}
