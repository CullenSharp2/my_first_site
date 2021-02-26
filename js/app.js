'use strict'

function getName(){
    let username = prompt('What is your name?');;
    while(username === "") {
        console.log('checking for username');
        username = prompt('What is your name?');
    }   
    return (username);
}

function getDate(){
    let timeOfDay = Date();
    if (timeOfDay !== "") {
        return(`<p>${timeOfDay}</p>`);
    } else {
       return(`<p> I don\'t got the time </p>`);
    }
}

function sectionMake(sections) {
    let n = prompt("How many sections do you want?");
    n = parseInt(n);

    for(let i=0; i < n; i++) {
        sections.push(
         `
            <section>
                <h3>Reason ${i}</h3>
                ${getDate()}
                <img src="https://picsum.photos/512/512" alt="placeholder">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </section>
        `
        );
    }
    console.log(`elements in the list: ${sections.length}`);
    console.log('done');

    return(sections);
}

function render(sections) {
    sectionMake(sections);
    let doc=`
                <body>
                    <header>
                        <h1>Why Avengers Sucked</h1>
                        <h3 id="username"> welcome: ${getName()}</h3>
                        <nav>
                            <ul>
                                <li><a href="https://ryanhoffman4.github.io/avengers-webpage/">Ryan's</a></li>
                                <li><a href="https://skylerjohnson102020.github.io/Backpacking_Fun/">Skyler's</a></li>
                                <li><a href="">Random</a></li>
                            </ul>
                        </nav>
                    </header>
                    <main>
            `
    ;
    for(let i = 0; i < sections.length; i++) {
        doc = doc+sections[i];
    };

    doc = doc + `                  
                </main>
                <footer>
                    <nav>
                        <ul>
                            <li><a href="https://ryanhoffman4.github.io/avengers-webpage/">Ryan's</a></li>
                            <li><a href="https://skylerjohnson102020.github.io/Backpacking_Fun/">Skyler's</a></li>
                            <li><a href="">Random</a></li>
                        </ul>
                    </nav>
                </footer>
            </body>
            `
    ;        
    document.write(doc);
    console.log('success')
}