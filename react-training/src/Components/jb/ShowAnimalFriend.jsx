import rand from "../../Functions/rand";

function ShowAnimalFriend({animalFriend, fontFamily}) {
    
    const friendName = 'm-e-s-k-a'.toUpperCase()

    switch (animalFriend){
        case 'Racoon' : return (
            <u>M-E-S-H-K-E-N-A-S</u>
        )
        case 'Beer': return (
            <u>{friendName}</u>
        )
        case 'Moose': return (
            <strong style={{fontFamily}}>bRiEdIs</strong>
        )
        default: return (
            <h5>Ir draugo nera, bet roll the dice and your result is: {rand(1,6)}</h5>
        )
    }
}

export default ShowAnimalFriend;

