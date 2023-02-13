import './App.scss';
import Animal from './Components/jb/Animal';

const obj = ['racoon', 'fox'];

// obj.add('racoon');
// obj.add('fox');

function App() {
    // const fox = <u>FOX number: {rand(21, 50)}</u>;
    // const labas = <strong>Sveiki gyvi {5*7} kartus!</strong>
    
  return (
    <div className="App">
      <header className="App-header">

        <h2>{obj}</h2>

        <Animal animalName = 'Wolf' color ='coral' animalFriend = 'Racoon' h1Class= 'blue'  />
        <Animal animalName = 'Fox' color='white' animalFriend ='Beer' h1Class= 'green' />
        <Animal animalName = 'Rabbit' color='black' animalFriend ='Moose' h1Class= 'yellow' />

      </header>
    </div>
  );
}

export default App;