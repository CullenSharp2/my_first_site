'use strict'

function getName(){
    let username = prompt('What is your name?');;
    while(username === "") {
        console.log('checking for username');
        username = prompt('What is your name?');
    }   
    return (username);
}

function render(username) {
    console.log(username);

    document.write(`<h3 id="username"> welcome: ${username}</h3>`);
    console.log('success')
}

function getDate(){
    let timeOfDay = Date();
    if (timeOfDay !== "") {
        document.write(`<p>${timeOfDay}</p>`);
    } else {
        document.write(`<p> I don\'t got the time </p>`);
    }
}


