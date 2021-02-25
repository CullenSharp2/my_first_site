'use strict'

let getUsername = () => {
    username = prompt('what is your name');
    return (username);
}

let validateName = (username) => {
    if (username !== "") {
        return(username)
    } else {
        prompt("Enter an username");
        console.log('username not found');
    }
}

let writeName = (username) => {
    document.write(`<h2>${username}</h2>`);
    console.log('success')
}

function render(getUsername, validateName, writeName) {
    writeName(validateName(getUsername));
}

let getDate = () => {
    timeOfDay = Date();
    if (timeOfDay !== "") {
        document.write(`<p>${timeOfDay}</p>`);
    } else {
        document.write(`<p> I don\'t got the time </p>`);
    }
}


