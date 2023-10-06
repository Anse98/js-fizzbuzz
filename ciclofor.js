//Creo la variabile container
const container = document.getElementById("container");

// Stampo in console i numeri da 1 a 100
for (let i = 0; i < 100; i++) {
  let n = i + 1;
  const node = document.createElement("div");
  node.classList.add("box");
  let text;

  //Stampo FizzBuzz SE entrambe le condizioni sono soddisfatte
  if (n % 3 === 0 && n % 5 === 0) {
    node.classList.add("bg-chocolate");
    text = document.createTextNode("FizzBuzz");
    //Stampo Buzz SE la variabile n è un multiplo di 5
  } else if (n % 5 === 0) {
    node.classList.add("bg-grey");
    text = document.createTextNode("Buzz");

    //Stampo Fizz SE la variabile n è un multiplo di 3
  } else if (n % 3 === 0) {
    node.classList.add("bg-goldenrod");
    text = document.createTextNode("Fizz");
  }
  //ALTRIMENTI stampo il valore di n
  else {
    node.classList.add("bg-blue")
    text = document.createTextNode(n);
  }

  node.appendChild(text);
  container.appendChild(node);
}

