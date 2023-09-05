import password from "./app.js";

const first = document.querySelector("#primer-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");


form.addEventListener("submit", (event) => {
  const aux=new password;
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const result= aux.ingresarDatos(firstNumber);
  div.innerHTML = "<p>" + result + "</p>";
});
