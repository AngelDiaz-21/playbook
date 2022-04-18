console.log("Ejemplo 4: Objeto con método que recibe parámetros")

const myPet = {
    name: "Woopa",
    sayHelloToMyPet: function (yourPet){
        console.log(`${this.name} say's hello to ${yourPet}`)
    }
}

myPet.sayHelloToMyPet("Ajolonauta")