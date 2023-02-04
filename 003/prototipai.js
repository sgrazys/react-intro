//PROTOTIPAI: 

/* 
Prie jau sukurtos objekto Class, filter() etc. pridedame savo metoda, tuomet modifikuotas objektas tampa prototipu.
*/

// i Array class (Array()) idedamse musu norima savybe.

const addStars = word => console.log('* ' + word + ' *');

Array.prototype.go = function (fun) {
    for (let i = 0; i < this.length; i++) {
        fun(this[i]);
    }
}


B.go(addStars)
B.forEach((e, i, arr) => console.log('* ' + e + ' *', i, arr));

console.clear()
console.log('CONSOLE CLEAR 22 EILUTE');