import Zombie from "../zombie";

test('Zombie constructor', () => {
    expect(new Zombie("Test")).toEqual({
        name: "Test",
        type: "Zombie",
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    });
})
