// * Ejemplo 11: Uso de find para encontrar el primer elemento de una lista que cumpla con lo que indiques
const ages = [24, 22, 19, 25, 32, 35, 18]
// * Indicamos que encuentre al primer elemento que sea menor a 20, que en este caso sería 19
const age = ages.find((age) => age < 20)
console.log("Ejemplo 11: Primera edad menor a 20 es: " + age)



// * Ejemplo 12: Uso de find en una lista de objetos
const scores12 = [
    { name: 'A', score: 70 },
    { name: 'M', score: 80 },
    { name: 'E', score: 50 },
    { name: 'M', score: 85 },
    { name: 'J', score: 100 },
]

//  * Indicamos que encuentre al primer nombre que tenga una puntuación mayor a 80
const score_less_than_80 = scores12.find((user) => user.score > 80)
// Puntuación de nombre encontrada
console.log("Ejemplo 12. Name score found:" + score_less_than_80.name)
