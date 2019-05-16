function Dog(name) {
  this.name = name; 
}

Dog.prototype = {
  // Add your code below this line
  numLegs: 3,
  eat: function() {
    console.log("chomp chomp chomp");
  },

  describe: function() {
    console.log (this.name + " bites for bacon.");
  }
};
