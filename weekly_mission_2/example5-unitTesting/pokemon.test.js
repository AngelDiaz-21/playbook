import Pokemon from './pokemon'

test('Test 1) Create a new object pokemon', () => {
    // new "Pokemon" es una clase 
    // Y lo estamos instanciando
    const myPokemon = new Pokemon('Pikachu')
    // name viene del constructor que esta en la clase
    // expect(myPokemon.name).toBe('Pikachusss'); // Corrige esta prueba
    expect(myPokemon.name).toBe('Pikachu'); // Corrige esta prueba
});

    
// ! TDD test driven development
// ! 1) Escribir una prueba de lo que quieres modelar
// ! 2) Correr la prueba y verla fallar
// ! 3) Escribir el código que haga pasar a esa prueba