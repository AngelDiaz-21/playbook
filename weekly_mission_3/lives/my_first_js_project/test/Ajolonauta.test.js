// Importamos la clase Ajolonauta que esta en la carpeta app para hacer la prueba
// Esto es sintaxis de common js
const Ajolonauta = require('./../app/Ajolonauta')

// Test de prueba / Ejemplo
describe('Esto es una suite de pruebas', () => {
    test('Case de prueba 1', () => {
        // Aqui tu puedes usar el código como lo deseas utilizar
        const result = 1 + 2

        // Validar el resultado esperado
        // expect(result).toBe(10);
        expect(result).toBe(3);
    }) 
})


describe('Pruebas de unidad de Ajolonauta', () => {
    test('Caso de prueba 1: Creación de objeto', () => {
        const woopa = new Ajolonauta("Woopa")

        // el .name viene del objeto / clase que estamos importando
        expect(woopa.name).toBe("Woopa");
    }) 
})