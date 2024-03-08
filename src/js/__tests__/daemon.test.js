import Daemon from "../daemon";

test('Daemon constructor', () => {
    expect(new Daemon("Test")).toEqual({
        name: "Test",
        type: "Daemon",
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    });
})
