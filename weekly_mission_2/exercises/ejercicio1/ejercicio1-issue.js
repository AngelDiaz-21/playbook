const issue = {
    title: "08 Live 2 Semana 3",
    repositoryNameAssociated: "",
    status: "Open",
    numberOfComments: 65,
    labels: ["Finalizado", "Live 2", "Semana 3"],
    author: "Carlogilmar",
    dateCreated: "Miércoles 20 de Abril 8 PM",
    lastUpdated: new Date(),

    getTitleAndAuthor(){
        return `This ${this.title} issue was created by ${this.author}` 
    },

    getGeneralInfo(){
        return `This issue ${this.title} was created by ${this.author} and number of comments is ${this.numberOfComments} with status ${this.status} and labels ${this.labels}`
    }
}

console.log("Titulo del issue: " + issue.title)
console.log("Titulo y autor del issu: " + issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())
console.log(issue.lastUpdated)

