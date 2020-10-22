function Angkot(supir, trayek, penumpang, kas) {
    this.supir = supir,
        this.trayek = trayek,
        this.kas = kas,
        this.penumpang = penumpang,
        this.penumpangNaik = function (namaPenumpang) {
            var $penumpang = this.penumpang
            if ($penumpang.length == 0) {
                $penumpang.push(namaPenumpang)
            }
            else {
                for (i = 0; i < $penumpang.length; i++) {
                    if ($penumpang[i] == undefined && $penumpang[i + 1] !== namaPenumpang) {
                        $penumpang[i] = namaPenumpang
                        return $penumpang
                    }
                    else if ($penumpang[i] == namaPenumpang) {
                        console.log(namaPenumpang + ' sudah ada di angkot');
                        return $penumpang
                    }
                    else if (i == $penumpang.length - 1) {
                        $penumpang.push(namaPenumpang)
                        return $penumpang
                    }
                }
            }
            return $penumpang
        },
        this.penumpangTurun = function (namaPenumpang, bayar) {
            var $penumpang = this.penumpang
            // var $kas = this.kas
            if ($penumpang.length == 0) {
                console.log('tidak ada penumpang');
                return $penumpang
            }
            else {
                for (i = 0; i < $penumpang.length; i++) {
                    if ($penumpang[i] == namaPenumpang) {
                        $penumpang[i] = undefined
                        this.kas += bayar
                        console.log(namaPenumpang + ' telah turun dan membayar Rp' + this.kas);
                        return $penumpang
                    }
                    else if (i == $penumpang.length - 1) {
                        console.log('tidak ada nama tsb di angkot');
                        return $penumpang
                    }
                }
            }

        }
}

var angkot1 = new Angkot('hanendyo', ['bogor', 'depok'], [], 0)
var angkot2 = new Angkot('indira', ['depok', 'jakarta'], [], 0)
