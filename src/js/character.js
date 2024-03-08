export default class Character {
    constructor(name, type) {
        if((name.length < 2)||(name.length > 10)) throw new Error(`Error name ${name}, name must be between 2 and 10 characters long`);
        if(!Character.basicType.includes(type)) throw new Error(`type must be: ${Character.basicType}`);
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = Character.basicParametrs[Character.basicType.indexOf(type)][0];
        this.defence = Character.basicParametrs[Character.basicType.indexOf(type)][1];
    }
    static basicType = ["Bowman", "Swordsman", "Magician", "Undead", "Zombie", "Daemon"];
    static basicParametrs = [[25, 25], [40, 10], [10, 40], [25, 25], [40,10], [10,40]];

    damage(points){
        this.health -= points * (1 - this.defence / 100);
        if(this.health < 0) this.health = 0;
    }
    
    levelUp() {
        if(this.health > 0){
            this.level += 1;
            this.attack *= 1.2;
            this.defence *= 1.2;
            this.health = 100;
        }
    }
}

