// SPREAD OPERATOR
// memecah iterable, menjadi single element.

// fungsi spread:

// 1. menggabungkan 2 array
const herbivora = ['kambing', 'sapi', 'kuda'];
const karnivora = ['anjing', 'kucing', 'buaya'];
const hewan = [...herbivora, 'platipus', ...karnivora]; //--> untuk menggabungkan 2 array. dan bisa disisipkan value yg lain.
console.log(hewan); 
console.log(...hewan); //--> untuk mengubah menjadi single element (jadi string).

// 2. men-copy array
const mhs = ['hanendyo', 'indira', 'hartono'];

const mhs1 = [...mhs]; //--> mengcopy array mhs, jadi mhs1 != mhs.
mhs1[0] = 'putra' //--> mengubah index ke-n dari array mhs1, tapi tidak merubah array mhs.
console.log(mhs);
console.log(mhs1);



//contoh lain
const liMhs = document.querySelectorAll('li');
const mahaSiswa = [...liMhs].map(m=>m.innerHTML); //--> mengubah nodeList menjadi array
console.log(mahaSiswa); 



//contoh lain
const hasatu = document.querySelector('.hasatu');
const huruf = [...hasatu.textContent].map(h=>`<span>${h}</span>`).join('');
console.log(huruf);
hasatu.innerHTML = huruf; 

