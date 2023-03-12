const adding = require('./adding');

// describe("Multiply tests", () => {
//     test('multiply 2 by 3 is 6', () => {
//         expect(product(2, 3)).toBe(6);
//     });
// });

describe("Adding function", () => {
    test('Add 0.1 to 0.2 is 0.3', () => {
        expect(adding(0.1, 0.2)).toBeCloseTo(0.3);
        expect(adding(0.1, 0.2)).not.toBe(0.4);
    });
});