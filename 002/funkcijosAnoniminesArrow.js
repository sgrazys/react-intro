// FUNKCIJOS. Kodo gabalas, kuris vykdomas atskirai. Kodas skaitomas, sutikus funkcija, ja skipina, o jeigu yra nuskai tomas funkcijos iskvietimas, funkcija vykdoma. Funkcijos susideda is dvieju daliu: Funkcijos deklaracija ir Funkcijos iskvietimas.

console.log(`
ARROW, ANONIMINES IR TRADICINES FUNKCIJOS

`);

// Tradicines funkcijos deklaravimas.
function sayHello() {
    console.log('Labas');
}

// Tradicines funkcijos iskvietimas. Funkcija pradedama vykdyti. Funkcija galima kviesti bet kur ir bet kada - kelis kartus.
sayHello();

console.log(`
------------

`);

sayHello();

// anonimine funkcija

const greeting = function () {
    // console.log('Hello');

    return 'Laikas judeti' // Funkcijos rezultas
}

// anonimines funkcijos iskvietimas. Deklaruojam kintamaji ir gale padedame (). Jei gale nera (), funkcija nepaleidziama.
greeting();
console.log(`
------------

`);
greeting();

console.log('Anonimines f-jos iskvietimas naudojant console.log');
// Iskvietimas
console.log(greeting());

/* ispausdina rezultata, kuris nusako, kad viduje yra funkcija. Rezultatas 2vi eilutes: Hello ir undefined.

Helo, todel kad cosole log paleidzia f-ija, o f-ija iskonsolina "Hello"
undefined, todel kad consoles.log'o spausdinimas. Siuo atveju console spausdina paleistos funkcijos rezultata - kurio mes neturime, nes f-ja kazka padare ir nustojo veikti.
FUNKCIJO rezultatas - tai ka mes is tos f-ijos graziname RETURN
*/

console.log('-------------');
// Kinatamajam priskirta paleista funkcija.

const vaRun = greeting()
console.log(vaRun); // rezultafas => Buvo sitaip va ir va kaip. !!!FUKNCIJOS REZULTATAS BUS PRISKIRIAMAS KINATMAJAM!!! , kadangi priskyrem paleista funkcija.!!!

//Kintamajampriskirta nepaleista funcija. Kadangi f-ja greeting pabaigoje neturi ()

const vaNotRun = greeting;
console.log(vaNotRun()); // consolinant kintamajam galiu prideti () ir tuomet funkcija pasileis. !!!KINTAMAJAM PRIKSKIRTA NEPALEISTA FUNKCIJA. Ja paleiti galim PRIE KINTAMOJO PIRIDEJUS ()


// FUNKCIJA, KURIS GRAZINA FUNKCIJA.

console.log(`
------------
funkcija, kuri grazina funkcija

`);

const fun = function () {       // pasileidus sitai funkcijai ji grazina antra funkcija
    console.log('ONE');
    return function () {
        console.log('TWO')      // pasileidus antari funcijai ji grazina trecia funcija
        return function () {
            console.log('THREE')  // trecia funcija islogina 'THREE' ir paleidzia kita funkcija
            return function () {
                console.log('ONE + TW0 + THREE');
                return function () {
                    console.log('Rezultatas: ', 6);
                }
            }
        }
    }
}

console.log(`
------------
Fun funkcijos pavertimas i one-line Arrow funkcija

`);

const tooFun = () => () => () => console.log('THREE');

tooFun()()();

console.log(`
`);

// kintamajam perduodu funkcija fun
const makeFun = fun;

makeFun()()()()(); // paleidom visas penkias funcijas nes panaudojom 5 (), pirmas () paleidzia pirma funcija, antras () antra funcija ir t.t.

console.log(`
------------
Anonimines funcijos pavertimas i Arrow funkcija

`);
// Anonimine funcija:
const hi_1 = function () {
    return 'Sveiki gyvi'
}

// Arrow funkcija

const hi_2 = () => {
    return ' | Arow funkcija Sveiki gyvi';
}


// One line Arrow funkcija

const hi_3 = () => ' | One line Arow funkcija Sveiki gyvi';

// One line Arrow funkcija, be parametru skliaustu. jeigu funcija turi !!!tik 1a parametra!!! Galime neaudoti skliaustu parametrui.

const hi_4 = s => ` | One line Arow funkcija Sveiki gyvi, be parametru skliaustu parametro reiksme - ${s} ;`

// parametru skliauste galime naudoti _ jeigu mums nereikia naudoti kintamojo funkcijoje, kitaip tariant naudojame tik del sintakses. Kintamasis niekur nepanaudotas
const hi_5 = _ => ` | One line Arow funkcija Sveiki gyvi, be parametru skliaustu ir parametro-kintamojo reiksmes.`


console.log(hi_5());

console.log(`Anoniminei funkcijai duodame parametra ir jais manipuliuojam

`);
// funkcijos deklaracijoje skliaustuose a ir b  yra vadinami parametrai. Tai tarsi kintamieji. 
// jeigu kvieciant funkcija i argumentus perduodame maziau reiksmiu nei parametru viskas OK, nepanaudotas parametras skipinamas.
// argumentas gali tureti defaul reiksme b = 100 ir ji yra priskiraime jeigu kvieciant funkcija nesuteikiamas argumentas.

const funFun = (a, b = 100) => {
    console.log(a * b);
}

// Kvieciant funkcija i skliaustus irasome argumentus t.y. reiksmes. Tai gali buti ir kintamasis, kuris turi konkreciua reiksme.
// Jeigu kvieciant funkcija suteikiame maziau argumentu nei parametru, gauname ne validu ats. Siuo atvieju NaN. nesuteiktas argumentas paverciamas i undefined.
// Jei perdaug perduodam argumenttu, nieko nevysksta, nepriskiria reiksmes.
// Nors parametras turi priskirta reksme (b = 100) ir mes kvieciant funcija suteikiam savo paramtre bus naudojamas suteikta parametras, bet ne defaultu priskirtra argumento reiksme.

const _15 = 15;

funFun(8, _15)

console.clear();
console.log('CLEAR 155 eilute');

