//ENCRYPT________________________________________________________________________________________________________________
function encrypt() {

  let text = document.getElementById("to-encrypt").value.toLowerCase();

  var encryptedText = text.replace(/e/igm,"enter") 
  var encryptedText = encryptedText.replace(/o/igm,"ober") 
  var encryptedText=  encryptedText.replace(/i/igm,"imes") 
  var encryptedText = encryptedText.replace(/a/igm,"ai") 
  var encryptedText = encryptedText.replace(/u/igm,"ufat") 
  
  document.getElementById("encrypted").innerHTML = encryptedText;

  alert("Su texto ha sido encriptado exitosamente, si desea desencriptar o encriptar nuevamente recarga la página")

};

//DECRYPT ________________________________________________________________________________________________________________
function decrypt() {

  let text = document.getElementById("encrypted").value.toLowerCase();

  var encryptedText = text.replace(/enter/igm,"e") 
  var encryptedText = encryptedText.replace(/ober/igm,"o") 
  var encryptedText = encryptedText.replace(/imes/igm,"i") 
  var encryptedText = encryptedText.replace(/ai/igm,"a")
  var encryptedText = encryptedText.replace(/ufat/igm,"u") 
   
  document.getElementById("to-encrypt").innerHTML = encryptedText;

  alert("Su código ha sido desencriptado exitosamente, si desea encriptar o desencriptar nuevamente recarga la página")

};

//COPY METHOD ____________________________________________________________________________________________________________
function decryptCopy() {
  var textCopy = document.querySelector("#to-encrypt")
  textCopy.select();
  document.execCommand("copy");
  alert("Copiado exitosamente")
};

function encryptCopy() {
  var textCopy = document.querySelector("#encrypted")
  textCopy.select();
  document.execCommand("copy");
  alert("Copiado exitosamente")
};

//ALERT IN TO-ENCRYPT TO UPPER ___________________________________________________________________________________________
var toEncrypt = document.getElementById("to-encrypt");

toEncrypt.addEventListener("input", function() {
  if (toEncrypt.value !== toEncrypt.value.toLowerCase()) {
    alert("No se permiten mayúsculas!");
  }
});

toEncrypt.addEventListener("input", function() {
  if (toEncrypt.value !== toEncrypt.value.toLowerCase()) {
    toEncrypt.value = toEncrypt.value.toLowerCase();
  }
});

//ALERT IN ENCRYPTED TO UPPER_____________________________________________________________________________________________
var toDecrypt = document.getElementById("encrypted");

toDecrypt.addEventListener("input", function() {
  if (toDecrypt.value !== toDecrypt.value.toLowerCase()) {
    alert("No se permiten mayúsculas!");
  }
});

toDecrypt.addEventListener("input", function() {
  if (toDecrypt.value !== toDecrypt.value.toLowerCase()) {
    toDecrypt.value = toDecrypt.value.toLowerCase();
  }
});

//SPECIAL TYPES __________________________________________________________________________________________________________
const checkText = /[^a-zA-Z0-9\s]/g;

toEncrypt.addEventListener("input", function() {
    let match = toEncrypt.value.match(checkText);
    if (match) {
      alert(`LOS CARACTERES ESPECIALES NO ESTAN PERMITIDOS: ${match.join(",")}`);
      toEncrypt.value = toEncrypt.value.toLowerCase().replace(checkText,'');
    } else {
      toEncrypt.value = toEncrypt.value.toLowerCase();
    }
});

toDecrypt.addEventListener("input", function() {
  let match = toDecrypt.value.match(checkText);
  if (match) {
    alert(`LOS CARACTERES ESPECIALES NO ESTAN PERMITIDOS: ${match.join(",")}`);
    toDecrypt.value = toDecrypt.value.toLowerCase().replace(checkText,'');
  } else {
    toDecrypt.value = toDecrypt.value.toLowerCase();
  }
});















