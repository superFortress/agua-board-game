// I M P O R T

// Component
import Card from './Card';

// E X P O R T

export default function Grid({ cardArray = [] }) {

    // R E T U R N

    return <div className="grid">
        <ul>
            {cardArray.map((symbolArray, index) => (
                <li key={index}>
                    <Card symbolArray={symbolArray} />
                </li>
            ))}
        </ul>
    </div>;

}