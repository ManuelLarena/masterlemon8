console.log("************** DELIVERABLE 03 *********************");

// 3. Clone Merge

// -- CLONE --
// Implementa una función clone que, a partir de un objeto de entrada
// source devuelva un nuevo objeto con las propiedades de source :

interface Source {
  name: string;
  surname: string;
  country: string;
}

function clone(source: Source): Source {
  return { ...source }; // Implementation here.
}

// -- DEEP CLONE --

interface IsObject {
  (item: any): boolean;
}

interface Object {
  [key: string]: any;
}

interface DeepClone {
  (sources: Object): Object;
}

const deepClone: DeepClone = (source: Object): Object => {
  let cloneObj: Object, key: string;

  if (typeof source !== "object" || source === null) {
    return source;
  }
    
  cloneObj = Array.isArray(source) ? ([] as any) : {};

  for (key in source) {
    cloneObj[key] = deepClone(source[key]);
  }

  return cloneObj;
};

// -- MERGE --
// Implementa una función merge que, dados dos objetos de entrada source y
// target, devuelva un nuevo objeto con todas las propiedades de target
// y de source, y en caso de propiedades con el mismo nombre,
// source sobreescribe a target.

interface Target {
  name: string;
  age: number;
  married: Boolean;
}

function merge(source: Source, target: Target) {
  return { ...target, ...source };
}

// -- DEEP MERGE --

interface IDeepMerge {
  (target: Object, sources: Object): Object;
}

const isObject: IsObject = (item: any): boolean => {
  return (
    item && typeof item === "object" && !Array.isArray(item) && item !== null
  );
};

const deepMerge: IDeepMerge = (target: Object, source: Object): Object => {
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!target[key] || !isObject(target[key])) {
          target[key] = source[key];
        }
        deepMerge(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    });
  }

  return target;
};

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

const A = {
  name: "Maria",
  age: 23,
  nature: {
    helping: true,
    shy: false,
  },
};

const B = {
  qualification: "BSC CS",
  loves: "Javascript",
  nature: {
    angry: false,
    shy: true,
  },
};

const obj1 = {
  var_a: {
    loc: "Earth",
    title: "Hello World",
    type: "Planet",
    deeper: {
      map: new Map([
        ["a", "AAA"],
        ["b", "BBB"],
      ]),
      mapId: 15473,
    },
  },
};

const obj2 = {
  var_a: {
    type: "Star",
    deeper: {
      mapId: 9999,
      alt_map: new Map([
        ["x", "XXXX"],
        ["y", "YYYY"],
      ]),
    },
  },
};

console.log(`## Exercise 03 - CLONE Y MERGE ## 
Original objects: 
${JSON.stringify(a)}
${JSON.stringify(b)}
${JSON.stringify(A)}
${JSON.stringify(B)}

Cloned object: ${JSON.stringify(clone(a))}
Deep Clone object: ${JSON.stringify(deepClone(A))}
Deep Clone object: ${JSON.stringify(deepClone(B))}

Merged object: ${JSON.stringify(merge(a, b))}
Deep Merged object: ${JSON.stringify(deepMerge(A, B))}
Deep Merged object: ${JSON.stringify(deepMerge(obj1, obj2))}

Original objects after merge: 
${JSON.stringify(a)}
${JSON.stringify(b)} 
${JSON.stringify(A)}
${JSON.stringify(B)}`);

console.log(deepMerge(obj1, obj2));
