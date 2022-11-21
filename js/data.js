/*********************************************************/
/*******            data and objects 01            *******/
/*********************************************************/
    // global stack array
        let stack = [];
    // collision vars
        const colDrink = [ "tea", "milk", "coffee", "soup" ];
        const colFlav = [ "sugar", "vanilla", "choco" ];
        const colTea = [ "earl", "green", "black" ];
        const colSoup = [ "chicken", "tomato" ];
        const colMilky = [ "milky" ];
        const colLemon = [ "lemon" ];
    // drink flavour vars
        const flavour = {
            sugar: { 
                name: "Zucker",                                                     // Name des Getränks oder Geschmacks
                status: false,                                                      // Status des Buttons ob gedrückt oder nicht
                collision: [ ...colFlav ]                                           // Kollision, welche Buttons nicht anwählbar sein sollen
            },
            milky: { name: "Milch", status: false, collision: [ ...colSoup, ...colLemon ] },
            vanilla: { name: "Vanille", status: false, collision: [ ...colFlav, ...colSoup ] },
            choco: { name: "Schoko", status: false, collision: [ ...colFlav, ...colSoup ] },

            earl: { name: "Earl Grey", status: false, collision: [ ...colSoup, ...colTea ] },
            green: { name: "Grüner Tee", status: false, collision: [ ...colSoup, ...colTea ] },
            black: { name: "Schwarzer Tee", status: false, collision: [ ...colSoup, ...colTea ] },
            lemon: { name: "Zitrone", status: false, collision: [ ...colFlav, ...colMilky ] },

            chicken: { name: "Hühnerbrühe", status: false, collision: [ ...colSoup, ...colTea, ...colFlav, ...colMilky ] },
            tomato: { name: "Tomaten Suppe", status: false, collision: [ ...colSoup, ...colTea, ...colFlav, ...colMilky ] }
        }
    // drink choise vars
        const drink = {
            tea : { 
                name: "Tee",                                                        // Name des Getränks oder Geschmacks
                collision: [ ...colDrink, ...colFlav, ...colSoup ],                 // Kollision, welche Buttons nicht anwählbar sein sollen
                status: false                                                       // Status des Buttons ob gedrückt oder nicht
            },
            milk : { name: "Milch", collision: [ ...colDrink, ...colTea, ...colSoup, "lemon", "milky","sugar" ], status: false },
            coffee : { name: "Kaffee", collision: [ ...colDrink, ...colTea, ...colSoup, "lemon" ], status: false },
            soup : { name: "Suppe", collision: [ ...colDrink, ...colTea, ...colFlav, "lemon", "milky" ], status: false }
        }
    // get all buttons and output
        let gui =   {
            display: {
                "display": document.getElementById( "display" ),
                "output": document.getElementById( "output" ),
                "drink": document.getElementById( "drink" ),
                "flavour": document.getElementById( "flavour" )
            },
            buttons:{
                drink: {
                    coffee: document.getElementById( "coffee" ),
                    milk: document.getElementById( "milk" ),
                    tea: document.getElementById( "tea" ),
                    soup: document.getElementById( "soup" ),
                },
                flavour: {
                    sugar: document.getElementById( "sugar" ),
                    milky: document.getElementById( "milky" ),
                    lemon: document.getElementById( "lemon" ),
                    vanilla: document.getElementById( "vanilla" ),
                    choco: document.getElementById( "choco" ),
                    earl: document.getElementById( "earl" ),
                    green: document.getElementById( "green" ),
                    black: document.getElementById( "black" ),
                    chicken: document.getElementById( "chicken" ),
                    tomato: document.getElementById( "tomato" ),
                }
            }
        }
