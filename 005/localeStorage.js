// LOCALE STORAGE. 
/* 
Trumpai apie local storage. Kokia problema sprendzia. 
Kintamojo reiksme pasilieka perkrovus puslapi, perkrovus kompa ir t.t.
Local storage sago pasirinktus kintamuosius. Tai yra narsykles savybe.
*/

//Sugalvojau kad skyblue butu isaugota ir ji visuomet butu

// let color = 'skyblue';

// i local storage setinu spalva. myFavoriteColor yra tarsi indexas(key), o value yra priskirtas kintamsis su turiniu.

// localStorage.setItem('myFavoriteColor', color);

//istrinti itema is localstorage
localStorage.removeItem('myFavoriteColor');

//isitraukiu kintamaji. Nors color ir localStorage.setItem uzkomentinti, taciau narsykleje vistiek gausiu skyblue, nes jis buvo irasytas i local storage
console.log(localStorage.getItem('myFavoriteColor'));


// TURINT KAZKOKI REIKSME localStorage mes ja gauname, neturint jos mes gauname NULL. PRISIMINTI. Reiskias tokio key localStorage nebuvo.

//

console.clear();
console.log('CONSOLE CLEAR ROW 27')