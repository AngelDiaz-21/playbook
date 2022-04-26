console.log("POO")

// * Objeto de js
const woopa_objeto = {
    name: "woopa",
    mission: "Node JS",
    age: 12,
    color: "Pink"
}

// * Clase
// Woopa es un ajolonauta, así que haremos una clase que creee varios ajolanautas
// Un objeto tiene 2 componentes (atributos y métodos)
class Ajolonauta {
    // Los constructores nos ayudan a construir los objetos que se instancian de esta clase. En el constructor va a tomar esos parametros que se los estamos enviando de algun lado
    constructor(name, mission, age, color){
        this.name = name
        this.mission = mission
        this.age = age
        this.color = color
    }


    sayHello(){
        // return "Hey! Hello"
        return `Hola soy ${this.name} y tengo ${this.age} años`
    }

}

// * Haremos un objeto de clase
// * Se instancia un objeto
const wooopa = new Ajolonauta("Woopa", "Node JS", 18, "Pink")
console.log(wooopa)
console.log(wooopa.sayHello())

// A partir de la definicion de una clase se pueden instancias más objetos. SI utilizamos la analogía del molde de galletas, el molde seria la clase y las galletas del molde serían las instancias de los objetos
// Estamons instanciando 3 objetos diferentes de la misma clase
const wooper = new Ajolonauta("Wooper", "PHP", 23, "Blue")
console.log(wooper)
const woopy = new Ajolonauta()


// ! Has 2 tipos de objetos. El 1° es un objeto creado de una clase y los objetos de JavaScript