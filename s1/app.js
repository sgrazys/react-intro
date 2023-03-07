const express = require('express');
const app = express();
const port = 3003;

const menu = `
<a href="/">Home</a>
<a href="/racoon">Racoon</a>
<a href="/fox">Fox</a>
`


// Server Side Rendering
app.get('/', (req, res) => {
  res.send(`
  ${menu}
  <h1>Hello Forest!</h1>
  `);
})

app.get('/racoon', (req, res) => {
  res.send(`
  ${menu}
  <h1>Hello RACOON!</h1>
  `);
})

app.get('/fox', (req, res) => {
  res.send(`
  ${menu}
  <h1>Hello FOX!</h1>
  `);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})


//API teiks informacija teiks musu reactui, ak jam reiktu rasyti

app.get('/api', (req, res) => {
  res.json({ title: 'Hello FOREST!' });
});

app.get('/api/racoon', (req, res) => {
  res.json({ title: 'Hello RACOON!' });
});

app.get('/api/fox', (req, res) => {
  res.json({ title: 'Hello FOX!' });
});