// LOOP
// Melakukan suatu proses selama kondisi tertentu terpenuhi

// Selama lampu merah, kendaraan berhenti. jika tidak lagi merah, tidak berhenti

// Selama masih hujan, Akan menggunakan payung, jika tidak lagi hujan, simpan payung

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// WHILE
// var angka = 2

// // Selama condition bernilai true
// while (angka < 8) {
//     angka++
//     console.log(angka);
//     console.log("angka: ", angka);

//     // setelah baris terakhir diproses
//     // akan check condition pada while
// }

// console.log('Selesai WHILE');

//  DO WHILE
// var nilai = 1

// do {
//     nilai++
//     console.log("nilai: ", nilai);
// } while (nilai <= 3) // true

// console.log('Selesai DO WHILE');


// FOR
// declaration ; condition; increment
// for(var i = 1 ; i <= 3 ; i++){

//     console.log('Looping ke: ' + i)

// }

// console.log('Selesai Looping For')

// angka ganjil 1-10 : 1 3 5 7 9
// for(var i = 1; i <= 10; i+=2 ){
//     console.log('Looping: ' + i)
// }

// for (var i = 1 % 2; i <= 10; i += 2) {
//     console.log('Looping: ' + i)
// }

// i = 10   true

// looping 1
// looping 3
// looping 9

// for (var i = 1; i <= 10; i++) {
//     if (i % 2 == 1) { // ganjil
//         console.log('Looping: ' + i)
//     }
// }
// angka genap 0 - 10 : 0 2 4 6 8 10

// for(var i = 0; i <= 10; i+=2 ){
//     console.log('Looping: ' + i)
// }

// for(var i = 1 ; i <=10 ; i++){
//     if(i % 2 == 0){ // genap
//         console.log('Looping: ' + i)
//     }
// }

// LOOP DRAWING
//  * * * * *
// var bintang = ''

// for (var i = 1; i <= 5; i++) {
//     bintang += ' * '
// }

// console.log(bintang)

// *
// *
// *
// *

// var bintang = ''

// for (var i = 1; i <= 5; i++) {
//     bintang += ' * \n'
// }

// console.log(bintang)


// * * * *
// * * * *
// * * * *
// * * * *

// var angka = 3
// var bintang = ''

// // looping 'i' untuk menentukan banyak baris
// for (var i = 1; i <= angka; i++) {

//     // looping 'j' banyak bintang per baris
//     for (var j = 1; j <= angka; j++) {
//         bintang += ' * '
//     }

//     bintang += '\n'


// }

// console.log(bintang)


// * 
// * *
// * * *
// * * * *
// * * * * *

// var angka = 3
// var bintang = ''

// // looping 'i' untuk menentukan banyak baris
// for (var i = 1; i <= angka; i++) {

//     // looping 'j' banyak bintang per baris
//     for (var j = 1; j <= angka; j++) {
//         bintang += ' * '
//     }

//     bintang += '\n'

// }

// console.log(bintang)


//         *
//       * *
//     * * *
//   * * * *
// * * * * *

// var angka = 4
// var bintang = ''

// // looping 'i' untuk menentukan banyak baris
// for (var i = angka; i >= 0; i--) {

//     for (var k = 0; k <= i; k++) {
//         bintang += '   '
//     }
//     // looping 'j' banyak bintang per baris
//     for (var j = k; j <= angka + 1; j++) {
//         bintang += ' * '
//     }

//     bintang += '\n'
// }

// console.log(bintang)

// var angka1 = 3
// var angka2 = 3
// var bintang = ''

// for (var i = 0; i <= angka2; i++) {
//     for (k = 0; k <= angka1; k++) {
//         if (i + k >= angka2) {
//             bintang += " * "
//         } else {
//             bintang += "   "
//         }
//     }
//     bintang += '\n'
// }
// console.log(bintang)




// * * * * *
// * * * *
// * * *
// * *
// *

//beloman





//segitiga

// var z = "";
// var n = 3

// for (var i = 0; i < n; i++) {
//     for (var j = 0; j < (n - i - 1); j++) {
//         z += '   '
//     }

//     for (var k = 1; k <= 2 * i + 1; k++) {
//         z += ' * '
//     }

//     z += '\n'
// }

// console.log(z);



// var star = ''
// var number = 3


// for (i = 0; i < number; i++) {

//     for (j = number; j > i; j--) {
//         star += " * "
//     }


//     // for (k = 0; k < number; k++) {
//     //     star += " & "
//     // }

//     // for (k = 0; k <= 2 * i; k++) {
//     //     star += "  "
//     // }



//     star += "\n"
// }

// console.log(star);

// star = ' '
// number = 3

// for (i = number; i >= 1; i--) {

//     for (j = 0; j < 2 * i; j++) {
//         star += " * "
//     }

//     for (k = i; k >= 1; k--) {
//         star += " ! "
//     }


//     star += "\n"
// }

// console.log(star);


