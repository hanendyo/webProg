//array method using Arrow Function 
let mahasiswa = [`Hanendyo Indira`, `Wafa Nabilah`, `Afif Nur Ayu`, `Diyanah Fitria`]

let jumlahHuruf = mahasiswa.map((nama)=>
    (
        {name: nama, totalChar: nama.length, typeof: typeof(nama)}
    )); //--> gunakan tutup kurung lagi untuk me-return object

console.table(jumlahHuruf);


//implicit return arrow function
//tidak perlu tutup kurung, kurung kurawal, dan return jika hanya ada 1 line.
let tampilNama = nama => `Halo, ${nama}`;
console.log(tampilNama(`hanendyo`));


// konsep this pada arrow function 
const Manusia = function() {
    this.nama = `Hanendyo`;
    this.umur = 24;
    this.sayHello = function(){
        console.log(`halo saya ${this.nama}, saya ${this.umur} tahun.`);
        console.log(this);
    }

    setInterval(()=> {
        console.log(this.umur++);
    }, 3000);
    
}
// const putra = new Manusia();


// testing!
const box = document.querySelector('.box');

box.addEventListener('click', function(){
    let satu = 'size';
    let dua = 'caption';
    
    if(this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    
    setTimeout(() => { //--> harus memakai arrow function 
        this.classList.toggle(dua); //--> agar this mengacu pada parentnya.
    }, 600);
});