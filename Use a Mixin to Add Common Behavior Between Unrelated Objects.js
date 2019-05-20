let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Add your code below this line
let glideMixin = function(obj) {
    obj.glide =  function() {
        console.log("Oh, I'm sorry, did I break your concentration?")
    }
}

glideMixin(bird);
glideMixin(boat);

bird.glide();
boat.glide();

