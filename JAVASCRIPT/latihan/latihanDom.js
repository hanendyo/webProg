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







