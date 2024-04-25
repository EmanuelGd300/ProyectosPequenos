// function dividir(n1, n2){
//     return n1/n2;
// }
const dividir = (n1, n2) => {
    if (n2 == 0) return 'no se puede dividir por cero';
    return n1/n2;
}
// console.log(dividir(25,10));

module.exports = { dividir }