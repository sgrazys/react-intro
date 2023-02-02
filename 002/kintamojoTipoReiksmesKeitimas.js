// KINTAMOJO TIPO REIKSMES KIETIMAS

console.log(`
KINTAMOJO TIPO REIKSMES KIETIMAS

`);

//Keiciam i string. Prie skaiciaus pridedame tuscia strinh => 5 + ' '
const D = 0;
const SD = D + '';
console.log(D, typeof D, '=>', D, typeof SD);

// Keiciam i number. Pries skaiciu parasome + => +5
const S = 88;
const DS = +D
console.log(SD, typeof SD, '=>', SD, typeof DS);

// Keiciam i logini kitmaji. Naudojame !!. ! pakeicia logine reiksme D=0 (false); !!D => false, nes !D => true ir !D => false (2-u !! - du kartus keiteme logine reiksme.)  
const L1 = !!D
const L2 = !!S
console.log(D, '=>', L1);
console.log(S, '=>', L2);
