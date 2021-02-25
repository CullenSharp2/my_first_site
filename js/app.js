'use strict'

function getUsername(){
    let username = prompt('what is your name');
    return (username);
}

function validateName(username){
    console.log("eval");
    if (username !== "") {
        return(username);
    } else {
        getUsername();
        validateName();
        console.log('username not found');
    }
}

function writeName(username){
    document.write(`<h3 id="username"> welcome: ${username}</h3>`);
    console.log('success')
}

function render(username) {
    console.log(username);
    writeName(validateName(username));
}

function getDate(){
    let timeOfDay = Date();
    if (timeOfDay !== "") {
        document.write(`<p>${timeOfDay}</p>`);
    } else {
        document.write(`<p> I don\'t got the time </p>`);
    }
}


