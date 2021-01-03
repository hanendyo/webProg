// var jumlahAngkot = 10,
//     angkotJalan = 6,
//     noAngkot = 1

// for (noAngkot; noAngkot <= jumlahAngkot; noAngkot++) {
//     if (noAngkot <= angkotJalan && noAngkot != 5) {
//         console.log('angkot nomor ' + noAngkot + ' sedang Beroperasi')
//     }
//     else if (noAngkot == 8 || noAngkot == 10 || noAngkot == 5) {
//         console.log('angkot nomor ' + noAngkot + ' sedang Lembur')
//     }
//     else {
//         console.log('angkot nomor ' + noAngkot + ' sedang Tidak Beroperasi')
//     }
// }

var penumpang = ['hanen', undefined, 'indi', undefined, 'harto']
// var penumpang = []

var tambahPenumpang = function (namaPenumpang, penumpang) {
    //jika angkot kosong
    if (penumpang.length == '') {
        //tambah penumpang di awal array
        penumpang.push(namaPenumpang)
        //kembalikan nilai array nya
        return penumpang
    }
    else {
        for (i = 0; i < penumpang.length; i++) {
            // jika kursi yg sekarang kosong dan setelahnya belum diisi oleh penumpang baru 
            if (penumpang[i] == undefined && penumpang[i + 1] !== namaPenumpang) {
                penumpang[i] = namaPenumpang
                return penumpang
            }
            // jika kursi sekarang namanya sama dengan penumpang baru
            else if (penumpang[i] == namaPenumpang && penumpang[i + 1] == namaPenumpang) {
                console.log(penumpang[i + 1]);
                console.log(namaPenumpang + ' sudah ada di angkot');
                return penumpang
            }
            else if (i == penumpang.length - 1) {
                penumpang.push(namaPenumpang)
                return penumpang
            }
        }
    }


    // return penumpang
}

var hapusPenumpang = function (namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        console.log('Tidak ada penumpang');
        return penumpang
    } else {
        for (i = 0; i < penumpang.length; i++) {
            if (namaPenumpang == penumpang[i]) {
                penumpang[i] = undefined
                // delete penumpang[i] //pakai delete juga bisa
                return penumpang
            }
            else if (i == penumpang.length - 1) {
                console.log('tidak ada nama tsb didalam angkot!');
                return penumpang
            }

        }

    }
}

// console.log(tambahPenumpang('c', penumpang));
// console.log(tambahPenumpang('d', penumpang));
// console.log(tambahPenumpang(undefined, penumpang));
// console.log(tambahPenumpang('c', penumpang));
// console.log(tambahPenumpang('e', penumpang));

