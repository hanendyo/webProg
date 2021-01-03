//ambil semua elemen video 
const videos = Array.from(document.querySelectorAll('[data-duration]'));

//(menggunakan chaining method)
//pilih hanya yg 'JAVASCRIPT LANJUTAN'
let jsLanjutan = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))
// ambil durasi masing2 video
.map(item => item.dataset.duration)
//ubah durasi menjadi /floatinteger, dan ubah menit menjadi detik
.map(waktu => {
    //10:30 -> [10, 30] using split
    const parts = waktu.split(':').map(part=>parseFloat(part));
    return (parts[0] * 60 + parts[1]);
})
//jumlahkan semua detik
.reduce((total, detik)=>{
    return total + detik;
});
// 

//ubah formatnya menjadi jam menit detik
// jam
const jam = Math.floor(jsLanjutan / 3600); //--> 2 hours
jsLanjutan = jsLanjutan - jam * 3600; //-->1092

// menit
const menit = Math.floor(jsLanjutan / 60); //-->18 minutes

// detik
const detik = jsLanjutan - menit * 60; //--> 12 seconds



//simpan di DOM
//jumlah video
const jumlahVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length
const pJumlahVideo = document.querySelector('.jumlah-video');
pJumlahVideo.textContent = `${jumlahVideo} video.`;

//total durasi
const ptotalDurasi = document.querySelector('.total-durasi');
ptotalDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik.`

