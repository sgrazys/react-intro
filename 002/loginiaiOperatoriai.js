// LOGINIAI OPERATORIAI && (and) || (or) !(not). Skirti atlikti  logine operacija tarp dvieju kintamuju. Visuomet grazina boolean'a (TRUE arba FALSE).

// FUNKCIJOS

console.log(`
LOGINIAI OPERATORIAI && (and) || (or)

`);

const A = 5;
const B = 0;    // 0 yra visuomet false

console.log('A && B', A && B); // 1
console.log('B && A', B && A); // 5


console.log('A || B', A || B); // 5
console.log('B || A', B || A); // 5


/*
T  && T => T 
T  && F => F

shortcut
F  && T => F 
F  && F => F 
*/

/*
F  || T => T 
F  || F => F

shortcut
T  || T => T 
T  || F => T 
*/