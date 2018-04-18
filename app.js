// function validateZIP() {
//      var valueEntered = document.getElementById("zip").value;
//     var numChars = valueEntered.length;
//      if (numChars < 5) {
//     alert("Please enter a 5-digit code.");
//      return false;
//      }
//      for (var i = 0; i <= 4; i++) {
//     var thisChar = parseInt(valueEntered[i]);
//      if (isNaN(thisChar)) {
//      alert("Please enter only numbers.");
//      return false;
//      }
//      }
//      }
    

function greetWorld() {
    try {
     var greeting = "Hello world!";
     alert(greeting);
     }
     catch(ex) {
     alert(ex);
    }
     }

     greetWorld();