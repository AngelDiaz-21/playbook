//  * Tomando de referencia el ejercicio 1, convierte esos objetos a definiciones de clases, trata de aplicar lo visto en los ejemplos.

class issue {

    constructor(title, repositoryNameAssociated, status, numberOfComments, labels, author, dateCreated, lastUpdated){  
        this.title = title
        this.repositoryNameAssociated = repositoryNameAssociated
        this.status = status
        this.numberOfComments = numberOfComments
        this.labels = labels
        this.author = author
        this.dateCreated = dateCreated
        this.lastUpdated = lastUpdated
    }

    getTitleAndAuthor(){
        return `This ${this.title} issue was created by ${this.author}` 
    }

    getGeneralInfo(){
        return `This issue ${this.title} was created by ${this.author} and number of comments is ${this.numberOfComments} with status ${this.status} and labels ${this.labels}`
    }
}


const issueLive = new issue ("08 Live 2 Semana 3", "Launch X", "Open", 65, 
["Finalizado", "Live 2", "Semana 3"], "Carlogilmar", "Miércoles 20 de Abril 8 PM", new Date())

console.log("Convierte esos objetos a definiciones de clases")

console.log(issueLive)


console.log("Titulo del issue: " + issueLive.title)
console.log("Titulo y autor del issu: " + issueLive.getTitleAndAuthor())
console.log(issueLive.getGeneralInfo())
console.log(issueLive.lastUpdated)