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


// function greetWorld() {
//     try {
//      var greeting = "Hello world!";
//      alert(greeting);
//      }
//      catch(ex) {
//      alert(ex);
//     }
//      }

//      greetWorld();

// setTimeout(function (){
//     console.log("first");
// },1000);
// console.log("time");

// setTimeout(function (){
//     console.log("second");
// },1000);

// setTimeout(function (){
//     console.log("third");
// },1000);


// var i=0;
// function showConfirm(){
//     return new Promise(function (resolve,reject){

//         setTimeout(function(){
//             console.log('second',i++);
//             resolve();
//         },1000);
//     })
// }
// showConfirm()
// .then(function(){
//     console.log("settimeout finished");
// })


var i = 0;

function showConfirm(num) {
    return new Promise(function (resolve, reject) {
        var random = Math.floor(Math.random() * 11);

        if(num/random % 2 === 0){
            console.log("inside promise if",random);
            var obj={exBlock:"inside if", flagBool:(num/random % 2 === 0)}
        resolve(obj);
        }
        else{
        console.log("inside promise else",random);
        var obj={exBlock:"inside else", flagBool:(num/random % 2 === 0)}
        resolve(obj);
        }
    })
}
showConfirm(6)
    .then(function (obj) {
        console.log(obj);
    })