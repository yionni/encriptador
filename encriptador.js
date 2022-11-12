
function encriptar() {
  let texto = document.getElementById("introTexto").value;
  document.getElementById("outroTexto").value = texto.replace( /a/gi, "ai").replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/o/gi, 'ober').replace(/u/gi, 'ufat')
}

function descencriptar(){

  let texto = document.getElementById("introTexto").value;
  document.getElementById("outroTexto").value = texto.replace( /ai/gi, "a").replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ober/gi, 'o').replace(/ufat/gi, 'u')
  
}
