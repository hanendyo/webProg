// Object.create dgn object literal & function declaration
const methodMahasiswa = {
    makan: function(porsi){
        this.energi += porsi;
        console.log(`halo ${this.nama}, selamat makan!`);
    },
    main: function(jam){
        this.energi -= jam;
        console.log(`halo ${this.nama}, kamu sudah bermain selama ${jam} jam!`);
    },
    tidur: function(jam){
        this.energi += jam * 2;
        console.log(`selamat tidur, ${this.nama}!`);
    }
}

function Mahasiswa (nama, energi) {

    let mahasiswa = Object.create(methodMahasiswa);

    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    return mahasiswa;
}

let hanendyo = Mahasiswa('hanendyo', 10)

// 

//.prototype dgn function constructor
Manusia.prototype.makan = function(porsi){
    this.energi += porsi;
    console.log(`halo ${this.nama}, selamat makan!`);
}
Manusia.prototype.main = function(jam){
    this.energi -= jam;
    console.log(`halo ${this.nama}, selamat main!`);
}
Manusia.prototype.tidur = function(jam){
    this.energi += jam * 2;
    console.log(`halo ${this.nama}, selamat tidur!`);
}

function Manusia (nama, energi) {

    this.nama = nama;
    this.energi = energi;

}
let indira = new Manusia('Indira', 10)
// 

// Class dgn function constructor
class Player {
    constructor (nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }
    makan(porsi){
        this.energi += porsi;
        console.log(`halo ${this.nama}, selamat makan!`);
    }
    main(jam){
        this.energi -= jam;
        console.log(`halo ${this.nama}, selamat main!`);
    }
    tidur(jam){
        this.energi += jam * 2;
        console.log(`halo ${this.nama}, selamat tidur!`);
    }
    
}

let hartono = new Player ('hartono', 10)
// 
