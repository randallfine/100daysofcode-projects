// var util = require('util');
//     var Character = function(x, y) {
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
  constructor(x,y, health_) {
    this.x = x;
    this.y = y;
    this.health_= 100;
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
    //
    // var Player = function(x, y, name) {
    //   Character.call(this, x, y);
    //   this.name = name;
    // };
    //
    // util.inherits(Player, Character);
    //
    // Player.prototype.move = function(dx, dy){
    //   this.x += dx;
    //   this.y += dy;
    // };
    //
    // Player.prototype.toString = function() {
    //   return "name: " + this.name + " " + Player.super_.prototype.toString.call(this);
    // };

    class Player extends Character {
      constructor(x,y,name) {
        super(x,y);
        this.name = name;
      }
      move(dx,dy){
        this.x += dx;
        this.y += dy;
      }
      toString(){
        return `name: ${this.name} ${super.toString()}`
      }
    }
    var x = process.argv[2];
      var y = process.argv[3];
      var name = process.argv[4];
      var character = new Character(+x, +y);
      character.damage();
      console.log(character.toString());
      var player = new Player(+x, +y, name);
      player.damage();
      player.move(7, 8);
      console.log(player.toString());
