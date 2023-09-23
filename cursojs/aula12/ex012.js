var agora = new Date()
var horas = agora.getHours()
console.log(`Agora são exatamente ${horas} horas.`)
if (horas > 11){
    console.log('Boa Tarde')
} else {
    console.log('Bom Dia')
}

