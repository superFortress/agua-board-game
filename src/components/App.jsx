// I M P O R T

// Component
import File from './File';
import Grid from './Grid';

// Function
import createCardArray from '../functions/createCardArray';

// Module
import { useEffect, useMemo, useState } from 'react';

// Styles
import '../styles/App.css';
import '../styles/Card.css';
import '../styles/File.css';
import '../styles/Grid.css';
import '../styles/Menu.css';
import '../styles/Page.css';
import '../styles/Root.css';

// R E T U R N

export default function App() {

    // A S S E T S

    // State
    const [onDesktop, setOnDesktop] = useState(false);
    const [columns, setColumns] = useState(2);
    const [rows, setRows] = useState(3);

    // Variable
    const cardArray = useMemo(() => createCardArray(), []);
    const pageArray = useMemo(() => {
        const cardCount = columns * rows;
        const pageCount = Math.ceil(cardArray.length / cardCount);
        const pageArray = [];
        for (let index = 0; index < pageCount; index++) {
            const start = index * cardCount;
            const end = start + cardCount;
            const array = cardArray.slice(start, end);
            pageArray.push(array);
        }
        return pageArray;
    }, [columns, rows]);

    // E F F E C T

    useEffect(() => {
        const measure = setOnDesktop(() => window.innerWidth >= 768);
        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
    }, []);

    // F U N C T I O N

    const decreaseColumns = () => setColumns((count) => count - 1 || 1);
    const increaseColumns = () => setColumns((count) => count + 1);
    const decreaseRows = () => setRows((count) => count - 1 || 1);
    const increaseRows = () => setRows((count) => count + 1);

    // R E T U R N

    return <div className="app">

        {/* Menu */}

        <div className="menu">
            <div className="menu__header">
                <h1>Juego de Agua</h1>
                <p>Hola, Sara! I built you a little <i>app</i> so you can choose how many cards you want per page. They should print in high quality, exactly how you want them. If you find any bugs you let me know 😌 🙏</p>
            </div>
            <div className="menu__layout">
                <div className="page">
                    <ul style={{
                        gridTemplateColumns: `repeat(${columns}, 1fr)`,
                        gridTemplateRows: `repeate(${rows}, 1fr)`
                    }}>
                        {Array(columns * rows).fill(1).map((_, index) => (
                            <li key={index}>
                                <div className="card" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="menu__render">
                <div className="menu__render-scale">
                    <span>Column count:</span>
                    <span>{columns}</span>
                    <button onClick={increaseColumns}><span>+</span></button>
                    <button onClick={decreaseColumns}><span>-</span></button>
                    <span>Row count:</span>
                    <span>{rows}</span>
                    <button onClick={increaseRows}><span>+</span></button>
                    <button onClick={decreaseRows}><span>-</span></button>
                </div>
                <div className="menu__render-print">
                    <button onClick={() => window.print()}>
                        <span>Print me!</span>
                    </button>
                </div>
            </div>
        </div>

        {/* Render cards to file */}

        <File pageArray={pageArray} columns={columns} rows={rows} />

        {/* Render cards to grid */}

        {onDesktop && <Grid cardArray={cardArray} />}

    </div>;

}