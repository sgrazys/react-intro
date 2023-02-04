//SPREAD: 

/* 
Objekto (duomenu is masyvo perkopijavimas. 
Nukopijuoti objekta reikia naudoti SPREAD, kadangi objektai(masyvai ir tikri objektai kopijuiojami pagal reference) yra mutable.
Kopijuojant negalime naudoti = , tai tiesiog sukurs ale 2 priejimus prie to pacio objekto/ masyvo. 
const A = ['originalas']
const B = A 

jeigu i B ipuhinsim nauja itema, naujas aitemas atsiras ir A masyve. 
B.push('TAIP') 

B yra ['originalas', 'TAIP'] A irgi bus ['originalas', 'TAIP']. Nes mes vis dar dirbame su tuo paciu masyvu.

Masyvu, objektu kopija padarome su spread operatoriumi.
dirbant su masyvais ir objektais VISUOMET PASIDAROME KOPIJA.
*/

const A = [
    'a',
    'b',
    'c'
];

const B = [...A, 'd'];

console.log(A, B);

console.clear()
console.log('CONSOLE CLEAR 29 EILUTE');