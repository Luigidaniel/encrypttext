function encriptarT() {
  var text = document.getElementById("texto").value;
  var textoE = text.replace(/e/g, "enter")
                    .replace(/i/g, "imes")
                    .replace(/a/g, "ai")
                    .replace(/o/g, "ober")
                    .replace(/u/g, "ufat");
  document.getElementById("resultado").textContent = textoE;
}

function desencriptarT() {
  var text = document.getElementById("texto").value;
  var textoE = text.replace(/enter/g, "e")
                    .replace(/imes/g, "i")
                    .replace(/ai/g, "a")
                    .replace(/ober/g, "o")
                    .replace(/ufat/g, "u");
  document.getElementById("resultado").textContent = textoE;
}

function copiarT() {
  var texto = document.getElementById("resultado").textContent;
  navigator.clipboard.writeText(texto)
    .then(function() {
      alert("Texto copiado al portapapeles");
    })
    .catch(function(error) {
      console.error("Error al copiar el texto: ", error);
    });
}
