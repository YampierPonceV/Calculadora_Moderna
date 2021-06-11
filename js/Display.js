
class Display {
  constructor(display_valor_anterior, display_valor_actual) {
    this.display_valor_actual = display_valor_actual;
    this.display_valor_anterior = display_valor_anterior;
    this.calculador = new Calculadora();
    this.valorActual = "";
    this.valorAnterior = "";
    this.tipoOperacion = undefined;
    this.signos = {
      sumar: "+",
      dividir: "/",
      multiplicar: "x",
      restar: "-",
    };
  }
  borrar() {
    this.valorActual = this.valorActual.toString().slice(0, -1);
    this.imprimirValores();
  }
  borrarTodo() {
    this.valorActual = "";
    this.valorAnterior = "";
    this.tipoOperacion = undefined;
    this.imprimirValores();
  }
  agregarNumero(numero) {
    this.valorActual = this.valorActual.toString() + numero.toString();
    this.imprimirValores();
  }
  computar(tipo) {
    this.tipoOperacion !== "igual" && this.calcular();
    this.tipoOperacion = tipo;
    this.valorAnterior = this.valorActual || this.valorAnterior;
    this.valorActual = "";
    this.imprimirValores();
  }
  imprimirValores() {
    this.display_valor_actual.textContent = this.valorActual;
    this.display_valor_anterior.textContent = `${this.valorAnterior} ${
      this.signos[this.tipoOperacion] || ""
    }`;
  }
  calcular() {
    const valorAnterior = parseFloat(this.valorAnterior);
    const valorActual = parseFloat(this.valorActual);

    if( isNaN(valorActual)  || isNaN(valorAnterior) ) return
    this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
}
}
