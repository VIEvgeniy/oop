import Swordsman from "../swordsman";

test('Swordsman constructor', () => {
    expect(new Swordsman("Test")).toEqual({
        name: "Test",
        type: "Swordsman",
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    });
})
