//  for..of

// array
const mhs = ['hanendyo', 'wafa', 'diyanah'];
for(const m of mhs){
    console.log(m);
}

// string 
const nama = 'hanendyo';
for(const n of nama) { //--> dilooping per-karakter
    console.log(n);
}

// cara mendapatkan index di forOf
const mahasiswa = ['hanendyo', 'wafa', 'diyanah'];
for(const [i, mhs] of mahasiswa.entries()) {
    console.log(`${mhs} adalah mahasiswa ke-${i+1}`);
}

// nodelist
// const liNama = document.querySelectorAll('.nama');
// for(n of liNama){
//     console.log(n.innerHTML);
// }

// arguments
// ARGUMENTS BUKAN ARRAY, TIDAK BISA MENGGUNAKAN ARRAY METHODS!
function jumlahkanAngka(){
    let jumlah =0;
    for(a of arguments){
        jumlah += a;
    }
    return jumlah;
}

console.log(jumlahkanAngka(1, 2, 3, 4, 5));


// for..in
const karimBenzema = {
    posisi: 'striker',
    klub: 'real madrid',
    negara: 'prancis',
    gol: 303
};

for(k in karimBenzema){
    console.log(`index: ${k}`); //--> indexnya
    console.log(`value: ${karimBenzema[k]}`); //--> valuenya 
}

