// * Ejemplo 15: Uso de sort para ordenar elementos
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
//  Apple, Carrot, Coffee, Honey, Mlk, Sugar
console.log("Ejemplo 15: Elementos ordernados usando SORT")
console.log(products.sort())



// * Ejemplo 16: Ordenando una lista de objetos por la edad
const users = [
    { name: 'Y', age: 1000 },
    { name: 'Z', age: 10 },
    { name: 'A', age: 150 },
    { name: 'B', age: 50 },
    { name: 'x', age: 5 },
    { name: 'C', age: 100 },
    { name: 'D', age: 22 },
]

users.sort((a, b) => { // podemos invocar una función
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
})

console.log("\n\n Ejemplo 16: Ordenando una lista de objetos por la edad")
console.log(users) // sorted ascending