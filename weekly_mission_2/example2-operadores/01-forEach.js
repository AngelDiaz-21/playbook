// * Ejemplo 1: for Each para imprimir elementos de una lista
console.log("Ejemplo 1: Imprimiendo los elememtos de una lista con forEach")
const numbers = [1,2,3,4,5]
numbers.forEach(num => console.log(num))

// * Ejemplo 2: for Each para calcular la suma de todos los elementos de una lista
console.log("Ejemplo 2: Cálculo de la suma de los elementos de la lista con forEach")
let sum = 0;
const numbers2 = [1,2,3,4,5,5];
numbers2.forEach(num => sum += num)
console.log(sum)

// * Ejemplo 3: forEach para imprimir los países en letras mayúsculas
console.log("Ejemplo 5: Imprimiendo la lista de países en mayúsculas con forEach")
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach((element) => console.log(element.toUpperCase()))