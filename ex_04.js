// 1. Affichage du message sur la page
function displayMessage() {
    // Sélectionne l'élément avec l'ID "message" et modifie son texte
    document.getElementById("message").innerHTML = "Welcome to the javascript pool!<br>Have some fun and don't forget to bring a towel.";
}

// 2. Affichage du message dans la console
function logToConsole() {
    // Utilise console.log pour afficher un message dans la console
    console.log("Website launched!");
}

// 3. Appel des fonctions après que la page soit chargée
window.onload = function() {
    displayMessage();  // Affiche le message sur la page
    logToConsole();    // Affiche le message dans la console
};
