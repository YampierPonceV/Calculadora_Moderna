const display_valor_actual = document.getElementById("valor-actual");
const display_valor_anterior = document.getElementById("valor-anterior");
const botonesNumeros = document.querySelectorAll(".numero");
const botonesOperadores = document.querySelectorAll(".operador");

const display = new Display(display_valor_anterior, display_valor_actual);

botonesNumeros.forEach((boton) => {
  boton.addEventListener("click", function () {
    display.agregarNumero(boton.innerHTML);
  });
});
botonesOperadores.forEach((boton) => {
  boton.addEventListener("click", function () {
    display.computar(boton.value);
  });
});
