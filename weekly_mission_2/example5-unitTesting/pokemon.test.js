import Pokemon from './pokemon'

test('1) Create a new object pokemon', () => {
    const myPokemon = new Pokemon('Pikachu')
    // expect(myPokemon.name).toBe('Pikachusss'); // Corrige esta prueba
    expect(myPokemon.name).toBe('Pikachu'); // Corrige esta prueba
});

    
// test('2) Create a new type pokemon', () => {
//     const myPokemon = new Pokemon(10)
//     expect(myPokemon.age).toBe(10);
// }) 