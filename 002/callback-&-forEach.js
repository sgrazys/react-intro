// CALLBACK, funkcija kuri naudojama kaip paramteras funkcijoje.

console.log('UZDUOTIS: Prie animals ir colors masyvo itemo prideti po *');

const animals = [
    'racoon',
    'beaver',
    'moose'
];

const colors = [
    'pink',
    'crimson',
    'skyblue'
];

// kosole ispausdinsime du masyvus prie kiekvieno jo itemo pridesime po zvaigzdute is abieju pusiu.

// Funkcija, kuri prie zodzio prideda po zvaigzdute.
const addStars = word => console.log('* ' + word + ' *');
const addPluses = word => console.log('+ ' + word + ' +');


// i for'a idejome funkcija. Ji suksis ir vykdis savo uzduoti. Prie kiekvieno iteruojamo zodzio prides * is abieju pusiu
for (let i = 0; i < animals.length; i++) {
    addStars(animals[i]);
}

for (let i = 0; i < colors.length; i++) {
    addStars(colors[i]);
}

// Speciali funkcija. Kuri naudos kita funkcija
const iterator = (what, fun) => {
    for (let i = 0; i < what.length; i++) {
        fun(what[i]);
    }
}

console.log('Funcijoje panaudojome call backa. ()');

// funkcijoje kaip argumenta naudojeme kita funkcija - callbackas
iterator(animals, addStars)
iterator(colors, addPluses)


console.log(`
Naudojam forEach metoda, tam paciam rezultatui gauti.
`);

animals.forEach(addStars);
animals.forEach(i => console.log('~ ' + i + ' ~'));

colors.forEach(addPluses);
colors.forEach(i => console.log('^ ' + i + ' ^'));

console.log(`
Naudojam forEach metoda, su keliomis reiksmemis.
`);

// forEach metodas gali tureti 3 parametrus item'as (iteeruojamame arrejuje - PRIVALOMAS), indexas(iteruojamo itemo), arejus (spausdina pilna areju su kuriuo dirbame)
colors.forEach((word, index, array) => console.log(word, index, array));