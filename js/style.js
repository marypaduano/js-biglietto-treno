console.log('works!')

let firstName = prompt('Inserisci il tuo Nome')
console.log(firstName)

let lastName = prompt ('inserisci il tuo Cognome')
console.log(lastName)
 
let discount = 0



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


if (yearsOld < 18) {
    discount = totalPrice * 0.2 
    discount = discount.toFixed(2);
    let discountPrice = totalPrice - discount  
    console.log('il prezzo totale scontato del 20% è di €', discount) 
}
else if (yearsOld > 65) {
    discount = totalPrice * 0.4
    discount = discount.toFixed(2); 
    let discountPrice = totalPrice - discount
    console.log('il prezzo totale scontato del 40% è di €', discount)
}
else {    
   console.log('non sono previsti sconti per questo biglietto')
}

//stampare a video prezzo totale con arrotondamento centesimi