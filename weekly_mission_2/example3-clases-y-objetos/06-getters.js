// * Ejemplo 6: Getters para acceder a los atributos del objeto
class Ajolonauta {
    constructor(name, age, stack) {
        this.name = name
        this.age = age
        this.stack = stack
        this.exercises_completed = 0
        this.exercises_todo = 99
    }

    // Podemos acceder a los atributos de esta clase
    get getExercisesCompleted() {
        return this.exercises_completed
    }
}

console.log("Ejemplo 6: Getters para acceder a los atributos del objeto")
const woopa = new Ajolonauta("Woopa", 1, ['js', 'php'])
console.log(woopa.exercises_completed)
// ////////////////////////////////////////////////////////////////////////
console.log(woopa.exercises_todo)
console.log(woopa.stack)
console.log(woopa.getExercisesCompleted)
