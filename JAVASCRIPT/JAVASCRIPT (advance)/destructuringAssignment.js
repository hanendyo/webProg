// DESTRUCTURING ASSIGNMENT --> memecah array / object

// normal
const mahasiswa = ['hanendyo', 24, 100160, 'hanendyo47@gmail.com'];
const[nama, usia, nrp, suratElektronik] = mahasiswa;
console.log(nama);
console.log(usia);
console.log(nrp);
console.log(suratElektronik);

// skipping items
const[ ,age , ,email] = mahasiswa;
console.log(age);
console.log(email);

// swap items
let a = 1;
let b = 2; 
console.log(a);
console.log(b);
// dibalik
[a, b] = [b, a];
console.log(a);
console.log(b);

// return value pada function
function test(){
    return [4, 6];
}
const [a1, b1] = test();
console.log(a1);
console.log(b1);

// Rest parameter
const[x, ...y] = [1, 2, 3, 4, 5, 6];
console.log(x);
console.log(y);

// object
const lagu = {
    judul: 'Pray',
    penyanyi: 'Sam Smith',
    dengan: 'Logic'
};
const {judul, penyanyi, dengan} = lagu;
console.log(judul);
console.log(penyanyi);
console.log(dengan);

// tanpa deklarasi object
({title, singer, feat} = {
    title: 'Numb',
    singer: 'linkin Park',
    feat: 'Jay-Z'
});
console.log(title);
console.log(singer);
console.log(feat);

// assign ke variable baru
const hewan = {
    namaHewan: 'Macan',
    golongan: 'karnivora'
};
const {namaHewan: aa, golongan: bb} = hewan;
console.log(aa);
console.log(bb);

// memberikan nilai default
const manusia = {
    ras: 'jawa',
    golDarah: 'A',
};

const {ras, golDarah, agama = 'belum mengisi!'} = manusia;  //--> agama akan mencari di object manusia, jika tidak ada,
                                                            //      maka akan mengambil nilai defaultnya.
console.log(ras);
console.log(golDarah);
console.log(agama);

// nilai default + assign ke variable baru
const konsol = {
    produsen: "sony",
    item: 'Playstation'
};

const{produsen: xx, item: yy, seri: zz = "belum memilih seri!"} = konsol;
console.log(xx);
console.log(yy);
console.log(zz);

// Rest Parameter
const footballPlayer = {
    gk: 'iker casillas',
    cb: 'sergio ramos',
    cm: 'toni kroos',
    st: 'karim benzema',
    coach: 'zinedin zidane'
}

const {gk, ...others} = footballPlayer;
console.log(gk);
console.log(others);

// mengambil field pada object, setelah dikirm sebagai argument pd function.
const karimBenzema = {
    posisi: 'striker',
    klub: 'real madrid',
    negara: 'prancis',
    gol: 303
};

function getGol({gol}){ //--> 2. tapi kita bisa memasukan propertynya saja, tidak usah objectnya.
    return gol;
}

console.log(getGol(karimBenzema)); //--> 1. mengirimkan object sebagai argumen.