//DESTRUCTURING FUNCTION

//return array
function returnArray(a,b){
    return [a+b, a-b, a*b, a/b];
}

const [tambah, kurang, kali, bagi] = returnArray(2,3); //--> urutan berpengaruh
console.log(tambah);
console.log(kurang);
console.log(kali);
console.log(bagi);


// return object
function returnObject(a, b){
    return {
        plus: a + b,
        minus: a - b,
        multiple: a * b,
        divide: a / b
    }
}

const {divide, plus, multiple, minus} = returnObject(3, 5); //--> urutan tidak berpengaruh
console.log(divide);
console.log(plus);
console.log(multiple);
console.log(minus);


// destructuring function argument
const karimBenzema = {
    posisi: 'striker',
    klub: 'real madrid',
    negara: 'prancis',
    gol: {
        lyonB: 15,
        lyon: 43,
        realMadrid: 177
    }
};

function getGol({posisi, klub, negara, gol:{realMadrid, lyonB, lyon}}){ //--> bisa "nested" destructuring
    return `namanya adalah Karim Benzema, berkenegaraan ${negara}, dan menjadi pemain klub ${klub}. 
    berposisi sebagai ${posisi} dan telah mencetak ${realMadrid} gol untuk ${klub}, ${lyon} gol untuk Lyon A, 
    dan ${lyonB} gol untuk Lyon B.`;
}

console.log(getGol(karimBenzema)); 