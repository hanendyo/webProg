/*
1. Memunculkan daftar Menu
    - Ayam @ 25.000
    - Ikan @ 50.000
    - Sapi @ 75.000

    - Minta input menu pilihan

2. Minta inputan quantity 

3. Tanyakan apakah ingin belanja lagi?
    - mengggunakan 'confirm'

    - Jika dia ingin belanja lagi, balik ke langkah 1
    - Jika tidak ingin belanja lagi, lanjut ke langkah 4

4. Munculkan Rincian belanja seperti screenshot
    dan meminta inputan jumlah uang

    - Jika uang yang dimasukkan kurang, ulangi langkah 4
    - Jika tidak kurang, lanjut ke langkah terakhir

Terakhir. Munculkan Rincian belanja, uang yg di bayar, berikut kembalian seperti screenshot
*/

// V1.0
// var menu, lanjut,
//     produk = ['Ayam', 'Ikan', 'Sapi'],
//     harga = [25000, 50000, 75000],
//     jumlah = [0,0,0],
//     total = [0,0,0],
//     totalBelanja, uang, kembali

// do {
//     menu = parseInt(prompt(
//         "Selamat datang di PasarOnline\n"+
//         "Daftar Menu : \n"+
//         "1. Ayam @ Rp.25.000\n2. Ikan @ Rp. 50.000\n3. Sapi @ 75.000"
//     )) -  1
//     // menu = (2 - 1) = 1 (ikan)
//     // jumlah[1] , produk[1] -> ikan
//     jumlah[menu] =  parseInt(prompt('Masukkan jumlah ' + produk[menu]))
    
//     // confirm akan me-return true or false
//     // klik OK : true, klik cancel : false
//     lanjut = confirm('Ingin menambahkan belanjaan ?')
//     console.log(lanjut);
        
// } while (lanjut);

// // Total belanja Ayam, Ayam ada di index 0
// total[0] = harga[0] * jumlah[0]
// // Total belanja Ikan, Ikan ada di index 1
// total[1] = harga[1] * jumlah[1]
// // Total belanja Sapi, Sapi ada di index 0
// total[2] = harga[2] * jumlah[2]

// // Menghitung total belanja
// totalBelanja = total[0] + total[1] + total[2]

// do {
//     uang = parseInt(
//         prompt(
//             "Total Belanja\n"+
//             "Ayam\n" + harga[0] + " x " + jumlah[0] + " = Rp. " + total[0] +
//             "\nIkan\n" + harga[1] + " x " + jumlah[1] + " = Rp. " + total[1] +
//             "\nSapi\n" + harga[2] + " x " + jumlah[2] + " = Rp. " + total[2] +
//             "\n\nTotal Yang harus anda bayar adalah : Rp. " + totalBelanja +
//             "\n\nMasukkan jumlah uang Anda :"
//         )
//     )

//     // Cek apakah uangnya kurang ?
//     if(uang < totalBelanja){
//         // Cari selisih uangnya
//         var kurang = totalBelanja - uang
//         // Agar mengulang proses input uang kembali
//         lanjut = true
//         // Munculkan notif
//         alert(
//             "Jumlah uang yang Anda masukkan kurang Rp. " + kurang +
//             "\nTotal Belanja Anda : Rp. " + totalBelanja +
//             "\nUang yang anda masukkan : Rp, " + uang
//         )
//     } else {
//         // Cari selisih uang untuk kembalian
//         kembali = uang - totalBelanja
//         // Agar tidak mengulang proses input uang
//         lanjut = false
//     }
// } while (lanjut);

// console.log(
//     "Data Belanja" +
//     "\n  " + produk[0] + " x " + jumlah[0] + " = Rp." + total[0] +
//     "\n  " + produk[1] + " x " + jumlah[1] + " = Rp." + total[1] +
//     "\n  " + produk[2] + " x " + jumlah[2] + " = Rp." + total[2] +
//     "\n\n  Total belanja  Rp." + totalBelanja +
//     "\n  Jumlah uang Rp." + uang +
//     "\n  Kembali Rp. " + kembali +
//     "\n  Terimakasih"

// );

// V1.2
// V1.2
// var listMenu = (prdk, hrg) => {
//     var list = 'Selamat datang di PasarOnline\nDaftar Menu:\n'
//     for(let i = 0; i < prdk.length; i++){
//         list += `${i+1}. ${prdk[i]} @ Rp.${hrg[i]}\n`
//     }

//     return list
// }

// var listTotal = () => {
//     var strListTotal = "Total Belanja"
//     for(let i = 0; i < jumlah.length; i++){
//         if(jumlah[i] != null){
//             strListTotal += `\n${produk[i]}\n ${harga[i]} x ${jumlah[i]} = Rp. ${total[i]}`
//         }
//     }

//     strListTotal += `
//     \n\nTotal Yang harus anda bayar adalah : Rp. ${totalBelanja}
//     \n\nMasukkan jumlah uang Anda :
//     `

//     return strListTotal
// }

// var hitungTotal = (hrg, jmlh) => {
//     for(let i = 0; i < jmlh.length; i++){
//         if(jmlh[i] != null){
//             total[i] = hrg[i] * jmlh[i]
//             totalBelanja += total[i]
//         }
        
//     }
// }

// var dataBelanja = () => {
//     var strDataBelanja = `Data Belanja`
//     for(let i = 0; i < jumlah.length;i++){
//         if(jumlah[i] != null){
//             strDataBelanja += `\n  ${produk[i]} x ${jumlah[i]} = Rp. ${total[i]}`
//         }
//     }
//     strDataBelanja += 
//     `

//   Total belanja Rp.${totalBelanja}
//   Jumlah uang Rp.${uang}
//   Kembali Rp.${kembali}
      
//   Terimakasih
//     `

//     return strDataBelanja
// }


// var menu,
// produk  = ["Ayam", "Ikan", "Sapi", "Kuda", "Angsa"],
// harga   = [25000, 50000, 75000, 100000, 30000],
//     jumlah  = [],
//     total   = [],
//     totalBelanja = 0,
//     uang, uangKurang, kembali

// do {
//     do {
//         var check2 = false
//         menu = parseInt(
//             prompt(
//             listMenu(produk, harga)
//         )) - 1
//         if(!Number.isInteger(menu)){
//             alert("Mohon input sebuah angka")
//             check2 = true
//         } else if(menu < 0 || menu > (produk.length-1)){
//             alert(`Pilihan hanya ada 1 - ${produk.length}, Mohon input dengan benar`)
//             check2 = true;
//         }
//     } while (check2);
    
//     do {
//         var check3 = false;
//         if(jumlah[menu] == undefined){
//             jumlah[menu] = 0
//         }
//         jumlah[menu] += Math.abs(parseInt(prompt("Masukkan jumlah " + produk[menu]))) // perbaiki ini
//         if (!Number.isInteger(jumlah[menu])) {
//             alert("Mohon masukkah jumlah dengan angka")
//             check3 = true
//         }
//     } while (check3);
    
    
//     var check = confirm("Ingin menambahkan belanjaan ?")
    
// } while (check);


// hitungTotal(harga, jumlah)

// mshKurang = false
// do {
//     var check5 = false
//     uang = Math.abs(
//         parseInt(
//             prompt(
//                 listTotal()
//             )
//         )
//     )
//     if (!Number.isInteger(uang)) {
//         alert("Masukkan jumlah uang dalam format angka")
//         check5 = true
//     }
// } while (check5);

// if (uang < totalBelanja) {
//     var kurang = totalBelanja - uang
//     mshKurang = true
//     alert(
//         "Jumlah uang yang Anda masukkan kurang Rp. " + kurang +
//         "\nTotal Belanja Anda : Rp. " + totalBelanja +
//         "\nUang yang anda masukkan : Rp. " + uang
//     )

//     while (mshKurang) {
//         do {
//             var check4 = false
//             uangKurang = Math.abs(parseInt(prompt("Masukkan sisa pembayaran Rp." + kurang)))
//             if (!Number.isInteger(uangKurang)) {
//                 alert("Mohon masukkan uang dalam format angka")
//                 check4 = true
//             }
//         } while (check4);
//         if (uangKurang < kurang) {
//             alert("Jumlah pembayaran masih kurang")
//         } else {
//             uang += uangKurang
//             kembali = uang - totalBelanja
//             mshKurang = false;
//         }
//     }
// } else {
//     kembali = uang - totalBelanja
// }

// console.log(
//     dataBelanja()
// );