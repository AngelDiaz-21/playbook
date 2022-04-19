// * Ejemplo 13: Uso de findIndex, este método regresa la posición del primer elemento que cumpla con la validación que indiques.
const names13 = ['ExplorerAngel 1', 'Explorer 2', 'Explorerr 3']
const result = names13.findIndex((name) => name.length > 7)
console.log("Ejemplo 13: Primer elemento cuya palabra sea mayor a 7 esta en la posición "+ result)



const array1 = [5, 12, 8, 130, 44];
// Forma 1
const isLargeNumber2 = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber2));

// Forma 2
const isLargeNumber = array1.findIndex((num) => num > 13);
console.log("Ejemplo de prueba, en donde se regresa la primer posición que encuentre que sea mayor a 13 que en este caso sería la posición 3: " + isLargeNumber);
// expected output: 3
