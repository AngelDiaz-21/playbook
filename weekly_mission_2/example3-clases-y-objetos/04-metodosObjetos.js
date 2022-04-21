// Ejemplo 4: Métodos en los objetos
class Repository {
    constructor(name, author, language, stars, saludos) {
        this.name = name
        this.author = author
        this.language = language
        this.stars = stars
        this.saludos = saludos
    }

    getInfo() { // es una función que ejecutará cualquier objeto instanciado de esta clase
        return `Repository ${this.name} has ${this.stars} stars and the author is ${this.author}. ${this.saludos} `
    }
}
console.log("Ejemplo 4: Métodos en los objetos")
const myRepo = new Repository("LaunchX", "angel", "js", 100, "Saludos")
console.log(myRepo.getInfo())