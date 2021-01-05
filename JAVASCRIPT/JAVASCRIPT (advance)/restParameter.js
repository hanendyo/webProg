// REST PARAMETER

// 
function myFunc(){

    // return myArgs;
    // return Array.from(arguments); // --> Array.from // mengubah tipe data menjadi array
    return [...arguments]; //--> SPREAD OPERATOR // mengubah tipe data arguments menjadi array.   
}
console.log(myFunc(1, 2, 3, 4, 5, 6));

// 
function penjumlahan(...angka){
    return angka.reduce((a, b) => a + b);
}
console.log(penjumlahan(1, 2, 3, 4, 5));


// array destructuring
const kelompok1 = ['hanendyo', 'indira', 'hartono', 'putra', 'putri'];
const [ketua, wakil, ...anggota] = kelompok1;
console.log(ketua);
console.log(wakil);
console.log(anggota);

// object destructuring
const team = {
    pm: 'hanendyo',
    frontEnd:'indira',
    backend: 'hartono',
    ux: 'putra',
    devOps: 'putri'
}

const {pm, ...myTeam} = team; //--> nama harus sama
console.log(pm);
console.log(myTeam);

// filtering

function filterBy(type, ...values){
    console.log(type);
    return values.filter(v => typeof v === type);
    
};


console.log(filterBy('string', 1, 'hanendyo', 2, 'indira', 3, true, 'hartono', false));
console.log(filterBy('number', 1, 'hanendyo', 2, 'indira', 3, true, 'hartono', false));
console.log(filterBy('boolean', 1, 'hanendyo', 2, 'indira', 3, true, 'hartono', false));