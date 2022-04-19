// * Ejemplo 4: Uso de map para recorrer los elementos de una lista y crear una nueva lista
// * Arrow function and explicit return
// * const modifiedArray = arr.map((element,index) => element);

console.log("Ejemplo 4: Imprimiendo la lista de elementos al cuadrado")
const numbers4 = [1, 2, 3, 4, 5]
const numbersSquare = numbers4.map(function(num){ return num * num})
// * También puedes escribir la función como fat arrow
// * const numbersSquare = numbers4.map((num) => return num * num)
const numbersSquare2 = numbers4.map((num) =>{ return num * num})
console.log(numbersSquare)
console.log(numbersSquare2)


// * Ejemplo 5: Uso de Map para convertir todos los nombres de una lista a mayúsculas
console.log("Ejemplo 5: Uso de Map para convertir todos los nombres de una lista a mayúsculas")
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesToUpperCase = names.map((name) => name.toUpperCase())
const namesToLowerCase = names.map((name) => name.toLowerCase())
console.log(namesToUpperCase)
console.log(namesToLowerCase)


// Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas
console.log("Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas")
const countries6 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesFirstThreeLetters = countries6.map((country) =>
  country.toUpperCase().slice(0, 3) // el método slice obtiene solo la longitud marcada del string, que en este caso va del 0 al 3, o sea, solo tomará las primeras 3 letras
)
console.log(countriesFirstThreeLetters)