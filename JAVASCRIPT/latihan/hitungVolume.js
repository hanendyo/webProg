//function declaration
function hitungVolume1(sisi) {
    var volume = sisi * sisi * sisi
    return volume
}

var kubus1 = hitungVolume1
var kubus2 = hitungVolume1

console.log('fungsi expression: ');
console.log(kubus1(5));
console.log(kubus2(2));
console.log(kubus1(5) + kubus2(2));

//function expression
var hitungVolume2 = function (a, b) {
    var volumeA,
        volumeB,
        total

    volumeA = a * a * a
    volumeB = b * b * b

    total = volumeA + volumeB

    return total

}

console.log('\nfungsi expression: ');
console.log(hitungVolume2(5, 2));