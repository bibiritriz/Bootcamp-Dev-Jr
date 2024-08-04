function calc(op){
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value); 
  var saida = 0;

  switch(op){
    case '+' : var saida = num1 + num2; break;
    case '-' : var saida = num1 - num2; break;
    case 'x' : var saida = num1 * num2; break;
    case '/' : var saida = num1 / num2; break;
  }

  document.getElementById("saida").value = saida;

  var novoHistorico = "<p>" + num1 + " " + op + " " + num2 + " " + "=" + " " + saida + "</p>";
  var historico = document.getElementById("historico");

  historico.innerHTML = novoHistorico + historico.innerHTML;

  if(historico.children.length > 10){
    historico.removeChild(historico.childNodes[10])
  }
}
