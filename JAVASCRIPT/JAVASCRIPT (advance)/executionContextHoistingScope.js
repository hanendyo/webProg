//execution context, hoisting, and scope.

//Ada 2 fase dalam execution context (ketika program dijalankan)
//1. Creation phase pada global context 
    // --> [Hoisting] javascript akan mengecek variable atau function dahulu, 
    //       dan mengisi/men-set value dari variable dengan 'undefined'. 
    //          Sementara untuk function, akan diisi dengan function itu sendiri. 
    //
    //              var something = undefined
    //              function something = function()
    
    // --> Javascript mendefinisikan: 
    //          window = global object
    //          this = window

//2. Executi0n phase   
    // --> function membuat lokal execution context,
    //          yang di dalamnya terdapat creation dan execution phase, termasuk hoisting.
    //
    // --> lokal execution context dapat mengakses window & arguments

//note: ketika menggunakan function expression, function di dalam variable 
//          tidak terkena hoisting.

//contoh script
function satu(){
    var nama = `hanendyo`
    console.log(nama);
}

function dua(){
    console.log(nama);
}

console.log(nama);
var nama = `hartono`;
satu();
dua(`indira`);
console.log(nama);
// --> copy ke visualizer untuk visualisasi.