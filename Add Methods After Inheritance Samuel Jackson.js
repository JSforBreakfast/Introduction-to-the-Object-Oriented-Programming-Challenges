function SamuelJackson() { }
SamuelJackson.prototype.eat = function() { console.log("Mmm-mmmmm. This IS a tasty burger."); };

function JulesWinnfield() { }

// Add your code below this line
JulesWinnfield.prototype = Object.create(SamuelJackson.prototype);
JulesWinnfield.prototype.constructor = JulesWinnfield;

 JulesWinnfield.prototype.eat = function() {
    console.log("Mmm-mmmmm. This IS a tasty burger.");
};

JulesWinnfield.prototype.question = function() {
    console.log("English, motherf#cker!!! Do you speak it?!");
};

JulesWinnfield.prototype.talk = function() {
    console.log("Say 'what' again. Say 'what' again, I dare you, I double dare you motherf#cker, say 'what' one more Goddamn time!");
};


// Add your code above this line

let character = new JulesWinnfield();

character.eat(); // Should print "Mmm-mmmmm. This IS a tasty burger."
character.question(); // Should print "English, motherf#cker!!! Do you speak it?!"
character.talk(); // Should print "Say 'what' again. Say 'what' again, I dare you, I double dare you motherf#cker, say 'what' one more Goddamn time!"

