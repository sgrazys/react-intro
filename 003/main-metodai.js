//forEach()

/* 
Norint praeiti per masyva, jo itemsus, naudojam array metoda forEach().
!!! forEach() metodas NEGRAZINA rezultato.!!!
*/

const C = [
    'a',
    'b',
    'c'
];

const D = [...C, ''];

console.log(D);

// praeiname pro D masyvo narius ir juos atspausdiname consoleje. TACIAU forEach matodas ne grazina NE RETURN'ina rezultato

const fr = D.forEach(l => console.log(l))
console.log(fr); // grazina undefined


// map()

/* 
map metodas paiima areju, pereina per visus elementus ir grazina arrejaus KOPIJA!! su pakeistais itemais.
map neikeicia mappinamo arrejaus length.

Mapas kuri kopija naudodama originalaus arrejaus itemus.
*/

const mr = D.map(l => l + '==>');
console.log(mr); // grazina arejus su itemais prie kuriu ir prideta rodykle



//REACTO imitavimas. Sudeti animals <i>, o <i> tagas yra <h1> animals itemsams duoti raudona spalva. 
const gyvunai = [
    'racoon',
    'beaver',
    'moose',
    'fox'
];

// REACTO PROGRAMERIS

const out = gyvunai.map(a => `<i style="color: crimson; border: 6px solid green; display: block; padding: 10px; margin-top: 5px; text-align: center">${a}</i>`)

//RAECTO VIDUS, imitacija

let html = '';

out.forEach(a => html += a)

document.querySelector('h1').innerHTML = html;



// FILTER

/* 
Grazina, masyvo kopija su itemais, kurie tenkino nurodya salyga, taisykle. Jeigu true grazina jeigu false, negrazina.

Su filteriu keiciasi ir masyvo ilgis.

*/

const filtered = gyvunai.filter(i => i.length < 4)
console.log(gyvunai);
console.log(filtered);



//!!! FILTER DAZNAI NAUDOJAMAS TRINTI ELEMENTAMS IS MASYVO. 

const filtered1 = gyvunai.filter(i => i !== "beaver")
console.log(filtered1);


//is masyvo ismesti beaver ir prie kitu masyvo items prideti pliusa.
// filter ir map galime chaininti, kadangi jie grazina rezultata.

const filtered2 = gyvunai.filter(v => v !== 'beaver').map(v => v + ' +')
console.log(filtered2);

// SORT

/* 
!!! SORTAS dirba su originaliu masyvu, ji keicia!!!
Metodas kuris, iskrikiuoja itemus eiles tvarka. Nuo didziausio iki maziausio, A to Z arba Z - A.
*/


// issortinkime pagal abeceles tvarka.

const state = [
    'racoon',
    'beaver',
    'Moose',
    'fox',
    'Fox'
];

const an = [...state];

//pridedame 'wolf' prie masyvo
// state.push('wolf'); // BLOGAI. Reacte negalima modifikuoti original 'state'. push() metodas, nesukuria masyvo kopijos jis mutuoja masyva sukuriuo dirba.

//isortiname atnaujinta masyva
// state.sort(); // BLOGAI. Reacte negalima modifikuoti original 'state'. sort() metodas, nesukuria masyvo kopijos jis mutuoja masyva sukuriuo dirba.


// KAIP REIKETU DARYTI. Atsikopijuoam state, pridedam 'wolf', ir isortinam. PUSH metodo NENAUDOJAM!!!
console.log([...state, 'wolf'].sort());

console.clear();
console.log('CONSOLE CLEAR 116 row');

console.log(an);

// nuo paskutines abeceles raides iki pirmos. Rusiuojant stringus lyginame raidziu ASCII kodus.

an.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0
});
console.log(an);

// universaliausias budas yra rusiojant localeCompare() metoda.

an.sort((a, b) => a.localeCompare(b));

console.log(an);

// sortinam skaicius

const dig = [88, 34, 10, 158, 1];
console.log(dig);

dig.sort((a, b) => b - a);

console.log(dig);

console.clear()
console.log('CONSOLE CLEAR 146 ROW');