// var Character = function(x, y) {
//       this.x = x;
//       this.y = y;
//       this.health_ = 100;
//     };
//
//     Character.prototype.damage = function() {
//       this.health_ = this.health_ - 10;
//     };
//
//     Character.prototype.getHealth = function() {
//       return this.health_;
//     };
//
//     Character.prototype.toString = function() {
//       return "x: " + this.x + " y: " + this.y + " health: " + this.getHealth();
//     };

class Character {
  constructor(x,y,health_) {
    this.x = x;
    this.y = y;
    this.health_ = 100;
  }
  damage(){
    this.health_ = this.health_ - 10;
  }
  getHealth(){
    return this.health_;
  }
  toString(){
      return `x: ${this.x} y: ${this.y} health: ${this.getHealth()}`
  }
}
let x = process.argv[2];
let y = process.argv[3];
let character = new Character(+x, +y);
character.damage();
console.log(character.toString());
