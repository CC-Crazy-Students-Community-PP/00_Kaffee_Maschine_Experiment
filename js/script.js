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
            ( choise !== "flavour" ) ? resetButtons() : function(){} ;
            keyCol.forEach( coll => { 
                document.getElementById( coll ).classList.add( "out_of_order" ); 
                document.getElementById( coll ).removeEventListener( "click", function() {
                    actOnClick( key, "drink" );
                } );
            } );
            document.getElementById( key ).classList.remove( "out_of_order" );
        }
        // update text
        function updateText( key, choise ) {
            // output( "key: " + key + "\nchoise: " + choise );                                            // turn on to test output
            if ( choise === "flavour" ) {
                // output( "name: " + flavour[ key ].name );                                               // turn on to test output
                gui.display.flavour.innerHTML += "mit " + flavour[ key ].name + "<br />";
            } else {
                // output( "name: " + drink[ key ].name );                                                 // turn on to test output
                resetTxt();
                gui.display.drink.innerHTML = drink[ key ].name + "<br />";
            }
        }

    // reset action
        // reset buttons
            function resetButtons() {
                Object.entries( gui.buttons.drink ).forEach( ( [ key, value ] ) => { 
                    // output( "1: key: " + key + "\nvalue: " + value );                                       // turn on to test output
                    document.getElementById( key ).classList.remove("out_of_order"); 
                });            
                Object.entries( gui.buttons.flavour ).forEach( ( [ key, value ] ) => { 
                    // output( "2: key: " + key + "\nvalue: " + value );                                       // turn on to test output
                    document.getElementById( key ).classList.remove("out_of_order"); 
                });            
            }
        // reset text values
            function resetTxt( txt ) {
                switch ( txt ) {
                    case "drink":
                        gui.display.drink.innerHTML = "";
                        break;
                    case "flavour":
                        gui.display.flavour.innerHTML = "";
                        break;
                    case "output":
                        gui.display.output.innerHTML = "Dein Getränk: ";
                        break;
                    default:
                        gui.display.output.innerHTML = "Dein Getränk: ";
                        gui.display.drink.innerHTML = "";
                        gui.display.flavour.innerHTML = "";
                        break;
                }
            }

    // console output
        function output( outputStr ) { console.log( outputStr ); }