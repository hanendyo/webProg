//HIGHER ORDER FUNCTION --> function yg didalam argumennya memiliki function atau return valuenya function lagi.
function kerjakanTugas(matkul, selesai){ //--> Higher Order FUnction // function kerjakanTugas adalah Higher Order Function
    console.log(`sedang mengerjakan ${matkul}...`);

    selesai();
}

function selesai(){
    setTimeout(() => {
        console.log(`telah selesai mengerjakan!`);
    }, 2000);
}

// kerjakanTugas(`Pemrograman Web`, selesai) //--> callback function // function selesai disebut CALLBACK function karena dijadikan argumen.
//

// 
function repeat (n, action){
    for(i=0; i<n; i++){
        action(i);
    }
}

repeat(10, console.log);
// repeat(3, alert);
// 


// filter, map, & reduce
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

//filter
const newAngkaFilter = angka.filter( a => a >= 3);
console.log(newAngkaFilter);

//map
const newAngkaMap = angka.map(a => a * 2);
console.log(newAngkaMap);

//reduce
const newAngkaReduce = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(newAngkaReduce);


//chaining method
const newAngkaChaining = 
angka.filter(f =>  f >= 5)
.map(m =>  m * 3)
.reduce((r1, r2) => r1 + r2)
console.log(newAngkaChaining);