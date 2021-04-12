// utente inserisce due parole in due prompt 
var parola1 = (prompt("Inserisci la prima parola"))
var parola2 = (prompt("Inserisci la seconda parola"))


// insirisci le condizioni (piu lunga e piu corta)
if (parola1.length > parola2.length) {
    console.log ("Ecco la parola più corta " + parola2 + "e la parola più lunga " + parola1)
} else if (parola2.length > parola1.length) {
    console.log ("Ecco la parola più corta " + parola1 + "e la parola più lunga " + parola2)
} else {
    console.log ("le parole sono della stessa lunghezza")
}


// valida i dati inseriti 
if (typeof parola1 === Number || typeof parola2 === Number) {
    alert ("inserisci una parola")
}
