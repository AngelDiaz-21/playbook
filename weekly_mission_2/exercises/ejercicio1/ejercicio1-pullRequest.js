const PullRequest = {
    title: "Enviando mi blog",
    branchName: "main",
    dateCreated: "last 13 days ago",
    status: "Awaiting approval",
    repositoryNameAssociated: "AngelDíaz-21",


    getStatus(){
        return this.status
    },

    getTitleAndAutor(){
        return `This pull request ${this.title} was created by ${this.repositoryNameAssociated}`
    }
}

console.log("Estado del pull request: " + PullRequest.getStatus())
console.log(PullRequest.getTitleAndAutor())