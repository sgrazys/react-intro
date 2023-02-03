// Sugeneruoti masyva su 10 atsitiktiniu skaiciu.

const arr1 = [...Array(10)].map(_ => parseInt(Math.random() * 10 + 1));

console.log(arr1);

//Atsitiktinio nuo 1 iki 10 generavimas
const genDigit = parseInt(Math.random() * 10 + 1);


/* a priskiriame A arba B reiksme priklausomai koks yra atsitiktinis skaicius. Jeigu > 5 bus A, jeigu maziau bus B.

Sprendimas yra one-liner, naudojam ternery.
*/

let a = genDigit > 5 ? 'A' : 'B';

console.log(a);


racoons = 5;

// naudojant if'a, skliaustuose esanti reiskme automatu pakeiciama i bollean (true arba false) ir grazina rezultata pagal logika.
if (isNaN(racoons)) {
    console.log('YES');
} else {
    console.log('NOPE');
}

/* By default false yra;
- Skacius 0
- tuscias stringas ''
- null // reiskias kad objekto nera!! Null tik su objektais jis neatstoja 0.
- undefined // neapibreztas kintamasis
- NaN // 'Not A Number' - ukiskai tariant NESAMONE, KLAIDA

*/


// FUNKCIJA, KURI TIKRINA ar skaicius yra NaN ar normalus skaicius. isNaN () - jeigu skaicius YRA NaN grazins true, jeigu skaicius yra NORMALUS, grazins false.

