//  * Tomando de referencia el ejercicio 1, convierte esos objetos a definiciones de clases, trata de aplicar lo visto en los ejemplos.

class PullRequest {
    constructor(title, branchName, dateCreated, status, repositoryNameAssociated){
        this.title = title
        this.branchName = branchName
        this.dateCreated = dateCreated
        this.status = status
        this.repositoryNameAssociated = repositoryNameAssociated
    }

    getStatus(){
        return this.status
    }

    getTitleAndAutor(){
        return `This pull request ${this.title} was created by ${this.repositoryNameAssociated}`
    }
}

const PullRequestdate = new PullRequest ("Enviando mi blog", "main", "last 13 days ago", "Awaiting approval", "AngelDíaz-21")

console.log("Convierte esos objetos a definiciones de clases")

console.log(PullRequestdate)

console.log("Estado del pull request: " + PullRequestdate.getStatus())
console.log(PullRequestdate.getTitleAndAutor())