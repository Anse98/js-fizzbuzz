// Stampo in console i numeri da 1 a 100
for (let i = 0; i < 100; i++ ) {
  let n = i + 1;
  //Stampo FizzBuzz SE entrambe le condizioni sono soddisfatte
  if (n % 3 === 0 && n % 5 === 0) {
    console.log("FizzBuzz");
  //Stampo Buzz SE la variabile n è un multiplo di 5
  } else if (n % 5 === 0) {
    console.log("Buzz");
  //Stampo Fizz SE la variabile n è un multiplo di 3
  } else if (n % 3 === 0) {
    console.log ("Fizz");
  }
  //ALTRIMENTI stampo il valore di n
   else {
    console.log(n);
  }
}


