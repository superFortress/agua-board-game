// E X P O R T

export default function buildDeckObject(n = 5) {

    const cardArray = [];
    const symbolArray = [];

    // Generate symbols

    // ... Iterate over X and Y axes
    for (let x = 0; x < n; x++)
        for (let y = 0; y < n; y++)
            symbolArray.push(`p-${x}-${y}`);

    // ... Add special symbols for parallel lines
    for (let m = 0; m < n; m++)
        symbolArray.push(`inf-${m}`);
    symbolArray.push(`inf-v`);

    // Generate cards

    // ... Wrap values into the 0 to n-1 range
    const mod = (value, n) => ((value % n) + n) % n;

    // ... Non-vertical line cards
    for (let m = 0; m < n; m++) {
        for (let b = 0; b < n; b++) {
            const card = [];
            for (let x = 0; x < n; x++) {
                const y = mod(m * x + b, n);
                card.push(`p-${x}-${y}`);
            }
            card.push(`inf-${m}`);
            cardArray.push(card);
        }
    }

    // ... Vertical line cards
    for (let c = 0; c < n; c++) {
        const card = [];
        for (let y = 0; y < n; y++) {
            card.push(`p-${c}-${y}`);
        }
        card.push(`inf-v`);
        cardArray.push(card);
    }

    // ... Final card containing only special symbols
    const card = [];
    for (let m = 0; m < n; m++)
        card.push(`inf-${m}`);
    card.push(`inf-v`);
    cardArray.push(card);

    // Return deck

    return { n, cardArray, symbolArray };

}