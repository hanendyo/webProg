// CLOSURE 
// --> ketika inner function mengakses variable parentnya

//Lexical Scope --> jika didalam scope tidak ada variablenya, 
//                      scope tersebut akan keluar dan mencari di parent scopenya,
//                          akan terus keluar sampai menemukan variablenya.

//using closure #1
function init(){
    
    let nama = `hanendyo`;
    let umur = 24;

    //closure --> menggunakan variable dari scope parentnya, jika lokal tidak ada
    function tampilNama(){
        // console.log(nama);
        // console.log(umur);
        return nama, umur
    }
    // 
    tampilNama();
}
init();
// 

//using closure #2 with anonim function
function init(){

    //closure --> menggunakan variable dari scope parentnya, jika lokal tidak ada
    return function(nama, umur){
        console.log(nama);
        console.log(umur);
    }
}

let panggilNama = init();
panggilNama(`hanendyo`, 24);
panggilNama(`indira`, 24)
// 

// kenapa menggunakan closure? 
//      #1 membuat factory function
//      #2

// factory function --> membuat function sesuai dgn function lain

//closure using factory function #1
function ucapkanSalam (waktu){
    return function(nama){
        console.log(`selamat ${waktu}, ${nama}!`);
    }
}

let selamatPagi = ucapkanSalam(`pagi`);
let selamatSiang = ucapkanSalam(`siang`);
let selamatMalam = ucapkanSalam(`malam`);

selamatPagi(`Hanendyo`)
selamatSiang(`Indira`)
selamatMalam(`Hartono`)
// 

//closure using immediatly invoke function 
let add = (function(){ //--> menambahkan kurung tutup (function(){})();
    let counter = 0;
    return function(){
        return ++counter;
        // return counter++;
    }
}) ();

console.log(add());
console.log(add());
console.log(add());
// 