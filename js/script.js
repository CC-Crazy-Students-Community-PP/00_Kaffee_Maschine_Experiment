/*********************************************************/
/*******           functions and actions           *******/
/*********************************************************/

    // click action
        function actOnClick( key, choise, keyCol = "" ) {
            // output( "key: " + key + "\nchoise: " + choise );                                            // turn on to test output
            ( choise === "flavour" ) ? keyCol = flavour[ key ].collision : keyCol = drink[ key ].collision;
            updateButtons( key, keyCol, choise );
            updateText( key, choise );
        }

    // update action
        // update buttons
        function updateButtons( key, keyCol, choise ) {
            // output( "key: " + key + "\nkeyCol: " + keyCol + "\nchoise: " + choise );                    // turn on to test output
            ( choise !== "flavour" ) ? resetButtons() : function(){} ;                                  // reset only for flavours
            keyCol.forEach( coll => {                                                                   // for each in collisions list
                document.getElementById( coll ).classList.add( "out_of_order" );                        // add class if in array
            } );
            document.getElementById( key ).classList.remove( "out_of_order" );                          // remove class from clicked item
        }
        // update text
        function updateText( key, choise ) {
            // output( "key: " + key + "\nchoise: " + choise );                                            // turn on to test output
            if ( choise === "flavour" ) {
                // output( "name: " + flavour[ key ].name );                                               // turn on to test output
                if ( !stack.includes( key ) ) {
                    stack.push( key );
                    gui.display.flavour.innerHTML += "<span class=\"" + key + "\">mit " + flavour[ key ].name + "<br /></span>";               // text update for flavours
                } else {
                    for( var i = 0; i < stack.length; i++){ 
                        if ( stack[ i]  === key ) { 
                            stack.splice( i, 1 );
                            i--;
                        }
                    }
                }
            } else {
                // output( "name: " + drink[ key ].name );                                                 // turn on to test output
                resetTxt();                                                                             // reset text before...
                gui.display.drink.innerHTML = drink[ key ].name + "<br />";                             // ...setting teh new text for rinks
            }
        }

    // reset action
        // reset buttons
            function resetButtons() {
                Object.entries( gui.buttons.drink ).forEach( ( [ key, value ] ) => { 
                    // output( "1: key: " + key + "\nvalue: " + value );                                   // turn on to test output
                    document.getElementById( key ).classList.remove("out_of_order");                    // reset buttons for all drinks
                });            
                Object.entries( gui.buttons.flavour ).forEach( ( [ key, value ] ) => { 
                    // output( "2: key: " + key + "\nvalue: " + value );                                   // turn on to test output
                    document.getElementById( key ).classList.remove("out_of_order");                    // reset buttons for all flavoura
                });            
            }
        // reset text values
            // output( resetTxt( "test" ) );                                                                // turn on to test output
            function resetTxt( txt ) {                                                                  // reset text based on cases
                switch ( txt ) {
                    case "drink":                                                                       // default text for drinks
                        gui.display.drink.innerHTML = "";
                        break;
                    case "flavour":                                                                     // default text for flavour
                        gui.display.flavour.innerHTML = "";
                        break;
                    case "output":                                                                      // default text for output
                        gui.display.output.innerHTML = "Dein Getränk: ";
                        break;
                    case "test":                                                                        // default text only for test output
                        gui.display.output.innerHTML = "Dein Test: ";
                        gui.display.drink.innerHTML = "Es hat";
                        gui.display.flavour.innerHTML = "funktioniert";
                        break;
                    default:                                                                            // default text if no case is choosen
                        gui.display.output.innerHTML = "Dein Getränk: ";
                        gui.display.drink.innerHTML = "";
                        gui.display.flavour.innerHTML = "";
                        break;
                }
            }

    // console output                                                                                   // test the output
        // output( "test" );                                                                              // turn on to test output
        function output( outputStr ) { console.log( outputStr ); }