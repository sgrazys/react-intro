// sukuriam objekta
const obj = {};

//sukurima array
const arr = [];

//sukuriam MAP

const map = new Map();

console.log(obj);
console.log(arr);
console.log(map);

/* 
Custom objektas padaroma 2iems etapais:
1. sukuriam Class (objekto planas, kaip darysime objekta)
2. sukuriam nauja pbjekta pagal duota clas (plana)
*/

//STATIC - gali buti metodai arba savybes. t.y. statines savybe, niekur nejuda. Statine savybe gali buti savo klasese ir is klasiu niekur neiseina. Paveldejimas vyksta tarp klasiu, bet ne prie objektu. Objektu gyvenime jis nedalyvauja. Norint pasiekti statine savybe, mums reikia parasyti klases varda.

//STATIC METODAS, kaip statine savybe taip ir statinis metodas yra priristas prie class

class sayName {

    static voice = 'big one';

    static whatIsYourVoice() {
        return this.voice // this -> klase
    }

    whatIsYourVoiceNotStatic() {
        // norint is nestatunio objekto pasiekti statini reikia naudoti kreptis ir i constructor
        return this.constructor.voice;

        return this.voice // this -> objekte
    }

    constructor() {
        this.papers = 'Yes';
    }
    whatIsYourName() {
        return this.name;
    }
}

// class gali buti kitu klasiu tevai arba vaikai. Inheritance, paveldejimas. Paveldi funkcijas etc.
// kitas klases galime kurti, kuomet kodas darosi sudetingesnis, mazinant kodo apimti etc.

// jeigu klasje norime naudoti kita klase, mes savo klase galime extendinti. I esxtendinamos class construtoriu must parasyti super() - kad kurian obj mes galetume paleisti tevo constructoriu, nesvarbu kad teavs neturi konstruktoriaus.



class Cat extends sayName {

    static voice = 'small one';

    constructor(name, color) {
        super();
        this.name = name;
        this.color = color;
        this.age = parseInt(Math.random() * 10 + 1);
    }

    whatIsYourName() {
        return 'Meu'; // Jeigu yra toks pats metodas kuri paveldejo is tevo, jis ta metoda overwritina.
    }

}

// konstruktorius naudojamas ne vien irasyti duomenis. etc. katinas turi random metus (age), i konstruktoriu galima deti funkcijas, ar israiska, ar paskaiciavimas etc 

class Dog extends sayName {
    constructor(name) {
        super();
        this.name = name;
        this.age = parseInt(Math.random() * 15 + 1);
        this.papers = 'No' // overwritinti galima ir paveldetas savybas
    }
}


const murka = new Cat('Murka', 'brown');
const pilkis = new Dog('Pilkis');

console.log(murka);
console.log(pilkis);

console.log(murka.whatIsYourName());

console.log(murka.whatIsYourVoiceNotStatic());
console.log(sayName.whatIsYourVoice());

// console.log(pilkis.whatIsYourName());


// Pasiekti statine savybe, mes galime tik tiesiai is to class, kur jis buvo sukurtas.
// console.log(Dog.voice);


// pasiekti statini metoda galime irgi tik per klase.

// console.log(Dog.whatIsYourVoice())
// console.log(Cat.whatIsYourVoice())







