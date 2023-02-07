// Duomenu struktoros. Be amsyvos dar yra bent dvi strukturos. SET ir MAP.


// SET'as. Kazko panasus i masyva. I SET'a sudeti itemai, visada tures tvarka. Kas buvi pirmas itemas tas ir liks. SET'e - negalime pasiekti reiksmes per index. Mes galime iskarto gauti reiksme, bet ne jo indexa. Sete galime imti reiksmes viena apskui kita bet pagal indexa i seto pasiimti nieko negalime. SET'e NEGALI BUTI VIENODU REIKSMIU, jis nepriima vienodu reiksmiu.


//Sintakse.
const fancySet = new Set();

//Pridedame i seta
fancySet.add('racoon')
fancySet.add('fox')
fancySet.add('moose')
fancySet.add('wolf')

//Pridedame ta pacia reiksme
fancySet.add('fox')     // 2-os lapes NEATVAIZDUOS, nes SET'as laiko tik unikalias reiksmes.

//Reiksmes pasiemimas is seto. Galime pasiimti, tik jau zinodami reiksme. Tad logika butu issiaskinti ar setas turi tokia reiksme


// Item'o istrinimas is seto
fancySet.delete('moose')

//Seto ilgio nustatymas yra su .size
console.log('Seto ilgis ', fancySet.size)


console.log('Ar sete yra moose ', fancySet.has('moose'))
console.log(fancySet)

//Kas yra vienoda reiksme, kurios setas nedubliuoja? 

// A. pridesiu fox objecta B. pridesiu tuos pacius objektus. SETAS juos atvaizduos, nes progrmiskai tai yra skirtingi objektai. 

fancySet.add({ animal: 'fox' });
fancySet.add({ animal: 'fox' });

// B. objektai yra tikrinami pagal reference. Jeigu objektasa buvo sukurtas atskirai vadinasi jis yra skirtingas, atskiras (pvz ziureti  35 - 38 eilutes).  BET...

const beaver = { animal: 'beaver' };
fancySet.add(beaver)

const beaver1 = beaver

fancySet.add(beaver) // sitos reiksmes nebus pridetos, nes jis yra tas pasts objektas
fancySet.add(beaver1) // sitos reiksmes nebus pridetos, nes jis yra tas pasts objektas kaip ir beaver
fancySet.add(beaver) // sitos reiksmes nebus pridetos, nes jis yra tas pasts objektas
fancySet.add(beaver1) // sitos reiksmes nebus pridetos, nes jis yra tas pasts objektas kaip ir beaver

// Jeigu beaver2 nusikopijuoju, nuo beaver tuomet beaver1 jau bus kitas objektas.

const beaver2 = { ...beaver1 }

fancySet.add(beaver2) // siuo atveju beaver 2 bus pridetas prie objekto

console.log(fancySet)

// Mums reikia masyvos kurio random skaiciai yra nuo 1 - 10, skaiciai nesikartoja.



const randomSet = new Set();

//Paleidziam cikla. Kadangi nezinome kiek laiko mums reikes sukti cikla darome do While cikla.

do {
    const genDig = parseInt(Math.random() * 10 + 1);
    randomSet.add(genDig);
} while (randomSet.size < 10)

console.log(randomSet);

// turiu seta noriu masyvo. Imame seta spreadinam i masyva.
console.log('Masyvas is seto ', [...randomSet]);

// turiu masyva noriu seto:
const arr = [2, 5, 8, 1, 6, 7, 2, 2, 2]
const arrSet = new Set(arr);

//noriu masyvo su unikaliom reiksmem:

const arr2 = [...new Set(arr)]


console.log('Setas is masyvo: ', arrSet)
console.log('Masyvas su unikaliom reiksmes: ', arr2)

// noriu isSortinti seta

const fancySet2 = new Set();

//Pridedame i seta
fancySet2.add('racoon')
fancySet2.add('fox')
fancySet2.add('moose')
fancySet2.add('wolf')

//Stepsai: 1. is seto susikuriam masyva (nes seta neturi sort metodo) 2. ji issortinam 3. issortinta masyva sudedam (spreadinam) i nauja Set'a

const sortSet = new Set([...fancySet2].sort());
console.log(sortSet);

// Noriu isortinti originalu seta.

// metodas clear() - isvalo seta. Panaikina jo reiksmes, padaro ji tuscius

// sukuriam tarpini kintamaji, t.y. isortinta areju is seto, kurio originala norime pakeisti.
const fancyArray = [...fancySet2].sort();

//istriname visas originalaus seto reiksmes, panaudodami .clear()
fancySet2.clear();

//for each ciklu ciklinama issortinata areju ir kiekviena jo reiksme pridedame i isclearinta arreju
fancyArray.forEach(e => fancySet2.add(e))

console.log('isortintas originalus Setas ', fancySet2)

console.clear();
console.log('CONSOLE CLEAR 119 ROW')


