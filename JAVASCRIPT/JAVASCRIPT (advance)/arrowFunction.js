//Arrow Function
let mahasiswa = [`Hanendyo Indira`, `Wafa Nabilah`, `Afif Nur Ayu`, `Diyanah Fitria`]

let jumlahHuruf = mahasiswa.map((nama)=>
    (
        {name: nama, totalChar: nama.length}
    )); //--> gunakan tutup kurung lagi untuk me-return object

console.table(jumlahHuruf);


//implicit return arrow function
//tidak perlu tutup kurung, kurung kurawal, dan return jika hanya ada 1 line.
let tampilNama = nama => `Halo, ${nama}`;
console.log(tampilNama(`hanendyo`));