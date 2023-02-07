/* MAP - duomenu struktura, kurio index'ai galetu buti belenkas, belenkas (index'as) turi but unikalus, mes galime kreiptis pagal ta ineksa ir gauti ta reiksme. Map'e kaip ir seta eiles tvarka gelezine, kas pirmas atejo, tas pirmas ir yra, kas antras , tas antras ir t.t. Props (key) gali buti belenkas - funkcijos, objektai ar primityvai. Taciau kreipiantis i indexa, nereikia kreiptis kaip i masyvo indexa t.y. naudoti [ ] skliaustus

NEGALIMA myMap['bla'] = 'blaa';
*/



// sukuriam nauja Map

const fancyMap = new Map();

// pridedam nauja reiksme:
// fancyMap.set('a2', 'Racoon');
// fancyMap.set('a2', 'Fox');

// Mapo dydziui nustatyti irgi naudojam size
console.log('Mapo ilgis: ', fancyMap.size)


// Issitraukiam reiksme pagal key (ale index'as). NAUDOJAM .get() metoda
console.log('Istraukta reiksme is Mapo: ', fancyMap.get('a2'))

// Galime pasiziureti ar yra reiksme. NAUDOJAM .has() metoda.  !!! has() TIKRINA NE REIKSME O RAKTA!!

console.log(fancyMap.has('a2')); // Reiksme bus TRUE
console.log(fancyMap.has('Fox')); // Reiksme bus FALSE, !!!ar MAP'as turi reiksme tikriname pagal KEY!!!

// Jeigu pridedinesime itema tuo paciu raktu overridinsime sena reiksme.
// fancyMap.set('a2', 'Fox')

// Raktai gali buti ir objektai, gali tureti tas pacius Key, bet kadangi mes kuriame naujus objektus, todel jie atsivaizduoja. Kaip su setu, neziuri i reiksmes (value, siuo atveju i objekto key), bet zuri pagal referenca, ar skirtingi freferncai:
fancyMap.set({ a: 2 }, 'Racoon');
fancyMap.set({ a: 2 }, 'Fox');

// MAP key gali buti ir funkcija
fancyMap.set(function () { return 'Hello' }, 'Beaver');

// MAP turi forEach metoda.
fancyMap.forEach(a => console.log('->', a));

// MAP turi forEach metoda. Galime forEach'inti indexus
fancyMap.forEach((a, i) => console.log('+', a, '++', i));


//MAP santykis su masyvu. 
const arrMap = [...fancyMap];

// Noriu issortinti mapa. 1.Susikuriam arreju. 2. Issortinam areju su dviem reiksmemis, nes Mapas turi ir key ir  key value. Naudojam localeCompare metoda (a - raktas,masyvas; b - rakto reiksme) 3. origanlu Fancy mapa isclerinam. 4. forEach metodu sudedam i isclearinta mapa
const arrMap1 = [...fancyMap]
arrMap1.sort((a, b) => a[1].localeCompare(b[1])); // 2

fancyMap.clear() //3
arrMap1.forEach(e => fancyMap.set(e[0], e[1])) // 4

console.log(fancyMap)

// console.log(arrMap)
// console.log(fancyMap)

//ispausdins kiekviena elementa. eina per mapa grazina elementa kaip masyva.
console.log('MAPO ATSKRI ELEMENTAI naudojant forOf cikla ')
for (const o of fancyMap) {
    console.log(o)
}


console.log(fancyMap)
const mapElements = fancyMap.forEach((e, i) => console.log('elementai ', e, 'indeksas/ key ', i))

console.clear()
console.log('CONSOLE CLEAR 70 ROW')

/* MAPO NAUDIJOMO PAVYZDYS. SAKYKIME TURIME PARDUOTUVE... 
Norint prekes pridet, atimti reikia jas irasyti i kazkokia struktura
*/

// 1. Bandom naudoti masyva kaip produktu laikymo struktura

let shopArr = [
    { color: 'pink', dot: true, id: 1 },
    { color: 'skyblue', dot: true, id: 5 },
    { color: 'crimson', dot: false, id: 3 },
    { color: 'pink', dot: false, id: 8 }
];

// As noriu gauti trecia preke
console.log('Trecia preke, naudoju filter(): ', shopArr.filter(e => e.id === 3).shift());
//ARBA
console.log('Trecia preke, naudoju find(): ', shopArr.find(o => o.id === 3));

//ar pas mus yra elementas su id:8?
console.log('Ar yra elementas su id:8, naudoju filter() ', !!shopArr.filter(o => o.id === 8).length);
// ARBA
console.log('Ar yra elementas su id:4, naudoju find() ', !!shopArr.find(o => o.id == 4));

// Noriu prideti elementa
shopArr.push({ color: 'gray', dot: true, id: 17 });

// Noriu istrinti 'skyblue'. Kadangi filter() automatiskai padaro kopija, shop arr priskiriam let, tada shopArr nusikopijuojam ir atfiltruojam visas prekes kurios neturi id 5

shopArr = shopArr.filter(o => o.id !== 5)

console.log(shopArr)


// Shop struktura perdarom i map
const shopMap = new Map([
    [1, { color: 'pink', dot: true, id: 1 }],
    [5, { color: 'skyblue', dot: true, id: 5 }],
    [3, { color: 'crimson', dot: false, id: 3 }],
    [8, { color: 'pink', dot: false, id: 8 }]
]);

console.log(shopMap);

//Gauti pirma rezultata
console.log('Trecia preke: ', shopMap.get(3));

//Paziureti ar yra rzultatas?
console.log('Ar yra preke su id 8: ', shopMap.has(8));

//Istrinti elementa
console.log('Istrinam 5 preke', shopMap.delete(5))
console.log(shopMap);

//Prideti 17 preke
shopMap.set(17, { color: 'gray', dot: true, id: 17 });
console.log(shopMap);