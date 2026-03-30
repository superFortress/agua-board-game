// I M P O R T

// Library
import cardArray from '../library/cardArray';
import emojiArray from '../library/emojiArray';
import symbolArray from '../library/symbolArray';

// Module
import { useEffect, useState } from 'react';

// Styles
import '../styles/App.css';
import '../styles/Root.css';

// S T A T I C

const symbolObject = {};
symbolArray.forEach((key, index) => {
    const symbol = emojiArray[index];
    symbolObject[key] = symbol;
});

// R E T U R N

export default function App() {

    // A S S E T S

    // State
    const [onDesktop, setOnDesktop] = useState(false);

    // E F F E C T
    
    useEffect(() => {
        const measure = () => setOnDesktop(window.innerWidth >= 768);
        measure();
        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
    }, []);

    // R E T U R N

    return <div className="app">
        <ul>
            {cardArray.map((card, index) => {
                const symbolTotal = card.length;
                return <li key={index} className="app__card">
                    {card.map((key, index) => {
                        const symbol = symbolObject[key];
                        const angle = 360 / symbolTotal * index;
                        return <div key={key} style={{
                            fontSize: onDesktop ? '48px' : '32px',
                            lineHeight: onDesktop ? '48px' : '32px',
                            textAlign: 'center',

                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: `
                                translate(-50%, -50%)
                                rotate(${angle}deg)
                                translateY(-150%)
                            `
                        }}>
                            {symbol}
                        </div>;
                    })}
                </li>
            })}
        </ul>
    </div>;

}