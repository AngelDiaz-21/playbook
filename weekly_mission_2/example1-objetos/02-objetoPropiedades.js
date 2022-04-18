console.log("Ejemplo 2: Creación de un objeto con propiedades")

const myObject = {
    name: "Angel",   //string
    age: 22,        //integer
    mission: "Node js",
    stack: ["js", "node", "vue"], //listas
    blog: {         //objeto anidado
        titulo: "Git hub pages",
        url: "https://github.com/AngelDiaz-21",
        posts: 1
    }
}

console.log(myObject)

console.log("Accediendo a las propiedades del objeto")
console.log(myObject.name)
console.log(myObject["age"])