// ARRAY SORT
// Jika sort strings, cukup menjalankan function sort

// Jika sorting numbers, maka hurs memberi input ke function 'sort' berupa function
// function yang masuk harus return angka kurang dari nol atau sama dengan nol atau lebih besar dari nol
// var buah = ['Belimbing', 'Semangka', 'Apel', 'Salak']
// buah.sort()
// console.log(buah);

// ASCENDING
function hitung(a, b){
    return  a - b
}

// DESCENDING
// function hitung(a, b){
//     return  b - a
// }

// var angka = [12, 1, 20, 3, 27]
// angka.sort(hitung)
// console.log(angka);

var list = [
    {name: 'Elisa', age: 32},
    {name: 'Sunhe', age: 27},
    {name: 'Hansol', age: 24},
    {name: 'Rudi', age: 19},
    {name: 'Alex', age: 45}
]


// Sort dari remdah ke terbesar berdasarkan umur
function umur(a, b){
    // object.property
    //  a = {name: 'Elisa', age: 32}
    //  b = {name: 'Sunhe', age: 27},
    a.age // 32
    b.age // 27

    return a.age - b.age
}

list.sort(umur)
console.log(list);

// Sort rendah ke besar berdasarkan nama
function name(a, b){
    if(a.name < b.name){
        return -1
    } else if(a.name > b.name){
        return 1
    } else {
        return 0
    }
}

list.sort(name)
console.log(list);

// OBJECT
// Mampu menyimpan banyak data seperti array
// Jika pada array menggunakan index, menggunakan key
// Mampu menyimpan banyak data (String, Number, Boolean ... )

// Variabel di dalam object dinamakan 'property'
// Function di dalam object dinamakan 'method'
// This akan menenunjuk object dimana 'this' itu dipanggil
// var manusia = {
//     // key : value
//     firstName : 'Angga',
//     lastName : 'Candra',
//     age : 32,
//     job: 'Artist',
//     sayHello: function(nama) {
//         console.log('Hello ' + nama)
//     },
//     fullName: function() {
//         return this.firstName + ' ' + this.lastName
//     }
// }

// console.log(manusia);
// var namaLengkap = manusia.fullName()
// console.log(namaLengkap);

// manusia.sayHello('Kevin')
// console.log(manusia.firstName)
// console.log(manusia.lastName)

// Object Literal

// var orang = {firstName: 'Janice', lastName: 'Manuella'}
// console.log(orang);
// Menambahkan property
// orang.job = 'Lawyer'
// orang.makan = function() {
    // console.log('Sedang makan');
    
// }
// console.log(orang)
// menghapus property
// delete orang.firstName
// orang.makan()
// console.log(orang);

// 'new'
// var person = new Object()

// console.log(person);

// person.name = 'Rimu'
// person.age = 31

// console.log(person);

// Object Constructor
// var manusia = function(nama, umur, job){
//     this.firstName = nama,
//     this.age = umur,
//     this.job = job
// }

// var baron = new manusia('Baron', 21, 'Lead Academic')
// var brian = new manusia('Brian', 27, 'Lead Tech')
// console.log(baron);
// console.log(brian);

// "Sub Property Two 45"
// var objOne = {
//     propOne: 'String biasa',
//     propTwo: {
//         subPropOne : 23,
//         subPropTwo: function(x) {
//             console.log('Sub Property ' + x) 
//         }
//     },
//     propThree : ["Red", "Green", "Blue"],
//     propFour: [
//         12,
//         {insideOne: 44, insideTwo: 45}
//     ]
// }
// objOne.propFour[0] // 12 
// objOne.propTwo.subPropTwo(45) // 'Sub Property 45'

// var hari = {
//     pertama: "Senin",
//     kedua: "Selasa",
//     ketiga: "Rabu",
//     keempat: "Kamis",
//     kelima: "Jumat",
//     keenam: "Sabtu"
// }

// console.log(hari.pertama);
// console.log(hari['pertama']);

// Loooping For In
// namaProp akan berisi property yg ada di dalam object hari
// for (var namaProp in hari){
//     console.log(namaProp + ' : ' + hari[namaProp]);
// }


// Class , Template terbaru
// class MakhlukHidup {
//     constructor(nama, place, hidup){
//         // Properties
//         this.name = nama,
//         this.tempatTinggal = place,
//         this.bernyawa = hidup
//     }


//     // Methods
//    bernafas() {
//        console.log('Sedang bernafas')
//    }
// }

// class Manusia extends MakhlukHidup {
//     constructor(nama, place, hidup, akal,karya){
//         super(nama, place, hidup)
//         this.berakal = akal,
//         this.berkarya = karya
//     }
    
//     bergerak(arah) {
//         console.log('Sedang bergerak ke ' + arah)
//     }

//     cariuang() {
//         console.log(this.name + ' sedang mencari uang ')
//     }

// }

// var brew = new Manusia('Brew Master', 'Bumi', true, true , 'Lukisan')
// console.log(brew);
// brew.bernafas()
// brew.bergerak('Kanan')
// brew.cariuang()

/*
Manusia
    - Tempat tinggal
    - Bernyawa
    - Akal
    - Berkarya

    - Bernafas
    - Bergerak
    - CariUang
*/

/*
Hewan
                                        - Tempat Tinggal
                                        - Bernyawa
    - Bersayap

                                        - Bernafas
    - Bergerak
    - Berburu
*/
// class Hewan extends MakhlukHidup {
//     constructor(hidup, place, nama , sayap){
//         super(nama, place, hidup)
//         this.bersayap = sayap
//     }

//     bergerak() {
//         console.log('Sedang bergerak saja');
//     }

//     berburu(buruan){
//         console.log(this.name + ' sedang memburu ' + buruan) ;
//     }
// }

// var harimau = new Hewan(true, 'Hutan', 'Simba', false)
// console.log(harimau.name);
// console.log(harimau.bersayap);
// harimau.berburu('Ubur - ubur') // Simba sedang memburu Ubur - ubur


/*
Tumbuhan
                                        - Tempat Tinggal
                                        - Bernyawa

    - Fotosintesis
                                        - Bernafas
*/

// class Tumbuhan extends Hewan {
//     constructor(nama, place, hidup, sayap){
//         super(nama, place, hidup, sayap)
//     }

//     fotosintesis() {
//         console.log(this.name + ' sedang berfotosintesis');
        
//     }
// }

// var arnoldi = new Tumbuhan('Raflesia', 'Hutan', true, false)
// console.log(arnoldi);
