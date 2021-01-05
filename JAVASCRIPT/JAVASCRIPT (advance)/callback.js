// CALLBACK

// synchronus callback
function halo(nama){
    alert(`Halo, ${nama}`)
}

function tampilkanPesan(callback){
    const nama = prompt(`masukkan nama: `);
    callback(nama);
}

tampilkanPesan(nama);

// atau
// tampilkanPesan(nama => alert(`Halo ${nama} `))`