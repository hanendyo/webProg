var hash = '';
var many = 5

for (var i = 0; i <= many; i++) {
    if (i % 2 == 1) {
        for (var j = 0; j <= many; j++) {
            if (j % 2 == 1) {
                hash += "#"
            } else {
                hash += ' '
            }
        }
    } else {
        for (var k = 0; k <= many; k++) {
            if (k % 2 == 1) {
                hash += " "
            } else {
                hash += '#'
            }
        }
    }

    hash += '\n'
}

console.log(hash);