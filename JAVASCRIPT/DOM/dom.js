//-----
// DOM SELECTION
//***document.getElementById() --> return element
const judul = document.getElementById('judul')
judul.style.backgroundColor = 'lightblue'
judul.style.color = 'red'

//***innerHTML untuk merubah text/isi di dalam elemen
judul.innerHTML = 'coba innerHTML'

//***document.getElementsByTagName() --> return HTMLcollection
const p = document.getElementsByTagName('p')
for (let i = 0; i < p.length; i++) {
    if (i % 2 == 1) {
        p[i].style.backgroundColor = 'gray'
    } else {
        p[i].style.backgroundColor = 'cyan'
    }
}
//bisa memilih 1 node elemen menggunakan byTagName dengan menuliskan arraynya ([0/1/2/3])
const h1 = document.getElementsByTagName('h1')[0]
h1.style.fontSize = '50px'


//***document.getElementsByClassName() --> return HTMLcollection
const p1 = document.getElementsByClassName('p1')[0]
p1.style.color = 'red'
p1.style.fontSize = '30px'
p1.innerHTML = 'diubah via javascript'

// NOTE:
// ketika hanya mengambil 1 elemen class atau tag pake HTMLcollection, tetap beri index array.

//***document.querySelector('') --> return elemen
const p4 = document.querySelector('#b p')
p4.style.fontSize = '40px'
p4.style.color = 'red'

const li2 = document.querySelector('section#b ul li:nth-child(2)')
li2.style.backgroundColor = 'yellow'
li2.innerHTML = 'ini diubah melalui javascript'

const slider = document.querySelector('input[name = sliderMerah]') //--> untuk select selain class & id 

//***document.querySelectorAll() -->return Nodelist
const pp = document.querySelectorAll('p')
for (i = 0; i < pp.length; i++) {
    pp[i].style.backgroundColor = 'yellow'
}

//MENGUBAH NODE ROOT (document)
const sectionB = document.querySelector('#b')
const p4 = sectionB.getElementsByTagName('p')[0]
p4.style.backgroundColor = 'lightblue'
p4.style.fontSize = '40px'
//-----

//-----
//DOM MANIPULATION
//***innerHTML --> mengubah isi/text dari sebuah tag yg sudah diseleksi
const judul = document.getElementById('judul')
const judul2 = document.getElementsByTagName('h1')
const judul3 = document.querySelector('h1')
const judul4 = document.querySelectorAll('h1')


judul.innerHTML = 'diubah via javascript menggunakan ById'

for (i = 0; i < judul2.length; i++) {
    judul2[i].innerHTML = 'diubah via JS menggunakan ByTagName'
}

judul3.innerHTML = 'diubah via JS menggunakan querySelector'

for (i = 0; i < judul4.length; i++) {
    judul4[i].innerHTML = 'diubah via JS menggunakan querySelectorAll'

}


//***style.<property> --> merubah style dari tag yg sudah diseleksi
const judul = document.getElementById('judul')
const paragraf = document.getElementsByTagName('p')
const paragraf2 = document.getElementsByTagName('p')[0]
const paragraf3 = document.querySelector('.p3')
const li = document.getElementsByTagName('li')

judul.style.backgroundColor = 'lightblue'

for (i = 0; i < li.length; i++) {
    paragraf[i].style.fontSize = '40px'
    paragraf[i].style.color = 'yellow'
}

paragraf2.style.backgroundColor = 'salmon'

paragraf3.style.backgroundColor = 'green'

for (i = 0; i < li.length; i++) {
    li[i].innerHTML = 'diubah via JS menggunakan querySelectorAll'
}

//attribute
const a = document.querySelector('section#a a')

//***setAttribute() --> memberi attribute baru pada tag dan MENG-OVERWRITE attribute awal
a.setAttribute('id', 'link')

//***getAttribute() --> mengambil info attribute pada tag
a.getAttribute('href')

//***removeAttribute() --> menghapus attribute pada tag
a.removeAttribute('href')

//***classList
const p3 = document.querySelector('.p3')

//***classList.add() --> menambahkan class baru
p3.classList.add('label')

//***classList.remove() -->menghapus class
p3.classList.remove('label')

//***classList.toggle() --> jika belum ada di dalam tag, class akan otomatis dibuatkan, dan sebaliknya. 
p3.classList.toggle('label')

//***classList.item() --> menanyakan ada berapa class dalam suatu tag
p3.classList.item(1)

//***classList.contain() --> menanyakan ada kah class tertentu di dalam tag
p3.classList.contain('label')

//***classList.replace() --> mengganti class yang ada sesuai keinginan
p3.classList.replace('label', 'labelBaru')


//node manipulation
//***node.appendChild() --> membuat elemen baru
//membuat node baru
//#1 membuat elemen baru
// document.createElement() --> membuat elemen baru
const pBaru = document.createElement('p')
// document.createTextNode() --> membuat teks/isi pada node
const teksPBaru = document.createTextNode('paragraf baru')
//#2 simpan tulisan ke dalam 'p'
// .appendChild() -->memasukkan child ke dalam parent
pBaru.appendChild(teksPBaru)
//#3 simpan pBaru di section A
const sectionA = document.getElementById('a')
sectionA.appendChild(pBaru)


//***node.insertBefore() --> seperti nama nya
//membuat node baru dan menyelipkan diantara node-node
//#1 membuat element baru
const liBaru = document.createElement('li')
const teksLiBaru = document.createTextNode('list baru')
//#2 simpan tulisan ke dalam 'p'
liBaru.appendChild(teksPBaru)
//#3  mengambil info 
const ul = document.querySelector('section#b ul')
const ulChild = ul.querySelector('li:nth-child(2)')
//#4 menggunakan insertBefore untuk menyelipkan li 
//.insertBefore() -->  //param#1: apa yg dimasukkan, param#2: patokkan nya apa
ul.insertBefore(liBaru, ulChild)


//***parentNode.removeChild() --> menghapus child dalam parent
const link = document.getElementsByTagName('a')[0]
sectionA.removeChild(link)

//***parentNode.replaceChild() --> seperti namanya
const sectionB = document.getElementById('b')
const pLama = sectionB.getElementsByTagName('p')[0]

const judulBaru = document.createElement('h2')
const teksJudulBaru = document.createTextNode('Judul Baru!')

judulBaru.appendChild(teksJudulBaru)
//.replaceChild() --> param#1: apa yg dimasukkan, param#2: apa yg diganti
sectionB.replaceChild(judulBaru, p)

//DOM event
//***event handler
function merubahP3() {
    p3.style.backgroundColor = 'lightblue'
}
const p3 = document.querySelector('.p3')
p3.onclick = merubahP3


//***event listener
//***.addEventListener(a,b)
const p4 = document.querySelector('section#b p')
p4.addEventListener('click', function () {
    const ul = document.querySelector('section#b ul')

    const liBaru = document.createElement('li')
    const teksLiBaru = document.createTextNode('list baru!')
    liBaru.appendChild(teksLiBaru)

    ul.appendChild(liBaru)
})

//fungsi event handler angka overwrite fungsi sebelumnya sedangkan listener akan menggabungkannya


//MEMBUAT TOMBOL UNTUK MERUBAH WARNA
//#1 membuat elemen button
const button = document.createElement('button')
button.setAttribute('type', 'button')
button.setAttribute('id', 'tombolUbahWarna')
const teksButton = document.createTextNode('ubah warna!')
button.appendChild(teksButton)

//#2 GET info body
const bodyHtml = document.getElementsByTagName('body')[0]
bodyHtml.appendChild(button)
//atau bisa menggunakan cara dibawah ini:
// document.body.appendChild(button) 

//#3 GET info h1
const h1 = document.getElementsByTagName('h1')[0]

//#4 membuat event listener / method
button.addEventListener('click', function () {
    bodyHtml.classList.toggle('biruMuda')
    h1.style.color = 'red'
    // bodyHtml.style.backgroundColor = 'lightblue'
})

// const br = document.createElement('BR')
// bodyHtml.appendChild(br)

//MERUBAH WARNA SECARA RANDOM
const buttonRandom = document.createElement('button')
buttonRandom.setAttribute('type', 'button')
buttonRandom.setAttribute('id', 'tombolUbahWarna2')
const teksButtonRandom = document.createTextNode('ubah warna acak!')
buttonRandom.appendChild(teksButtonRandom)

bodyHtml.appendChild(buttonRandom)
//bisa juga pake dibawah:
// button.after(buttonRandom)

buttonRandom.addEventListener('click', function () {
    //cara #1
    const r = Math.round(Math.random() * 255 + 1)
    console.log(typeof (r));
    const g = Math.round(Math.random() * 255 + 1)
    const b = Math.round(Math.random() * 255 + 1)
    bodyHtml.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'

    //cara #2
    // const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    // bodyHtml.style.backgroundColor = '#' + randomColor

})
const br2 = document.createElement('BR')
bodyHtml.appendChild(br2)


//MEMBUAT SLIDER
//membuat slider merah
//membuat elemen div yang nantinya membuat suatu kotak
const divMerah = document.createElement('div')
divMerah.classList.add('kotak', 'merah')
bodyHtml.appendChild(divMerah)

const sMerah = document.createElement('input')
sMerah.setAttribute('type', 'range')
sMerah.setAttribute('name', 'sMerah')
sMerah.setAttribute('min', 0)
sMerah.setAttribute('max', 255)

bodyHtml.appendChild(sMerah)

const sliderMerah = document.querySelector('input[name = sMerah]')

sliderMerah.addEventListener('input', function () {
    const r = sliderMerah.value
    const g = sliderHijau.value
    const b = sliderBiru.value

    bodyHtml.style.backgroundColor = 'rgb(' + r + ',' + g + ', ' + b + ')'
})

const br3 = document.createElement('BR')
bodyHtml.appendChild(br3)

//membuat slider hijau
const divHijau = document.createElement('div')
divHijau.classList.add('kotak', 'hijau')
bodyHtml.appendChild(divHijau)

const sHijau = document.createElement('input')
sHijau.setAttribute('type', 'range')
sHijau.setAttribute('name', 'sHijau')
sHijau.setAttribute('min', 0)
sHijau.setAttribute('max', 255)

bodyHtml.appendChild(sHijau)

const sliderHijau = document.querySelector('input[name = sHijau]')

sliderHijau.addEventListener('input', function () {
    const r = sliderMerah.value
    const g = sliderHijau.value
    const b = sliderBiru.value

    bodyHtml.style.backgroundColor = 'rgb(' + r + ',' + g + ', ' + b + ')'
})

const br4 = document.createElement('BR')
bodyHtml.appendChild(br4)

//membuat slider biru
const divBiru = document.createElement('div')
divBiru.classList.add('kotak', 'biru')
bodyHtml.appendChild(divBiru)

const sBiru = document.createElement('input')
sBiru.setAttribute('type', 'range')
sBiru.setAttribute('name', 'sBiru')
sBiru.setAttribute('min', 0)
sBiru.setAttribute('max', 255)

bodyHtml.appendChild(sBiru)

const sliderBiru = document.querySelector('input[name = sBiru]')

sliderBiru.addEventListener('input', function () {
    const r = sliderMerah.value
    const g = sliderHijau.value
    const b = sliderBiru.value

    bodyHtml.style.backgroundColor = 'rgb(' + r + ',' + g + ', ' + b + ')'
})


//MENGUBAH WARNA BERDASARKAN LETAK CURSOR
bodyHtml.addEventListener('mousemove', function (event) {
    //posisi mouse
    //event.clientX --> sumbu X
    //event.clientY --> sumbu Y

    //ukuran browser
    //window.innerWidth 

    const positionX = Math.round((event.clientX / window.innerWidth) * 255)
    const positionY = Math.round((event.clientY / window.innerHeight) * 255)
    const warnaBiru = Math.round(Math.random() * 100)

    bodyHtml.style.backgroundColor = 'rgb(' + positionX + ',' + positionY + ', ' + warnaBiru + ')'

})

//height dari elemen html dan body dibuat 100% agar bisa digunakan semua space nya
const htmlHtml = document.querySelector('html')
htmlHtml.style.height = '100%'
bodyHtml.style.height = '100%'

//DOM TRAVERSAL
//.parentElement
//For method
const tombolCLose = document.querySelectorAll('.close')
console.log(tombolCLose);
for (let i = 0; i < tombolCLose.length; i++) {
    tombolCLose[i].addEventListener('click', function (event) {
        //menggunakan parentElement untuk mencari siapa parentnya
        // tombolCLose[i].parentElement.style.display = 'none'
        event.target.parentElement.style.display = 'none'

    })
}

//forEach method
tombolCLose.forEach(function (el) {
    el.addEventListener('click', function (event) {
        event.target.parentElement.style.display = 'none'
    })
})


//.nextElementSibling & previousElementSibling --> untuk GET elemen setelah dan sebelum
const nama = document.querySelector('.nama')
console.log(nama.nextElementSibling.nextElementSibling); //--> hasilnya dapat class close
console.log(nama.previousElementSibling); //hasilnya dapat elemen img


//PREVENT DEFAULT dari tag a
//.preventDefault()
tombolCLose.forEach(function (el) {
    el.addEventListener('click', function (event) {
        event.target.parentElement.style.display = 'none'
        event.preventDefault()
    })
})

//EVENT BUBBLING
//.stopPropagation()
//INILAH ADALAH CARA PALING BAGUS
const container = document.querySelector('.container')
container.addEventListener('click', function (e) {
    console.log(e.target);
    if (e.target.className == 'close') {
        e.target.parentElement.style.display = 'none'
        e.preventDefault()
        e.stopPropagation() //--> untuk menghentikan fungsi sampai sini aja
    }
})










//-----
