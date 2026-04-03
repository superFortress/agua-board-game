// I M P O R T

// Library
import cardArray from '../library/cardArray';
import symbolMap from '../library/symbolMap';
import transformArray from '../library/transformArray';

// E X P O R T

// Create card Array
// ==> Each entry contains an Array of symbols
export default function createCardArray() {
    return cardArray.map((symbolArray, index) => {
        const transform = transformArray[index % transformArray.length];
        return symbolArray.map((key, index) => {
            const { rotate, scale, x, y } = transform[index];
            const symbol = symbolMap.get(key);
            const name = symbol.name;
            const path = `/agua/assets/images/${symbol.path}.png`;
            return { name, path, rotate, scale, x, y };
        });
    });
}