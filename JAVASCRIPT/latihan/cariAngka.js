alert('Tebak angka dari 1 - 10' + '\n\n' + 'kamu punya 3 kesempatan')
//menggunakan perulangan while untuk mengulang game
var tanya = true
while (tanya) {


    //menangkap pilihan musuh & merandom angka
    var enemy = Math.floor(Math.random() * 10) + 1
    console.log(enemy);


    //menggunakan perulangan while untuk mengulang tebakkan
    var kesempatan = 3
    while (kesempatan >= 1) {
        //menangkap pilhan player
        var player = prompt('pilih angka 1 - 10')

        //rules
        if (enemy == player) {
            // alert('Pilihan yang TEPAT')
            hasil = 'Pilihan yang TEPAT!'
            kesempatan = false
        } else if (enemy < player) {
            kesempatan--
            // alert('pilihan Terlalu TINGGI, tebak lagi!' + '\n' + 'Kesempatanmu tinggal: ' + kesempatan)
            hasil = 'pilihan Terlalu TINGGI, tebak lagi!' + '\n' + 'Kesempatanmu tinggal: ' + kesempatan

        } else if (enemy > player) {
            kesempatan--
            // alert(hasil = 'pilihan masih RENDAH, tebak lagi!' + '\n' + 'Kesempatanmu tinggal: ' + kesempatan)
            hasil = 'pilihan masih RENDAH, tebak lagi!' + '\n' + 'Kesempatanmu tinggal: ' + kesempatan

        } else {
            // alert(hasil = 'data yang anda inputkan salah')
            hasil = 'data yang anda inputkan salah'
        }

        //inputan kosong
        if (player === '') {
            // alert('anda belum memasukkan angka')
            hasil = 'anda belum memasukkan angka'
            kesempatan++
        }

        //kesempatan habis
        if (kesempatan === 0) {
            alert('kesempatan anda telah habis!')
            break;
        }

        //tombol OK & Cancel
        if (player === null) {
            player = confirm('mau keluar ke menu utama?')
            console.log(player);
            if (player == true) {
                alert('anda keluar dari permainan')
                break;
            } else {
                // alert('anda tidak jadi keluar')
                hasil = 'anda tidak jadi keluar'
            }
            kesempatan++
        }

        alert(hasil)

    }

    tanya = confirm('main lagi?')

    //untuk tidak mengulang bermain
    if (tanya === false) {
        break;
    }

}

alert('Terima Kasih')




// var hasil = '';
// var tanya = true;

// while (tanya) {
//     var comp = Math.floor(Math.random() * 10) + 1;
//     alert('Selamat Datang Di Game Tebak Angka, Anda Punya 3x Kesempatan Untuk Menjawab');
//     var i = 3;
//     while (i > 0) {
//         var user = prompt('[KESEMPATAN Ke-' + i + ']\nMasukkan Pilihan Angka: \n(1 - 10)');
//         if (user == comp) {
//             hasil = 'TEBAKAN BENAR!';
//             i = false;
//             alert('Angka Anda:\t' + user + '\nAngka Acak:\t' + comp + '\nHasil:\tSelamat ' + hasil);

//         } else if (user < comp) {
//             hasil = 'TEBAKAN TERLALU KECIL';
//         } else {
//             hasil = 'TEBAKAN TERLALU BESAR';
//         }

//         if (i > 1) {
//             alert('Angka Anda:\t' + user + '\nHasil:\t' + hasil + '\nAnda Masih Punya ' + (i - 1) + 'x Kesempatan,Silahkan Tebak Lagi');
//         }
//         if (i == 1) {
//             alert('ANDA KALAH, ANGKA ACAK:\t' + comp);
//         }
//         i--;
//     }
//     tanya = confirm('Main Lagi?');
// }
// alert('Terimakasih Telah Bermain');