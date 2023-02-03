// SPREAD

const gyvunai1 = [
    'racoon',
    'beaver',
    'moose'
];

const spalvos1 = [
    'pink',
    'crimson',
    'skyblue'
];


gyvunai1.unshift('mole', 'fox', 'wolf', 'rabbit')

// console.table(gyvunai1);

// prie gyvunai1 masyvo noriu prideti spalvas. Nuadojant unshit mes i gyvunai1 pirma vieta idesime VISA spalvos1 masyva. Gauname masyva masyve


// gyvunai1.unshift(spalvos1)
// console.log(gyvunai1);

// Noriu ideti atskiras masyvo spalvos1 itemus i gyvunai1 masyva. NAUDOJAM SPREAD operatoriu. Spred'as isspredina viska kas yra sujungta per kableli. Masyve viska issima ir ispreadina naujuosie skliaustuose.


gyvunai1.push(...spalvos1, ...gyvunai1)
console.log(gyvunai1);

// ispreadinu spalvos1 i objekta. SPREADINANT naudoji skliaustus jeigu panaudosi { } ispreadins i objekta. 

// UKISKAI is vienu skliausteliu spreadinam i kitus

console.log(...spalvos1, ...spalvos1, ...gyvunai1);


let bVardai = ['Tauras', 'Jokubas'];
const papBvardai = ['Kasparas', 'Gabrielius'];
bVardai = [...bVardai, ...papBvardai];


console.log(...bVardai);