import Bowman from "../bowman";

test('Bowman constructor', () => {
    expect(new Bowman("Test")).toEqual({
        name: "Test",
        type: "Bowman",
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    });
})
