
/* Ciao ragazze e ciao ragazzi!
esercizio di oggi: (insicurissimo) password generator
nome repo: js-pwdgen-wannabe
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21 (con i dati dell'utente, gentilmente) */




const firstName = (prompt("Inserisci il tuo nome"));

const lastName = (prompt("Inserisci il tuo cognome"));

const favoriteColor = (prompt("Domanda di sicurezza: Qual è il tuo colore preferito?"));

const password = 21;

let userInfo = firstName + lastName + favoriteColor;


console.log("userInfo");


document.getElementById('output').innerHTML = 'Ecco le tue credenziali ' + userInfo + password ;