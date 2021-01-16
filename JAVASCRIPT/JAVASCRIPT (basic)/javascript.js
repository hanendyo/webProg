//-------
//RECURSIVE


console.log('fungsi recursive & looping: ');
// looping
function facto(n) {
    var hasil = 1
    for (i = n; i > 0; i--) {
        hasil *= i
    }
    return hasil
}
console.log(facto(5));

//rekursif
function faktorial(n) {
    if (n === 0) {
        return 1
    }
    return n * faktorial(n - 1)
}
console.log(faktorial(5));
//-----

//-----
//DECLARATION & EXPRESSION

//function declaration
function hitungVolume1(sisi) {
    var volume = sisi * sisi * sisi
    return volume
}

var kubus1 = hitungVolume1
var kubus2 = hitungVolume1

console.log('\nfungsi expression: ');
console.log(kubus1(5));
console.log(kubus2(2));
console.log(kubus1(5) + kubus2(2));

//function expression
var hitungVolume2 = function (a, b) {
    var volumeA,
        volumeB,
        total

    volumeA = a * a * a
    volumeB = b * b * b

    total = volumeA + volumeB

    return total

}

console.log('\nfungsi expression: ');
console.log(hitungVolume2(5, 2));
//-----

//-----
//SLICE & SPLICE 

var a = ['hanendyo', 'indira', 'hartono', 'putra']

//slice(<indexAwalSampaiSebelumIndexTerakhirAkanMasukKeArrayBaru>, <IndexAkhirTidakAkanMasuk>)
//jika kita memilih angka 0,1,2,3,4 dan menggunakan slice(1,3),
//param#1:mengambil dari index ke-1 yaitu angka 1, & param#2:memilih index sebelum terakhir dari index-3, yaitu index-2
//karena index-3 cuman sebagai 'tembok' saja  
var a1 = a.slice(1, 3)
console.log('\nSLICE:');
console.log(a1);
console.log('\n');

//splice(indexAwal, mauDihapusBerapaBanyak, elemenBaru1, elemenBaru2, ...)
//splice index awalnya itu 1, bukan 0.
a.splice(2, 0, 'lamlekom')
console.log('SPLICE:');
console.log(a);
console.log('\n');

//-----
//MAP & FOREACH

var b = [1, 2, 3, 4, 5, 6, 7]

//map
var b2 = b.map(function (e) {
    return e
})
console.log('MAP:');
console.log(b2);
console.log('\n');

//foreach
console.log('FOREACH:');
b.forEach(function (x) {
    console.log(x);
})
console.log('\n');
//-----

//-----
//SORT

var c = [3, 1, 10, 4, 2, 7, 20, 5, 8, 6]

c.sort(function (a, b) {
    //ascending
    // return a - b 

    //decending
    return b - a
})
console.log('SORT:');
console.log(c);
console.log('\n');
//-----

//-----
//FILTER & FIND

//filter
var d = [3, 1, 10, 4, 2, 7, 20, 5, 8, 6]
var d1 = d.filter(function (x) {
    return (x > 5)
})
console.log('FILTER:');
console.log(d1);
console.log('\n');

//find --> hanya nilai pertama yg diambil
var d2 = d.find(function (x) {
    return (x > 5)
})
console.log('FILTER:');
console.log(d2);
console.log('\n');

//KARENA BELUM DI-SORT, HASIL TIDAK TERURUT
//-----

//-----
//OBJECT

//object literal
var identitas = {
    nama: 'Hanendyo',
    usia: 24,
    email: 'Hanendyo47@gmail.com',
    alamat: {
        jalan: 'Griya Waringin Elok A8/3',
        desa: 'Cimanggis',
        kecamatan: 'Bojonggede',
        kabupaten: 'Bogor',
        provinsi: 'Jawa Barat'
    }
}
console.log('OBJECT LITERAL:');
console.log(identitas);
console.log('\n');

//menggunakan function declaration
function membuatObject(nama, usia, email, jalan, desa, kecamatan, kabupaten, provinsi) {
    var obj = {};
    obj.nama = nama,
        obj.usia = usia,
        obj.email = email,
    obj.alamat = {},
        obj.alamat.jalan = jalan,
        obj.alamat.desa = desa,
        obj.alamat.kecamatan = kecamatan,
        obj.alamat.kabupaten = kabupaten,
        obj.alamat.provinsi = provinsi
    return obj;
}

var obj1 = membuatObject('hanendyo', 24, 'hanendyogmail.com', 'griya waringin elok a8/3', 'cimanggis', 'bojonggede', 'bogor', 'jawa barat')
console.log('OBJECT FUNCTION DECLARATION:');
console.log(obj1);
console.log('\n');

//function construction menggunakan this

//deklarasi variable harus menggunakan huruf Kapital
function NamaOrang(nama, usia, email, jalan, desa, kecamatan, kabupaten, provinsi) {
    this.nama = nama,
        this.usia = usia,
        this.email = email,
        this.alamat = {},
        this.alamat.jalan = jalan,
        this.alamat.desa = desa,
        this.alamat.kecamatan = kecamatan,
        this.alamat.kabupaten = kabupaten,
        this.alamat.provinsi = provinsi
}

//menambahkan <new> untuk memanggil fungsi constructor
//new me-return object baru atau istilahnya dicopy-paste
var NamaOrang1 = new NamaOrang('hanendyo', 24, 'hanendyogmail.com', 'griya waringin elok a8/3', 'cimanggis', 'bojonggede', 'bogor', 'jawa barat')
console.log('OBJECT FUNCTION CONSTRUCTOR:');
console.log(NamaOrang1);
console.log('\n');



//LUPA
//setTimeOut()
const tes = setTimeout (function(){
    for(var i = 0; i < 5; i++){
       console.log('detik ke-' + i);
    }
}, 2000)


const tombolTimeOut = document.getElementById('timeOut')
tombolTimeOut.addEventListener('click', function(){
    clearTimeout(tes)
    console.log('selesai');
})


//setInterval()
const testis = setInterval (function(){
    for(var i = 0; i < 1; i++){
       console.log('detik ke-' + i);
    }
}, 2000)

const tombolInterval = document.getElementById('interval')
tombolInterval.addEventListener('click', function(){
    clearTimeout(testis)
    console.log('selesai');
})


//program hitung mundur 
const tanggalTujuan = new Date('Jan 15, 2021 16:27:00').getTime()

const hitungMundur = setInterval(function(){
    const tanggalSekarang = new Date().getTime()

    //cari selisih
    const selisih = tanggalTujuan - tanggalSekarang

    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24))
    const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60 ))
    const menit = Math.floor(selisih % (1000 * 60 * 60 ) / (1000 * 60  ))
    const detik = Math.floor(selisih % (1000 * 60 ) / (1000  ))

    const teks = document.querySelector('h1')
    teks.innerHTML= 'waktu anda tinggal: ' + hari + 'hari ' + jam + 'jam ' + menit + 'menit ' + detik + 'detik lagi'

    //ketika sudah 0, maka hentikan
    if(selisih == 0 || selisih <= 0){
        clearInterval(hitungMundur)
        teks.innerHTML = 'waktu habis!'
    }
}, 1000)

//-----