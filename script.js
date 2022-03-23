function ConverterDolar() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmRealFixo = valorEmDolarNumerico * 5.2;
  var valorEmReal = valorEmRealFixo.toFixed(2);
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O Resultado em real é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterEuro() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmRealFixo = valorEmDolarNumerico * 6.15;
  var valorEmReal = valorEmRealFixo.toFixed(2);
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O Resultado em real é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}