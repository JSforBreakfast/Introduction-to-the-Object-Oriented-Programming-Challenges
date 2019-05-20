let funModule = (function() {
  return {
    isCuteMixin: function (obj) {
  obj.isCute = function() {
    console.log ("Enough is enough! I've had it with these motherf#cking snakes on this motherf#cking plane!");
    };
},

    singMixin: function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
    };
  }
}
}) ();
