var num1 = parseInt(prompt("Inserisci il primo numero"))
var num2 = parseInt(prompt("Inserisci il secondo numero"))

// valida dati inseriti 
if(Number.isNaN(num1) || Number.isNaN(num2)) {
    console.log("Il numero non è valido.")
}else{
    var numeroMaggiore;

    if (num1 > num2) {
        numeroMaggiore = num1
    } else if (num2 > num1) {
        numeroMaggiore = num2
    }

    if(numeroMaggiore !== undefined) {
        console.log("il numero maggiore é " + numeroMaggiore)
    }else {
        console.log("il 2 numeri sono uguali")
    }
}
