export function random_array(array) {

    const length = array.length
    return array[Math.floor( Math.random() * length )]
}