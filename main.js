





var eta = prompt('Inserisci qui la tua eta');
var distanza = prompt('Inserisci qui i km che percorrerai');
var sconto18 = 0.8;
var sconto65 = 0.6;
var prezzod = (0.21);
var prezzo = distanza*prezzod;

if (eta <18) {
   var prezzo = (prezzo*sconto18);
}
if (eta >64) {
  var prezzo = (prezzo*sconto65);
}



document.writeln(prezzo);
