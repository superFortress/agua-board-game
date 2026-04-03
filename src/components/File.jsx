// I M P O R T

// Component
import Card from './Card';

// E X P O R T

export default function File({ pageArray = [], columns = 0, rows = 0 }) {

    // R E T U R N

    return <div className="file">
        {pageArray.map((cardArray, index) => (
            <div key={index} className="page">
                <ul style={{
                    gridTemplateColumns: `repeat(${columns}, 1fr)`,
                    gridTemplateRows: `repeate(${rows}, 1fr)`
                }}>
                    {cardArray.map((symbolArray, index) => (
                        <li key={index}>
                            <Card symbolArray={symbolArray} />
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </div>;

}