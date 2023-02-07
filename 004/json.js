/* 
JASON
Java Script Object Notation.

Is serverio negalime tiesiai pasrsiusti Objekto i narsykle ir atvirksciai.
Serveris i narsykle ir narsykle i serveri siuncia tik STRINGUS, visais atvejais. (paveiksliukas, mapas, objektas, masyvas, setas etc.)

JSON'as yra taisykliu rinkinys, kaip obj ar masyva paversti i stringa ir paskui atgal.

Jis tarsi vertejas tarp dvieju programavimo kalbu sakykime norime perduoti masyva is JS i Python => savo masyva JS'e paverciam i JSON ir atiduodam Python, Python pasiima ir JSON'a pasivercia i savo masyva. 

stringify - paverciam i stringa
parse - JSON faila paverciam atgal i norima objekta
*/

let shopArrJson = JSON.stringify(shopArr);

console.log(shopArrJson);

let shopArrJsonBack = JSON.parse(shopArrJson);

console.log(shopArrJsonBack);

// Jeigu kazka paverciame i JSON ir atgal, realiai mes nusikopijuojame ta struktura.

// kas nutinka MAP'ui kai ji su JSON'inam

console.log(JSON.stringify(shopMap)) // MAPAS nesigauna SETAS irgi nesigauna.

//MAPUI setui galime naudoti structuredClone()
console.log('Structured Clone: ', structuredClone(shopMap));

// Paprasti MAP'o nei mes kam nors galime issiuti, nei priimti, todel naudojimas yra ganetinai ribotas.

// JSON'inam primitivus. Turime skaiciu, noriu kad ir gauti kaip skaiciu
// perduodami net tik islaikome struktura, bet ir type'a.

let d = 42;

const dJson = JSON.stringify(d);
console.log(dJson);

const dJsonBack = JSON.parse(dJson);
console.log(dJsonBack, typeof dJsonBack)
