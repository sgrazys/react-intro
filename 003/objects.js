//OBJEKTAI - i objektus dedame info, kurios negrupuojame. Objektas savyje laiko tarpusavyje susijus dalykus.

// !!Masyvas savyje turintis objektus, tikriausiai dazniausiai pasitaikianti duomenu struktura.

// zymimas { } skliausteliais

//tuscias objektas
const person = {};

//objektui man priskyreme key NAME ir SURNAME ir key values (name) 'Jhon' ir (surname) 'Travolta'. 
person.name = 'Jhon';
person.surname = 'Travolta'


// person2 objekta nukopijuojame nuo man PRIVALOMA NAUDOTI SPREAD, kadangi objektas kaip ir masyvas tradiciskai per = zenkla nedaro kopiju!!!  OBJEKTAI 'kopijuojami' pagal referenca, jie yra nekopijuojami. Norint kopijuoti galime naudoti (...) spread operatoriu.
const person2 = { ...person };

// person2 priskyreme naujas key values. Kadangi person2 buvo padaryta normali kopija, todel jis nemutuos person objekto.
person2.name = 'Keanu';
person2.surname = 'Reevs';


// galime sukurti objekta iskarto su values
const person3 = {
    name: 'Antonio',
    surname: 'Banderas'
}

//Dar vienas budas sukurti objekta:

const name = 'Sandra';
const surname = 'Banderas';

// const person4 = {
//     name: name,
//     surname: surname
// }

// galime suprastinti auksciau esancio ipbjekto uzrasyma. Kadangi name properties = name kintamajam, galime nepriskirineti property value, rasyti tik property.

const person4 = {
    name,
    surname
}

// VIENA IS SVARBIAUSIU OBJEKTU SUDARYMO SINTAKSIU, - suprask, zinok, atsimink! Pvz. savybe surname yra dinamiska, kaitaliojasi, bet ne jos reiksme o pati savybe surname. (surname gali buti LT, EN, ES ar LastName pvz urasyta)

const prop = 'surname';      // savybe(property) irasyta i prop kintamaji)

// sukurti nauja zmogu, kuriam reikia irasyti pavarde

const person5 = {};

person5.name = 'Bryan';
person5[prop] = 'Cook';     //  KINTAMAJI SU SURNAME VALUE RASOME I LAUZTINIUS SKLIAUSTUS, NEDADAME JOKIO tasko (.)  !!!! TUOMET ISLOGINUS PROPERTY MATYSIME surname o ne props.

/* 
ARBA GALIMA RASYTI IR  TAIP

const person5 = {
    name: 'Bryan',
    [prop]: 'Cook'  // SVARBU property rasyti [ ] skliaustuose!!!!!!! TUOMET ISLOGINUS, PROPERTY MATYSIME surname o ne prop.

};
*/

console.log(person, person2, person3, person4, person5);

console.log('--------')


// norim susortinti pagal pavarde.
// 1. susidedam visus objektu i masyva
const actors = [person, person2, person3, person4, person5];


// sort() ir parasome logikos bloka su if
actors.sort((a, b) => {
    if (a.surname > b.surname) return 1
    if (a.surname < b.surname) return -1
    return 0;
})

// online su ternary <==> actors.sort((a, b) => a.surname > b.surname ? 1 : -1)



// norim isortinti isrusiuota sarasa pagal varda, kadangi turime 2 vienodas pavardas. Rusiuojam tik tuos kurie turi vienodas pavardes.

actors.sort((a, b) => {
    if (a.surname > b.surname) return 1
    if (a.surname < b.surname) return -1
    // jeigu pavardes vienodos rusiujam pagal vardus
    if (a.name > b.name) return 1
    if (a.name < b.name) return -1
    // jeigu vardai vienodi
    return 0;
})


console.table(actors)

