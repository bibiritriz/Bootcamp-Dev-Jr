function calc(op){
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value); 
  var saida = 0;

  if(op === 'soma'){
    var saida = num1 + num2;
  }else if(op === 'sub'){
    var saida = num1 - num2;
  }else if(op === 'mult'){
    var saida = num1 * num2;
  }else{
    var saida = num1 / num2;
  }

  document.getElementById("saida").value = saida;
}
