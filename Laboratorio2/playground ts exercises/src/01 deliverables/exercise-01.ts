console.log("************** DELIVERABLE 01 *********************");

const numberArray = [1, 2, 3, 5, 8];
const stringArray = ["Hola", "que", "tal"];

// 1. ARRAY OPERATIONS

// --- HEAD -----------------

// Implementa una función head (inmutable), tal que, dado un array como
// entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

const head = <H>([head]: H[]): H => head; // Implementation here.

console.log(`## Exercise 01_01 - HEAD ## 
Original array: ${numberArray} -- Result: ${head(numberArray)}`);
console.log(`## Exercise 01_01 - HEAD ## 
Original array: ${stringArray} -- Result: ${head(stringArray)}`);

// --- TAIL -----------------

// Implementa una función tail (inmutable), tal que, dado un array como
// entrada devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = <T>([, ...tail]: T[]): T[] => tail; // Implementation here.

console.log(`## Exercise 01_02 - TAIL ## 
Original array: ${numberArray} -- Result: ${tail(numberArray)}`);
console.log(`## Exercise 01_02 - TAIL ## 
Original array: ${stringArray} -- Result: ${tail(stringArray)}`);

// --- INIT -----------------

// Implementa una función init (inmutable), tal que, dado un array
// como entrada devuelva todos los elementos menos el último.
// Utiliza los métodos que ofrece Array.prototype.

const init = <I>(array: I[]): I[] => array.slice(0, -1); // Implementation here.

console.log(`## Exercise 01_03 - INIT ## 
Original array: ${numberArray} -- Result: ${init(numberArray)}`);
console.log(`## Exercise 01_03 - INIT ## 
Original array: ${stringArray} -- Result: ${init(stringArray)}`);

// --- LAST -----------------

// Implementa una función last (inmutable), tal que, dado un array
// como entrada devuelva el último elemento.

const last = <L>(array: L[]): L => array[array.length - 1]; // Implementation here.

console.log(`## Exercise 01_04 - LAST ## 
Original array: ${numberArray} -- Result: ${last(numberArray)}`);
console.log(`## Exercise 01_04 - LAST ## 
Original array: ${stringArray} -- Result: ${last(stringArray)}`);
