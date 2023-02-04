console.clear()

//1. Sugeneruokite masyvą iš 30 elementų(indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.
const minVal = 5;
const maxVal = 26;
const numArr = [...Array(30)].map((_) => parseInt(Math.random() * (maxVal - minVal) + minVal));

console.log(numArr);

console.log('-----');

//2 NAUDODAMIESI 1 UŽDAVINIO MASYVU:
// a. Suskaičiuokite kiek masyve yra reikšmių didesnių už 10.

console.log(numArr.filter(n => n > 10).length);

console.log('-----');

//b. Raskite didžiausią masyvo reikšmę ir jos indeksą.

console.log(Math.max(...numArr), numArr.indexOf(Math.max(...numArr)));
console.log('-----');

// c. Suskaičiuokite visų porinių(lyginių) indeksų reikšmių sumą;

console.log(numArr.filter((_, i) => i % 2 === 0).reduce((t, n) => t + n, 0));
console.log('-----');

// d. Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;
const numArr2 = [...numArr].map((n, i) => n - i);

console.log(numArr2);
console.log('-----');

// e. Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;
numArr2.push(...[...Array(10)].map(_ => parseInt(Math.random() * (maxVal - minVal) + minVal)))

console.log(numArr2);
console.log('------');

// f. Iš masyvo elementų sukurkite du naujus masyvus.Vienas turi būti sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių(pagal neporinį - porinį indeksą, ne reikšmę);
const arrEven = [...numArr2].filter(((_, i) => i % 2 === 0));
console.log(arrEven);

const arrOdd = [...numArr2].filter((_, i) => i % 2 !== 0);
console.log(arrOdd);


// g. Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;

arrEven.forEach((n, i) => arrEven[i] = n > 15 ? 0 : n)
console.log(arrEven);

console.log('-------');

// h. Suraskite pirmą(mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;

console.log(arrEven.findIndex(e => e > 10));


// 3. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.
// 4. Sugeneruokite 3 masyvus pagal 3 uždavinio sąlygą.Sudėkite masyvus, sudėdami atitinkamas reikšmes.Paskaičiuokite kiek unikalių(po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.
// 5. Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve(t.y.neturi kartotis).
// 6. Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 5 uždavinio masyve, bet nėra antrame 5 uždavinio masyve.
// 7. Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 5 uždavinio masyvuose.
// 8. Sugeneruokite masyvą, kurio indeksus sudarytų 5 uždavinio pirmo masyvo reikšmės, o jo reikšmės  būtų iš  antrojo 5 uždavinio masyvo.
// 9. Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai - atsitiktiniai nuo 5 iki 25. Trečias, pirmo ir antro suma.Ketvirtas - antro ir trečio suma.Penktas trečio ir ketvirto suma ir t.t.
