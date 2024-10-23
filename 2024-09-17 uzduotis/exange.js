const GBPEUR = 1.19,
 USDEUR = 0.90,
  GBPUSD = 1.32;


const valiuta1 = prompt('Kokia valiuta noresite keisti i kita?');
const valiuta2 = prompt('I kokia valiuta noretumete iskeisti turima valiuta?');
const valiutos1Kiekis = prompt(
  `Kiek ${valiuta1} norite iskeisti i ${valiuta2}?`
);
// const valiutos1KiekisNumber = +(valiutos1Kiekis) (konvertuoja i number reiksme)
const valiutos1KiekisNumber = +valiutos1Kiekis;
let valiutos2KiekisNumber; // undifined
if(valiuta1=='EUR'&& valiuta2 =='USD') //EUR ->USD
    {
        valiutos2KiekisNumber = valiutos1KiekisNumber / USDEUR;
}
 // USD -> EUR
else if (valiuta1 == 'USD'&& valiuta2=='EUR'){
valiutos2KiekisNumber = valiutos1KiekisNumber * USDEUR;
}



























// // Pavyzdinis valiutų kursas
// const exchangeRates = {
//   EUR: 1, // vienas euras
//   USD: 1.1, // 1 EUR = 1.1 USD
//   GPB: 0.84, // 1 EUR = 0.84 GPB
// };

// // Funkcija valiutos keitimui
// function convertCurrency() {
//   const fromCurrency = prompt(
//     'Kokią valiutą norite iškeisti (pvz., EUR, USD, GPB)?'
//   );
//   const toCurrency = prompt('Į kokią valiutą norite keisti?');
//   const amount = parseFloat(prompt('Kiek valiutos norite pakeisti?'));

//   if (
//     !exchangeRates[fromCurrency] ||
//     !exchangeRates[toCurrency] ||
//     isNaN(amount)
//   ) {
//     alert('Neteisingi įvesties duomenys. Patikrinkite ir bandykite dar kartą.');
//     return;
//   }

//   // Konversijos logika
//   const convertedAmount =
//     (amount / exchangeRates[fromCurrency]) * exchangeRates[toCurrency];
//   alert(
//     `$${amount} ${fromCurrency} yra lygus $${convertedAmount.toFixed(
//       2
//     )} ${toCurrency}.`
//   );
// }

// // // Iškviečiame funkciją
// convertCurrency();
