console.log("************** DELIVERABLE 02 *********************");

// 2. CONCAT

// Implementa una función concat (inmutable) tal que, dados 2 arrays
// como entrada, devuelva la concatenación de ambos.
// Utiliza rest / spread operators.

const concat = <T, P>(a: T[], b: P[]) => [...a, ...b];

// -- OPCIONAL --

// Implementa una versión del ejercicio anterior donde se acepten
// múltiples arrays de entrada (más de 2).

const multiConcat = <T extends any[]>(...arr: T): T extends (infer R)[][] ? R[] : never =>
  arr.reduce((newArr, item) => concat(newArr, item), []);

const multiConcatV2 = <T extends any[]>(...arr: T): T[] => {
  let newArr = [];
  arr.forEach((item) => item.forEach((element) => newArr.push(element)));
  return newArr;
};

// TEST
const strings = ["a", "b"];
const numbers = [1, 2];
const booleans = [true, false];

console.log(`## Exercise 02 - CONCAT ## 
Original arrays: ${strings} - ${numbers} - ${booleans}
Concat 2 arrays: ${concat(strings, numbers)}
Concant N arrays: ${multiConcat(strings, numbers, booleans)}
Concant N arrays V2: ${multiConcatV2(strings, numbers, booleans)}`);
