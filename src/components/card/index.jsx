// Creating the import styles for the module card
import styles from './card.module.css'

// Function for call component in the project
function Card(props) {

    return (
    <section>
        <img src={props.img}></img>
        <div className='area-text'>
            <h3>Name: <span>{props.name}</span></h3>
            <h3>Price: <span>R${props.price}</span></h3>
        </div>
    </section>
    );
  }

// Exporting component for the project

export default Card;