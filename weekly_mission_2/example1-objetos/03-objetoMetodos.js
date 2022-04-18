console.log("Ejemplo 3: Objeto con métodos")

const ajolonauta = {
    name: "Woopa",
    mission: "Node Js",
    sayHelloToExplorers: function () {
        console.log("Soy el ajolonauta y soy un explorer")
    },
    tellmore: function () {

        // console.log(`Ajolonauta: ${this.name}`)
        return `Ajolonauta: ${this.name}`
    }
}

console.log("Ajolonauta")
console.log(ajolonauta)
ajolonauta.sayHelloToExplorers()
// ajolonauta.tellmore() //Se utiliza cuando se imprime por consola
console.log(ajolonauta.tellmore())