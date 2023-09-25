function Player(name) {
  this.name = name;
  this.lvl = 1;
  this.points = 0;
}

Player.prototype.gainXp = function(amount) {
  if (amount < 1) return;

  this.points += amount;
  
  while (this.points >= 10) {
    this.lvl += 1;
    this.points -= 10;
  }
}

Player.prototype.describe = function() {
  return `${this.name} is level ${this.lvl} with ${this.points} experience points`;
}


// VVV Test below VVV

let player1 = new Player('Bob');
let player2 = new Player('Alice');

player1.gainXp(5);
player2.gainXp(7);
player1.gainXp(3);
player2.gainXp(2);
player1.gainXp(8);
player2.gainXp(4);

console.log(player1.describe()); // Bob is level 2 with 6 experience points
console.log(player2.describe()); // Alice is level 2 with 3 experience points