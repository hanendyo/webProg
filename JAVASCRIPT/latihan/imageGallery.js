const container = document.querySelector('.container')
const utama = document.querySelector('.utama')
const thumbs = document.querySelectorAll('.thumb')

container.addEventListener('click', function (e) {
    console.log(e.target);
    if (e.target.className == 'thumb') {
        utama.src = e.target.src;
        utama.classList.add('fade')
        setTimeout(function () {
            utama.classList.remove('fade')
        }, 500)

        thumbs.forEach(function (el) {
            el.className = 'thumb'
        })

        e.target.classList.add('active')
        // alert('ok')
    }
})

//BISA PAKE CARA INI, TAPI KURANG EFISIEN
// thumbs.forEach(function (el) {
//     el.addEventListener('click', function (e) {
//         console.log(e.target.src);

//         // alert('ok')
//         utama.setAttribute('src', e.target.src)
//     })
// })