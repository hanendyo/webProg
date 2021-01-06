// CALLBACK

// synchronus callback
function halo(nama){
    alert(`Halo, ${nama}`)
}

function tampilkanPesan(callback){
    const nama = prompt(`masukkan nama: `);
    callback(nama);
}
// tampilkanPesan(nama);
// atau
// tampilkanPesan(nama => alert(`Halo ${nama} `))`


// asynchronus callback
console.log('satu');
setTimeout(()=> console.log('dua'), 0); //--> biarpun timeOut nya 0, tetap diaggap sebagai asynch
console.log('tiga');