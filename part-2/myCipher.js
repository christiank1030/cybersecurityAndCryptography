let letterArr1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];
let letterArr2 = ['r', 'v', 'h', 'p', 'z', 'w', 'u', 'q', 'y', 'o', 'n', 'x', 't'];

let myCipher = (encryptedString) => {
    for(i = 0; i < encryptedString.length; i++) {
        for(let j = 0; j < letterArr1.length; j++) {
            if(encryptedString[i] === letterArr1[j]) {
                encryptedString[i] = letterArr2.indexOf([j])
                return encryptedString
            }
        }
    }
}

console.log(myCipher('yxjbzhaidmjuardqi'))