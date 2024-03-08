import Character from "../character";


let testChar = new Character("Test","Bowman");

test('Character constructor', () => {
    expect(testChar).toEqual({
        name: "Test",
        type: "Bowman",
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    });
})

test('Character constructor Error name length < 2', () => {
    expect(() => {
        new Character("T","Bowman")
    }).toThrow();
})

test('Character constructor Error type', () => {
    expect(() => {
        new Character("TestChar","Rouge")
    }).toThrow();
})

test('Character levelUp healt==0', () => {
    testChar.health = 0;
    testChar.levelUp();
    expect(testChar).toEqual({
        name: "Test",
        type: "Bowman",
        health: 0,
        level: 1,
        attack: 25,
        defence: 25
    });
    testChar.health = 100;
});

test('Character levelUp', () => {
    testChar.levelUp();
    expect(testChar).toEqual({
        name: "Test",
        type: "Bowman",
        health: 100,
        level: 2,
        attack: 25*1.2,
        defence: 25*1.2
    });
});

test('Character damage', () => {
    testChar.damage(10);
    expect(testChar).toEqual({
        name: "Test",
        type: "Bowman",
        health: 100 - 10*(1 - 25*1.2/100),
        level: 2,
        attack: 25*1.2,
        defence: 25*1.2
    });
});

test('Character one shoot', () => {
    testChar.damage(1000);
    expect(testChar).toEqual({
        name: "Test",
        type: "Bowman",
        health: 0,
        level: 2,
        attack: 25*1.2,
        defence: 25*1.2
    });
});
