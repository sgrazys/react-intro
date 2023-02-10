import rand from "../../Functions/rand";
import ShowAnimalFriend from "./ShowAnimalFriend";
import ShowName from "./ShowName";

function Animal ({animalName, color, animalFriend, h1Class}) {

    const fontFamily = 'Fantasy';
    return (
            <h1 className={'main-title ' + h1Class} style={{
            color,
            padding: '20px 60px',
            fontSize: rand(15, 30) + 'px',
            letterSpacing: rand(0, 1) ? '5px' : null,

            }}>*<ShowName animalName={animalName} fontFamily={fontFamily}/>* No: {
            
            rand(5, 25) 
            
            } and his friend is <ShowAnimalFriend animalFriend={animalFriend} fontFamily={fontFamily}/>
            </h1>
    )
}

export default Animal;