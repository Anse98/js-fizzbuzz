//Creo la variabile container
const container = document.getElementById("container");

// Stampo in console i numeri da 1 a 100
for (let i = 0; i < 100; i++ ) {
  let n = i + 1;
  //Stampo FizzBuzz SE entrambe le condizioni sono soddisfatte
  if (n % 3 === 0 && n % 5 === 0) {
    const node = document.createElement("div");
    node.classList.add("box");
    node.classList.add("bg-chocolate");
    let text = document.createTextNode("FizzBuzz");
    node.appendChild(text);
    container.appendChild(node);
  //Stampo Buzz SE la variabile n è un multiplo di 5
  } else if (n % 5 === 0) {
    const node = document.createElement("div");
    node.classList.add("box");
    node.classList.add("bg-grey");
    let text = document.createTextNode("Buzz");
    node.appendChild(text);
    container.appendChild(node);
  //Stampo Fizz SE la variabile n è un multiplo di 3
  } else if (n % 3 === 0) {
    const node = document.createElement("div");
    node.classList.add("box");
    node.classList.add("bg-goldenrod");
    let text = document.createTextNode("Fizz");
    node.appendChild(text);
    container.appendChild(node);
  }
  //ALTRIMENTI stampo il valore di n
   else {
    const node = document.createElement("div");
    node.classList.add("box");
    node.classList.add("bg-blue")
    let text = document.createTextNode(n);
    node.appendChild(text);
    container.appendChild(node);
  }
}

