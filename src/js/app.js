// TODO: write your code here
import sum from './basic';
import Bowman from './bowman';
import Daemon from './daemon';
import Swordsman from './swordsman';
import Magician from './magician';

console.log('worked');

console.log(sum([1, 2]));

let Char1 = new Daemon("Jekil");
let Char2 = new Swordsman("SonyBoy");
let Char3 = new Magician("KillStar");
let BowmanChar = new Bowman("MasterLorg");

console.log(Char1, Char2, Char3);
console.log(BowmanChar);