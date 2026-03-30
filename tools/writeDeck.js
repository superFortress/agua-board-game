// I M P O R T

// Function
import buildDeckObject from './buildDeckObject.js';

// Module
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// C O N F I G

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const output = path.join(__dirname, '../src/library');
const symbolsPerCard = 6;

// R E T U R N

// Build deck
const deck = buildDeckObject(symbolsPerCard - 1);

// Write card archive
fs.writeFileSync(path.join(output, 'cardArray.js'), ''
    + '// E X P O R T\n\n'
    + 'export default '
    + JSON.stringify(deck.cardArray, null, 4)
    + ';'
);

// Write symbol archive
fs.writeFileSync(path.join(output, 'symbolArray.js'), ''
    + '// E X P O R T\n\n'
    + 'export default '
    + JSON.stringify(deck.symbolArray, null, 4)
    + ';'
);