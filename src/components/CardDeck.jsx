// I M P O R T

// Library
import symbolMap from '../library/symbolMap';
import transformArray from '../library/transformArray';

// S T A T I C

function Card({ index, symbolArray }) {
    const transform = transformArray[index % transformArray.length];
    return <li className="card">
        {symbolArray.map((key, index) => {
            return <Symbol
                key={key}
                {...symbolMap.get(key)}
                {...transform[index]}
            />;
        })}
    </li>;
}

function Symbol({ path, /*rotate,*/ scale, x, y }) {
    return <img className="card-symbol"
        src={`/agua/assets/images/${path}.png`}
        style={{
            width: `${scale * 0.87}%`,
            height: `${scale * 0.87}%`,

            top: `${y}%`,
            left: `${x}%`,
            transform: `
                translate(-50%, -50%)
                rotate(${Math.random() * 360}deg)
            `
        }}
    />;
}

// E X P O R T

export default function CardDeck({ cardArray = [] }) {
    return <ul className="card__deck">
        {cardArray.map((symbolArray, index) => {
            return <Card
                key={index}
                index={index}
                symbolArray={symbolArray}
            />
        })}
    </ul>;
}