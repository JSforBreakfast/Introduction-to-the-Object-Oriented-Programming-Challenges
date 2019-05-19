function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Add your code below this line
Dog.prototype.eat = function() {
    console.log("Mmm-mmmmm. This IS a tasty burger.")
}

Dog.prototype.bark = function() {
    console.log("Does he look like a bitch?")
}

Dog.prototype.name = function() {
    console.log("Samuel Jackson")
}

// Add your code above this line

let beagle = new Dog();

beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"
beagle.name();// Samuel Jackson
