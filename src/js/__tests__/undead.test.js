import Undead from "../undead";

test('Undead constructor', () => {
    expect(new Undead("Test")).toEqual({
        name: "Test",
        type: "Undead",
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    });
})
