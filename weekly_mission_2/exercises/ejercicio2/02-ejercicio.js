// * Lista de objetos
const explorers = [
    {
        name: "Explorer 1",
        exercises_completed: 10,
        rate: 99,
        city: "CDMX",
        stack: [
            "js",
            "c#"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: true,
                exercisesFinished: true
            }
        }
    },
    {
        name: "Explorer 2",
        exercises_completed: 9,
        city: "CDMX",
        rate: 50,
        stack: [
            "js"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: false
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    },
    {
        name: "Explorer 3",
        exercises_completed: 3,
        city: "Sonora",
        rate: 100,
        stack: [
            "elixir"
        ],
        missions: {
            onboarding: {
                isFinished: false,
                exercisesFinished: true
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    }
]

console.log(explorers)

console.log("1. Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH")
// ! forEach -> Es un método que nos permite recorrer una lista de elementos. Ejecutar algo sobre cada elemento de la lista
explorers.forEach(explorers => console.log(explorers.name))


console.log("2. Imprime el stack de cada explorer, usa FOR EACH")
explorers.forEach(item => console.log(item.stack))


console.log("3. Crea una nueva lista con las listas de stacks de cada explorer, usa MAP")
// ! MAP-> Método que nos va ayudar a crear nuevas cosas. Va a crear una nueva lista a partir de otra lista. Nos sirve para extraer información
// * Con el map le decimos que vaya a la lista de explorer y que nos traiga la propiedad stack y eso crea una lista que guardamos en 'explorer_stacks'
const explorer_stacks = explorers.map(my_explorer_in_list => my_explorer_in_list.stack)
console.log(explorer_stacks)


console.log("4. Obtén la lista de explorers que tengan en su stack 'js', usa FILTER (para validar un elemento en un lista se usa el método includes)")
// *Vamos a filtrar una lista y se guardará en una variable diferente
const explorer_with_js = explorers.filter(my_explorer_in_list => my_explorer_in_list.stack.includes("js"))
console.log(explorer_with_js)


console.log("5. Busca el primer explorer que sea de la CDMX, usa FIND. Especificamente el explorer 1")
// ! Con el método "find"  hacemos que recorrar la lista y el primero que encuentre con la propiedda "CDMX" es el que va a mostrar
const first_explorer_in_cdmx = explorers.find(my_explorer_in_list => my_explorer_in_list.city === "CDMX")
console.log(first_explorer_in_cdmx)


console.log("6. Obtén la suma de todos los exercises_completed, usa REDUCE")
// ! acc->Acumulador, variabled default 
// ! 0-> Valor del acumulador, o sea, que se va a inicializar en 0. Y se le va a ir sumando los valores que están en exercises_completed y una vez que termine nos muestra la suma total de los valores acumulados
const all_exercises = explorers.reduce((acc, my_explorer_in_list) => acc + my_explorer_in_list.exercises_completed, 0)
console.log(all_exercises)


console.log("7. Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME")
const exercisesFinishedFronted = explorers.some((my_explorer_in_list) => my_explorer_in_list.missions.frontend.exercisesFinished === true)
console.log(exercisesFinishedFronted)

// console.log(explorers[0].missions.frontend.exercisesFinished)

console.log("8. Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.")
const isFinishedOnboarding = explorers.every((my_explorer_in_list) => my_explorer_in_list.missions.onboarding.isFinished === true)
console.log(isFinishedOnboarding)