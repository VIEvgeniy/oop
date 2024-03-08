import Magician from "../magician";

test('Magician constructor', () => {
    expect(new Magician("Test")).toEqual({
        name: "Test",
        type: "Magician",
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    });
})
