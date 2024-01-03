// Desafio 1

let heroi = "julio "
let xp = 1000
let resultado = " O Heroi de nome "
let nivel = "está no nivel de "
let xp2 = ", seu XP é: "
let xp3 = " pontos."

if (xp <=1000) {
    console.log( resultado + heroi + nivel + "Ferro " + xp2+ xp + xp3)
}else if(xp > 1001 && xp <= 2000) {
    console.log( resultado + heroi + nivel + "Bronze " + xp2 + xp + xp3)
}if (xp > 2001 && xp <= 5000) {
    console.log( resultado + heroi + nivel + "Prata " + xp2+ xp + xp3)
}else if(xp > 6001 && xp <= 7000) {
    console.log( resultado + heroi + nivel + "Ouro" + xp2 + xp + xp3)
}if (xp > 7001 && xp <= 8000) {
    console.log( resultado + heroi + nivel + "Pratina Diamante " + xp2+ xp + xp3)
}else if(xp > 8001 && xp <= 9000) {
    console.log( resultado + heroi + nivel + "Ascendente" + xp2 + xp + xp3)
}if (xp > 9001 && xp <= 10000) {
    console.log( resultado + heroi + nivel + "Imortal " + xp2+ xp + xp3)
}else if(xp > 10001) {
    console.log( resultado + heroi + nivel + "Radiante" + xp2 + xp + xp3)
}
 