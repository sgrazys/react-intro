// APIE MASYVUS KASRTOJIMAS

const gyvunai = [
    'racoon',
    'beaver',
    'moose'
];

const spalvos = [
    'pink',
    'crimson',
    'skyblue'
];

// console.table(gyvunai)

// kaip pasiekti masyvo itema:
// naudojam indexa, kuris yra siekiamo elemento. Array prasideda nuo 0 idexo. (pirmo itemo indexas visuomet yra 0, antro 1, trecio 2 ir t.t. )

// console.log(gyvunai[1]);


// pridedame prie masyvo elementa, kuris bus 15 idexe. tusti elementai irgi itraukiami.

// animals[15] = 'bird';

// PUSH metodas prideda elemeta i masyvo paskutine vieta. Galima prideti kelias reiksmes.
gyvunai.push('bird');

// console.table(gyvunai);



// UNSHIFT metodas prideda nauja elementa i masyvo pirma vieta. Galima prideti ir kelias reiskmes.
gyvunai.unshift('mole', 'mouse', 'fox')

// console.table(gyvunai);


//POP metodas is masyvo ismeta paskutine reiksme.
gyvunai.pop();

// console.table(gyvunai);

//SHIFT metodas is masyvo ismeta pirma reiksme.

gyvunai.shift();

console.log('CONSOLE CLEAR 49 eilute')
