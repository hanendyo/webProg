// Array untuk render list manusia
let arrManusia = [
  { nama: "Alex", umur: 22, job: "Dev" },
  { nama: "Alicia", umur: 32, job: "Dev" },
  { nama: "Alona", umur: 26, job: "Dev" },
  { nama: "Batios", umur: 33, job: "CEO" },
  { nama: "Bakhti", umur: 38, job: "PM" },
  { nama: "Charlee", umur: 27, job: "CTO" }
];

// Array untuk render list job
let arrJob = ["All", "Dev", "CEO", "PM", "CTO"];

// INPUT DATA
let funInputData = () => {
  // Get data
  let nama = document.getElementById("nama").value;
  let umur = document.getElementById("umur").value;
  let job = document.getElementById("jobInput").value;

  // Push data
  arrManusia.push({
    nama,
    umur,
    job
  });

  // Check job / Menambahkan daftar pekerjaan jika belum ada di array
  let ada = arrJob.includes(job)

  if(!ada){
      arrJob.push(job)
  }

  funShow(arrManusia);
};

let remove = (removeIndex) => {
  delete arrManusia[removeIndex]

  funShow(arrManusia)
}

// let remove = (removeIndex) => {
//   let hasilRemove = arrManusia.filter((val, index) => {
//     return index != removeIndex
//   })

//   arrManusia = hasilRemove

//   funShow(arrManusia)
// }

// RENDER LIST
let funShow = (arrey) => {
  let listManusia = arrey.map((val, index) => {
    // val = {name, age, job}
    return `<tr>
            <td>${val.nama}</td>
            <td>${val.umur}</td>
            <td>${val.job}</td>
            <td><input type="button" value="Delete" onclick="remove(${index})"></td>
        </tr>`;
  });

  let listJob = arrJob.map(val => {
    // val = 'All', 'Dev', 'CTO ...
    return `<option value="${val}">${val}</option>`;
  });

  document.getElementById("here").innerHTML = listManusia.join("");
  document.getElementById("job").innerHTML = listJob.join("");
};

// FILTER NAME
let funFilterName = () => {
    // Get data from user
    let filter = document.getElementById('search').value

    // Filtering
    let hasilFilterName = arrManusia.filter((val) => { // val = {nama, age, job}
        // kecilkan semua huruf nama
        let namaLow = val.nama.toLowerCase()
        // kecilkan semua karakter yang di ketik user
        let filterLow = filter.toLowerCase()

        return namaLow.includes(filterLow)
    })
    
    // Render list
    funShow(hasilFilterName)

}

// FILTER USIA
let funFilterUmur = () => {
    // num1 = min
    let num1 = document.getElementById('num1').value
    // num2 = max
    let num2 = document.getElementById('num2').value

    let hasilFilterUmur = arrManusia

    // Masuk ke if jika kedua text box ter isi
    if(!(num1 == '' || num2 == '')){
        hasilFilterUmur = arrManusia.filter((val) => {
            return (val.umur >= num1 && val.umur <= num2)
        })
    }

    funShow(hasilFilterUmur)

}

// FILTER JOB

let funFilterJob = () => {
  // Mengambil value dari option yg di pilih oleh user
  let selectedJob = document.getElementById('job').value
  let hasilFilterJob

  // Jika user memilih 'All' , maka 'list' akan berisi semua data manusia
  if(selectedJob == 'All'){
    hasilFilterJob = arrManusia
  } else {
  // Array manusia di filter berdasarkan option yg dipilih, hasil filter akan disimpan di 'list'
    hasilFilterJob = arrManusia.filter((val) => {
      return val.job == selectedJob
   })
  }

  // list adalah array yang berisi banyak object,
  // tiap object pada 'list' akan di ubah menjadi bentuk tag <tr> untuk kemudian di render
  funShow(hasilFilterJob)

}

funShow(arrManusia);

/*
onClick = event handler

onKeyup =

onInput
*/


