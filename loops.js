function forLoop(array) {
   for ( let i = 0; i < 25; i++) {
     if (i === 1) {
       array.push("I am 1 strange loop.")
     }
     else {
       array.push("I am ${i} strange loops.")
     }
  }
  return array;
}

forLoop([]);

function whileLoop(n) {
   let countdown = n;

   while (countdown > 0) {
     console.log(--countdown);
   }
   return "done";
}

whileLoop(10);

function doWhileLoop(array) {
  function incrementVariable() {
    math.Randon() > 0.5
  }

do {
  array.pop();
} while (array.length > -1 && incrementVariable());
  retun array
}

doWhileLoop(array)
