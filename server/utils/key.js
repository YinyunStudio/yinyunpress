import config from "~/server/utils/useConfig"
const String = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "-", "_", "(", ")", "[", "]", "@", "#", "$", "%", "!", "^", "&", "*"]
let key = ""
if ( config.key == false ) {
    for (let i=0; i<32; i++) {
        key += String[Math.floor(Math.random()*String.length)]
    }
} else {
    key = config.key
}
console.log(key)
export default key