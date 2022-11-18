/*********************************************************/
/*******            data and objects 01            *******/
/*********************************************************/
    // drink flavour vars
        const flavour = {
            "sweet": { coffee: true, tea: true, soup: false, milk: false, name: "Zucker", image: [ "zucker" ], usage: [ 1 ], collision: "" },
            "milk": { coffe: true, tea: true, soup: false, milk: false, name: "Milch", image: [ "milch" ], usage: [ 1 ], collision: "" },
            "lemon": { coffee: false, tea: true, soup: false, milk: false, name: "Zitrone", image: [ "lemon" ], usage: [ 1 ], collision: "" },
            "vanila": { coffee: true, tea: false, soup: false, milk: false, name: "Vanille", image: [ "vanila" ], usage: [ 1, 2, 3 ], collision: "choco" },
            "choco": { coffee: true, tea: false, soup: false, milk: false, name: "Schoko", image: "choco", usage: [ 1 ], collision: "vanila" },
            "earl": { coffee: false, tea: true, soup: false, milk: false, name: "Earl Grey", image: "earl", usage: [ 1 ], collision: true },
            "green": { coffee: false, tea: true, soup: false, milk: false, name: "Grüner Tee", image: "green", usage: [ 1 ], collision: true },
            "black": { coffee: false, tea: true, soup: false, milk: false, name: "Schwarzer Tee", image: "black", usage: [ 1 ], collision: true },
            "chicken": { coffee: false, tea: true, soup: false, milk: false, name: "Hühnerbrühe", image: "chicken", usage: [ 1 ], collision: true },
            "tomato": { coffee: false, tea: true, soup: false, milk: false, name: "Tomaten Suppe", image: "tomato", usage: [ 1 ], collision: true },
        }
    // drink choise vars
        const drinks = {
            "tea" : { name: "Tee", image: "tea", collision: true },
            "milk" : { name: "Milch", image: "milk", collision: true },
            "coffee" : { name: "Kaffee", image: "coffee", collision: true },
            "soup" : { name: "Suppe", image: "soup", collision: true }
        }
    // time to make the drink
        const delay = 3;
        