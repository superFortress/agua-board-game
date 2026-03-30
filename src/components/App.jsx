// I M P O R T

// Component
import CardDeck from './CardDeck';

// Library
import cardArray from '../library/cardArray';

// Styles
import '../styles/Card.css';
import '../styles/Root.css';

// R E T U R N

export default function App() {

    // R E T U R N

    return <div className="app">
        <CardDeck cardArray={cardArray} />
    </div>;

}