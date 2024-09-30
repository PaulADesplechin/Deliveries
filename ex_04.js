
function displayMessage() {
    
    document.getElementById("message").innerHTML = "Welcome to the javascript pool!<br>Have some fun and don't forget to bring a towel.";
}

function logToConsole() {
   
    console.log("Website launched!");
}


window.onload = function() {
    displayMessage(); 
    logToConsole();   
};
