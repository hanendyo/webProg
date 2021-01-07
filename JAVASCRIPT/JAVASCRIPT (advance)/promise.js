// PROMISE
// object yang merepresentasikan keberhasilan / kegagalan 
//      sebuah event yg asynchronus, di masa yg akan datang.
// janji (terpunuhi / ingkar)
// state (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

// contoh1
let ditepati = true;
const janji1 = new Promise((resolve, reject) => {
    if(ditepati){
        resolve('janji ditepati');
    } else {
        reject('janji tidak ditepati');
    }
});

janji1
.then(response=>console.log(`OK!: ${response}`))
.catch(response=>console.log(`NOT OK!: ${response}`))


// contoh 2 PENDING
let fulfilled = true;
const janji2 = new Promise((resolve, reject) => {
    if(fulfilled){
        setTimeout(()=>{
            resolve('janji ditepati');
            }, 3000);
    } else {
        setTimeout(()=>{
            reject('janji tidak ditepati');
            }, 3000);
    }
});


console.log('satu');
console.log(janji2
    .then(response=>console.log(`OK!: ${response}`))
    .catch(response=>console.log(`NOT OK!: ${response}`)));
console.log('dua');


// contoh 3 Promise.all()
const realMadrid = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve([{
            nama: 'Karim Benzema',
            umur: 32,
            negara: 'Prancis'
        }])
    }, 3000);
});
const barcelona = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve([{
            nama: 'Lionel Mesii',
            umur: 33,
            negara: 'Argentina'
        }])
    }, 3000);
});

Promise.all([realMadrid, barcelona])
.finally(()=>console.log('ini list nya!'))
.then(response=>{
    const [realMadrid, barcelona] = response;
    console.log(realMadrid);
    console.log(barcelona);
})