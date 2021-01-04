// TEMPLATE LITERAL

// MULTI-LINE STRING
console.log(`string 1
string 2`); //--> tidak memerlukan '\n' untuk turun, 
            //          hanya butuh enter. 


// EMBEDDED EXPRESSION
const nama = 'hanendyo';
const umur = 24;
console.log(`halo nama saya ${nama}, saya ${umur} tahun.`);

// contoh lain:
console.log(`${1 + 1}`);
// console.log(`${alert('halo')}`); //--> bisa memanggil function, 
                                 //       karena function adalah expression.
const x = 10;
console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`); //--> menggunakan ternary function.

// HTML fragments
const mhs = {
    nama: 'Hanendyo Indira',
    umur: 24,
    nrp: '100160',
    email: 'hanendyo47@gmail.com'
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nrp">${mhs.nrp}</span>
</div>`;
// console.log(el);

document.body.innerHTML = el;
// 

// Looping
const mahasiswa =[ 
{
    nama: 'Hanendyo Indira',
    umur: 24,
},
{
    nama: 'Wafa Nabilah',
    umur: 25,
},
{
    nama: 'Diyanah Fitria',
    umur: 26,
}
];

const e = `<div class="mahasiswa">
${mahasiswa.map(a => `<ul>
    <li>${a.nama}</li>
    <li>${a.umur}</li>
</ul>`).join('')}
</div>`;
document.body.innerHTML = e;
// 

// Conditional
const lagu = [
    {
        judul: 'Pray',
        penyanyi: 'Sam Smith',
        feat: 'Logic'
    },
    {
        judul: 'Stay With Me',
        penyanyi: 'Sam Smith',
        feat: ''
    },
    {
        judul: 'Numb',
        penyanyi: 'Linkin Park',
        feat: 'Jay-Z'
    }
]

const musik = `<div class="lagu">
${lagu.map(p=>`<ul>
    <li>Penyanyi ${p.penyanyi}</li>
    <li>Judul ${p.judul} ${p.feat ? `(Feat. ${p.feat})` : ''}</li>
</ul>`)}
</div>`
document.body.innerHTML = musik;
// 

// Nested
const mhsAbadi = {
    nama: 'Hanendyo Indira',
    semester: 12,
    matakuliah: [
        'PBO',
        'Algoritma Pemrograman',
        'Aljabar Linear',
        'Basis Data'
    ]
};

function cetakMatkul(matkul){
    return `<ol>
    ${matkul.map(mk => `<li>${mk}</li>`).join('')}
</ol>`;

};

const mKuliah = `<div class="matkulMahasiswa">
    <h2>Nama: ${mhsAbadi.nama}</h2>
    <span class="semester">Semester: ${mhsAbadi.semester}</span>
    <h4>Mata Kuliah: </h4>
    ${cetakMatkul(mhsAbadi.matakuliah)}
</div>`;
document.body.innerHTML = mKuliah;


// TAGGED TEMPLATE

//contoh1 
const nama1 = 'Hanendyo';
const umur1 = 24;

function coba1(strings, ...values){
    // CARA BIASA
    // let result = '';
    // strings.forEach((str, i)=>{
    //     result += `${str}${values[i] || ''}`;
    // });
    // return result;

    // REDUCE
    return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
}

const tampilKalimat = coba1 `helo nama saya ${nama1}, saya ${umur1} tahun.`;
console.log(tampilKalimat);

// contoh Highlite
const nama2 = 'Hanendyo';
const umur2 = 24;
const email2 = "hanendyo47@gmail.com"

function coba2(strings, ...values){
    return strings.reduce((result, str, i) => `${result}${str} <span class="hl"> ${values[i] || ''}</span>`, '');
}

const showKalimat = coba2 `Halo nama saya ${nama1}, saya ${umur1} tahun.`;
console.log(showKalimat);
document.body.innerHTML = showKalimat;