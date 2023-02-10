//Sis komponentas yra App.jsx anukas

function ShowName ({animalName, fontFamily}) {

    switch(animalName){
        case 'Wolf': return (
            <i style={{fontFamily}}>V-I-L-K-A-S</i>
        ); 
        case 'Fox': return (
            <strong>*L*A*P*E*</strong>
        );
        case 'Rabbit': return (
            <strong>T+r+i+u+s+i+s</strong>
        );
        case 'Duck': return (null)
        default: return (
            <u>Tokio vardo nera!</u>
        )
    }
}

export default ShowName;