console.log('works!')

let firstName = prompt('Inserisci il tuo Nome')
console.log(firstName)

let lastName = prompt ('inserisci il tuo Cognome')
console.log(lastName)


//chiedere all'utente quanti km deve percorrere
let km = prompt ('Quanti kilometri devi percorrere?')
km = parseFloat(km)
console.log(km)

//chiedere la sua età
let yearsOld = prompt ('Quanti anni hai?')
yearsOld = parseInt(yearsOld)
console.log(yearsOld)

//RULES
//prezzo biglietto €0.21/km
const priceKm = 0.21;
let totalPrice = km * priceKm
console.log('il prezzo totale per i km da percorrere è:', totalPrice)

//sconto 20% < età 18
//sconto 40% > età 65

//stampare a video prezzo totale con arrotondamento centesimi