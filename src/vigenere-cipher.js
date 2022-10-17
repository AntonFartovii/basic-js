const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {

    constructor(direct) {
        this.direct = direct
        this.ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }

    encrypt(msg, key) {
        return this.crypt(msg, key, 'encrypt')
    }

    decrypt(msg, key) {
        return this.crypt(msg, key, 'decrypt')
    }

    crypt(msg, key, type) {
        if (!msg || !key) throw Error("Incorrect arguments!")

        msg = msg.toUpperCase()
        key = key.toUpperCase()
        let code = ''
        let count = 0

        while (key.length < msg.length) {
            key = key + key
        }
            for (let i = 0; i < msg.length; i++) {
                if ( this.ALPHABET.includes(msg[i]) ) {
                    let newLetter
                    if (type === 'decrypt') {

                        newLetter = msg.charCodeAt(i) - key.charCodeAt(count) + 65
                        if (newLetter < 65) newLetter = newLetter + 26

                    } else if (type === 'encrypt') {

                        newLetter = msg.charCodeAt(i) + key.charCodeAt(count) - 65
                        if (newLetter > 90) newLetter = newLetter - 26

                    }
                    code = code + String.fromCharCode(newLetter)
                    count++
                } else {
                    code = code + msg[i]
                }
            }

        if (this.direct === true || this.direct === undefined) return code
        return code.split('').reverse().join('')
    }
}

module.exports = {
    VigenereCipheringMachine
};
